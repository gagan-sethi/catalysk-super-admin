'use client'
import { useEffect } from 'react';
// import node module libraries
import { Col, Row, Container, Button } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'



const FaqManagement = () => {
  useEffect(() => {
    // if (typeof window !== 'undefined') {
    //   require('bootstrap/dist/js/bootstrap.bundle.min.js');
    // }
  }, []);

  return (
    <Container fluid className="p-6">

      <div className='d-flex justify-content-between align-items-center'>
        {/* Page Heading */}
        <PageHeading heading="Faq Management"/>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-faq-mddl">Add</button>

      </div>

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

                            <div className='actions-bttns'>
                                <span  data-bs-toggle="modal" data-bs-target="#view-faq-mddl"> <i className="fe fe-eye"></i></span>
                                <span  data-bs-toggle="modal" data-bs-target="#edit-faq-mddl"> <i className="fe fe-edit"></i></span>
                                <span  data-bs-toggle="modal" data-bs-target="#delete-mddl"> <i className="fe fe-trash"></i></span>
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

                          <div className='actions-bttns'>
                              <span  data-bs-toggle="modal" data-bs-target="#view-faq-mddl"> <i className="fe fe-eye"></i></span>
                              <span  data-bs-toggle="modal" data-bs-target="#edit-faq-mddl"> <i className="fe fe-edit"></i></span>
                              <span  data-bs-toggle="modal" data-bs-target="#delete-mddl"> <i className="fe fe-trash"></i></span>
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

                            <div className='actions-bttns'>
                                <span  data-bs-toggle="modal" data-bs-target="#view-faq-mddl"> <i className="fe fe-eye"></i></span>
                                <span  data-bs-toggle="modal" data-bs-target="#edit-faq-mddl"> <i className="fe fe-edit"></i></span>
                                <span  data-bs-toggle="modal" data-bs-target="#delete-mddl"> <i className="fe fe-trash"></i></span>
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

                            <div className='actions-bttns'>
                                <span  data-bs-toggle="modal" data-bs-target="#view-faq-mddl"> <i className="fe fe-eye"></i></span>
                                <span  data-bs-toggle="modal" data-bs-target="#edit-faq-mddl"> <i className="fe fe-edit"></i></span>
                                <span  data-bs-toggle="modal" data-bs-target="#delete-mddl"> <i className="fe fe-trash"></i></span>
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

                            <div className='actions-bttns'>
                                <span  data-bs-toggle="modal" data-bs-target="#view-faq-mddl"> <i className="fe fe-eye"></i></span>
                                <span  data-bs-toggle="modal" data-bs-target="#edit-faq-mddl"> <i className="fe fe-edit"></i></span>
                                <span  data-bs-toggle="modal" data-bs-target="#delete-mddl"> <i className="fe fe-trash"></i></span>
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

                            <div className='actions-bttns'>
                                <span  data-bs-toggle="modal" data-bs-target="#view-faq-mddl"> <i className="fe fe-eye"></i></span>
                                <span  data-bs-toggle="modal" data-bs-target="#edit-faq-mddl"> <i className="fe fe-edit"></i></span>
                                <span  data-bs-toggle="modal" data-bs-target="#delete-mddl"> <i className="fe fe-trash"></i></span>
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

       {/* modals */}

          {/* <!--delete- Modal --> */}

          <div class="modal fade" id="delete-mddl" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Delete FAQ</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                          <div className="dlt-mdl">
                            <h4 className="text-center">Are you sure want to delete this FAQ?</h4>
                          </div>
                    </div>
                    <div class="modal-footer">             
                      <button type="button" class="btn btn-primary">Delete</button>
                      <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>

               {/* <!--Add- Modal --> */}

          <div class="modal fade" id="add-faq-mddl" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Add FAQ</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                          <div className="add-mdl">

                              <div className='form-group mb-3'>
                                  <label className='mb-3'>Faq Question</label>
                                  <input className='form-control' placeholder='Enter faq question' />
                              </div>

                              <div className='form-group'>
                                  <label className='mb-3'>Faq Answer</label>
                                  <textarea className='form-control' placeholder='Faq Answer' rows="6"> </textarea> 
                              </div>

                          </div>

                    </div>
                    <div class="modal-footer">             
                      <button type="button" class="btn btn-primary">Add</button>
                      <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>


   {/* <!--view- Modal --> */}

   <div class="modal fade" id="view-faq-mddl" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">View FAQ</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                          <div className="view-mdl only-view" >

                              <div className='form-group mb-3'>
                                  <label className='mb-3'>Faq Question</label>
                                  <input className='form-control' value='What is the return policy?' />
                              </div>

                              <div className='form-group'>
                                  <label className='mb-3'>Faq Answer</label>
                                  <textarea className='form-control' rows="6"> </textarea> 
                              </div>

                          </div>

                    </div>
                    <div class="modal-footer">             
                      <button type="button" class="btn btn-primary">Edit</button>
                      <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>


              {/* <!--edit- Modal --> */}

   <div class="modal fade" id="edit-faq-mddl" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Edit FAQ</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                          <div className="view-mdl" >

                              <div className='form-group mb-3'>
                                  <label className='mb-3'>Faq Question</label>
                                  <input className='form-control' value='What is the return policy?' />
                              </div>

                              <div className='form-group'>
                                  <label className='mb-3'>Faq Answer</label>
                                  <textarea className='form-control' rows="6"> </textarea> 
                              </div>

                          </div>

                    </div>
                    <div class="modal-footer">             
                      <button type="button" class="btn btn-primary">Update</button>
                      <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
     

    </Container>
  )
}

export default FaqManagement;