// import node module libraries
import Link from 'next/link'
import { Col, Row, Card, Form, Image } from 'react-bootstrap'

const CorporateCustomerBankDetails = () => {
  return (
    <>
      <div className='general-tabs-cntnt only-view'>
        <div className='card'>
          <div className='card-body'>
            <div className='mb-6 d-flex justify-content-between align-items-center'>
              <h4 className='mb-1'>General Information</h4>
              {/* <button className='btn btn-outline-white' data-bs-toggle="modal" data-bs-target="#qrcode-mddl"> Generate QR Codedcs</button> */}
            </div>

            <Form>
              <Row className='mb-3'>
                <Form.Label
                  className='col-sm-4 col-form-label form-label'
                  htmlFor='fullName'
                >
                  Account Holder Name
                </Form.Label>
                <Col sm={8} className='mb-3 mb-lg-0'>
                  <Form.Control type='text' value='John Doe' />
                </Col>
              </Row>
              <Row className='mb-3'>
                <Form.Label
                  className='col-sm-4 col-form-label form-label'
                  htmlFor='fullName'
                >
                  Account Number
                </Form.Label>
                <Col sm={8} className='mb-3 mb-lg-0'>
                  <Form.Control type='text' value='5869858555' />
                </Col>
              </Row>
              <Row className='mb-3'>
                <Form.Label
                  className='col-sm-4 col-form-label form-label'
                  htmlFor='fullName'
                >
                  Bank Name
                </Form.Label>
                <Col sm={8} className='mb-3 mb-lg-0'>
                  <Form.Control type='text' value='Scotia Bank, Chicago' />
                </Col>
              </Row>
              <Row className='mb-3'>
                <Form.Label
                  className='col-sm-4 col-form-label form-label'
                  htmlFor='fullName'
                >
                  IFSC Code
                </Form.Label>
                <Col sm={8} className='mb-3 mb-lg-0'>
                  <Form.Control type='text' value='CATA9874562' />
                </Col>
              </Row>
              <Row className='mb-3'>
                <Form.Label
                  className='col-sm-4 col-form-label form-label'
                  htmlFor='fullName'
                >
                  Branch
                </Form.Label>
                <Col sm={8} className='mb-3 mb-lg-0'>
                  <Form.Control type='text' value='Chicago' />
                </Col>
              </Row>
              <Row className='mb-3'>
                <Form.Label
                  className='col-sm-4 col-form-label form-label'
                  htmlFor='fullName'
                >
                  GST number
                </Form.Label>
                <Col sm={8} className='mb-3 mb-lg-0'>
                  <Form.Control type='text' value='5869858555' />
                </Col>
              </Row>
              <Row className='mb-3'>
                <Form.Label
                  className='col-sm-4 col-form-label form-label'
                  htmlFor='fullName'
                >
                  Amount paid so far
                </Form.Label>
                <Col sm={8} className='mb-3 mb-lg-0'>
                  <Form.Control type='text' value='$659846' />
                </Col>
              </Row>
            </Form>

            <div className='d-flex justify-content-center p-3'>
              <button className='btn btn-primary'>Edit</button>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Qr-code - Modal --> */}

      <div
        class='modal fade'
        id='qrcode-mddl'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h1 class='modal-title fs-5' id='exampleModalLabel'>
                Generated QR Code{' '}
              </h1>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body'>
              <div className='qrcode-mdl'>
                <Image src='/images/qr-code.svg' alt='qr-code' />
              </div>
            </div>
            <div class='modal-footer'>
              <button type='button' class='btn btn-primary'>
                Download
              </button>
              <button
                type='button'
                class='btn btn-outline-white'
                data-bs-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CorporateCustomerBankDetails
