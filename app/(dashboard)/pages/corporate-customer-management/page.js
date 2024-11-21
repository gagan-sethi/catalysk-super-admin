'use client'
// import node module libraries
import { Container, Form, Image } from 'react-bootstrap'

import { Col, Row, Card } from 'react-bootstrap'

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components

import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const CorporateUserManagement = () => {
  // hide show filters

  const [isVisible, setIsVisible] = useState(false)

  const showFilters = () => {
    setIsVisible(!isVisible)
  }

  const [formData, setFormData] = useState({
    accountHolder: '',
    accountNumber: '',
    bankName: '',
    ifscCode: '',
    branch: '',
    phoneNumber: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Submitted Data:', formData)
    // Add API integration here
  }

  return (
    <>
      <Container fluid className='p-6'>
        {/* Page Heading */}
        <div className='d-flex justify-content-between'>
          <PageHeading heading='Corporate Customers List' />
          <Link href='/pages/add-corporate-customer' passHref>
            <button type='button' className='btnPrimary'>
              Add New Coprorate Customer
            </button>
          </Link>
        </div>

        <div className='main-content-wrapper'>
          <div className='card'>
            <div className='card-body'>
              <div className='filters-options-sec'>
                <div className='flxx'>
                  <div className='search-bar'>
                    {/* Search Form */}
                    <Form className='d-flex align-items-center'>
                      <Form.Control type='search' placeholder='Search' />
                    </Form>
                  </div>
                  <div className='bttns-sec'>
                    <button
                      className='btn btn-outline-white'
                      onClick={showFilters}
                    >
                      <i className='fe fe-sliders me-2'></i> Filter
                    </button>

                    {/* <Link
                      className='btn btn-primary'
                      href='/pages/add-corporate'
                    >
                      Add New Corporate
                    </Link> */}

                    <div className='btn btn-outline-white bulk-action-btn'>
                      <span
                        className='dropdown-toggle'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                      >
                        <i className='fe fe-more-vertical'></i>
                      </span>
                      <ul className='dropdown-menu'>
                        <li>
                          <a
                            className='dropdown-item'
                            data-bs-toggle='modal'
                            data-bs-target='#block-mddl'
                          >
                            Block
                          </a>
                        </li>
                        <li>
                          <a
                            className='dropdown-item'
                            data-bs-toggle='modal'
                            data-bs-target='#delete-mddl'
                          >
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {isVisible && (
                  <div className='sub-filter-sec'>
                    <div>
                      <h4 className='mb-0'>Filters : </h4>
                    </div>
                    <div class='stts-flter'>
                      <select className='form-control form-select'>
                        <option selected>Status</option>
                        <option>Active</option>
                        <option>Blocked</option>
                      </select>
                    </div>

                    <div class='stts-flter'>
                      <select className='form-control form-select'>
                        <option selected>Industry Type</option>
                        <option>Technology</option>
                        <option>Accounts</option>
                        <option>Agriculture</option>
                        <option>Automobile</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
              <div className='table-div'>
                <div className='table-responsive'>
                  <table className='table table-striped'>
                    <thead>
                      <tr>
                        <th scope='col'>
                          <input type='checkbox' class='form-check-input' />
                        </th>
                        <th scope='col'>Corporate Name</th>
                        <th scope='col'>Corporate ID</th>
                        <th scope='col'>Address</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Industry Type</th>
                        <th scope='col'>Number of Employees</th>
                        {/* <th scope='col'>Registration Number</th>
                        <th scope='col'>Phone Number</th>
                        <th scope='col'>Website Url</th> */}
                        <th scope='col'>Status</th>
                        <th scope='col'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input type='checkbox' class='form-check-input' />
                        </td>
                        <td>NexGen Enterprises</td>
                        <td>5869858555</td>
                        <td className='adrs-td'>
                          1234 Main Street, Suite 100 San Francisco, CA 94105
                          USA
                        </td>
                        <td>contact.nextgen@gmail.com</td>
                        <td>Technology</td>
                        <td>250</td>
                        {/* <td>CATA9874562</td>
                        <td className='nmbr-td'>+91-9874563652</td>
                        <td className='text-nowrap'>
                          <Link href='#'>www.nexgen.com</Link>
                        </td> */}
                        <td>
                          <div className='status-td'>
                            <span className='active'>Active</span>
                          </div>
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
                                <Link
                                  className='dropdown-item'
                                  href='/pages/view-corporate-customer'
                                >
                                  View
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className='dropdown-item'
                                  href='/pages/view-corporate-customer'
                                >
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item'
                                  data-bs-toggle='modal'
                                  data-bs-target='#delete-mddl'
                                >
                                  Delete
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item'
                                  data-bs-toggle='modal'
                                  data-bs-target='#bankDetailsModal'
                                >
                                  Add Bank Details
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <input type='checkbox' class='form-check-input' />
                        </td>
                        <td>NexGen Enterprises</td>
                        <td>5869858555</td>
                        <td className='adrs-td'>
                          1234 Main Street, Suite 100 San Francisco, CA 94105
                          USA
                        </td>
                        <td>contact.nextgen@gmail.com</td>
                        <td>Technology</td>
                        <td>250</td>
                        {/* <td>CATA9874562</td>
                        <td className='nmbr-td'>+91-9874563652</td>
                        <td className='text-nowrap'>
                          <Link href='#'>www.nexgen.com</Link>
                        </td> */}
                        <td>
                          <div className='status-td'>
                            <span className='active'>Active</span>
                          </div>
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
                                <Link
                                  className='dropdown-item'
                                  href='/pages/view-corporate-customer'
                                >
                                  View
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className='dropdown-item'
                                  href='/pages/view-corporate-customer'
                                >
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item'
                                  data-bs-toggle='modal'
                                  data-bs-target='#delete-mddl'
                                >
                                  Delete
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item'
                                  data-bs-toggle='modal'
                                  data-bs-target='#bankDetailsModal'
                                >
                                  Add Bank Details
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <input type='checkbox' class='form-check-input' />
                        </td>
                        <td>NexGen Enterprises</td>
                        <td>5869858555</td>
                        <td className='adrs-td'>
                          1234 Main Street, Suite 100 San Francisco, CA 94105
                          USA
                        </td>
                        <td>contact.nextgen@gmail.com</td>
                        <td>Technology</td>
                        <td>250</td>
                        {/* <td>CATA9874562</td>
                        <td className='nmbr-td'>+91-9874563652</td>
                        <td className='text-nowrap'>
                          <Link href='#'>www.nexgen.com</Link>
                        </td> */}
                        <td>
                          <div className='status-td'>
                            <span className='active'>Active</span>
                          </div>
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
                                <Link
                                  className='dropdown-item'
                                  href='/pages/view-corporate-customer'
                                >
                                  View
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className='dropdown-item'
                                  href='/pages/view-corporate-customer'
                                >
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item'
                                  data-bs-toggle='modal'
                                  data-bs-target='#delete-mddl'
                                >
                                  Delete
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item'
                                  data-bs-toggle='modal'
                                  data-bs-target='#bankDetailsModal'
                                >
                                  Add Bank Details
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <input type='checkbox' class='form-check-input' />
                        </td>
                        <td>NexGen Enterprises</td>
                        <td>5869858555</td>
                        <td className='adrs-td'>
                          1234 Main Street, Suite 100 San Francisco, CA 94105
                          USA
                        </td>
                        <td>contact.nextgen@gmail.com</td>
                        <td>Technology</td>
                        <td>250</td>
                        {/* <td>CATA9874562</td>
                        <td className='nmbr-td'>+91-9874563652</td>
                        <td className='text-nowrap'>
                          <Link href='#'>www.nexgen.com</Link>
                        </td> */}
                        <td>
                          <div className='status-td'>
                            <span className='active'>Active</span>
                          </div>
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
                                <Link
                                  className='dropdown-item'
                                  href='/pages/view-corporate-customer'
                                >
                                  View
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className='dropdown-item'
                                  href='/pages/view-corporate-customer'
                                >
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item'
                                  data-bs-toggle='modal'
                                  data-bs-target='#delete-mddl'
                                >
                                  Delete
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item'
                                  data-bs-toggle='modal'
                                  data-bs-target='#bankDetailsModal'
                                >
                                  Add Bank Details
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <input type='checkbox' class='form-check-input' />
                        </td>
                        <td>NexGen Enterprises</td>
                        <td>5869858555</td>
                        <td className='adrs-td'>
                          1234 Main Street, Suite 100 San Francisco, CA 94105
                          USA
                        </td>
                        <td>contact.nextgen@gmail.com</td>
                        <td>Technology</td>
                        <td>250</td>
                        {/* <td>CATA9874562</td>
                        <td className='nmbr-td'>+91-9874563652</td>
                        <td className='text-nowrap'>
                          <Link href='#'>www.nexgen.com</Link>
                        </td> */}
                        <td>
                          <div className='status-td'>
                            <span className='active'>Active</span>
                          </div>
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
                                <Link
                                  className='dropdown-item'
                                  href='/pages/view-corporate-customer'
                                >
                                  View
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className='dropdown-item'
                                  href='/pages/view-corporate-customer'
                                >
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item'
                                  data-bs-toggle='modal'
                                  data-bs-target='#delete-mddl'
                                >
                                  Delete
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item'
                                  data-bs-toggle='modal'
                                  data-bs-target='#bankDetailsModal'
                                >
                                  Add Bank Details
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <input type='checkbox' class='form-check-input' />
                        </td>
                        <td>NexGen Enterprises</td>
                        <td>5869858555</td>
                        <td className='adrs-td'>
                          1234 Main Street, Suite 100 San Francisco, CA 94105
                          USA
                        </td>
                        <td>contact.nextgen@gmail.com</td>
                        <td>Technology</td>
                        <td>250</td>
                        {/* <td>CATA9874562</td>
                        <td className='nmbr-td'>+91-9874563652</td>
                        <td className='text-nowrap'>
                          <Link href='#'>www.nexgen.com</Link>
                        </td> */}
                        <td>
                          <div className='status-td'>
                            <span className='active'>Active</span>
                          </div>
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
                                <Link
                                  className='dropdown-item'
                                  href='/pages/view-corporate-customer'
                                >
                                  View
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className='dropdown-item'
                                  href='/pages/view-corporate-customer'
                                >
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item'
                                  data-bs-toggle='modal'
                                  data-bs-target='#delete-mddl'
                                >
                                  Delete
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item'
                                  data-bs-toggle='modal'
                                  data-bs-target='#bankDetailsModal'
                                >
                                  Add Bank Details
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='pagination-div'>
                  <nav aria-label='...'>
                    <ul class='pagination'>
                      <li class='page-item disabled'>
                        <span class='page-link'>Previous</span>
                      </li>
                      <li class='page-item'>
                        <a class='page-link' href='#'>
                          1
                        </a>
                      </li>
                      <li class='page-item active'>
                        <span class='page-link'>
                          2<span class='sr-only'>(current)</span>
                        </span>
                      </li>
                      <li class='page-item'>
                        <a class='page-link' href='#'>
                          3
                        </a>
                      </li>
                      <li class='page-item'>
                        <a class='page-link' href='#'>
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* modals */}

        {/* <!--delete- Modal --> */}

        <div
          class='modal fade'
          id='delete-mddl'
          tabindex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div class='modal-dialog'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h1 class='modal-title fs-5' id='exampleModalLabel'>
                  Delete Corporate Customer
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
                  <h4 className='text-center'>
                    Are you sure want to delete this corporate customer?
                  </h4>
                </div>
              </div>
              <div class='modal-footer'>
                <button type='button' class='btn btn-primary'>
                  Delete
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

        {/* <!--Block- Modal --> */}

        <div
          class='modal fade'
          id='block-mddl'
          tabindex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div class='modal-dialog'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h1 class='modal-title fs-5' id='exampleModalLabel'>
                  Block Corporate Customer
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
                  <h4 className='text-center'>
                    Are you sure want to block this corporate customer?
                  </h4>
                </div>
              </div>
              <div class='modal-footer'>
                <button type='button' class='btn btn-primary'>
                  Delete
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

        {/* <!--Qr-code - Modal --> */}

        <div
          class='modal fade'
          id='bankDetailsModal'
          tabindex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div class='modal-dialog'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h1 class='modal-title fs-4' id='exampleModalLabel'>
                  Enter Bank Details{' '}
                </h1>
                <button
                  type='button'
                  class='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div class='modal-body'>
                <form onSubmit={handleSubmit}>
                  <div className='mb-3'>
                    <label htmlFor='accountHolder' className='form-label'>
                      Account Holder Name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='accountHolder'
                      name='accountHolder'
                      value={formData.accountHolder}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className='mb-3'>
                    <label htmlFor='accountNumber' className='form-label'>
                      Account Number
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='accountNumber'
                      name='accountNumber'
                      value={formData.accountNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className='mb-3'>
                    <label htmlFor='bankName' className='form-label'>
                      Bank Name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='bankName'
                      name='bankName'
                      value={formData.bankName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className='mb-3'>
                    <label htmlFor='ifscCode' className='form-label'>
                      IFSC Code
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='ifscCode'
                      name='ifscCode'
                      value={formData.ifscCode}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className='mb-3'>
                    <label htmlFor='branch' className='form-label'>
                      Branch
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='branch'
                      name='branch'
                      value={formData.branch}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className='mb-3'>
                    <label htmlFor='phoneNumber' className='form-label'>
                      Gst number
                    </label>
                    <input
                      type='number'
                      className='form-control'
                      id='phoneNumber'
                      name='phoneNumber'
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='phoneNumber' className='form-label'>
                      Amount paid so far
                    </label>
                    <input
                      type='number'
                      className='form-control'
                      id='phoneNumber'
                      name='phoneNumber'
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </form>
              </div>
              <div class='modal-footer'>
                <button type='button' class='btn btn-primary'>
                  Save changes
                </button>
                <button
                  type='button'
                  class='btn btn-outline-white'
                  data-bs-dismiss='modal'
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default CorporateUserManagement
