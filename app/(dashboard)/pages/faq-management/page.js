'use client'
// import node module libraries
import { Col, Row, Container, Button } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'
import { CKEditor as CKEditorComponent } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "ckbox/dist/styles/themes/lark.css";

// CKBox is a peer dependency of CKEditor. It must be present in the global scope.
// Importing UMD build of CKBox will make sure that `window.CKBox` will be available.
import "ckbox/dist/ckbox";
import Link from 'next/link';



const FaqManagement = () => {


  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Faq Management"/>

      <div className='card'>
        <div className='card-body'>
        <div className="table-div">            
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>                      
                        <th scope="col">Sr. No.</th>
                        <th scope="col">Faq Questions</th>
                        <th scope="col">Faq Answers</th>                                   
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr>
                      
                        <td scope="row">01</td>
                        <td>
                          <div className='faq-ans'>
                             What is the return policy?
                          </div>
                         </td>
                        <td>
                          <div className='faq-ans'>
                          Our return policy allows you to return products within 30 days of purchase. The items must be unused and in their original packaging. Please visit our returns page for more details.   
                          </div>
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
                                  <Link className="dropdown-item" href="/pages/view-corporate">
                                  View
                                  </Link>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                  Edit
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
                      
                      <td scope="row">02</td>
                      <td>
                        <div className='faq-ans'>
                           What is the return policy?
                        </div>
                       </td>
                      <td>
                        <div className='faq-ans'>
                        Our return policy allows you to return products within 30 days of purchase. The items must be unused and in their original packaging. Please visit our returns page for more details.   
                        </div>
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
                                <Link className="dropdown-item" href="/pages/view-corporate">
                                View
                                </Link>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                Edit
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
                      
                      <td scope="row">03</td>
                      <td>
                        <div className='faq-ans'>
                           What is the return policy?
                        </div>
                       </td>
                      <td>
                        <div className='faq-ans'>
                        Our return policy allows you to return products within 30 days of purchase. The items must be unused and in their original packaging. Please visit our returns page for more details.   
                        </div>
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
                                <Link className="dropdown-item" href="/pages/view-corporate">
                                View
                                </Link>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                Edit
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
                      
                      <td scope="row">04</td>
                      <td>
                        <div className='faq-ans'>
                           What is the return policy?
                        </div>
                       </td>
                      <td>
                        <div className='faq-ans'>
                        Our return policy allows you to return products within 30 days of purchase. The items must be unused and in their original packaging. Please visit our returns page for more details.   
                        </div>
                       </td>                                   
                   
                      <td className="action-td">
                          <div className='actns-bttns'>
                              <span><i></i> </span>
                              <span> </span>
                              <span> </span>
                          </div>

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
                                <Link className="dropdown-item" href="/pages/view-corporate">
                                View
                                </Link>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                Edit
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
                      
                      <td scope="row">05</td>
                      <td>
                        <div className='faq-ans'>
                           What is the return policy?
                        </div>
                       </td>
                      <td>
                        <div className='faq-ans'>
                        Our return policy allows you to return products within 30 days of purchase. The items must be unused and in their original packaging. Please visit our returns page for more details.   
                        </div>
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
                                <Link className="dropdown-item" href="/pages/view-corporate">
                                View
                                </Link>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                Edit
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
                      
                      <td scope="row">06</td>
                      <td>
                        <div className='faq-ans'>
                           What is the return policy?
                        </div>
                       </td>
                      <td>
                        <div className='faq-ans'>
                        Our return policy allows you to return products within 30 days of purchase. The items must be unused and in their original packaging. Please visit our returns page for more details.   
                        </div>
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
                                <Link className="dropdown-item" href="/pages/view-corporate">
                                View
                                </Link>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                Edit
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
     

    </Container>
  )
}

export default FaqManagement;