// import node module libraries
import Link from 'next/link';
import { useState } from 'react'
import { Row, Col, Card, Image, Modal, Button, Form, Badge } from 'react-bootstrap';

const WaterQuestionnaires = () => { 

    return (      
        <>
        <div className='water-ques'>
        <div className='mt-5 mb-5'>
            <h3>Users's Summary</h3>                  
        </div>                                 

        <div className='answers-list-sec' >
            <div className='row row-gap-5'>
                <div className='col-sm-4'>
                    <div className='answer-card card-bg uppr-card' data-bs-toggle="modal" data-bs-target="#bhk2-mddl">
                        <img src="/images/bhk.svg" />  
                        <h4>3.5</h4>
                        <p>BHK</p>
                    </div>  
                </div>

            <div className='col-sm-4'>
                <div className='answer-card card-bg uppr-card'  data-bs-toggle="modal" data-bs-target="#fittings-mddl">
                    <img src="/images/tap.png" />  
                    <h4>09</h4>
                    <p>Fittings</p>
                </div>  
            </div>

            <div className='col-sm-4' >
                <div className='answer-card card-bg uppr-card' data-bs-toggle="modal" data-bs-target="#used-water-mddl">
                    <img src="/images/water.png" />  
                    <h4>154,560</h4>
                    <p>Litres/year</p>
                </div>  
            </div>

            <div className='col-sm-4'>
                <div className='answer-card card-bg'>
                    <h4 className='givenAns'>09</h4>
                    <p className='givenQue'>How many fittings do you have at home ?</p>
                </div>  
            </div>

            <div className='col-sm-4'>
                <div className='answer-card card-bg'>
                    <h4 className='givenAns'>03</h4>
                    <p className='givenQue'>                                                
                    How many people use the single flush toilet?
                    </p>
                </div>  
            </div>

            <div className='col-sm-4'>
                <div className='answer-card card-bg'>
                    <h4 className='givenAns'>750 L</h4>
                    <p className='givenQue'>                                                   
                    What is your container size?
                    </p>
                </div>  
            </div>

            <div className='col-sm-4'>
                <div className='answer-card card-bg'>
                    <h4 className='givenAns'>Taps (18.0s)</h4>
                    <h4 className='givenAns'>Showers (17.2s)</h4>
                    <p className='givenQue'>                                                   
                        Let’s measure the time it takes to fill it 
                    </p>
                </div>  
            </div>

           
        </div>

            <div className='mt-5 mb-5'>
                <h3>Fitting Details</h3>                  
            </div>   

            <div className='row row-gap-5'>                                               

            <div className='col-sm-4'>
                <div className='answer-card card-bg'>
                    <h4 className='givenAns'>Home</h4>
                    <ul className='applince-list'>
                        <li>
                            <div>
                                <p className='appli-nme'>Taps</p>
                                <p className='appli-nme-sub'>(500ml/15s)</p>
                            </div>
                            <span className='appli-qty'>05</span>
                        </li>

                        <li>
                            <div>
                                <p className='appli-nme'>Sower heads</p>
                                <p className='appli-nme-sub'>(500ml/15s)</p>
                            </div>                                    
                            <span className='appli-qty'>03</span>
                        </li>

                        <li>
                             <div>
                                <p className='appli-nme'>Single-flush toilets</p>
                            
                            </div>
                            <span className='appli-qty'>03</span>
                        </li>
                    </ul>
                </div>  
            </div>


        </div> 

        </div>    

     

    </div>
   
       {/* modals */}


   <div className="modal fade" id="bhk2-mddl" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div className="modal-dialog">
       <div className="modal-content">
           <div className="modal-header">
           <h1 className="modal-title fs-5" id="exampleModalLabel">BHK</h1>
           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div className="modal-body">
           <div className='answer-card'>
               <h4 className='givenAns'>BHK Details</h4>
               <ul className='applince-list kwh-mdl'>
                   <li>
                       <span className='appli-nme'>Living Room</span>
                       <span className='appli-qty'>01</span>
                   </li>

                   <li>
                       <span className='appli-nme'>Bedroom</span>
                       <span className='appli-qty'>02</span>
                   </li>

                   <li>
                       <span className='appli-nme'>Staff Room</span>
                       <span className='appli-qty'>02</span>
                   </li>                               
               </ul>
           </div> 
           </div>
           <div className="modal-footer">             
           <button type="button" className="btn btn-outline-white" data-bs-dismiss="modal">Close</button>
           </div>
       </div>
       </div>
   </div> 

   <div className="modal fade" id="fittings-mddl" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div className="modal-dialog">
       <div className="modal-content">
           <div className="modal-header">
           <h1 className="modal-title fs-5" id="exampleModalLabel">Fittings</h1>
           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div className="modal-body">
           <div className='answer-card'>
               <h4 className='givenAns'>Fittings Details</h4>
               <ul className='applince-list'>
                        <li>
                            <div>
                                <p className='appli-nme'>Taps</p>
                                <p className='appli-nme-sub'>(500ml/15s)</p>
                            </div>
                            <span className='appli-qty'>05</span>
                        </li>

                        <li>
                            <div>
                                <p className='appli-nme'>Shower heads</p>
                                <p className='appli-nme-sub'>(500ml/15s)</p>
                            </div>                                    
                            <span className='appli-qty'>03</span>
                        </li>

                        <li>
                             <div>
                                <p className='appli-nme'>Single-flush toilets</p>
                            
                            </div>
                            <span className='appli-qty'>03</span>
                        </li>
                    </ul>
           </div> 
           </div>
           <div className="modal-footer">             
           <button type="button" className="btn btn-outline-white" data-bs-dismiss="modal">Close</button>
           </div>
       </div>
       </div>
   </div> 

   <div className="modal fade" id="used-water-mddl" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div className="modal-dialog">
       <div className="modal-content">
           <div className="modal-header">
           <h1 className="modal-title fs-5" id="exampleModalLabel">Used Water</h1>
           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div className="modal-body">
           <div className='answer-card'>
               <h4 className='givenAns'>Details</h4>
               <ul className='applince-list'>
                        <li>
                            <div>
                                <p className='appli-nme'>Taps</p>
                            </div>
                            <span className='appli-qty'>500L</span>
                        </li>

                        <li>
                            <div>
                                <p className='appli-nme'>Shower heads</p>
                            </div>                                    
                            <span className='appli-qty'>1000L</span>
                        </li>

                        <li>
                             <div>
                                <p className='appli-nme'>Single-flush toilets</p>
                            
                            </div>
                            <span className='appli-qty'>2000L</span>
                        </li>
                    </ul>
           </div> 
           </div>
           <div className="modal-footer">             
           <button type="button" className="btn btn-outline-white" data-bs-dismiss="modal">Close</button>
           </div>
       </div>
       </div>
   </div> 

      </>
      
    )
}

export default WaterQuestionnaires