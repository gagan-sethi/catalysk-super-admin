"use client";
// import node module libraries
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useRouter, useParams } from "next/navigation";
// import widget as custom components
import { PageHeading } from "widgets";
import { useState, useEffect } from "react";
import { handleApi } from "utils/apis/handleApi.js";
import { saveAs } from "file-saver";

const electricity = [
  "incandescent_bulb",
  "cfl_bulb",
  "tubelight",
  "fan",
  "split_ac",
  "window_ac",
];

const ViewProof = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const router = useRouter();
  const [url, setUrl] = useState("");
  async function getProofDetails() {
    try {
      const response = await handleApi(
        `report-managment/getProveDetails/${id}`,
        "GET",
        null,
        {},
        true,
        false,
        router
      );

      if (response) {
        console.log("response", response);
        setData(response?.data ?? []);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Fetch data when currentPage changes
  useEffect(() => {
    getProofDetails();
  }, [id]);

  const handleDownload = async (fileUrl) => {
    try {
      console.log("fileUrl", fileUrl);
      const response = await fetch(fileUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch the file");
      }

      const blob = await response.blob();
      const fileName = fileUrl.split("/").pop() || "downloaded_file";

      saveAs(blob, fileName);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  return (
    <>
      <Container fluid className="p-6">
        {/* Page Heading */}
        <PageHeading heading="View Proof" />

        <div className="main-content-wrapper">
          <div className="general-tabs-cntnt only-view">
            <div className="card">
              <div className="card-body">
                <div className="mb-6 d-flex justify-content-between align-items-center">
                  <h4 className="mb-1">General Information</h4>
                  {/* <button className='btn btn-outline-white' data-bs-toggle="modal" data-bs-target="#qrcode-mddl"> Generate QR Code</button> */}
                </div>

                {/* <Form> */}
                <Row className="mb-3">
                  <Form.Label
                    className="col-sm-4 col-form-label form-label"
                    htmlFor="fullName"
                  >
                    Name{" "}
                  </Form.Label>
                  <Col sm={8} className="mb-3 mb-lg-0">
                    <Form.Control
                      type="text"
                      value={data?.user_info?.full_name}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Form.Label
                    className="col-sm-4 col-form-label form-label"
                    htmlFor="email"
                  >
                    Email
                  </Form.Label>
                  <Col md={8} xs={12} className="position-relative">
                    <Form.Control type="email" value={data?.user?.email} />
                    {/* <span className="verified">Verified</span> */}
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="phone">
                    Quest Type
                  </Form.Label>
                  <Col md={8} xs={12} className="position-relative">
                    <Form.Control
                      type="text"
                      value={
                        electricity.includes(data?.type)
                          ? "Electricity"
                          : "Water"
                      }
                    />
                    {/* <span className="verified">Verified</span> */}
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Form.Label
                    className="col-sm-4 col-form-label form-label"
                    htmlFor="email"
                  >
                    Media Count
                  </Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="number" value={data?.media?.length} />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="phone">
                    Status
                  </Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control
                      type="text"
                      value={
                        data.status == "approved"
                          ? "Approved"
                          : data.status == "pending"
                          ? "Pending"
                          : "Rejected"
                      }
                    />
                    {/* <select className="form-control">
                        <option>Approved</option>
                        <option>Rejected</option>
                      </select> */}
                  </Col>
                </Row>
                <div>
                  <h4 className="my-3">Media Proof</h4>
                  <div className="proofMedia">
                    {data &&
                      data.media &&
                      data.media.length !== 0 &&
                      data.media.map((ele) => (
                        <div className="sparks-gained-hdr">
                          <div className="lft-spark">
                            <Image
                              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${ele}`}
                              className=""
                              alt=""
                            />
                          </div>
                          <div className="d-flex justify-content-center align-items-center gap-3">
                            <div className="rgt-spark">
                              <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#block-mddl"
                                onClick={() =>
                                  setUrl(
                                    `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${ele}`
                                  )
                                }
                              >
                                View
                              </button>
                            </div>
                            <div className="rgt-spark">
                              <button
                                className="btn btn-primary"
                                onClick={() =>
                                  handleDownload(
                                    `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${ele}`
                                  )
                                }
                              >
                                Download
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                {/* </Form> */}
                {/* <div>
                  <h4 className="my-3">Media Proof</h4>
                  <div className="proofMedia">
                    {data &&
                      data.media &&
                      data.media.length != 0 &&
                      data.media.map((ele) => (
                        <div className="sparks-gained-hdr">
                          <div className="lft-spark">
                            <Image
                              src={}
                              className=""
                              alt=""
                            />
                          </div>
                          <div className="d-flex justify-content-center align-items-center gap-3">
                            <div className="rgt-spark">
                              <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#block-mddl"
                              >
                                View
                              </button>
                            </div>
                            <div className="rgt-spark">
                              <button
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#sparks-update"
                              >
                                Download
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div> */}

                {/* <div className="d-flex justify-content-center p-3 mt-3">
                  <button className="btn btn-primary">Back</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* modals */}

        <div
          class="modal fade"
          id="block-mddl"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Proof Content
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="qrcode-mdl">
                  <Image src={url} alt="" />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => handleDownload(url)}
                >
                  Download
                </button>
                <button
                  type="button"
                  class="btn btn-outline-white"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ViewProof;
