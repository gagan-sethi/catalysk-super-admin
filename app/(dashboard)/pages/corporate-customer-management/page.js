'use client'

// import node module libraries
import { Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { PageHeading } from 'widgets'
import Link from 'next/link'

const CorporateUserManagement = () => {
  // State to manage customers and pagination
  const [customers, setCustomers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  // Fetch customers from the API
  const fetchCustomers = async page => {
    setIsLoading(true)
    try {
      const response = await fetch(
        `https://betazone.promaticstechnologies.com/admin/corp_customer/getCustomers?page=${page}`
      )
      if (!response.ok) {
        throw new Error('Failed to fetch customers')
      }
      const data = await response.json()
      setCustomers(data.data || []) // Updated to access "data" in response
      setTotalPages(data.pages || 1) // Updated to access "pages" in response
    } catch (error) {
      console.error('Error fetching customers:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCustomers(currentPage)
  }, [currentPage])

  const handlePageChange = page => {
    setCurrentPage(page)
  }

  return (
    <>
      <Container fluid className='p-6'>
        {/* Page Heading */}
        <div className='d-flex justify-content-between'>
          <PageHeading heading='Corporate Customers List' />
          <Link href='/pages/add-corporate-customer' passHref>
            <button type='button' className='btnPrimary'>
              Add New Corporate Customer
            </button>
          </Link>
        </div>

        <div className='main-content-wrapper'>
          <div className='card'>
            <div className='card-body'>
              <div className='table-div'>
                {isLoading ? (
                  <div>Loading...</div>
                ) : (
                  <div className='table-responsive'>
                    <table className='table table-striped'>
                      <thead>
                        <tr>
                          <th>Corporate Name</th>
                          <th>Corporate ID</th>
                          <th>Address</th>
                          <th>Email</th>
                          <th>Industry Type</th>
                          <th>Number of Employees</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {customers.map(customer => (
                          <tr key={customer._id}>
                            <td>{customer.corporate_name}</td>
                            <td>{customer.corp_id}</td>
                            <td>{customer.address}</td>
                            <td>{customer.email}</td>
                            <td>{customer.industry_type}</td>
                            <td>{customer.number_of_employees}</td>
                            <td>
                              <span
                                className={
                                  customer.status === 'Active'
                                    ? 'active'
                                    : 'blocked'
                                }
                              >
                                {customer.status}
                              </span>
                            </td>
                            <td className='action-td'>
                             
                              <div className='dropdown'>
                                <span
                                  className='cstmDropdown dropdown-toggle'
                                  data-bs-toggle='dropdown'
                                  aria-expanded='false'
                                >
                                  <i className='fe fe-more-vertical'></i>
                                </span>
                                <ul className='dropdown-menu'>
                                  <li>
                                  <Link className="dropdown-item" href={`/pages/invoice-management?customerId=${customer._id}`} passHref>
                                      View Invoices
                                    </Link>
                                  </li>
                                  <li>
                                  <Link className="dropdown-item" href={`/pages/manage-domains`} passHref>
                                      Manage Domains
                                    </Link>
                                  </li>
                                  
                                </ul>
                              </div>
                            </td>
                          </tr>
                        ))}

                        {/* <tr>
                          <td>dfgg</td>
                          <td>rrt</td>
                          <td>ttrg</td>
                          <td>tfgbh</td>
                          <td>ftgb</td>
                          <td>tgbh</td>
                          <td>btgfb</td>
                          <td>
                            <div className='dropdown'>
                              <span
                                className='cstmDropdown dropdown-toggle'
                                data-bs-toggle='dropdown'
                                aria-expanded='false'
                              >
                                <i className='fe fe-more-vertical'></i>
                              </span>
                              <ul className='dropdown-menu'>
                                <li>
                                  <a
                                    className='dropdown-item'
                                    onClick={() =>
                                      alert(
                                        `View details of ${customer.corporate_name}`
                                      )
                                    }
                                  >
                                    View
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='dropdown-item'
                                    onClick={() =>
                                      alert(`Edit ${customer.corporate_name}`)
                                    }
                                  >
                                    Edit
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='dropdown-item'
                                    onClick={() =>
                                      alert(`Delete ${customer.corporate_name}`)
                                    }
                                  >
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr> */}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Pagination */}
                <div className='pagination-div'>
                  <nav aria-label='Pagination'>
                    <ul className='pagination'>
                      <li
                        className={`page-item ${
                          currentPage === 1 && 'disabled'
                        }`}
                      >
                        <button
                          className='page-link'
                          onClick={() => handlePageChange(currentPage - 1)}
                        >
                          Previous
                        </button>
                      </li>
                      {[...Array(totalPages)].map((_, index) => (
                        <li
                          className={`page-item ${
                            currentPage === index + 1 && 'active'
                          }`}
                          key={index}
                        >
                          <button
                            className='page-link'
                            onClick={() => handlePageChange(index + 1)}
                          >
                            {index + 1}
                          </button>
                        </li>
                      ))}
                      <li
                        className={`page-item ${
                          currentPage === totalPages && 'disabled'
                        }`}
                      >
                        <button
                          className='page-link'
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
  )
}

export default CorporateUserManagement
