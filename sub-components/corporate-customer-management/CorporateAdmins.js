// import node module libraries
import Link from 'next/link'
import { Col, Row, Card, Form } from 'react-bootstrap'
import React, { useState } from 'react'

const CorporateAdmins = () => {
  const [formData, setFormData] = useState({
    accountHolder: '',
    email: '',
    phoneNumber: '',
    linkedInUrl: '',
    location: '',
    category: 'Admin',
    comments: ''
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
    <div className='general-tabs-cntnt only-view'>
      <div className='card'>
        <div className='card-body'>
          <div className='mb-6 d-flex justify-content-between align-items-center'>
            <h4 className='mb-1'>Corporate Admins</h4>
            <button
              type='button'
              className='btnPrimary '
              data-bs-toggle='modal'
              data-bs-target='#add-mddl'
            >
              Add New Admin
            </button>
          </div>

          <div className='table-div'>
            <div className='table-responsive'>
              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th scope='col'>
                      <input type='checkbox' class='form-check-input' />
                    </th>
                    <th scope='col'>Sr. No.</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Tel number</th>
                    <th scope='col'>Location (City+office)</th>
                    <th scope='col'>LinkedIn URL</th>
                    <th scope='col'>Category</th>
                    <th scope='col'>Notes / comments</th>
                    <th scope='col'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {' '}
                      <input type='checkbox' class='form-check-input' />{' '}
                    </td>
                    <th scope='row'>01</th>
                    <td>John Grainger</td>
                    <td>john5445@gmail.com</td>
                    <td className='nmbr-td'>+91-9874563652</td>
                    <td className='adrs-td'>
                      132, My Street, Kingston, New York 12401.
                    </td>
                    <td>https://fherpibehoedff97rkewbofy</td>
                    <td className='text-nowrap'>Super Admin</td>
                    <td className='adrs-td'>
                      some sample notes/ comments added for testing purpose
                      only.
                    </td>
                    {/* <td>
                      <div className="status-td">
                        <span className="active">Active</span>
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
                            <a
                              className='dropdown-item'
                              data-bs-toggle='modal'
                              data-bs-target='#edit-mddl'
                            >
                              Edit
                            </a>
                          </li>
                          {/* <li>
                            <a
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#block-mddl"
                            >
                              Block
                            </a>
                          </li> */}
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
                    </td>
                  </tr>

                  <tr>
                    <td>
                      {' '}
                      <input type='checkbox' class='form-check-input' />{' '}
                    </td>
                    <th scope='row'>01</th>
                    <td>John Grainger</td>
                    <td>john5445@gmail.com</td>
                    <td className='nmbr-td'>+91-9874563652</td>
                    <td className='adrs-td'>
                      132, My Street, Kingston, New York 12401.
                    </td>
                    <td>https://fherpibehoedff97rkewbofy</td>
                    <td className='text-nowrap'>Super Admin</td>
                    <td className='adrs-td'>
                      some sample notes/ comments added for testing purpose
                      only.
                    </td>
                    {/* <td>
                      <div className="status-td">
                        <span className="active">Active</span>
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
                            <a
                              className='dropdown-item'
                              data-bs-toggle='modal'
                              data-bs-target='#edit-mddl'
                            >
                              Edit
                            </a>
                          </li>
                          {/* <li>
                            <a
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#block-mddl"
                            >
                              Block
                            </a>
                          </li> */}
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
                    </td>
                  </tr>

                  <tr>
                    <td>
                      {' '}
                      <input type='checkbox' class='form-check-input' />{' '}
                    </td>
                    <th scope='row'>01</th>
                    <td>John Grainger</td>
                    <td>john5445@gmail.com</td>
                    <td className='nmbr-td'>+91-9874563652</td>
                    <td className='adrs-td'>
                      132, My Street, Kingston, New York 12401.
                    </td>
                    <td>https://fherpibehoedff97rkewbofy</td>
                    <td className='text-nowrap'>Super Admin</td>
                    <td className='adrs-td'>
                      some sample notes/ comments added for testing purpose
                      only.
                    </td>
                    {/* <td>
                      <div className="status-td">
                        <span className="active">Active</span>
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
                            <a
                              className='dropdown-item'
                              data-bs-toggle='modal'
                              data-bs-target='#edit-mddl'
                            >
                              Edit
                            </a>
                          </li>
                          {/* <li>
                            <a
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#block-mddl"
                            >
                              Block
                            </a>
                          </li> */}
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
                    </td>
                  </tr>

                  <tr>
                    <td>
                      {' '}
                      <input type='checkbox' class='form-check-input' />{' '}
                    </td>
                    <th scope='row'>01</th>
                    <td>John Grainger</td>
                    <td>john5445@gmail.com</td>
                    <td className='nmbr-td'>+91-9874563652</td>
                    <td className='adrs-td'>
                      132, My Street, Kingston, New York 12401.
                    </td>
                    <td>https://fherpibehoedff97rkewbofy</td>
                    <td className='text-nowrap'>Super Admin</td>
                    <td className='adrs-td'>
                      some sample notes/ comments added for testing purpose
                      only.
                    </td>
                    {/* <td>
                      <div className="status-td">
                        <span className="active">Active</span>
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
                            <a
                              className='dropdown-item'
                              data-bs-toggle='modal'
                              data-bs-target='#edit-mddl'
                            >
                              Edit
                            </a>
                          </li>
                          {/* <li>
                            <a
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#block-mddl"
                            >
                              Block
                            </a>
                          </li> */}
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
                    </td>
                  </tr>

                  <tr>
                    <td>
                      {' '}
                      <input type='checkbox' class='form-check-input' />{' '}
                    </td>
                    <th scope='row'>01</th>
                    <td>John Grainger</td>
                    <td>john5445@gmail.com</td>
                    <td className='nmbr-td'>+91-9874563652</td>
                    <td className='adrs-td'>
                      132, My Street, Kingston, New York 12401.
                    </td>
                    <td>https://fherpibehoedff97rkewbofy</td>
                    <td className='text-nowrap'>Super Admin</td>
                    <td className='adrs-td'>
                      some sample notes/ comments added for testing purpose
                      only.
                    </td>
                    {/* <td>
                      <div className="status-td">
                        <span className="active">Active</span>
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
                            <a
                              className='dropdown-item'
                              data-bs-toggle='modal'
                              data-bs-target='#edit-mddl'
                            >
                              Edit
                            </a>
                          </li>
                          {/* <li>
                            <a
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#block-mddl"
                            >
                              Block
                            </a>
                          </li> */}
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
                    </td>
                  </tr>

                  <tr>
                    <td>
                      {' '}
                      <input type='checkbox' class='form-check-input' />{' '}
                    </td>
                    <th scope='row'>01</th>
                    <td>John Grainger</td>
                    <td>john5445@gmail.com</td>
                    <td className='nmbr-td'>+91-9874563652</td>
                    <td className='adrs-td'>
                      132, My Street, Kingston, New York 12401.
                    </td>
                    <td>https://fherpibehoedff97rkewbofy</td>
                    <td className='text-nowrap'>Super Admin</td>
                    <td className='adrs-td'>
                      some sample notes/ comments added for testing purpose
                      only.
                    </td>
                    {/* <td>
                      <div className="status-td">
                        <span className="active">Active</span>
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
                            <a
                              className='dropdown-item'
                              data-bs-toggle='modal'
                              data-bs-target='#edit-mddl'
                            >
                              Edit
                            </a>
                          </li>
                          {/* <li>
                            <a
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#block-mddl"
                            >
                              Block
                            </a>
                          </li> */}
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

      {/* <!-- Modal --> */}

      {/* <div
        class='modal fade'
        id='add-mddl'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h1 class='modal-title fs-5' id='exampleModalLabel'>
                Add New Corporate Admin
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
                    Name
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
                  <label htmlFor='email' className='form-label'>
                    Email
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor='phoneNumber' className='form-label'>
                    Phone Number
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='phoneNumber'
                    name='phoneNumber'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor='linkedInUrl' className='form-label'>
                    LinkedIn URL
                  </label>
                  <input
                    type='url'
                    className='form-control'
                    id='linkedInUrl'
                    name='linkedInUrl'
                    value={formData.linkedInUrl}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor='location' className='form-label'>
                    Location
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='location'
                    name='location'
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='form-group mb-3'>
                  <label htmlFor='category' className='form-label'>
                    Category
                  </label>
                  <select
                    className='form-control'
                    id='category'
                    name='category'
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value='Admin'>Admin</option>
                    <option value='Super Admin'>Super Admin</option>
                  </select>
                </div>

                <div className='form-group mb-3'>
                  <label htmlFor='comments' className='form-label'>
                    Comments
                  </label>
                  <textarea
                    className='form-control'
                    id='comments'
                    name='comments'
                    value={formData.comments}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </form>
            </div>
            <div class='modal-footer'>
              <button type='submit' class='btn btn-primary'>
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
      </div> */}

      <div
        className='modal fade'
        id='add-mddl'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalLabel'>
                Add New Corporate Admin
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor='accountHolder' className='mb-1'>Name</label>
                  <input
                    type='text'
                    id='accountHolder'
                    name='accountHolder'
                    value={formData.accountHolder}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '.375rem',
                      border: '1px solid #dfe3e8'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor='email' className='mb-1'>Email</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '.375rem',
                      border: '1px solid #dfe3e8'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor='phoneNumber' className='mb-1'>Phone Number</label>
                  <input
                    type='text'
                    id='phoneNumber'
                    name='phoneNumber'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '.375rem',
                      border: '1px solid #dfe3e8'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor='linkedInUrl' className='mb-1'>LinkedIn URL</label>
                  <input
                    type='url'
                    id='linkedInUrl'
                    name='linkedInUrl'
                    value={formData.linkedInUrl}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '.375rem',
                      border: '1px solid #dfe3e8'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor='location' className='mb-1'>Location</label>
                  <input
                    type='text'
                    id='location'
                    name='location'
                    value={formData.location}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '.375rem',
                      border: '1px solid #dfe3e8'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor='category' className='mb-1'>Category</label>
                  <select
                    id='category'
                    name='category'
                    value={formData.category}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '.375rem',
                      border: '1px solid #dfe3e8'
                    }}
                  >
                    <option value='Admin'>Admin</option>
                    <option value='Super Admin'>Super Admin</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor='comments' className='mb-1'>Comments</label>
                  <textarea
                    id='comments'
                    name='comments'
                    value={formData.comments}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '.375rem',
                      border: '1px solid #dfe3e8'
                    }}
                  ></textarea>
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button type='submit' className='btn btn-primary'>
                Save changes
              </button>
              <button
                type='button'
                className='btn btn-outline-white'
                data-bs-dismiss='modal'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class='modal fade'
        id='edit-mddl'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h1 class='modal-title fs-5' id='exampleModalLabel'>
                Edit Admin Details
              </h1>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor='accountHolder' className='mb-1'>Name</label>
                  <input
                    type='text'
                    id='accountHolder'
                    name='accountHolder'
                    value={formData.accountHolder}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '.375rem',
                      border: '1px solid #dfe3e8'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor='email' className='mb-1'>Email</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '.375rem',
                      border: '1px solid #dfe3e8'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor='phoneNumber' className='mb-1'>Phone Number</label>
                  <input
                    type='text'
                    id='phoneNumber'
                    name='phoneNumber'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '.375rem',
                      border: '1px solid #dfe3e8'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor='linkedInUrl' className='mb-1'>LinkedIn URL</label>
                  <input
                    type='url'
                    id='linkedInUrl'
                    name='linkedInUrl'
                    value={formData.linkedInUrl}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '.375rem',
                      border: '1px solid #dfe3e8'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor='location' className='mb-1'>Location</label>
                  <input
                    type='text'
                    id='location'
                    name='location'
                    value={formData.location}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '.375rem',
                      border: '1px solid #dfe3e8'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor='category' className='mb-1'>Category</label>
                  <select
                    id='category'
                    name='category'
                    value={formData.category}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '.375rem',
                      border: '1px solid #dfe3e8'
                    }}
                  >
                    <option value='Admin'>Admin</option>
                    <option value='Super Admin'>Super Admin</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor='comments' className='mb-1'>Comments</label>
                  <textarea
                    id='comments'
                    name='comments'
                    value={formData.comments}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '.375rem',
                      border: '1px solid #dfe3e8'
                    }}
                  ></textarea>
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button type='submit' className='btn btn-primary'>
                Save changes
              </button>
              <button
                type='button'
                className='btn btn-outline-white'
                data-bs-dismiss='modal'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

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
                Delete Admin
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
                  Are you sure want to delete this Admin?
                </h4>
              </div>
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-primary'
                data-bs-dismiss='modal'
              >
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
    </div>
  )
}

export default CorporateAdmins
