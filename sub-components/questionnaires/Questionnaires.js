// import node module libraries
import Link from 'next/link';
import { useState } from 'react'
import { Row, Col, Card, Image, Modal, Button, Form, Badge } from 'react-bootstrap';

const Questionnaires = () => { 

    return (
        <div className='questions-tab-cntnt'>
            <div className='card'>
                <div className='card-body'>
                    <div className='question-header'>
                        <div>
                            <h4>Users's Summary</h4>
                        </div>             
                        
                        <div className='dvs-smmry'>
                            <div className='smmry-item'>
                                <h4>3.5</h4>
                                <p>BHK</p>
                            </div>

                            <div className='smmry-item'>
                                <h4>15</h4>
                                <p>Devices</p>
                            </div>

                            <div className='smmry-item'>
                                <h4>400</h4>
                                <p>KWH</p>
                            </div>
                        </div>  
                    </div>

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
                                <div class="tab-pane fade show active" id="electricity" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                                    <div className='electricity-ques'>
                                        <div class="accordion accordion-flush" id="accordionFlushExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                 Do you live in a...
                                            </button>
                                            </h2>
                                            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Apartment</div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                How many people in your home? 
                                            </button>
                                            </h2>
                                            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">6</div>
                                            </div>
                                        </div>
                                            <div class="accordion-item">
                                                    <h2 class="accordion-header">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                    How many rooms do you have?
                                                    </button>
                                                    </h2>
                                                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                    <div class="accordion-body">3.5 BHK</div>
                                            </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                    How many of these appliances are in each room?
                                                    </button>
                                                    </h2>

                                                    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                    <div class="accordion-body">
                                                        <div className='appliances-list'>
                                                            <p>Living Room: <span><strong>2</strong></span></p>
                                                            <p>Bedroom 1: <span><strong>2</strong></span></p>
                                                            <p>Bedroom 2: <span><strong>3</strong></span></p>
                                                            <p>Bedroom 3: <span><strong>4</strong></span></p>   
                                                        </div>
                                                                                                
                                                    </div>
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
            </div>
        </div>
    )
}

export default Questionnaires