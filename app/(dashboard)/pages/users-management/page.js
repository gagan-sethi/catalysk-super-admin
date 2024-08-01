"use client";
// import node module libraries
import { Container, Form, Image } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import {
  Notifications,
  DeleteAccount,
  GeneralSetting,
  EmailSetting,
  Preferences,
} from "sub-components";
import Head from "next/head";
import Link from 'next/link';
import { useState } from "react";

const UsersList = () => {

    // hide show filters

  const [isVisible, setIsVisible] = useState(false);

  const showFilters = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Container fluid className="p-6">
        {/* Page Heading */}
        <PageHeading heading="Users List" />

        <div className="main-content-wrapper">
          <div className="card">
            <div className="card-body">
              <div className="filters-options-sec">
                <div className="flxx">
                    <div className="search-bar">            
                        {/* Search Form */}
                        <Form className="d-flex align-items-center">
                          <Form.Control type="search" placeholder="Search" />
                        </Form>				     
                    </div>
                    <div className="bttns-sec">
                      <button className="btn btn-outline-white" onClick={showFilters}>
                        <i className="fe fe-sliders me-2"></i> Filter
                      </button>

                      <Link className="btn btn-primary" href="/pages/add-user">                        
                        Add New User
                      </Link>

                      <div className="btn btn-outline-white bulk-action-btn">
                          <span
                            className="dropdown-toggle"              
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                          <i className="fe fe-more-vertical"></i>
                          </span>
                          <ul className="dropdown-menu">                         
                           
                            <li>
                              <a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#block-mddl">
                              Block
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-mddl">
                              Delete
                              </a>
                            </li>                        
                          </ul>
                      </div>
                      
                    </div>
                </div>
                {isVisible && (
                <div className="sub-filter-sec">
                  <div>
                    <h4 className="mb-0">Filters : </h4>
                  </div>
                  <div class="stts-flter">
                    <select className="form-control form-select">
                      <option selected>Status</option>
                      <option >Active</option>
                      <option >Blocked</option>
                    </select>
                  </div>

                  <div class="stts-flter">
                    <select className="form-control form-select">
                      <option selected>Type</option>
                      <option >Individual</option>
                      <option >Corporate</option>
                    </select>
                  </div>

                  <div class="stts-flter">
                    <input className="form-control" type="date" />
                  </div>
               
                </div>
                 )}

              </div>
              <div className="table-div">            
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        
                        <th scope="col">
                          <input type="checkbox"  class="form-check-input" />
                        </th>
                        <th scope="col">Sr. No.</th>
                        <th scope="col">User ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Personal Email</th>
                        <th scope="col">Corporate Email</th>
                        <th scope="col">Year of Birth</th>
                        <th scope="col">Zipcode</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Address</th>
                        <th scope="col">Status</th>
                        <th scope="col">Type</th>
                        <th scope="col">Sparks Gained</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> <input type="checkbox"  class="form-check-input" /> </td>               
                        <th scope="row">01</th>
                        <td>CAT987456 </td>               
                        <td>John </td>
                        <td>Grainger</td>
                        <td>john@gmail.com</td>
                        <td>grainger@gmail.com</td>
                        <td>07/10/1997</td>
                        <td>141001</td>
                        <td className="nmbr-td">+91-9874563652</td>
                        <td className="adrs-td">
                          132, My Street, Kingston, New York 12401.
                        </td>
                        <td>
                          <div className="status-td">
                            <span className="active">Active</span>
                          </div>
                        </td>
                        <td className="text-nowrap">Individual</td>
                        <td className="text-nowrap">
                          450
                        </td>
                        <td className="action-td">
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
                                <Link className="dropdown-item" href="/pages/view-user">
                                 View
                                </Link>
                              </li>                           
                              <li>
                                <a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#block-mddl">
                                 Block
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-mddl">
                                Delete
                                </a>
                              </li>
                            </ul>

                        </div>
                        </td>
                      
                      </tr> 

                            <tr>
                        <td> <input type="checkbox"  class="form-check-input" /> </td>               
                        <th scope="row">02</th>
                        <td>CAT987456 </td>               
                        <td>John </td>
                        <td>Grainger</td>
                        <td>john@gmail.com</td>
                        <td>grainger@gmail.com</td>
                        <td>07/10/1997</td>
                        <td>141001</td>
                        <td className="nmbr-td">+91-9874563652</td>
                        <td className="adrs-td">
                          132, My Street, Kingston, New York 12401.
                        </td>
                        <td>
                          <div className="status-td">
                            <span className="active">Active</span>
                          </div>
                        </td>
                        <td className="text-nowrap">Individual</td>
                        <td className="text-nowrap">
                          450
                        </td>
                        <td className="action-td">
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
                                <Link className="dropdown-item" href="/pages/view-user">
                                 View
                                </Link>
                              </li>                           
                              <li>
                                <a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#block-mddl">
                                 Block
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-mddl">
                                Delete
                                </a>
                              </li>
                            </ul>

                        </div>
                        </td>
                      
                      </tr>  


                            <tr>
                        <td> <input type="checkbox"  class="form-check-input" /> </td>               
                        <th scope="row">03</th>
                        <td>CAT987456 </td>               
                        <td>John </td>
                        <td>Grainger</td>
                        <td>john@gmail.com</td>
                        <td>grainger@gmail.com</td>
                        <td>07/10/1997</td>
                        <td>141001</td>
                        <td className="nmbr-td">+91-9874563652</td>
                        <td className="adrs-td">
                          132, My Street, Kingston, New York 12401.
                        </td>
                        <td>
                          <div className="status-td">
                            <span className="active">Active</span>
                          </div>
                        </td>
                        <td className="text-nowrap">Individual</td>
                        <td className="text-nowrap">
                          450
                        </td>
                        <td className="action-td">
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
                                <Link className="dropdown-item" href="/pages/view-user">
                                 View
                                </Link>
                              </li>                           
                              <li>
                                <a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#block-mddl">
                                 Block
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-mddl">
                                Delete
                                </a>
                              </li>
                            </ul>

                        </div>
                        </td>
                      
                      </tr>  


                            <tr>
                        <td> <input type="checkbox"  class="form-check-input" /> </td>               
                        <th scope="row">04</th>
                        <td>CAT987456 </td>               
                        <td>John </td>
                        <td>Grainger</td>
                        <td>john@gmail.com</td>
                        <td>grainger@gmail.com</td>
                        <td>07/10/1997</td>
                        <td>141001</td>
                        <td className="nmbr-td">+91-9874563652</td>
                        <td className="adrs-td">
                          132, My Street, Kingston, New York 12401.
                        </td>
                        <td>
                          <div className="status-td">
                            <span className="active">Active</span>
                          </div>
                        </td>
                        <td className="text-nowrap">Individual</td>
                        <td className="text-nowrap">
                          450
                        </td>
                        <td className="action-td">
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
                                <Link className="dropdown-item" href="/pages/view-user">
                                 View
                                </Link>
                              </li>                           
                              <li>
                                <a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#block-mddl">
                                 Block
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-mddl">
                                Delete
                                </a>
                              </li>
                            </ul>

                        </div>
                        </td>
                      
                      </tr>  

                            <tr>
                        <td> <input type="checkbox"  class="form-check-input" /> </td>               
                        <th scope="row">05</th>
                        <td>CAT987456 </td>               
                        <td>John </td>
                        <td>Grainger</td>
                        <td>john@gmail.com</td>
                        <td>grainger@gmail.com</td>
                        <td>07/10/1997</td>
                        <td>141001</td>
                        <td className="nmbr-td">+91-9874563652</td>
                        <td className="adrs-td">
                          132, My Street, Kingston, New York 12401.
                        </td>
                        <td>
                          <div className="status-td">
                            <span className="active">Active</span>
                          </div>
                        </td>
                        <td className="text-nowrap">Individual</td>
                        <td className="text-nowrap">
                          450
                        </td>
                        <td className="action-td">
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
                                <Link className="dropdown-item" href="/pages/view-user">
                                 View
                                </Link>
                              </li>                           
                              <li>
                                <a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#block-mddl">
                                 Block
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-mddl">
                                Delete
                                </a>
                              </li>
                            </ul>

                        </div>
                        </td>
                      
                      </tr>  

                            <tr>
                        <td> <input type="checkbox"  class="form-check-input" /> </td>               
                        <th scope="row">06</th>
                        <td>CAT987456 </td>               
                        <td>John </td>
                        <td>Grainger</td>
                        <td>john@gmail.com</td>
                        <td>grainger@gmail.com</td>
                        <td>07/10/1997</td>
                        <td>141001</td>
                        <td className="nmbr-td">+91-9874563652</td>
                        <td className="adrs-td">
                          132, My Street, Kingston, New York 12401.
                        </td>
                        <td>
                          <div className="status-td">
                            <span className="active">Active</span>
                          </div>
                        </td>
                        <td className="text-nowrap">Individual</td>
                        <td className="text-nowrap">
                          450
                        </td>
                        <td className="action-td">
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
                                <Link className="dropdown-item" href="/pages/view-user">
                                 View
                                </Link>
                              </li>                           
                              <li>
                                <a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#block-mddl">
                                 Block
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-mddl">
                                Delete
                                </a>
                              </li>
                            </ul>

                        </div>
                        </td>
                      
                      </tr>  

                            <tr>
                        <td> <input type="checkbox"  class="form-check-input" /> </td>               
                        <th scope="row">07</th>
                        <td>CAT987456 </td>               
                        <td>John </td>
                        <td>Grainger</td>
                        <td>john@gmail.com</td>
                        <td>grainger@gmail.com</td>
                        <td>07/10/1997</td>
                        <td>141001</td>
                        <td className="nmbr-td">+91-9874563652</td>
                        <td className="adrs-td">
                          132, My Street, Kingston, New York 12401.
                        </td>
                        <td>
                          <div className="status-td">
                            <span className="active">Active</span>
                          </div>
                        </td>
                        <td className="text-nowrap">Individual</td>
                        <td className="text-nowrap">
                          450
                        </td>
                        <td className="action-td">
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
                                <Link className="dropdown-item" href="/pages/view-user">
                                 View
                                </Link>
                              </li>                           
                              <li>
                                <a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#block-mddl">
                                 Block
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-mddl">
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
                <div className="pagination-div">              
                   <nav aria-label="...">                    
                      <ul class="pagination">
                        <li class="page-item disabled">
                          <span class="page-link">Previous</span>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item active">
                          <span class="page-link">
                            2
                            <span class="sr-only">(current)</span>
                          </span>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                          <a class="page-link" href="#">Next</a>
                        </li>
                      </ul>

                    </nav>
                 </div>
              </div>
            </div>
          </div>
        </div>

         {/* modals */}

          {/* <!-- Modal --> */}

          <div class="modal fade" id="delete-mddl" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Delete User</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                      <div className="dlt-mdl">
                        <h4 className="text-center">Are you sure want to delete this user?</h4>
                      </div>
                </div>
                <div class="modal-footer">             
                  <button type="button" class="btn btn-primary">Delete</button>
                  <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

             {/* <!--Block- Modal --> */}

             <div class="modal fade" id="block-mddl" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Block User</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                          <div className="dlt-mdl">
                            <h4 className="text-center">Are you sure want to block this user?</h4>
                          </div>
                    </div>
                    <div class="modal-footer">             
                      <button type="button" class="btn btn-primary">Block</button>
                      <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
               </div>
      </Container>
    </>
  );
};

export default UsersList;