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

                </div>
            </div>
        </div>
    )
}

export default Questionnaires