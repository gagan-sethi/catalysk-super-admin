// import node module libraries
import Link from 'next/link';
import { Col, Row, Card, Form } from 'react-bootstrap';

const ViewCorporateEmployee = () => {
  return (
    <div className="general-tabs-cntnt only-view">
    <div className="card">
      <div className="card-body">
      <div className="mb-6 d-flex justify-content-between align-items-center">
        <h4 className="mb-1">Corporate Employee Details</h4>
        {/* <span class="individual-tag">Individual</span> */}
     </div>
              
      <Form>
      <Row className="mb-3">
          <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="fullName">Employee ID	</Form.Label>
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
          <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="fullName">Full Name	</Form.Label>
          <Col sm={8} className="mb-3 mb-lg-0">
            <Form.Control type="text" value="Pardeep Singla" />
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
            <Form.Control type="email" value="pardeep.singla@gmail.com	" />
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
       

      </Form>

        <div className="d-flex justify-content-center p-3">
            <button className="btn btn-primary">Back</button>
        </div>

      </div>
    </div>
                
</div>
  )
}

export default ViewCorporateEmployee