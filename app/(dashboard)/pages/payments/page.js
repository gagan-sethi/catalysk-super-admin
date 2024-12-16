'use client'
// import node module libraries
import { Col, Row, Container, Button } from 'react-bootstrap'

// import widget as custom components
import { PageHeading } from 'widgets'

const Payments = () => {
  return (
    <Container fluid className='p-6'>
      {/* Page Heading */}
      <PageHeading heading='Payments' />

      <div className='card'>
        <div className='card-body'>
          <div className='table-div'>
            <div className='table-responsive'>
              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th scope='col'>Sr. No.</th>
                    <th scope='col'>Username</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Plan Name</th>
                    <th scope='col'>Reference Number</th>
                    <th scope='col'>Status</th>
                  </tr>
                </thead>
                <tbody>

                  <tr>
                    <td scope='row'>01</td>
                    <td className='text-nowrap'>Dale Stayn</td>
                    <td>dale@gmail.com</td>
                    <td className='text-nowrap'>Silver Plan</td>
                    <td>675ac4aa04ec97</td>

                    <td className='action-td'>
                      <div className='d-flex align-items-center gap-2'>
                        <button
                          type='button'
                          class='btn btn-primary'
                        >
                          Approve
                        </button>
                        <button
                          type='button'
                          class='btn btn-danger'
                          data-bs-toggle='modal'
                         data-bs-target='#add-faq-mddl'
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td scope='row'>02</td>
                    <td className='text-nowrap'>Thomas Edison</td>
                    <td>thomas@gmail.com</td>
                    <td className='text-nowrap'>Gold Plan</td>
                    <td>35ac4aa04ec97</td>

                    <td className='action-td'>
                      <div className='d-flex align-items-center gap-2'>
                        <button
                          type='button'
                          class='btn btn-primary'
                        >
                          Approve
                        </button>
                        <button
                          type='button'
                          class='btn btn-danger'
                          data-bs-toggle='modal'
                         data-bs-target='#add-faq-mddl'
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td scope='row'>03</td>
                    <td className='text-nowrap'>Marry Curie</td>
                    <td>curie@gmail.com</td>
                    <td className='text-nowrap'>Silver Plan</td>
                    <td>35ac4aefh4ec97</td>

                    <td className='action-td'>
                      <div className='d-flex align-items-center gap-2'>
                        <button
                          type='button'
                          class='btn btn-primary'
                        >
                          Approve
                        </button>
                        <button
                          type='button'
                          class='btn btn-danger'
                          data-bs-toggle='modal'
                         data-bs-target='#add-faq-mddl'
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td scope='row'>04</td>
                    <td className='text-nowrap'>John Gaurge</td>
                    <td>john@gmail.com</td>
                    <td className='text-nowrap'>Gold Plan</td>
                    <td>35ac4aefh4ec97</td>

                    <td className='action-td'>
                      <div className='d-flex align-items-center gap-2'>
                        <button
                          type='button'
                          class='btn btn-primary'
                        >
                          Approve
                        </button>
                        <button
                          type='button'
                          class='btn btn-danger'
                          data-bs-toggle='modal'
                         data-bs-target='#add-faq-mddl'
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td scope='row'>05</td>
                    <td className='text-nowrap'>Shane Watson</td>
                    <td>shane@gmail.com</td>
                    <td className='text-nowrap'>Silver Plan</td>
                    <td>85ac4aefh4ec97</td>

                    <td className='action-td'>
                      <div className='d-flex align-items-center gap-2'>
                        <button
                          type='button'
                          class='btn btn-primary'
                        >
                          Approve
                        </button>
                        <button
                          type='button'
                          class='btn btn-danger'
                          data-bs-toggle='modal'
                         data-bs-target='#add-faq-mddl'
                        >
                          Reject
                        </button>
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

      {/* modals */}

      {/* <!--reply- Modal --> */}

      <div
        class='modal fade'
        id='add-faq-mddl'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h1 class='modal-title fs-5' id='exampleModalLabel'>
                Rejection Reason
              </h1>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body'>
              <div className='add-mdl'>
                <div className='form-group mb-3'>
                  <label className='mb-3'>Enter Reason for Rejection</label>
                  <textarea className='form-control' rows='6'>
                    {' '}
                  </textarea>
                </div>
              </div>
            </div>
            <div class='modal-footer'>
              <button type='button' class='btn btn-primary'>
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

      {/* <!--view- Modal --> */}

      <div
        class='modal fade'
        id='view-fdbck-mddl'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h1 class='modal-title fs-5' id='exampleModalLabel'>
                View Feedback
              </h1>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body'>
              <div className='view-mdl '>
                <div className='form-group only-view mb-3'>
                  <label className='mb-3'>Feedback</label>
                  <textarea className='form-control' rows='6'>
                    {' '}
                  </textarea>
                </div>

                <div className='form-group'>
                  <label className='mb-3'>Reply</label>
                  <textarea
                    className='form-control'
                    placeholder='Enter your message here..'
                  >
                    {' '}
                  </textarea>
                </div>
              </div>
            </div>
            <div class='modal-footer'>
              <button type='button' class='btn btn-primary'>
                Send
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
  )
}

export default Payments
