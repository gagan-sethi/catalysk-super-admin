"use client";
// import node module libraries
import { Container, Form, Image } from "react-bootstrap";
import Pagination from "components/pagination/Pagination.js";
// import widget as custom components
import { PageHeading } from "widgets";
import { handleApi } from "utils/apis/handleApi.js";
// import sub components
import moment from "moment";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const electricity = [
  "incandescent_bulb",
  "cfl_bulb",
  "tubelight",
  "fan",
  "split_ac",
  "window_ac",
];
const water = ["tap", "shower", "toilet"];

const ProofVerification = () => {
  // hide show filters

  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [pageSize, setPageSize] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(+router?.query?.page || 1);
  const [search, setSearch] = useState(router?.query?.search || "");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [pageRender, setPageRender] = useState(1);
  const [electricProductType, setElectricProductType] = useState(
    router?.query?.type || ""
  );
  const [data, setData] = useState([]);
  const [offsetentry, setoffsetentry] = useState(0);
  const [entry, setentry] = useState(0);
  const [id, setId] = useState("");
  const [reason, setReason] = useState("");

  const showFilters = () => {
    setIsVisible(!isVisible);
  };

  async function getProof() {
    const offset = (currentPage - 1) * pageSize;
    const limit = pageSize;
    setoffsetentry(offset);

    const params = {
      offset,
      limit,
      search: search || "",
      ...(status ? { status } : {}),
      ...(type ? { type } : {}),
      ...(date
        ? {
            start_date: moment(date).startOf("day").utc().toDate(),
            end_date: moment(date).endOf("day").utc().toDate(),
          }
        : {}),
    };

    try {
      const response = await handleApi(
        "report-managment/changesRequestList",
        "GET",
        null,
        params,
        true,
        false,
        router
      );

      if (response) {
        setData(response?.data ?? []);
        setTotalItems(response?.count);
        setentry(response?.data.length + offset);

        // router.push(
        //   `/pages/proof-verification?page=${currentPage}&search=${search}&type=${electricProductType}`
        // );
      }
    } catch (error) {}
  }

  // Fetch data when currentPage changes
  useEffect(() => {
    getProof();
  }, [
    currentPage,
    pageSize,
    electricProductType,
    pageRender,
    status,
    type,
    date,
    search,
  ]);

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  const handleApproveOrRejectRequest = async (status) => {
    try {
      const body = {
        status: status,
        reason: reason,
      };

      const response = await handleApi(
        `report-managment/approveOrRejectChangeRequest/${id}`,
        "PATCH",
        body,
        {},
        true,
        false,
        router
      );

      if (response) {
        toast.success(response.message);
        getProof();
        if (status === "approved") {
          // Close the modal after successful response
          const modalElement = document.getElementById("approve-mddl");
          const modalInstance = bootstrap.Modal.getInstance(modalElement);
          modalInstance?.hide();
        } else {
          const modalElement = document.getElementById("delete-mddl");
          const modalInstance = bootstrap.Modal.getInstance(modalElement);
          modalInstance?.hide();
        }
      }
    } catch (error) {}
  };

  return (
    <>
      <Container fluid className="p-6">
        {/* Page Heading */}
        <PageHeading heading="Proofs Verification" />

        <div className="main-content-wrapper">
          <div className="card">
            <div className="card-body">
              <div className="filters-options-sec">
                <div className="flxx">
                  <div className="search-bar">
                    {/* Search Form */}
                    <Form className="d-flex align-items-center">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </Form>
                  </div>
                  <div className="bttns-sec">
                    <button
                      className="btn btn-outline-white"
                      onClick={showFilters}
                    >
                      <i className="fe fe-sliders me-2"></i> Filter
                    </button>

                    {/* <Link
                      className='btn btn-primary'
                      href='/pages/add-corporate'
                    >
                      Add New Corporate
                    </Link> */}

                    {/* <div className="btn btn-outline-white bulk-action-btn">
                      <span
                        className="dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fe fe-more-vertical"></i>
                      </span>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#block-mddl"
                          >
                            Block
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-mddl"
                          >
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
                {isVisible && (
                  <div className="sub-filter-sec">
                    <div>
                      <h4 className="mb-0">Filters : </h4>
                    </div>
                    <div class="stts-flter">
                      <select
                        className="form-control form-select"
                        onChange={handleChange}
                      >
                        <option value="">All</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </div>

                    <div class="stts-flter">
                      <select
                        className="form-control form-select"
                        onChange={handleChangeType}
                      >
                        <option value="" selected>
                          Quest Type
                        </option>
                        <option value="electricity">Electricity</option>
                        <option value="water">Water</option>
                      </select>
                    </div>

                    <div className="dateBox">
                      <input
                        type="date"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="table-div">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">
                          <th scope="col">S.No.</th>
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Quest Type</th>
                        <th scope="col">Media Count</th>
                        <th scope="col">Actions</th>
                        {/* <th scope='col'>Status</th> */}
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {console.log("data", data)}
                      {data &&
                        data.length !== 0 &&
                        data.map((ele, index) => (
                          <tr>
                            <td className="text-nowrap">
                              {" "}
                              {(currentPage - 1) * pageSize + index + 1}
                            </td>
                            <td className="text-nowrap">
                              {ele?.user_info.full_name}
                            </td>
                            <td>{ele?.user?.email}</td>
                            <td>
                              {electricity.includes(ele?.type)
                                ? "Electricity"
                                : "Water"}
                            </td>
                            <td>{ele?.media?.length ?? 0}</td>
                            {ele?.status === "pending" ? (
                              <>
                                <td className="myButtons">
                                  <div className="d-flex align-items-center gap-2">
                                    <button
                                      type="button"
                                      class="btn btn-primary"
                                      data-bs-toggle="modal"
                                      data-bs-target="#approve-mddl"
                                      onClick={() => setId(ele._id)}
                                    >
                                      Approve
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-danger"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete-mddl"
                                      onClick={() => setId(ele._id)}
                                    >
                                      Reject
                                    </button>
                                  </div>
                                </td>
                              </>
                            ) : ele?.status === "approved" ? (
                              <>
                                <td className="myButtons">
                                  <div className="d-flex align-items-center gap-2">
                                    <button
                                      type="button"
                                      class="btn btn-primary"
                                    >
                                      Approved
                                    </button>
                                  </div>
                                </td>
                              </>
                            ) : (
                              <>
                                <td className="myButtons">
                                  <div className="d-flex align-items-center gap-2">
                                    <button
                                      type="button"
                                      class="btn btn-danger"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete-mddl"
                                    >
                                      Rejected
                                    </button>
                                  </div>
                                </td>
                              </>
                            )}
                            <td className="action-td">
                              <div className="dropdown">
                                <span
                                  className="cstmDropdown dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fe fe-more-vertical"></i>
                                </span>
                                <ul className="dropdown-menu">
                                  <li>
                                    <Link
                                      className="dropdown-item"
                                      href={`/pages/view-proof/${ele._id}`}
                                    >
                                      View
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <Pagination
                  totalItems={totalItems}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  pageSize={pageSize}
                  offsetentry={offsetentry}
                  entry={entry}
                  setPageSize={setPageSize}
                />
              </div>
            </div>
          </div>
        </div>

        {/* modals */}

        {/* <!--delete- Modal --> */}

        <div
          class="modal fade"
          id="delete-mddl"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-4" id="exampleModalLabel">
                  Reject Proof
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="dlt-mdl">
                  <div>
                    <div class="mb-3">
                      <h5>Please Provide a valid reason for rejection?</h5>
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        onChange={(e) => setReason(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  // data-bs-dismiss="modal"
                  onClick={() => handleApproveOrRejectRequest("rejected")}
                >
                  Reject
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

        {/* <!--Block- Modal --> */}

        <div
          class="modal fade"
          id="approve-mddl"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-4" id="exampleModalLabel">
                  Approve Proof
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="dlt-mdl">
                  <div>
                    <div class="mb-3">
                      <h5>Are you sure you want to approve this proof</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  // data-bs-dismiss="modal"
                  onClick={() => handleApproveOrRejectRequest("approved")}
                >
                  Approve
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
                  Block Corporate
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="dlt-mdl">
                  <h4 className="text-center">
                    Are you sure want to block this corporate?
                  </h4>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">
                  Delete
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

        {/* <!--Qr-code - Modal --> */}

        <div
          class="modal fade"
          id="qrcode-mddl"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Generated QR Code{" "}
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
                  <Image src="/images/qr-code.svg" alt="" />
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">
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

export default ProofVerification;
