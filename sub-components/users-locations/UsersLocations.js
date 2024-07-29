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
           
          </Form>

          </div>
        </div>
      </div>
    )
}

export default UsersLocations