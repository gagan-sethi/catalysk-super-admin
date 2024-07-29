// import node module libraries
import Link from 'next/link';
import { Col, Row, Card, Form } from 'react-bootstrap';

const UsersGeneralInfo = () => {
  return (
    <div className="general-tabs-cntnt only-view">
    <div className="card">
      <div className="card-body">
      <div className="mb-6 d-flex justify-content-between align-items-center">
        <h4 className="mb-1">General Information</h4>
        <span class="individual-tag">Individual</span>
     </div>
              
      <Form>
      <Row className="mb-3">
          <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="fullName">User ID</Form.Label>
          <Col sm={8} className="mb-3 mb-lg-0">
            <Form.Control type="text" value="CAT9874562"/>
          </Col>                                   
        </Row>
        <Row className="mb-3">
          <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="fullName">Full name</Form.Label>
          <Col sm={4} className="mb-3 mb-lg-0">
            <Form.Control type="text" value="John" />
          </Col>
          <Col sm={4}>
            <Form.Control type="text" value="Ginger" />
          </Col>
        </Row>
        {/* row */}
        <Row className="mb-3">
        <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="email">Personal Email</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="email" value="john@gmail.com" />
          </Col>
        </Row>
        <Row className="mb-3">
        <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="email">Corporate Email</Form.Label>
          <Col md={8} xs={12} className="position-relative">
            <Form.Control type="email" value="ginger@gmail.com" />
            <span className="verified">Verified</span>
          </Col>
        </Row>

        <Row className="mb-3">
        <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="email">Year of Birth</Form.Label>
          <Col md={8} xs={12} className="">
            <Form.Control type="email" value="1999" />                                     
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
  )
}

export default UsersGeneralInfo