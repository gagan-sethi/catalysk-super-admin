// import node module libraries
import Link from 'next/link';
import { useState } from 'react'
import { Row, Col, Card, Image, Modal, Button, Form, Badge } from 'react-bootstrap';

const UsersLocations = () => { 

    return (
        <div className="locations-tab-cntnt">
        <div className="card">
          <div className="card-body">
            <div className="mb-6">
              <h4 className="mb-1">Location</h4>
            </div>
            <Form>                

            {/* Address Line One */}
            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="addressLine">Zip Code</Form.Label>
              <Col md={8} xs={12}>
                <Form.Control type="text" value="141001"  />
              </Col>
            </Row>


            <nav className='cstm-tabs mt-5'>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#lctn1" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Location 1</button>
                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#lctn2" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Location 2</button>
                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#lctn3" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Location 3</button>
                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#lctn4" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Location 4</button>
              </div>
            </nav>

              <div className="tab-content w-100 mt-4" id="nav-tabContent">
                <div class="tab-pane fade show active" id="lctn1" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                     {/* Address Line Two */}
            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="addressLineTwo">Circle Name
              </Form.Label>
              <Col md={8} xs={12}>
                <Form.Control type="text" value="Andhra Pradesh Circle"/>
              </Col>
            </Row>

           
            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">Region Name</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="Kurnool Region" />
              </Col>

            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">Division Name</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="Hindupur Division" />
              </Col>
            </Row>

            
            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">Area</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="Peddakotla B.O" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode"> Office Type</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="BO" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode"> Delivery</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="Delivery" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">District</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="ANANTAPUR" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">State Name</Form.Label>

              <Col md={8} xs={12}>
               <select className="form-control">
                  <option selected>ANDHRA PRADESH</option>
                </select>
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">Latitude</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="14.5689" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">Longitude</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="77.85624" />
              </Col>
            </Row>
                </div>
                <div class="tab-pane fade" id="lctn2" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                     {/* Address Line Two */}
            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="addressLineTwo">Circle Name
              </Form.Label>
              <Col md={8} xs={12}>
                <Form.Control type="text" value="Andhra Pradesh Circle"/>
              </Col>
            </Row>

           
            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">Region Name</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="Kurnool Region" />
              </Col>

            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">Division Name</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="Hindupur Division" />
              </Col>
            </Row>

            
            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">Area</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="Peddakotla B.O" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode"> Office Type</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="BO" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode"> Delivery</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="Delivery" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">District</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="ANANTAPUR" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">State Name</Form.Label>

              <Col md={8} xs={12}>
               <select className="form-control">
                  <option selected>ANDHRA PRADESH</option>
                </select>
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">Latitude</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="14.5689" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">Longitude</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="77.85624" />
              </Col>
            </Row>
                </div>
                <div class="tab-pane fade" id="lctn3" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                     {/* Address Line Two */}
            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="addressLineTwo">Circle Name
              </Form.Label>
              <Col md={8} xs={12}>
                <Form.Control type="text" value="Andhra Pradesh Circle"/>
              </Col>
            </Row>

           
            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">Region Name</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="Kurnool Region" />
              </Col>

            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">Division Name</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="Hindupur Division" />
              </Col>
            </Row>

            
            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">Area</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="Peddakotla B.O" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode"> Office Type</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="BO" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode"> Delivery</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="Delivery" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">District</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="ANANTAPUR" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">State Name</Form.Label>

              <Col md={8} xs={12}>
               <select className="form-control">
                  <option selected>ANDHRA PRADESH</option>
                </select>
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">Latitude</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="14.5689" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">Longitude</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="77.85624" />
              </Col>
            </Row>
                </div>
                <div class="tab-pane fade" id="lctn4" role="tabpanel" aria-labelledby="nav-lctn4-tab" tabindex="0">
                     {/* Address Line Two */}
            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="addressLineTwo">Circle Name
              </Form.Label>
              <Col md={8} xs={12}>
                <Form.Control type="text" value="Andhra Pradesh Circle"/>
              </Col>
            </Row>

           
            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">Region Name</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="Kurnool Region" />
              </Col>

            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">Division Name</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="Hindupur Division" />
              </Col>
            </Row>

            
            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">Area</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="Peddakotla B.O" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode"> Office Type</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="BO" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode"> Delivery</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="Delivery" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">District</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="ANANTAPUR" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">State Name</Form.Label>

              <Col md={8} xs={12}>
               <select className="form-control">
                  <option selected>ANDHRA PRADESH</option>
                </select>
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">Latitude</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="14.5689" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="zipcode">Longitude</Form.Label>

              <Col md={8} xs={12}>
                <Form.Control type="text" value="77.85624" />
              </Col>
            </Row>
                </div>
              </div>

         
           
          </Form>

          </div>
        </div>
      </div>
    )
}

export default UsersLocations