'use client'

// import node module libraries
import { Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import Link from 'next/link'

import { useSearchParams } from 'next/navigation'

const ManageDomains = () => {
  const searchParams = useSearchParams()
  const customerId = searchParams.get('customerId')
  const [token, setToken] = useState('')

  useEffect(() => {
    // Only runs on the client-side
    const tokenFromLocalStorage = localStorage.getItem('token')
    setToken(tokenFromLocalStorage || '')
  }, [])
  // State to manage invoices and pagination
  const [invoices, setInvoices] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const handlePageChange = page => {
    setCurrentPage(page)
  }

  return (
    <>
      <Container fluid className='p-6'>
        {/* Page Heading and Add New Invoice Button */}
        <div className='d-flex justify-content-between mb-4'>
          <h2>Domains Management</h2>
          <Link href=''>
            <button type='button' className='btnPrimary' data-bs-target='#addDomain' data-bs-toggle='modal'>
              Add New Domain
            </button>
          </Link>
        </div>

        <div className='main-content-wrapper'>
          <div className='card'>
            <div className='card-body'>
              <div className='table-div'>
                <div className='table-responsive'>
                  <table className='table table-striped text-center'>
                    <thead>
                      <tr>
                        <th>Domain</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>gmail.com</td>
                        <td className='d-flex justify-content-center'>
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
                                <a className='dropdown-item'>Delete</a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>yahoo.com</td>
                        <td className='d-flex justify-content-center'>
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
                                <a className='dropdown-item'>Delete</a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>mailinator.com</td>
                        <td className='d-flex justify-content-center'>
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
                                <a className='dropdown-item'>Delete</a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className='pagination-div mt-3'>
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

      <div
        class='modal fade'
        id='addDomain'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h1 class='modal-title fs-4' id='exampleModalLabel'>
                Add New Domain
              </h1>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body'>
              <div className='dlt-mdl'>
                <div>
                  <div class='mb-3'>
                    <h5>Please Enter the Domain Name </h5>
                    <input
                      class='form-control'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-primary'
                data-bs-dismiss='modal'
              >
                Save Changes
              </button>
              <button
                type='button'
                class='btn btn-outline-white'
                data-bs-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageDomains
