'use client'

// import node module libraries
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Link from 'next/link';

import { useSearchParams } from "next/navigation";

const InvoiceManagement = () => {
  const searchParams = useSearchParams();
  const customerId= searchParams.get("customerId");
  const [token, setToken] = useState("");

  useEffect(() => {
    // Only runs on the client-side
    const tokenFromLocalStorage = localStorage.getItem("token");
    setToken(tokenFromLocalStorage || "");
  }, []);
  // State to manage invoices and pagination
  const [invoices, setInvoices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch invoices from the API
  const fetchInvoices = async (page) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://betazone.promaticstechnologies.com/admin/invoice/getInvoices?limit=10&offset=${(page - 1) * 10}&company_id=${customerId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error('Failed to fetch invoices');
      }
      const data = await response.json();
      setInvoices(data.data || []);
      setTotalPages(Math.ceil((data.total || 0) / 10)); // Assuming 'total' gives the total count of invoices
    } catch (error) {
      console.error('Error fetching invoices:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices(currentPage);
  }, [currentPage, token]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Container fluid className="p-6">
        {/* Page Heading and Add New Invoice Button */}
        <div className="d-flex justify-content-between mb-4">
          <h2>Invoice Management</h2>
          <Link href={`/pages/add-invoice?customerId=${customerId}`} passHref>
            <button type="button" className="btnPrimary">
              Add New Invoice
            </button>
          </Link>
        </div>

        <div className="main-content-wrapper">
          <div className="card">
            <div className="card-body">
              <div className="table-div">
                {isLoading ? (
                  <div>Loading...</div>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Invoice Number</th>
                          <th>Company Name</th>
                          <th>Amount</th>
                          <th>Invoice Date</th>
                          <th>Due Date</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {invoices.map((invoice) => (
                          <tr key={invoice._id}>
                            <td>{invoice.invoice_number}</td>
                            <td>{invoice.company.corporate_name}</td>
                            <td>${invoice.amount}</td>
                            <td>{new Date(invoice.invoice_date).toLocaleDateString()}</td>
                            <td>{new Date(invoice.due_date).toLocaleDateString()}</td>
                            <td>
                              <span
                                className={
                                  invoice.status === 'paid' ? 'text-success' : 'text-warning'
                                }
                              >
                                {invoice.status}
                              </span>
                            </td>
                            <td>
                              <div className="dropdown">
                                <span
                                  className="cstmDropdown dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fe fe-more-vertical"></i>
                                </span>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      onClick={() =>
                                        alert(`View details of invoice ${invoice.invoice_number}`)
                                      }
                                    >
                                      View
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      onClick={() =>
                                        alert(`Edit invoice ${invoice.invoice_number}`)
                                      }
                                    >
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      onClick={() =>
                                        alert(`Delete invoice ${invoice.invoice_number}`)
                                      }
                                    >
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Pagination */}
                <div className="pagination-div mt-3">
                  <nav aria-label="Pagination">
                    <ul className="pagination">
                      <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(currentPage - 1)}
                        >
                          Previous
                        </button>
                      </li>
                      {[...Array(totalPages)].map((_, index) => (
                        <li
                          className={`page-item ${currentPage === index + 1 && 'active'}`}
                          key={index}
                        >
                          <button
                            className="page-link"
                            onClick={() => handlePageChange(index + 1)}
                          >
                            {index + 1}
                          </button>
                        </li>
                      ))}
                      <li className={`page-item ${currentPage === totalPages && 'disabled'}`}>
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(currentPage + 1)}
                        >
                          Next
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default InvoiceManagement;
