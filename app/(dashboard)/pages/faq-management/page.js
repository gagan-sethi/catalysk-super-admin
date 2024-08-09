'use client'
import { useEffect, useState } from 'react';
// import node module libraries
import { Col, Row, Container, Button } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'



const FaqManagement = () => {


const [faqList, sefaqList] = useState([])
const [question, setQuestion] = useState('')
const [answer, setAnswer] = useState('')
const [questionerror, setquestionerror] = useState('')
const [answererror, setanswererror] = useState('')

const [selecteid , setselecteid] = useState('')
  useEffect(() => {

  getcms()
    // if (typeof window !== 'undefined') {
    //   require('bootstrap/dist/js/bootstrap.bundle.min.js');
    // }
  }, []);


  const handleInputChange = (e) => {
    setQuestion(e.target.value);
   
    if(!question){
        setquestionerror("Please enter someting...");

    }else{
            setquestionerror("");

    }
  };


  
   const save = async () => {
   
   if(!question){
   setquestionerror('Please enter someting...')
   return
   }else if(!answer){
  setanswererror('Please enter someting...')
   return

   }else{
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/cms/addFaq`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ question,answer}),
      });

                  window.location.reload();

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response?.json();
      return data;

    } catch (error) {
      console.error('Error in API call:', error);
     // setEmailError('Error checking email. Please try again.');
    }
    }
  };



     const update = async () => {
   
   if(!question){
   setquestionerror('Please enter someting...')
   return
   }else if(!answer){
  setanswererror('Please enter someting...')
   return

   }else{
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/cms/editFaq/${selecteid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ question,answer}),
      });

                  window.location.reload();

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response?.json();
      return data;

    } catch (error) {
      console.error('Error in API call:', error);
     // setEmailError('Error checking email. Please try again.');
    }
    }
  };



  const deletefaq = async () => {
   
   
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/cms/deleteFaq/${selecteid}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
       
      });

                  window.location.reload();

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response?.json();
      return data;

    } catch (error) {
      console.error('Error in API call:', error);
     // setEmailError('Error checking email. Please try again.');
    }
   
  };


    const handleInputChangeanswer = (e) => {
    setAnswer(e.target.value);
   
    if(!answer){
        setanswererror("Please enter someting...");

    }else{
            setanswererror("");

    }
  };


  const getdetails = async  (e) => {
  setselecteid(e)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/cms/getSingleFaq/${e}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        
      });

      console.log(response)

      const data = await response.json();
            setQuestion(data.data.question)
                        setAnswer(data.data.answer)

     
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      
      
      return data;
    } catch (error) {
      console.error('Error in API call:', error);
    //  setEmailError('Error checking email. Please try again.');
    }
     }


                            const token = typeof window !== 'undefined' ? localStorage.getItem('token') : '';


     const  getcms = async  () => {
           try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/cms/getFaqList`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        
      });

      console.log(response)
      const data = await response.json();
       
      sefaqList(data.data)
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      
      
      return data;
    } catch (error) {
      console.error('Error in API call:', error);
    //  setEmailError('Error checking email. Please try again.');
    }
     }

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
                      {faqList.map((tdata, index) => (
                      <tr>
                      
                        <td scope="row">{index+1}</td>
                        <td>
                          <div className='faq-ans'>
                            {tdata.question}
                          </div>
                         </td>
                        <td>
                          <div className='faq-ans'>
                         {tdata.answer}   
                          </div>
                         </td>                                   
                     
                        <td className="action-td">

                            <div className='actions-bttns'>
                                <span  data-bs-toggle="modal" data-bs-target="#view-faq-mddl"  onClick={(e) => getdetails(tdata._id)}> <i className="fe fe-eye"></i></span>
                                <span  data-bs-toggle="modal" data-bs-target="#edit-faq-mddl"  onClick={(e) => getdetails(tdata._id)}> <i className="fe fe-edit"></i></span>
                                <span  data-bs-toggle="modal" data-bs-target="#delete-mddl"  onClick={(e) => getdetails(tdata._id)}> <i className="fe fe-trash"></i></span>
                            </div>
                        </td>
                      
                      </tr>   

                         ))}              
                    
                    </tbody>
                  </table>             

                </div>
               {/* <div className="pagination-div">              
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
                 </div> */}
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
                      <button type="button" class="btn btn-primary"  onClick={deletefaq}>Delete</button>
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
                                  <input className='form-control'  placeholder='Enter faq question' value={question}
                onChange={handleInputChange}/>

                                  {questionerror && <p className="text-red-500 text-sm mt-2">{questionerror}</p>}

                              </div>

                              <div className='form-group'>
                                  <label className='mb-3'>Faq Answer</label>
                                  <textarea className='form-control' placeholder='Faq Answer' rows="6" value={answer}
                onChange={handleInputChangeanswer}/> 
                                                  {answererror && <p className="text-red-500 text-sm mt-2">{answererror}</p>}

                              </div>

                          </div>

                    </div>
                    <div class="modal-footer">             
                      <button type="button" class="btn btn-primary"  onClick={save}>Add</button>
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
                                  <input className='form-control' value={question} />
                              </div>

                              <div className='form-group'>
                                  <label className='mb-3'>Faq Answer</label>
                                  <textarea className='form-control' rows="6" value={answer}/>
                              </div>

                          </div>

                    </div>
                    <div class="modal-footer">             
                    
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
                                  <input className='form-control' value={question}
                onChange={handleInputChange}/>
                              </div>

                              <div className='form-group'>
                                  <label className='mb-3'>Faq Answer</label>
                                  <textarea className='form-control' rows="6" value={answer}
                onChange={handleInputChangeanswer}/>
                              </div>

                          </div>

                    </div>
                    <div class="modal-footer">             
                      <button type="button" class="btn btn-primary"  onClick={update}>Update</button>
                      <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
     

    </Container>
  )
}

export default FaqManagement;