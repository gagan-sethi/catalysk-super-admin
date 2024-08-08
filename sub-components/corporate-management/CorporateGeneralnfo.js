// import node module libraries
import Link from 'next/link';
import { Col, Row, Card, Form, Image } from 'react-bootstrap';

const CorporateGeneralInfo = () => {
  return (
    <>
    <div className="general-tabs-cntnt only-view">
    <div className="card">
      <div className="card-body">
      <div className="mb-6 d-flex justify-content-between align-items-center">
        <h4 className="mb-1">General Information</h4>
        <button className='btn btn-outline-white' data-bs-toggle="modal" data-bs-target="#qrcode-mddl"> Generate QR Code</button>
     </div>
              
      <Form>
      <Row className="mb-3">
          <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="fullName">Corporate ID	</Form.Label>
          <Col sm={8} className="mb-3 mb-lg-0">
            <Form.Control type="text" value="5869858555"/>
          </Col>                                   
        </Row>
      <Row className="mb-3">
          <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="fullName">Registration Number</Form.Label>
          <Col sm={8} className="mb-3 mb-lg-0">
            <Form.Control type="text" value="CATA9874562"/>
          </Col>                                   
        </Row>
        <Row className="mb-3">
          <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="fullName">Corporate Name	</Form.Label>
          <Col sm={8} className="mb-3 mb-lg-0">
            <Form.Control type="text" value="NexGen Enterprises" />
          </Col>
       
        </Row>
        {/* row */}
        <Row className="mb-3">
        <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="email">Number of Employees</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="email" value="250" />
          </Col>
        </Row>
        <Row className="mb-3">
        <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="email">Email</Form.Label>
          <Col md={8} xs={12} className="position-relative">
            <Form.Control type="email" value="contact.nextgen@gmail.com	" />
            {/* <span className="verified">Verified</span> */}
          </Col>
        </Row>

          {/* row */}
          <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="phone">Phone Number</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" value="+91-9874656396"  />
          </Col>
        </Row>
        
        <Row className="mb-3">
        <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="email">Address</Form.Label>
          <Col md={8} xs={12} className="">
           <textarea className='form-control' value="1234 Main Street, Suite 100 San Francisco, CA 94105 USA">
            </textarea>                                   
          </Col>
        </Row>
    

        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="phone">Industry Type</Form.Label>
          <Col md={8} xs={12}>
          <select className="form-control">
              <option>Technology</option>
              <option>Farming</option>
              <option>Agriculture</option>
          </select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="phone">Status</Form.Label>
          <Col md={8} xs={12}>
          <select className="form-control">
              <option>Active</option>
              <option>Blocked</option>
          </select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="phone">Last Login Date</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" value="19/03/2023" />
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="phone">IP Address</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" value="198.172.3.2" />
          </Col>
        </Row>
      </Form>

        <div className="d-flex justify-content-center p-3">
            <button className="btn btn-primary">Edit</button>
        </div>

      </div>
    </div>
                
    </div>

        {/* <!--Qr-code - Modal --> */}

        <div class="modal fade" id="qrcode-mddl" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Generated QR Code </h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                          <div className="qrcode-mdl">
                              <Image src="/images/qr-code.svg" alt="qr-code" />
                          </div>
                    </div>
                    <div class="modal-footer">             
                      <button type="button" class="btn btn-primary">Download</button>
                      <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
    </>




  )
}

export default CorporateGeneralInfo