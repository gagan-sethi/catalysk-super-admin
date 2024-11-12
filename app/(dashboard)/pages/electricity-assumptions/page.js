"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
// import node module libraries
import { Col, Row, Container, Button } from "react-bootstrap";
import { Uploader } from "rsuite";

// import widget as custom components
import { PageHeading } from "widgets";
import { handleApi, hello } from "utils/apis/handleApi.js";
import { Form } from "react-bootstrap";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Pagination from "components/pagination/Pagination.js";
import TubeLight from "components/electricitycatalog/viewelectricity/TubeLight";
import Fan from "components/electricitycatalog/viewelectricity/Fan";
import AirCondition from "components/electricitycatalog/viewelectricity/AirCondition";
import Bulb from "components/electricitycatalog/viewelectricity/Bulb";
import TubeLightEdit from "components/electricitycatalog/editelectricity/TubeLightEdit";
import AirConditionEdit from "components/electricitycatalog/editelectricity/AirCondition";
import BulbEdit from "components/electricitycatalog/editelectricity/BulbEdit";
import FanEdit from "components/electricitycatalog/editelectricity/FanEdit";

const ElectricityAssumptions = () => {
  const [excelModal, setExcelModal] = useState(false);
  const [excelFile, setExcelFile] = useState(null);
  const [zipFile, setZipFile] = useState(null);
  const [file, setFile] = useState(null);
  const [electricItem, setElectricItem] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [viewElectricProduct, setViewElectricProduct] = useState({});
  const [pageRender, setPageRender] = useState(1);
  const router = useRouter();
  const modalRef = useRef();
  const modalDeleteRef = useRef();
  // data
  //  const { page } = router.query;
  const [firstRender, setFirstRender] = useState(0);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(router?.query?.search || "");
  const [userId, setUserid] = useState("");
  const [electricProductType, setElectricProductType] = useState(
    router?.query?.type || "tubelight"
  );
  //pagination
  const [pageSize, setPageSize] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  // const [currentPage, setCurrentPage] = useState(+router?.query?.page || 1);
  const [currentPage, setCurrentPage] = useState(+router?.query?.page || 1);
  const [offsetentry, setoffsetentry] = useState(0);
  const [entry, setentry] = useState(0);
  // const [loading, setLoading] = useState(true);

  const handleSampleDownload = (fileName) => {
    if (fileName == "airCondition") {
      // Excel file download
      const excelLink = document.createElement("a");
      excelLink.href = "/sample-files/air_condition.xlsx";
      excelLink.download = "air_condition.xlsx";
      document.body.appendChild(excelLink);
      excelLink.click();
      document.body.removeChild(excelLink);
    } else if (fileName == "bulb") {
      // Excel file download
      const excelLink = document.createElement("a");
      excelLink.href = "/sample-files/bulb.xlsx";
      excelLink.download = "bulb.xlsx";
      document.body.appendChild(excelLink);
      excelLink.click();
      document.body.removeChild(excelLink);
    } else if (fileName == "fan") {
      // Excel file download
      const excelLink = document.createElement("a");
      excelLink.href = "/sample-files/fan.xlsx";
      excelLink.download = "fan.xlsx";
      document.body.appendChild(excelLink);
      excelLink.click();
      document.body.removeChild(excelLink);
    } else if (fileName == "tubeLight") {
      // Excel file download
      const excelLink = document.createElement("a");
      excelLink.href = "/sample-files/tube_light.xlsx";
      excelLink.download = "tube_light.xlsx";
      document.body.appendChild(excelLink);
      excelLink.click();
      document.body.removeChild(excelLink);
    }
  };

  console.log("Button clicked!", search);
  // if (file) {
  //   uploadFile(file);
  // } else {
  //   console.error("No file selected");
  // }

  // console.log("hello",handleApi())
  async function handleUploadexcel() {
    if (!excelFile) return toast.error("select excel file");
    if (!electricItem) return toast.error("select electric item required");
    console.log("excelFile", excelFile);
    const formData = new FormData();

    // formData.append("media", excelFile.blobFile);
    formData.append("media", fileList[0].blobFile);

    const response = await handleApi(
      electricItem == "ac"
        ? "catalogue/bulkUploadAcProduct"
        : electricItem == "bulb"
        ? "catalogue/bulkUploadBulbProduct"
        : electricItem == "fan"
        ? "catalogue/bulkUploadFanProduct"
        : electricItem == "tubeLight"
        ? "catalogue/bulkUploadTubelightProduct"
        : "",
      "post",
      formData,
      {},
      true,
      true,
      router
    );

    if (response?.code == "200") {
      toast.success("Uploaded Successfully");
      console.log("upload success");
      setExcelFile(null);
      setFileList([]);
      setElectricItem("");
      const modalElement = modalRef.current;
      console.log("modalElement", modalElement);
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      console.log("modalInstance", modalInstance);
      if (modalInstance) {
        modalInstance.hide();
      }

      getElectricProduct();
    }
    setButtonLoader(false);
  }

  const handleFileChange = (files) => {
    if (files.length > 0) {
      setFileList([files[files.length - 1]]); // Always take the last selected file
    } else {
      setFileList([]);
    }
    if (files.length > 0) {
      // Convert Blob to File if necessary
      const file = files[0]; // If the `files` array contains Blob objects
      console.log(file);
      // Optionally, you can create a new File instance if you need to set metadata
      // const file = new File([blob], 'filename.ext', { type: 'application/octet-stream' });
      setExcelFile(file);
    } else {
      setExcelFile(null);
    }
  };

  const handleDeleteProduct = async () => {
    const response = await handleApi(
      `catalogue/deleteProduct/${userId}`,
      "delete",
      {},
      {},
      true,
      false,
      router
    );

    if (response?.code == 200) {
      toast.success(response?.message);
      const modalElement = modalDeleteRef?.current;
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide();
      }
      getElectricProduct();
    }
  };

  async function getElectricProduct() {
    console.log("hii run devv ");
    // setLoading(true);
    const offset = (currentPage - 1) * pageSize;
    const limit = pageSize;
    setoffsetentry(offset);
    console.log("getsProduct");
    const params = {
      offset,
      limit,
      type: electricProductType,
      search: search || "",
    };

    try {
      const response = await handleApi(
        "catalogue/getProducts",
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

        router.push(
          `/pages/electricity-catalogue?page=${currentPage}&search=${search}&type=${electricProductType}`
        );
      }
  
    } catch (error) {

    }
  }

  // Fetch data when currentPage changes
  useEffect(() => {
    getElectricProduct();
  }, [currentPage, pageSize, electricProductType, pageRender]);


  useEffect(() => {
    if (firstRender > 0) {
      console.log("search", search);

      const timeout = setTimeout(() => {
        const currentPage = Number(router?.query?.page) || 1;
        if (currentPage === 1) {
          getElectricProduct();
        }
        setCurrentPage(1); // Update current page to 1
      }, 1000);

      // Cleanup function to clear the timeout if the component unmounts or before running a new effect
      return () => clearTimeout(timeout);
    }
  }, [search]); // Dependency array with `search`

  useEffect(() => {
    setFirstRender(1);
  }, []);

  // useEffect(() => {
  //   if (router?.query?.page && currentPage == 1) {

  //     setCurrentPage(+router?.query?.page);
  //     if (router?.query?.search) {
  //       setSearch(router?.query?.search);
  //     }
  //   }
  // }, [router?.query?.page]);

  console.log(excelFile);
  console.log("fileList", fileList);
  useEffect(() => {
    // if (typeof window !== 'undefined') {
    //   require('bootstrap/dist/js/bootstrap.bundle.min.js');
    // }
  }, []);

  return (
    <Container fluid className="p-6">
      <div className="d-flex justify-content-between align-items-center">
        {/* Page Heading */}
        <PageHeading heading=" Electricity Catalogue" />
        <div className="d-flex gap-2 align-items-center">
          {/* <select class="form-select" aria-label="Default select example">
            <option selected>Air Conditioners</option>
            <option value="1">Lights</option>
            <option value="2">Fans</option>

          </select> */}

          <div className="search-bar">
            {/* Search Form */}
            <Form
              style={{ width: "15rem" }}
              className="d-flex align-items-center width-100 ms-2"
            >
              <Form.Control
                type="search"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form>
          </div>
          <select
            class="form-select"
            aria-label="Default select example"
            value={electricProductType}
            onChange={(e) => {
              console.log(e.target.value);
              setElectricProductType(e.target.value);
            }}
          >
            {/* <option value="" selected>
              Select Type Of Eletric Item
            </option> */}
            <option value="bulb">Bulb</option>
            <option value="tubelight">Tube Light</option>
            <option value="fan">Fans</option>
            <option value="ac">Air Conditioners</option>
          </select>
          <button
            type="button"
            class="btn btn-primary text-nowrap"
            data-bs-toggle="modal"
            data-bs-target="#add-csv-mddl"
          >
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
                  {/* 
                "_id": "66dad0743aa6a12b879cd6d8",
            "type": "tubelight",
            "product_images": [
                "https://m.media-amazon.com/images/I/21pvJx6hesL._SY445_SX342_QL70_FMwebp_.jpg",
                "https://m.media-amazon.com/images/I/41+kekEyCQL._SX679_.jpg"
            ],
            "brand": "Wipro",
            "price": 175,
            "product_link": "https://www.amazon.in/wipro-Garnet-Tubelight-White-D532065/dp/B08CG67HZV/ref=sr_1_4?crid=3OVX6KL656T96&dib=eyJ2IjoiMSJ9.-OOkuO9g5VFxqTzb6M_FJ0Q5KaqLDQXICs8t2-4CqD3KKTzAq5lknioR_3Qo_m4wpRXtEZjwUCJ6d8sX65MQQmmMpwAqfnVyVXGsvC4RjROykAaKJyiMtmqTz3j_JxrwVkEmhA8Sjaa-R05TJsGi62MOVLfSeFf13lNq2Fyw9Pmkd6YWax8jycn0g5_p9XdRIG6ZcArh1HTQEkzVlawpCC9-vBrQjW6AS1IEGvbnWnNmx51_vramwIr_TPBYGIjHS-IPPgI_FW05Sv33j1Qa70NgUklDuA38FU06oFBrYrM.RWLkNUh15xX8dSXOSN8NygwjoPZpSmoGh4WEbfjR3sY&dib_tag=se&keywords=tubelights&qid=1725529977&s=kitchen&sprefix=tubelight%2Ckitchen%2C243&sr=1-4&th=1",
            "watt_per_hour": 20,
            "customer_rating": 4.1, */}
                  {data.length > 0
                    ? data.map((ele, index) => (
                        <>
                          <tr>
                            <td scope="row">
                              {(currentPage - 1) * pageSize + index + 1}
                            </td>
                            <td>
                              <img
                                className="catalogueImg"
                                src={ele?.product_images[0]}
                                // src="https://static.toiimg.com/thumb/msid-110356258,width-1280,height-720,resizemode-4/110356258.jpg"
                              />
                            </td>
                            <td>
                              <p>{ele?.brand || ""}</p>
                            </td>
                            <td>
                              <p>{ele?.watt_per_hour || ""}</p>
                            </td>
                            <td>
                              <p>{ele?.price || ""}</p>
                            </td>
                            <td>
                              <div className="actions-bttns">
                                {!Array.isArray(ele?.product_link) ? (
                                  <Link href={ele?.product_link ?? "#"}>
                                    <span>
                                      <i className="fe fe-link"></i>
                                    </span>
                                  </Link>
                                ) : (
                                  ele?.product_link.map((ele) => (
                                    <>
                                      <Link href={ele ?? "#"}>
                                        <span>
                                          <i className="fe fe-link"></i>
                                        </span>
                                      </Link>
                                    </>
                                  ))
                                )}
                              </div>
                            </td>
                            <td className="action-td">
                              <div className="actions-bttns">
                                <span
                                  data-bs-toggle="modal"
                                  data-bs-target="#view-mddl"
                                  onClick={() => setViewElectricProduct(ele)}
                                >
                                  {" "}
                                  <i className="fe fe-eye"></i>
                                </span>
                                <span
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-mddl"
                                  onClick={() => setViewElectricProduct(ele)}
                                >
                                  {" "}
                                  <i className="fe fe-edit"></i>
                                </span>
                                <span
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-mddl"
                                  onClick={() => setUserid(ele?._id)}
                                >
                                  {" "}
                                  <i className="fe fe-trash"></i>
                                </span>
                              </div>
                            </td>
                          </tr>
                        </>
                      ))
                    :  (
              <div
                style={{ minHeight: "31rem" }}
                className="w-100 h-100 d-flex justify-content-center align-items-center opacity-50 "
              >
                <h4>No Data Available</h4>
              </div>
            )}
                  {/* <tr>
                    <td scope="row">02</td>
                    <td>
                      <img
                        className="catalogueImg"
                        src="https://static.toiimg.com/thumb/msid-110356258,width-1280,height-720,resizemode-4/110356258.jpg"
                      />
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
                          data-bs-target="#view-mddl"
                        >
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
                      <img
                        className="catalogueImg"
                        src="https://static.toiimg.com/thumb/msid-110356258,width-1280,height-720,resizemode-4/110356258.jpg"
                      />
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
                          data-bs-target="#view-mddl"
                        >
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
                  </tr> */}
                </tbody>
              </table>
            </div>
            {/* <div className="pagination-div">
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
            </div> */}
            {/* Pagination */}
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

      {/* modals */}
      {/* <!--delete- Modal --> */}

      <div
        class="modal fade"
        id="delete-mddl"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref={modalDeleteRef}
      >
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
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleDeleteProduct}
              >
                Delete
              </button>
              <button
                type="button"
                class="btn btn-outline-white"
                data-bs-dismiss="modal"
                onClick={() => {
                  setExcelFile(null);
                  setElectricItem("");
                }}
              >
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
        ref={modalRef}
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
                <div className="mb-3 d-flex gap-3">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    value={electricItem}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setElectricItem(e.target.value);
                    }}
                  >
                    <option value="" selected>
                      Select Type Of Eletric Item
                    </option>
                    <option value="ac">Air Conditioners</option>
                    <option value="bulb">Bulb</option>
                    <option value="tubeLight">Tube Light</option>
                    <option value="fan">Fans</option>
                  </select>
                  <div class="dropdown">
                    <button
                      class="btn btn-primary dropdown-toggle sampleDownloadBtn"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Download Sample
                    </button>
                    <ul class="dropdown-menu">
                      <li onClick={() => handleSampleDownload("airCondition")}>
                        <a class="dropdown-item">Air Conditions</a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          onClick={() => handleSampleDownload("tubeLight")}
                        >
                          Tube Lights
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          onClick={() => handleSampleDownload("fan")}
                        >
                          Fans
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          onClick={() => handleSampleDownload("bulb")}
                        >
                          Bulb
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <Uploader
                  // autoUpload={false}
                  multiple={false} // Disallow multiple file uploads
                  fileListVisible={false}
                  draggable
                  onChange={handleFileChange}
                  fileList={fileList} // Bind the state to the Uploader
                >
                  <div
                    style={{
                      height: 200,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span>Click or Drag files to this area to upload</span>
                  </div>
                </Uploader>
                {/* Custom rendering of the selected file name */}
                {/* {excelFile && (
                  <div style={{ marginTop: 10 }}>
                    <strong>Selected File:</strong> {excelFile?.name}
                  </div>
                 )}  */}
                {fileList.length > 0 && (
                  <div style={{ marginTop: 10 }}>
                    <strong>Selected File:</strong> {fileList[0].name}
                  </div>
                )}
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                  handleUploadexcel();
                }}
              >
                Add
              </button>
              <button
                type="button"
                class="btn btn-outline-white"
                onClick={() => {
                  setFileList([]);
                }}
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!--view- Modal --> */}
      {electricProductType == "tubelight" ? (
        <TubeLight
          id="view-mddl"
          viewElectricProduct={viewElectricProduct}
          setViewElectricProduct={setViewElectricProduct}
        />
      ) : electricProductType == "ac" ? (
        <AirCondition
          id="view-mddl"
          viewElectricProduct={viewElectricProduct}
          setViewElectricProduct={setViewElectricProduct}
        />
      ) : electricProductType == "fan" ? (
        <Fan
          id="view-mddl"
          viewElectricProduct={viewElectricProduct}
          setViewElectricProduct={setViewElectricProduct}
        />
      ) : electricProductType == "bulb" ? (
        <Bulb
          id="view-mddl"
          viewElectricProduct={viewElectricProduct}
          setViewElectricProduct={setViewElectricProduct}
        />
      ) : (
        ""
      )}

      {/* <TubeLightEdit id="edit-mddl"  /> */}
      {/* <!--Edit- Modal --> */}
      {electricProductType == "tubelight" ? (
        <TubeLightEdit
          id="edit-mddl"
          viewElectricProduct={viewElectricProduct}
          pageRender={pageRender}
          setPageRender={setPageRender}
          setViewElectricProduct={setViewElectricProduct}
        />
      ) : electricProductType == "ac" ? (
        <AirConditionEdit
          id="edit-mddl"
          viewElectricProduct={viewElectricProduct}
          pageRender={pageRender}
          setPageRender={setPageRender}
          setViewElectricProduct={setViewElectricProduct}
        />
      ) : electricProductType == "fan" ? (
        <FanEdit
          id="edit-mddl"
          viewElectricProduct={viewElectricProduct}
          pageRender={pageRender}
          setPageRender={setPageRender}
          setViewElectricProduct={setViewElectricProduct}
        />
      ) : electricProductType == "bulb" ? (
        <BulbEdit
          id="edit-mddl"
          viewElectricProduct={viewElectricProduct}
          pageRender={pageRender}
          setPageRender={setPageRender}
          setViewElectricProduct={setViewElectricProduct}
        />
      ) : (
        ""
      )}
    </Container>
  );
};

export default ElectricityAssumptions;
