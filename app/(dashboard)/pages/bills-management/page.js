'use client'
// import node module libraries
import { Container, Form, Image } from 'react-bootstrap'
import { useState, useEffect } from 'react'

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components

import Head from 'next/head'
import Link from 'next/link'

import { Tabs, Placeholder } from 'rsuite'

const BillsManagement = () => {
  // hide show filters
  const [isVisible, setIsVisible] = useState(false)
  const [bills, setBills] = useState([])
  const [pageSize] = useState(10);
  const [offsetentry, setoffsetentry] = useState(0);
  const [token, setToken] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  useEffect(() => {
    // Only runs on the client-side
    const tokenFromLocalStorage = localStorage.getItem("token");
    setToken(tokenFromLocalStorage || "");
  }, []);
  async function getdoc() {
    console.log("Search : " + search);
    const offset = (currentPage - 1) * pageSize;
    const limit = pageSize;
    setoffsetentry(offset);
  
    try {
      const endpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/userBills`;
      const queryParams = `?limit=${limit}&offset=${offset}${search ? `&search=${search}` : ""}`;
      const url = endpoint + queryParams;
  
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      const data = await res.json();
      console.log(data);
  
      if (res.ok) {
        setBills(data.data); // Assuming `data.data` contains the user bills
        setTotalItems(data?.count);
        setentry(data?.data?.length + offset);
      } else {
        console.error("Failed to fetch data:", data);
      }
    } catch (error) {
      console.error("Error fetching user bills:", error);
    }
  }
  
  // Simulate API call

  useEffect(() => {
    getdoc();
  }, [currentPage, search, token]);
  const showFilters = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>
      <Container fluid className='p-6'>
        {/* Page Heading */}
        <PageHeading heading='Manage Utility Bills' />

        <div className='billTabs'>
          <Tabs defaultActiveKey='1' appearance='subtle'>
            <Tabs.Tab eventKey='1' title='Monthly'>
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
                              <option>Approved</option>
                              <option>Rejected</option>
                            </select>
                          </div>

                          <div class='stts-flter'>
                            <select className='form-control form-select'>
                              <option selected>Quest Type</option>
                              <option>Electricity</option>
                              <option>Water</option>
                            </select>
                          </div>

                          <div className='dateBox'>
                            <input
                              type='date'
                              class='form-control'
                              id='exampleFormControlInput1'
                              placeholder='name@example.com'
                            />
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
                            <input
                              type='checkbox'
                              className='form-check-input'
                            />
                          </th>
                          <th scope='col'>Email</th>
                          <th scope='col'>Quest Type</th>
                          <th scope='col'>Month</th>
                          <th scope='col'>Year</th>
                          <th scope='col'>Status</th>
                          <th scope='col'>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bills.map((bill, index) => (
                          <tr key={bill._id}>
                            <td>
                              <input
                                type='checkbox'
                                className='form-check-input'
                              />
                            </td>
                            <td>{bill.email}</td>
                            <td>{bill.utility_bills.type}</td>
                            <td>{bill.utility_bills.month_of_bill}</td>
                            <td>{bill.utility_bills.year_of_the_bill}</td>
                            <td>{bill.utility_bills.status}</td>
                            <td>
                              <div className='d-flex align-items-center gap-2'>
                                <button type='button' className='btn btn-primary'>
                                  Approve
                                </button>
                                <button
                                  type='button'
                                  className='btn btn-danger'
                                  data-bs-toggle='modal'
                                  data-bs-target='#delete-mddl'
                                >
                                  Reject
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
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
            </Tabs.Tab>
            <Tabs.Tab eventKey='2' title='Yearly'>
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
                              <option>Approved</option>
                              <option>Rejected</option>
                            </select>
                          </div>

                          <div class='stts-flter'>
                            <select className='form-control form-select'>
                              <option selected>Quest Type</option>
                              <option>Electricity</option>
                              <option>Water</option>
                            </select>
                          </div>

                          <div className='dateBox'>
                            <input
                              type='date'
                              class='form-control'
                              id='exampleFormControlInput1'
                              placeholder='name@example.com'
                            />
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
                                <input
                                  type='checkbox'
                                  class='form-check-input'
                                />
                              </th>
                              <th scope='col'>Name</th>
                              <th scope='col'>Email</th>
                              <th scope='col'>Quest Type</th>
                              <th scope='col'>Bill Type</th>
                              <th scope='col'>Actions</th>
                              {/* <th scope='col'>Status</th> */}
                              <th scope='col'>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <input
                                  type='checkbox'
                                  class='form-check-input'
                                />
                              </td>
                              <td className='text-nowrap'>Prabhjot Singh</td>
                              <td>prabh123@gmail.com</td>
                              <td>Electricity</td>
                              <td>Yearly</td>
                              <td className='myButtons'>
                                <div className='d-flex align-items-center gap-2'>
                                  <button type='button' class='btn btn-primary'>
                                    Approve
                                  </button>
                                  <button
                                    type='button'
                                    class='btn btn-danger'
                                    data-bs-toggle='modal'
                                    data-bs-target='#delete-mddl'
                                  >
                                    Reject
                                  </button>
                                </div>
                              </td>
                              {/* <td>
                              <div className='status-td'>
                                <span className='active'>Approved</span>
                              </div>
                            </td> */}

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
                                        href='/pages/view-bill'
                                      >
                                        View
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input
                                  type='checkbox'
                                  class='form-check-input'
                                />
                              </td>
                              <td className='text-nowrap'>Yashpal Singh</td>
                              <td>yash233@gmail.com</td>
                              <td>Water</td>
                              <td>Yearly</td>
                              <td className='myButtons'>
                                <div className='d-flex align-items-center gap-2'>
                                  <button type='button' class='btn btn-primary'>
                                    Approve
                                  </button>
                                  <button
                                    type='button'
                                    class='btn btn-danger'
                                    data-bs-toggle='modal'
                                    data-bs-target='#delete-mddl'
                                  >
                                    Reject
                                  </button>
                                </div>
                              </td>
                              {/* <td>
                              <div className='status-td'>
                                <span className='active'>Approved</span>
                              </div>
                            </td> */}

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
                                        href='/pages/view-bill'
                                      >
                                        View
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input
                                  type='checkbox'
                                  class='form-check-input'
                                />
                              </td>
                              <td className='text-nowrap'>Prabhjot Singh</td>
                              <td>prabh123@gmail.com</td>
                              <td>Electricity</td>
                              <td>Yearly</td>
                              <td className='myButtons'>
                                <div className='d-flex align-items-center gap-2'>
                                  <button type='button' class='btn btn-primary'>
                                    Approve
                                  </button>
                                  <button
                                    type='button'
                                    class='btn btn-danger'
                                    data-bs-toggle='modal'
                                    data-bs-target='#delete-mddl'
                                  >
                                    Reject
                                  </button>
                                </div>
                              </td>
                              {/* <td>
                              <div className='status-td'>
                                <span className='active'>Approved</span>
                              </div>
                            </td> */}

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
                                        href='/pages/view-bill'
                                      >
                                        View
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input
                                  type='checkbox'
                                  class='form-check-input'
                                />
                              </td>
                              <td className='text-nowrap'>Prabhjot Singh</td>
                              <td>prabh123@gmail.com</td>
                              <td>Electricity</td>
                              <td>Yearly</td>
                              <td className='myButtons'>
                                <div className='d-flex align-items-center gap-2'>
                                  <button type='button' class='btn btn-primary'>
                                    Approve
                                  </button>
                                  <button
                                    type='button'
                                    class='btn btn-danger'
                                    data-bs-toggle='modal'
                                    data-bs-target='#delete-mddl'
                                  >
                                    Reject
                                  </button>
                                </div>
                              </td>
                              {/* <td>
                              <div className='status-td'>
                                <span className='active'>Approved</span>
                              </div>
                            </td> */}

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
                                        href='/pages/view-bill'
                                      >
                                        View
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input
                                  type='checkbox'
                                  class='form-check-input'
                                />
                              </td>
                              <td className='text-nowrap'>Yashpal Singh</td>
                              <td>yash233@gmail.com</td>
                              <td>Water</td>
                              <td>Yearly</td>
                              <td className='myButtons'>
                                <div className='d-flex align-items-center gap-2'>
                                  <button type='button' class='btn btn-primary'>
                                    Approve
                                  </button>
                                  <button
                                    type='button'
                                    class='btn btn-danger'
                                    data-bs-toggle='modal'
                                    data-bs-target='#delete-mddl'
                                  >
                                    Reject
                                  </button>
                                </div>
                              </td>
                              {/* <td>
                              <div className='status-td'>
                                <span className='active'>Approved</span>
                              </div>
                            </td> */}

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
                                        href='/pages/view-bill'
                                      >
                                        View
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input
                                  type='checkbox'
                                  class='form-check-input'
                                />
                              </td>
                              <td className='text-nowrap'>Prabhjot Singh</td>
                              <td>prabh123@gmail.com</td>
                              <td>Electricity</td>
                              <td>Yearly</td>
                              <td className='myButtons'>
                                <div className='d-flex align-items-center gap-2'>
                                  <button type='button' class='btn btn-primary'>
                                    Approve
                                  </button>
                                  <button
                                    type='button'
                                    class='btn btn-danger '
                                    data-bs-toggle='modal'
                                    data-bs-target='#delete-mddl'
                                  >
                                    Reject
                                  </button>
                                </div>
                              </td>
                              {/* <td>
                              <div className='status-td'>
                                <span className='active'>Approved</span>
                              </div>
                            </td> */}

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
                                        href='/pages/view-bill'
                                      >
                                        View
                                      </Link>
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
            </Tabs.Tab>
          </Tabs>
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
                <h1 class='modal-title fs-4' id='exampleModalLabel'>
                  Reject Proof
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
                      <h5>Please Provide a valid reason for rejection?</h5>
                      <textarea
                        class='form-control'
                        id='exampleFormControlTextarea1'
                        rows='3'
                      ></textarea>
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
                  Block Corporate
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
                    Are you sure want to block this corporate?
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
          id='qrcode-mddl'
          tabindex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div class='modal-dialog'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h1 class='modal-title fs-5' id='exampleModalLabel'>
                  Generated QR Code{' '}
                </h1>
                <button
                  type='button'
                  class='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div class='modal-body'>
                <div className='qrcode-mdl'>
                  <Image src='/images/qr-code.svg' alt='' />
                </div>
              </div>
              <div class='modal-footer'>
                <button type='button' class='btn btn-primary'>
                  Download
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
      </Container>
    </>
  )
}

export default BillsManagement
