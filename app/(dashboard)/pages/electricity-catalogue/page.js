"use client";
import Link from "next/link";
import { useEffect } from "react";
// import node module libraries
import { Col, Row, Container, Button } from "react-bootstrap";
import { Uploader } from "rsuite";

// import widget as custom components
import { PageHeading } from "widgets";

const ElectricityCatalogue = () => {
  useEffect(() => {
    // if (typeof window !== 'undefined') {
    //   require('bootstrap/dist/js/bootstrap.bundle.min.js');
    // }
  }, []);

  return (
    <Container fluid className="p-6">
      <div className="d-flex justify-content-between align-items-center">
        {/* Page Heading */}
        <PageHeading heading="Electricity Catalogue" />
        <div className="d-flex gap-2 align-items-center">
          <select class="form-select" aria-label="Default select example">
            <option selected>Air Conditioners</option>
            <option value="1">Lights</option>
            <option value="2">Fans</option>
          </select>
          <button
            type="button"
            class="btn btn-primary text-nowrap"
            data-bs-toggle="modal"
            data-bs-target="#add-csv-mddl">
            Upload Excel
          </button>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="table-div">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Sr. No.</th>
                    <th scope="col">Product Image</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Power consumption/hour</th>
                    <th scope="col">Price</th>
                    <th scope="col">Link</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">01</td>
                    <td>
                      <img className="catalogueImg" src="https://static.toiimg.com/thumb/msid-110356258,width-1280,height-720,resizemode-4/110356258.jpg" />
                    </td>
                    <td>
                      <p>Samsung</p>
                    </td>
                    <td>
                      <p>760</p>
                    </td>
                    <td>
                      <p>38990</p>
                    </td>
                    <td>
                      <div className="actions-bttns">
                        <Link href="https://www.amazon.in/Samsung-Inverter-Convertible-Anti-bacterial-AR12CY5ZAGD/dp/B0BSGSCNV9/ref=sr_1_9?crid=24O5MBDXDYFA4&dib=eyJ2IjoiMSJ9.DbEqI-AQuCkRIxEy8LIWy4gaYGx_8ppzMvtfawXlWmdL2lJCYh1gTrbqVlLJYkhn8zwHDk0jzhOEOPavo_hNH5bnhkpgU9t2F24a6FNKpO6JDxpZcXHHrxYXlz4r-ljGFbBFUVWR9A_2PkdUFyUgrdx7lcM2UH5Pm1gTirubfQmUa0JNu1-aRH2lT0Hdkc6aSeWvF01qMYUlwkoAyCRH1uOzgk-oh7Nh1yPNPN5-5R0.UTqpID8eFnYBPLCgLeY1nVLy5pbJlcSN0TdPeFWVwSI&dib_tag=se&keywords=air+conditioner&qid=1710930918&refinements=p_n_feature_five_browse-bin%3A28237214031%2Cp_n_feature_thirteen_browse-bin%3A2753048031%2Cp_72%3A1318476031%2Cp_n_feature_eleven_browse-bin%3A2753097031&rnid=2753095031&s=kitchen&sprefix=air+conditioner%2Caps%2C273&sr=1-9">
                          <span>
                            <i className="fe fe-link"></i>
                          </span>
                        </Link>
                      </div>
                    </td>
                    <td className="action-td">
                      <div className="actions-bttns">
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#view-mddl">
                          {" "}
                          <i className="fe fe-eye"></i>
                        </span>
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#edit-mddl"
                        >
                          {" "}
                          <i className="fe fe-edit"></i>
                        </span>
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#delete-mddl"
                        >
                          {" "}
                          <i className="fe fe-trash"></i>
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">02</td>
                    <td>
                      <img className="catalogueImg" src="https://static.toiimg.com/thumb/msid-110356258,width-1280,height-720,resizemode-4/110356258.jpg" />
                    </td>
                    <td>
                      <p>Blue star</p>
                    </td>
                    <td>
                      <p>3375</p>
                    </td>
                    <td>
                      <p>36,990</p>
                    </td>
                    <td>
                      <div className="actions-bttns">
                        <Link href="https://www.amazon.in/Samsung-Inverter-Convertible-Anti-bacterial-AR12CY5ZAGD/dp/B0BSGSCNV9/ref=sr_1_9?crid=24O5MBDXDYFA4&dib=eyJ2IjoiMSJ9.DbEqI-AQuCkRIxEy8LIWy4gaYGx_8ppzMvtfawXlWmdL2lJCYh1gTrbqVlLJYkhn8zwHDk0jzhOEOPavo_hNH5bnhkpgU9t2F24a6FNKpO6JDxpZcXHHrxYXlz4r-ljGFbBFUVWR9A_2PkdUFyUgrdx7lcM2UH5Pm1gTirubfQmUa0JNu1-aRH2lT0Hdkc6aSeWvF01qMYUlwkoAyCRH1uOzgk-oh7Nh1yPNPN5-5R0.UTqpID8eFnYBPLCgLeY1nVLy5pbJlcSN0TdPeFWVwSI&dib_tag=se&keywords=air+conditioner&qid=1710930918&refinements=p_n_feature_five_browse-bin%3A28237214031%2Cp_n_feature_thirteen_browse-bin%3A2753048031%2Cp_72%3A1318476031%2Cp_n_feature_eleven_browse-bin%3A2753097031&rnid=2753095031&s=kitchen&sprefix=air+conditioner%2Caps%2C273&sr=1-9">
                          <span>
                            <i className="fe fe-link"></i>
                          </span>
                        </Link>
                      </div>
                    </td>
                    <td className="action-td">
                      <div className="actions-bttns">
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#view-mddl">
                          {" "}
                          <i className="fe fe-eye"></i>
                        </span>
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#edit-mddl"
                        >
                          {" "}
                          <i className="fe fe-edit"></i>
                        </span>
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#delete-mddl"
                        >
                          {" "}
                          <i className="fe fe-trash"></i>
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">01</td>
                    <td>
                      <img className="catalogueImg" src="https://static.toiimg.com/thumb/msid-110356258,width-1280,height-720,resizemode-4/110356258.jpg" />
                    </td>
                    <td>
                      <p>Samsung</p>
                    </td>
                    <td>
                      <p>760</p>
                    </td>
                    <td>
                      <p>38990</p>
                    </td>
                    <td>
                      <div className="actions-bttns">
                        <Link href="https://www.amazon.in/Samsung-Inverter-Convertible-Anti-bacterial-AR12CY5ZAGD/dp/B0BSGSCNV9/ref=sr_1_9?crid=24O5MBDXDYFA4&dib=eyJ2IjoiMSJ9.DbEqI-AQuCkRIxEy8LIWy4gaYGx_8ppzMvtfawXlWmdL2lJCYh1gTrbqVlLJYkhn8zwHDk0jzhOEOPavo_hNH5bnhkpgU9t2F24a6FNKpO6JDxpZcXHHrxYXlz4r-ljGFbBFUVWR9A_2PkdUFyUgrdx7lcM2UH5Pm1gTirubfQmUa0JNu1-aRH2lT0Hdkc6aSeWvF01qMYUlwkoAyCRH1uOzgk-oh7Nh1yPNPN5-5R0.UTqpID8eFnYBPLCgLeY1nVLy5pbJlcSN0TdPeFWVwSI&dib_tag=se&keywords=air+conditioner&qid=1710930918&refinements=p_n_feature_five_browse-bin%3A28237214031%2Cp_n_feature_thirteen_browse-bin%3A2753048031%2Cp_72%3A1318476031%2Cp_n_feature_eleven_browse-bin%3A2753097031&rnid=2753095031&s=kitchen&sprefix=air+conditioner%2Caps%2C273&sr=1-9">
                          <span>
                            <i className="fe fe-link"></i>
                          </span>
                        </Link>
                      </div>
                    </td>
                    <td className="action-td">
                      <div className="actions-bttns">
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#view-mddl">
                          {" "}
                          <i className="fe fe-eye"></i>
                        </span>
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#edit-mddl"
                        >
                          {" "}
                          <i className="fe fe-edit"></i>
                        </span>
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#delete-mddl"
                        >
                          {" "}
                          <i className="fe fe-trash"></i>
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pagination-div">
              <nav aria-label="...">
                <ul class="pagination">
                  <li class="page-item disabled">
                    <span class="page-link">Previous</span>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item active">
                    <span class="page-link">
                      2<span class="sr-only">(current)</span>
                    </span>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
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
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Delete Product
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
                  Are you sure want to delete this Product?
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
                data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Add- Modal --> */}
      <div
        class="modal fade"
        id="add-csv-mddl"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Add Catalogue
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="add-mdl">
                <div className="mb-3">
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Air Conditioners</option>
                    <option value="1">Lights</option>
                    <option value="2">Fans</option>
                  </select>
                </div>
                <Uploader action="//jsonplaceholder.typicode.com/posts/" draggable>
                  <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span>Click or Drag files to this area to upload</span>
                  </div>
                </Uploader>

              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
                Add
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

      {/* <!--view- Modal --> */}
      <div
        class="modal fade"
        id="view-mddl"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                View Product
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="view-mdl only-view">
                <div className="catalogueImgWrap mb-3">
                  <img src="https://static.toiimg.com/thumb/msid-110356258,width-1280,height-720,resizemode-4/110356258.jpg" className="CatalogueProductImg" />
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="d-flex align-items-end mb-3 gap-2">
                      <div className="form-group flex-grow-1">
                        <label className="mb-3">Product link</label>
                        <input
                          className="form-control"
                          value="https://www.amazon.in/Samsung-Inverter-Convertible-Anti-bacterial-AR12CY5ZAGD/dp/B0BSGSCNV9/ref=sr_1_9?crid=24O5MBDXDYFA4&dib=eyJ2IjoiMSJ9.DbEqI-AQuCkRIxEy8LIWy4gaYGx_8ppzMvtfawXlWmdL2lJCYh1gTrbqVlLJYkhn8zwHDk0jzhOEOPavo_hNH5bnhkpgU9t2F24a6FNKpO6JDxpZcXHHrxYXlz4r-ljGFbBFUVWR9A_2PkdUFyUgrdx7lcM2UH5Pm1gTirubfQmUa0JNu1-aRH2lT0Hdkc6aSeWvF01qMYUlwkoAyCRH1uOzgk-oh7Nh1yPNPN5-5R0.UTqpID8eFnYBPLCgLeY1nVLy5pbJlcSN0TdPeFWVwSI&dib_tag=se&keywords=air+conditioner&qid=1710930918&refinements=p_n_feature_five_browse-bin%3A28237214031%2Cp_n_feature_thirteen_browse-bin%3A2753048031%2Cp_72%3A1318476031%2Cp_n_feature_eleven_browse-bin%3A2753097031&rnid=2753095031&s=kitchen&sprefix=air+conditioner%2Caps%2C273&sr=1-9"
                        />
                      </div>
                      <button className="copyBtn"><i className="fe fe-copy"></i></button>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Brand</label>
                      <input
                        className="form-control"
                        value="Blue star" readonly
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Iseer</label>
                      <input
                        className="form-control"
                        value="5.15" readonly
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">CFM</label>
                      <input
                        className="form-control"
                        value="0" readonly
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">AEC (kwh)</label>
                      <input
                        className="form-control"
                        value="481.43" readonly
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Power consumption per hour</label>
                      <input
                        className="form-control"
                        value="760" readonly
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Price</label>
                      <input
                        className="form-control"
                        value="38990" readonly
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Customer rating</label>
                      <input
                        className="form-control"
                        value="4.1" readonly
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Noise level rating</label>
                      <input
                        className="form-control"
                        value="" readonly
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Energy efficiency rating</label>
                      <input
                        className="form-control"
                        value="" readonly
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Noise</label>
                      <input
                        className="form-control"
                        value="42 db" readonly
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Calculation - watts per hour</label>
                      <input
                        className="form-control"
                        value="300.9" readonly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-target="#edit-mddl" data-bs-dismiss="modal" data-bs-toggle="modal">
                Edit
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

      {/* <!--Edit Modal --> */}
      <div
        class="modal fade"
        id="edit-mddl"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Edit Product
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="view-mdl only-view">
                <div className="catalogueImgWrap mb-3">
                  <img src="https://static.toiimg.com/thumb/msid-110356258,width-1280,height-720,resizemode-4/110356258.jpg" className="CatalogueProductImg" />
                  <div className="customUploaderWrap">
                    <label htmlFor="uploadInput">
                      <i className="fe fe-upload"></i>
                      <input type="file" id="uploadInput" />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="d-flex align-items-end mb-3 gap-2">
                      <div className="form-group flex-grow-1">
                        <label className="mb-3">Product link</label>
                        <input
                          className="form-control"
                          value="https://www.amazon.in/Samsung-Inverter-Convertible-Anti-bacterial-AR12CY5ZAGD/dp/B0BSGSCNV9/ref=sr_1_9?crid=24O5MBDXDYFA4&dib=eyJ2IjoiMSJ9.DbEqI-AQuCkRIxEy8LIWy4gaYGx_8ppzMvtfawXlWmdL2lJCYh1gTrbqVlLJYkhn8zwHDk0jzhOEOPavo_hNH5bnhkpgU9t2F24a6FNKpO6JDxpZcXHHrxYXlz4r-ljGFbBFUVWR9A_2PkdUFyUgrdx7lcM2UH5Pm1gTirubfQmUa0JNu1-aRH2lT0Hdkc6aSeWvF01qMYUlwkoAyCRH1uOzgk-oh7Nh1yPNPN5-5R0.UTqpID8eFnYBPLCgLeY1nVLy5pbJlcSN0TdPeFWVwSI&dib_tag=se&keywords=air+conditioner&qid=1710930918&refinements=p_n_feature_five_browse-bin%3A28237214031%2Cp_n_feature_thirteen_browse-bin%3A2753048031%2Cp_72%3A1318476031%2Cp_n_feature_eleven_browse-bin%3A2753097031&rnid=2753095031&s=kitchen&sprefix=air+conditioner%2Caps%2C273&sr=1-9"
                        />
                      </div>
                      <button className="copyBtn"><i className="fe fe-copy"></i></button>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Brand</label>
                      <input
                        className="form-control"
                        value="Blue star"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Iseer</label>
                      <input
                        className="form-control"
                        value="5.15"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">CFM</label>
                      <input
                        className="form-control"
                        value="0"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">AEC (kwh)</label>
                      <input
                        className="form-control"
                        value="481.43"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Power consumption per hour</label>
                      <input
                        className="form-control"
                        value="760"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Price</label>
                      <input
                        className="form-control"
                        value="38990"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Customer rating</label>
                      <input
                        className="form-control"
                        value="4.1"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Noise level rating</label>
                      <input
                        className="form-control"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Energy efficiency rating</label>
                      <input
                        className="form-control"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Noise</label>
                      <input
                        className="form-control"
                        value="42 db"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3">
                      <label className="mb-3">Calculation - watts per hour</label>
                      <input
                        className="form-control"
                        value="300.9"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
                Update
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
  );
};

export default ElectricityCatalogue;
