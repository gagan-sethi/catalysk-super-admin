'use client'
// import node module libraries
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'

// import widget as custom components
import { PageHeading } from 'widgets'

const ViewProof = () => {
  return (
    <>
      <Container fluid className='p-6'>
        {/* Page Heading */}
        <PageHeading heading='View Proof' />

        <div className='main-content-wrapper'>
          <div className='general-tabs-cntnt only-view'>
            <div className='card'>
              <div className='card-body'>
                <div className='mb-6 d-flex justify-content-between align-items-center'>
                  <h4 className='mb-1'>General Information</h4>
                  {/* <button className='btn btn-outline-white' data-bs-toggle="modal" data-bs-target="#qrcode-mddl"> Generate QR Code</button> */}
                </div>

                <Form>
                  <Row className='mb-3'>
                    <Form.Label
                      className='col-sm-4 col-form-label form-label'
                      htmlFor='fullName'
                    >
                      Name{' '}
                    </Form.Label>
                    <Col sm={8} className='mb-3 mb-lg-0'>
                      <Form.Control type='text' value='NexGen Enterprises' />
                    </Col>
                  </Row>

                  <Row className='mb-3'>
                    <Form.Label
                      className='col-sm-4 col-form-label form-label'
                      htmlFor='email'
                    >
                      Email
                    </Form.Label>
                    <Col md={8} xs={12} className='position-relative'>
                      <Form.Control
                        type='email'
                        value='contact.nextgen@gmail.com	'
                      />
                      {/* <span className="verified">Verified</span> */}
                    </Col>
                  </Row>

                  <Row className='mb-3'>
                    <Form.Label className='col-sm-4' htmlFor='phone'>
                      Quest Type
                    </Form.Label>
                    <Col md={8} xs={12}>
                      <select className='form-control'>
                        <option>Electricity</option>
                        <option>Water</option>
                      </select>
                    </Col>
                  </Row>

                  <Row className='mb-3'>
                    <Form.Label
                      className='col-sm-4 col-form-label form-label'
                      htmlFor='email'
                    >
                      Media Count
                    </Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type='number' value='2' />
                    </Col>
                  </Row>

                  <Row className='mb-3'>
                    <Form.Label className='col-sm-4' htmlFor='phone'>
                      Status
                    </Form.Label>
                    <Col md={8} xs={12}>
                      <select className='form-control'>
                        <option>Approved</option>
                        <option>Rejected</option>
                      </select>
                    </Col>
                  </Row>
                  {/* <div>
                    <h4 className='my-3'>Media Proof</h4>
                    <div className='proofMedia'>
                      <div className='sparks-gained-hdr'>
                        <div className='lft-spark'>
                          <Image src='/images/sparks.png' className='' alt='' />
                        </div>
                        <div className='d-flex justify-content-center align-items-center gap-3'>
                          <div className='rgt-spark'>
                            <button
                              type='button'
                              className='btn btn-primary'
                              data-bs-toggle='modal'
                              data-bs-target='#block-mddl'
                            >
                              View
                            </button>
                          </div>
                          <div className='rgt-spark'>
                            <button
                              className='btn btn-primary'
                              data-bs-toggle='modal'
                              data-bs-target='#sparks-update'
                            >
                              Download
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className='sparks-gained-hdr'>
                        <div className='lft-spark'>
                          <Image src='/images/sparks.png' className='' alt='' />
                        </div>
                        <div className='d-flex justify-content-center align-items-center gap-3'>
                          <div className='rgt-spark'>
                            <button
                              className='btn btn-primary'
                              data-bs-toggle='modal'
                              data-bs-target='#block-mddl'
                            >
                              View
                            </button>
                          </div>
                          <div className='rgt-spark'>
                            <button
                              className='btn btn-primary'
                              data-bs-toggle='modal'
                              data-bs-target='#sparks-update'
                            >
                              Download
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className='sparks-gained-hdr'>
                        <div className='lft-spark'>
                          <Image src='/images/sparks.png' className='' alt='' />
                        </div>
                        <div className='d-flex justify-content-center align-items-center gap-3'>
                          <div className='rgt-spark'>
                            <button
                              className='btn btn-primary'
                              data-bs-toggle='modal'
                              data-bs-target='#block-mddl'
                            >
                              View
                            </button>
                          </div>
                          <div className='rgt-spark'>
                            <button
                              className='btn btn-primary'
                              data-bs-toggle='modal'
                              data-bs-target='#sparks-update'
                            >
                              Download
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </Form>
                <div>
                  <h4 className='my-3'>Media Proof</h4>
                  <div className='proofMedia'>
                    <div className='sparks-gained-hdr'>
                      <div className='lft-spark'>
                        <Image src='/images/sparks.png' className='' alt='' />
                      </div>
                      <div className='d-flex justify-content-center align-items-center gap-3'>
                        <div className='rgt-spark'>
                          <button
                            type='button'
                            className='btn btn-primary'
                            data-bs-toggle='modal'
                            data-bs-target='#block-mddl'
                          >
                            View
                          </button>
                        </div>
                        <div className='rgt-spark'>
                          <button
                            className='btn btn-primary'
                            data-bs-toggle='modal'
                            data-bs-target='#sparks-update'
                          >
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='sparks-gained-hdr'>
                      <div className='lft-spark'>
                        <Image src='/images/sparks.png' className='' alt='' />
                      </div>
                      <div className='d-flex justify-content-center align-items-center gap-3'>
                        <div className='rgt-spark'>
                          <button
                            className='btn btn-primary'
                            data-bs-toggle='modal'
                            data-bs-target='#block-mddl'
                          >
                            View
                          </button>
                        </div>
                        <div className='rgt-spark'>
                          <button
                            className='btn btn-primary'
                            data-bs-toggle='modal'
                            data-bs-target='#sparks-update'
                          >
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='sparks-gained-hdr'>
                      <div className='lft-spark'>
                        <Image src='/images/sparks.png' className='' alt='' />
                      </div>
                      <div className='d-flex justify-content-center align-items-center gap-3'>
                        <div className='rgt-spark'>
                          <button
                            className='btn btn-primary'
                            data-bs-toggle='modal'
                            data-bs-target='#block-mddl'
                          >
                            View
                          </button>
                        </div>
                        <div className='rgt-spark'>
                          <button
                            className='btn btn-primary'
                            data-bs-toggle='modal'
                            data-bs-target='#sparks-update'
                          >
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='d-flex justify-content-center p-3 mt-3'>
                  <button className='btn btn-primary'>Back</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* modals */}

        <div
          class='modal fade'
          id='block-mddl'
          tabindex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div class='modal-dialog'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h1 class='modal-title fs-5' id='exampleModalLabel'>
                  Proof Content
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
                  <Image src='/images/qr-code.svg' alt='' />
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
      </Container>
    </>
  )
}

export default ViewProof
