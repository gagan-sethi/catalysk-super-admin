'use client'
// import node module libraries
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { useRouter, useParams } from 'next/navigation'
// import widget as custom components
import { PageHeading } from 'widgets'
import { useState, useEffect } from 'react'
import { handleApi } from 'utils/apis/handleApi.js'
import { saveAs } from 'file-saver'
import axios from 'axios'

const electricity = [
  'incandescent_bulb',
  'cfl_bulb',
  'tubelight',
  'fan',
  'split_ac',
  'window_ac'
]

const ViewProof = () => {
  const [data, setData] = useState({})
  const { id } = useParams()
  const router = useRouter()
  const [url, setUrl] = useState('')
  async function getProofDetails () {
    try {
      const response = await handleApi(
        `report-managment/getProveDetails/${id}`,
        'GET',
        null,
        {},
        true,
        false,
        router
      )

      if (response) {
        console.log('response', response)
        setData(response?.data ?? [])
      }
    } catch (error) {
      console.log(error)
    }
  }

  // Fetch data when currentPage changes
  useEffect(() => {
    getProofDetails()
  }, [id])

  const handleDownload = async key => {
    try {
      const token = localStorage.getItem('token') // Get token from localStorage
      const headers = {
        Authorization: `Bearer ${token}` // Set Authorization header
      }

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/report-managment/getImageByUrl`,
        {
          params: { path: key },
          responseType: 'blob', // Ensure the response is a blob (binary data)
          headers // Include the headers in the request
        }
      )

      // Create a URL for the blob and initiate download
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')

      // Set the filename and download link
      link.href = url
      link.download = key.split('/').pop() // Extract filename from the path
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Revoke the blob URL to free memory
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading image:', error)
    }
  }

  return (
    <>
      <Container fluid className='p-6'>
        {/* Page Heading */}
        <PageHeading heading='View Proof' />

        <div className='main-content-wrapper'>
          <div className='general-tabs-cntnt only-view'>
            <div className='card'>
              <div className='card-body'>
                <div className='d-flex justify-content-center align-items-center gap-3 mb-3'>
                  <button
                    className='btn btn-primary'
                    data-bs-toggle='modal'
                    data-bs-target='#approve-mddl'
                  >
                    Approve
                  </button>
                  <Button
                    variant='danger'
                    data-bs-toggle='modal'
                    data-bs-target='#delete-mddl'
                  >
                    Reject
                  </Button>
                  <button
                    className='btn greyBtn'
                    data-bs-toggle='modal'
                    data-bs-target='#review-mddl'
                  >
                    Under Review
                  </button>
                </div>
                <div className='d-flex justify-content-between align-items-start gap-3'>
                  <div className='w-100'>
                    <h4 className='my-3'>General Information</h4>
                    <div className='leftCols'>
                      <Row className='mb-3'>
                        <Form.Label
                          className='col-sm-4 col-form-label form-label'
                          htmlFor='fullName'
                        >
                          Name{' '}
                        </Form.Label>
                        <Col sm={8} className='mb-3 mb-lg-0'>
                          <Form.Control
                            type='text'
                            value={data?.user_info?.full_name}
                          />
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
                            value={data?.user?.email}
                          />
                          {/* <span className="verified">Verified</span> */}
                        </Col>
                      </Row>

                      <Row className='mb-3'>
                        <Form.Label className='col-sm-4' htmlFor='phone'>
                          Quest Type
                        </Form.Label>
                        <Col md={8} xs={12} className='position-relative'>
                          <Form.Control
                            type='text'
                            value={
                              electricity.includes(data?.type)
                                ? 'Electricity'
                                : 'Water'
                            }
                          />
                          {/* <span className="verified">Verified</span> */}
                        </Col>
                      </Row>

                      <Row className='mb-3'>
                        <Form.Label
                          className='col-sm-4 col-form-label form-label'
                          htmlFor='email'
                        >
                          Files
                        </Form.Label>
                        <Col md={8} xs={12}>
                          <Form.Control
                            type='number'
                            value={data?.media?.length}
                          />
                        </Col>
                      </Row>

                      <Row className='mb-3'>
                        <Form.Label className='col-sm-4' htmlFor='phone'>
                          Status
                        </Form.Label>
                        <Col md={8} xs={12}>
                          <Form.Control
                            type='text'
                            value={
                              data.status == 'approved'
                                ? 'Approved'
                                : data.status == 'pending'
                                ? 'Pending'
                                : 'Rejected'
                            }
                          />
                          {/* <select className="form-control">
                        <option>Approved</option>
                        <option>Rejected</option>
                      </select> */}
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className='w-100'>
                    <h4 className='my-3'>Media Proof</h4>
                    <div className='proofMedia'>
                      {data &&
                        data.media &&
                        data.media.length !== 0 &&
                        data.media.map(ele => (
                          <div className='sparks-gained-hdr'>
                            <div className='lft-spark'>
                              <Image
                                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${ele}`}
                                className=''
                                alt=''
                              />
                            </div>
                            <div className='d-flex justify-content-center align-items-center gap-3'>
                              <div className='rgt-spark'>
                                <button
                                  type='button'
                                  className='btn btn-primary'
                                  data-bs-toggle='modal'
                                  data-bs-target='#block-mddl'
                                  onClick={() => setUrl(ele)}
                                >
                                  View
                                </button>
                              </div>
                              <div className='rgt-spark'>
                                <button
                                  className='btn btn-primary'
                                  onClick={() => handleDownload(ele)}
                                >
                                  Download
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
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
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${url}`}
                    alt=''
                  />
                </div>
              </div>
              <div class='modal-footer'>
                <button
                  type='button'
                  class='btn btn-primary'
                  onClick={() => handleDownload(url)}
                >
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

        <div
          class='modal fade'
          id='delete-mddl'
          tabindex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div class='modal-dialog'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h1 class='modal-title fs-4' id='exampleModalLabel'>
                  Reject Proof
                </h1>
                <button
                  type='button'
                  class='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div class='modal-body'>
                <div className='dlt-mdl'>
                  <div>
                    <div className='mb-3'>
                      <h5>Please Select a valid reason for rejection?</h5>
                      <select
                        class='form-select'
                        aria-label='Default select example'
                      >
                        <option selected>Select a Reason</option>
                        <option value='1'>Image not Clear</option>
                        <option value='2'>Fake Image</option>
                        <option value='3'>Invalid Proof</option>
                      </select>
                    </div>

                    <div class='mb-3'>
                      <h5>Any comment for rejection (Optional)</h5>
                      <textarea
                        class='form-control'
                        id='exampleFormControlTextarea1'
                        rows='3'
                        onChange={e => setReason(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class='modal-footer'>
                <button
                  type='button'
                  class='btn btn-primary'
                  // data-bs-dismiss="modal"
                  onClick={() => handleApproveOrRejectRequest('rejected')}
                >
                  Reject
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

        <div
          class='modal fade'
          id='review-mddl'
          tabindex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div class='modal-dialog'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h1 class='modal-title fs-4' id='exampleModalLabel'>
                   Proof under Review
                </h1>
                <button
                  type='button'
                  class='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div class='modal-body'>
              <div className='dlt-mdl'>
                  <div>
                    <div class='mt-3 mb-3'>
                      <h5>Are you sure you want to put this proof under review?</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class='modal-footer'>
                <button
                  type='button'
                  class='btn btn-primary'
                  data-bs-dismiss="modal"
                >
                  Save Changes
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

        <div
          class='modal fade'
          id='approve-mddl'
          tabindex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div class='modal-dialog'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h1 class='modal-title fs-4' id='exampleModalLabel'>
                  Approve Proof
                </h1>
                <button
                  type='button'
                  class='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div class='modal-body'>
                <div className='dlt-mdl'>
                  <div>
                    <div class='mt-3 mb-3'>
                      <h5>Are you sure you want to approve this proof?</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class='modal-footer'>
                <button
                  type='button'
                  class='btn btn-primary'
                  // data-bs-dismiss="modal"
                  onClick={() => handleApproveOrRejectRequest('approved')}
                >
                  Approve
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
