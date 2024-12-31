"use client";
// import node module libraries
import { Container, Form, Image } from "react-bootstrap";
// import widget as custom components
import { PageHeading } from "widgets";
import React, { useState, useEffect } from "react";


const UsersConsumptions = () => {
  // hide show filters

  const [isVisible, setIsVisible] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedItem, setselectedItem] = useState([]);
  /// Pagination
  const [pageSize] = useState(10);
  const [totalItems, setTotalItems] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const [offsetentry, setoffsetentry] = useState(0);
  const [entry, setentry] = useState(0);
  const [search, setSearch] = useState("");
  const showFilters = () => {
    setIsVisible(!isVisible);
  };

  const [token, setToken] = useState("");

  useEffect(() => {
    // Only runs on the client-side
    const tokenFromLocalStorage = localStorage.getItem("token");
    setToken(tokenFromLocalStorage || "");
  }, []);

  useEffect(() => {
    getdoc();
  }, [currentPage, search, token]);
  //  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : '';

  

  const nextPage = () => {
    const totalPages = Math.ceil(totalItems / pageSize);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const totalPages = Math.ceil(totalItems / pageSize);
  console.log("totalPages", totalPages, totalItems, pageSize);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const [value, setvalue] = useState("");

  async function handleInputChangenew(e) {
    console.log(new Date(e.target.value).toISOString());
    const dateadded = new Date(e.target.value).toISOString();
    setCurrentPage(1);
    const offset = (currentPage - 1) * pageSize;
    const limit = pageSize;
    setoffsetentry(offset);

    console.log(value);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/users?limit=${limit}&offset=${offset}&date=${dateadded}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      setUsers(data.data);
      setTotalItems(data?.count);
      setentry(data?.data?.length + offset);
    }
  }

  const [id, setId] = useState("");


  async function onChangeselecttype(e) {
    i;
    setCurrentPage(1);
    const offset = (currentPage - 1) * pageSize;
    const limit = pageSize;
    setoffsetentry(offset);

    console.log(value);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/userConsumptions?limit=${limit}&offset=${offset}&user_type=${e.target.value}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      setUsers(data.data);
      setTotalItems(data?.count);
      setentry(data?.data?.length + offset);
    }
  }

  async function onChangeselect(e) {
    setCurrentPage(1);
    const offset = (currentPage - 1) * pageSize;
    const limit = pageSize;
    setoffsetentry(offset);

    console.log(value);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/userConsumptions?limit=${limit}&offset=${offset}&status=${e.target.value}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      setUsers(data.data);
      setTotalItems(data?.count);
      setentry(data?.data?.length + offset);
    }
  }

 
  async function getdoc() {
    console.log("Search : " + search);
    if (search) {
      setCurrentPage(1);
      const offset = (currentPage - 1) * pageSize;
      const limit = pageSize;
      setoffsetentry(offset);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/userConsumptions?limit=${limit}&offset=${offset}&search=${search}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        setUsers(data.data);
        setTotalItems(data?.count);
        setentry(data?.data?.length + offset);
      }
    } else {
      const offset = (currentPage - 1) * pageSize;
      const limit = pageSize;
      setoffsetentry(offset);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/userConsumptions?limit=${limit}&offset=${offset}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      console.log(data.data);
      if (res.ok) {
        setUsers(data.data);
        setTotalItems(data?.count);
        setentry(data?.data?.length + offset);
      }
    }
  }

  return (
    <>
      <Container fluid className="p-6">
        {/* Page Heading */}
        <PageHeading heading="Users Consumption" />

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

                    {/* <Link className="btn btn-primary" href="/pages/add-user">                        
                        Add New User
                      </Link>  */}

                    <div className="btn btn-outline-white bulk-action-btn">
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
                            data-bs-target="#blockall-mddl"
                          >
                            Block
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteall-mddl"
                          >
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
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
                        onChange={onChangeselect}
                      >
                        <option disabled selected>
                          Status
                        </option>
                        <option value="active">Active</option>
                        <option value="block">Blocked</option>
                      </select>
                    </div>

                    <div class="stts-flter">
                      <select
                        className="form-control form-select"
                        onChange={onChangeselecttype}
                      >
                        <option disabled selected>
                          Type
                        </option>
                        <option value="individual">Individual</option>
                        <option value="corporate">Corporate</option>
                      </select>
                    </div>

                    <div class="stts-flter">
                      <input
                        className="form-control"
                        type="date"
                        name="start_time"
                        onChange={(e) => handleInputChangenew(e)}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="table-div">
                <div className="table-responsive ">
                <table className="table table-striped ">
      <thead>
        <tr>
          <th scope="col" rowSpan="2">Sr. No.</th>
          <th scope="col" rowSpan="2">User ID</th>
          <th scope="col" colSpan="3">Power</th>
          <th scope="col" colSpan="3">Water</th>
          <th scope="col" colSpan="3">Emissions</th>
        </tr>
        <tr>
          {/* Subheaders for Power */}
          <th scope="col">Total Consumption</th>
          <th scope="col">Total Waste</th>
          <th scope="col">Total Savings</th>
          {/* Subheaders for Water */}
          <th scope="col">Total Consumption</th>
          <th scope="col">Total Waste</th>
          <th scope="col">Total Savings</th>
          {/* Subheaders for Emissions */}
          <th scope="col">Total Consumption</th>
          <th scope="col">Total Waste</th>
          <th scope="col">Total Savings</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((tdata, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{tdata?.user_info?.user_id}</td>
            {/* Power Data */}
            <td>{tdata?.electricity_reports?.total_consumption}</td>
            <td>{tdata?.electricity_reports?.total_waste}</td>
            <td>{tdata?.electricity_reports?.total_saved}</td>
            {/* Water Data */}
            <td>{tdata?.water_reports?.total_consumption}</td>
            <td>{tdata?.water_reports?.total_waste}</td>
            <td>{tdata?.water_reports?.total_saved}</td>
            {/* Emissions Data */}
            <td>{tdata?.commute_reports?.total_consumption}</td>
            <td>{tdata?.commute_reports?.total_waste}</td>
            <td>{tdata?.commute_reports?.total_saved}</td>
          </tr>
        ))}
      </tbody>
    </table>
                </div>
                <div className="pagination-div">
                  <nav aria-label="...">
                    <ul class="pagination">
                      <li class="page-item disabled">
                        <span>
                          <a
                            class="page-link"
                            onClick={prevPage}
                            disabled={currentPage === 1}
                          >
                            Previous
                          </a>
                        </span>
                      </li>
                      {pageNumbers.map((pageNumber) => {
                        let pagetominus = 2;
                        let pagetoplus = 2;

                        if (currentPage == 1) {
                          pagetominus = 1;
                          pagetoplus = 4;
                        } else if (currentPage == 2) {
                          pagetominus = 2;
                          pagetoplus = 3;
                        } else if (currentPage == 3) {
                          pagetominus = 3;
                          pagetoplus = 2;
                        } else if (currentPage + 1 == totalPages) {
                          pagetominus = 3;
                          pagetoplus = 2;
                        } else if (currentPage == totalPages) {
                          pagetominus = 4;
                          pagetoplus = 2;
                        }

                        const minPage = Math.max(1, currentPage - pagetominus);
                        const maxPage = Math.min(
                          totalPages,
                          currentPage + pagetoplus
                        );

                        //console.log("minPage", minPage);
                        //console.log("maxPage", maxPage);

                        if (pageNumber >= minPage && pageNumber <= maxPage) {
                          return (
                            <li
                              key={pageNumber}
                              className={`page-item ${
                                currentPage === pageNumber ? "active" : ""
                              }`}
                            >
                              <button
                                className={`page-link ${
                                  currentPage === pageNumber
                                    ? "bg-dark text-white border-dark"
                                    : "text-dark"
                                }`}
                                onClick={() => setCurrentPage(pageNumber)}
                              >
                                <b>{pageNumber}</b>
                              </button>
                            </li>
                          );
                        }
                        return null;
                      })}

                      <li class="page-item">
                        <a class="page-link" onClick={nextPage}>
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* modals */}

        {/* <!-- Modal --> */}

      

       

       
      </Container>
    </>
  );
};

export default UsersConsumptions;
