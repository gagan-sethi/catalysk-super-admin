// import node module libraries
import Link from 'next/link';
import { useState } from 'react'
import { Row, Col, Card, Image, Modal, Button, Form, Badge } from 'react-bootstrap';

const Questionnaires = () => { 

    return (
        <div className='questions-tab-cntnt'>


               {/* nav */}

               <div className='questions-tabs cstm-accordian'>
                            <nav className='cstm-tabs'>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#electricity" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Electricity</button>
                                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#water" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" disabled>Water</button>
                                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#commute" type="button" role="tab" aria-controls="nav-contact" aria-selected="false" disabled>Commute</button>
                                </div>
                            </nav>

                            <div class="tab-content" id="nav-tabContent">

                                {/* Electricity-Questions-Content */}         

                                <div class="tab-pane fade show active" id="electricity" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                                    <div className='electricity-ques'>
                                        <div className='mt-5 mb-5'>
                                            <h3>Users's Summary</h3>                  
                                        </div>                                 

                                         <div className='answers-list-sec'>
                                            <div className='row row-gap-5'>
                                                <div className='col-sm-4'>
                                                    <div className='answer-card card-bg'>
                                                        <img src="/images/bhk.svg" />  
                                                        <h4>3.5</h4>
                                                        <p>BHK</p>
                                                    </div>  
                                                </div>

                                                <div className='col-sm-4'>
                                                    <div className='answer-card card-bg'>
                                                        <img src="/images/elec-devices.jpg" />  
                                                        <h4>15</h4>
                                                        <p>Devices</p>
                                                    </div>  
                                                </div>

                                                <div className='col-sm-4'>
                                                    <div className='answer-card card-bg'>
                                                        <img src="/images/kwh.jpg" />  
                                                        <h4>400</h4>
                                                        <p>KWH</p>
                                                    </div>  
                                                </div>

                                                <div className='col-sm-4'>
                                                    <div className='answer-card card-bg'>
                                                        <h4 className='givenAns'>Apartment</h4>
                                                        <p className='givenQue'>Do you live in a..</p>
                                                    </div>  
                                                </div>

                                                <div className='col-sm-4'>
                                                    <div className='answer-card card-bg'>
                                                        <h4 className='givenAns'>6</h4>
                                                        <p className='givenQue'>                                                
                                                            How many people in your home? 
                                                        </p>
                                                    </div>  
                                                </div>

                                                <div className='col-sm-4'>
                                                    <div className='answer-card card-bg'>
                                                        <h4 className='givenAns'>3.5 BHK</h4>
                                                        <p className='givenQue'>                                                   
                                                             How many rooms do you have?
                                                        </p>
                                                    </div>  
                                                </div>
                                            </div>

                                                <div className='mt-5 mb-5'>
                                                    <h3>Appliances Details</h3>                  
                                                </div>   

                                                <div className='row row-gap-5'>                                               

                                                <div className='col-sm-4'>
                                                    <div className='answer-card card-bg'>
                                                        <h4 className='givenAns'>Living Room</h4>
                                                        <ul className='applince-list'>
                                                            <li>
                                                              <span className='appli-nme'>Lights</span>
                                                              <span className='appli-qty'>05</span>
                                                            </li>

                                                            <li>
                                                              <span className='appli-nme'>Fans</span>
                                                              <span className='appli-qty'>02</span>
                                                            </li>

                                                            <li>
                                                              <span className='appli-nme'>Air Conditioners</span>
                                                              <span className='appli-qty'>01</span>
                                                            </li>
                                                        </ul>
                                                    </div>  
                                                </div>

                                                <div className='col-sm-4'>
                                                    <div className='answer-card card-bg'>
                                                        <h4 className='givenAns'>Bedroom-01</h4>
                                                        <ul className='applince-list'>
                                                            <li>
                                                              <span className='appli-nme'>Lights</span>
                                                              <span className='appli-qty'>05</span>
                                                            </li>

                                                            <li>
                                                              <span className='appli-nme'>Fans</span>
                                                              <span className='appli-qty'>02</span>
                                                            </li>

                                                            <li>
                                                              <span className='appli-nme'>Air Conditioners</span>
                                                              <span className='appli-qty'>01</span>
                                                            </li>
                                                        </ul>
                                                    </div>  
                                                </div>

                                                <div className='col-sm-4'>
                                                    <div className='answer-card card-bg'>
                                                        <h4 className='givenAns'>Bedroom-02</h4>
                                                        <ul className='applince-list'>
                                                            <li>
                                                              <span className='appli-nme'>Lights</span>
                                                              <span className='appli-qty'>05</span>
                                                            </li>

                                                            <li>
                                                              <span className='appli-nme'>Fans</span>
                                                              <span className='appli-qty'>02</span>
                                                            </li>

                                                            <li>
                                                              <span className='appli-nme'>Air Conditioners</span>
                                                              <span className='appli-qty'>01</span>
                                                            </li>
                                                        </ul>
                                                    </div>  
                                                </div>

                                                <div className='col-sm-4'>
                                                    <div className='answer-card card-bg'>
                                                        <h4 className='givenAns'>Staff Room</h4>
                                                        <ul className='applince-list'>
                                                            <li>
                                                              <span className='appli-nme'>Lights</span>
                                                              <span className='appli-qty'>05</span>
                                                            </li>

                                                            <li>
                                                              <span className='appli-nme'>Fans</span>
                                                              <span className='appli-qty'>02</span>
                                                            </li>

                                                            <li>
                                                              <span className='appli-nme'>Air Conditioners</span>
                                                              <span className='appli-qty'>01</span>
                                                            </li>
                                                        </ul>
                                                    </div>  
                                                </div>

                                                <div className='col-sm-4'>
                                                    <div className='answer-card card-bg'>
                                                        <h4 className='givenAns'>Rest of the house</h4>
                                                        <ul className='applince-list'>
                                                            <li>
                                                              <span className='appli-nme'>Lights</span>
                                                              <span className='appli-qty'>05</span>
                                                            </li>

                                                            <li>
                                                              <span className='appli-nme'>Fans</span>
                                                              <span className='appli-qty'>02</span>
                                                            </li>

                                                            <li>
                                                              <span className='appli-nme'>Air Conditioners</span>
                                                              <span className='appli-qty'>01</span>
                                                            </li>
                                                        </ul>
                                                    </div>  
                                                </div>

                                            </div> 



                                        </div>       

                                    </div>
                                </div>
                                <div class="tab-pane fade" id="water" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">...</div>
                                <div class="tab-pane fade" id="commute" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
                            </div>
                        </div>
        </div>
    )
}

export default Questionnaires