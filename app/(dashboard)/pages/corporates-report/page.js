"use client";
// import node module libraries
import { Container, Form, Image, Dropdown } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

import React, { useState, useEffect } from "react";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import moment from "moment";

// import sub components
import {
    Notifications,
    DeleteAccount,
    GeneralSetting,
    EmailSetting,
    Preferences,
} from "sub-components";
import Head from "next/head";
import Link from "next/link";

const CorporatesReport = () => {
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



    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const toggle1 = () => setDropdownOpen((prevState) => !prevState);

    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const toggle2 = () => setDropdownOpen((prevState) => !prevState);


    return (
        <>
            <Container fluid className="p-6">
                {/* Page Heading */}
                {/* <PageHeading heading="Users List" /> */}
                <div className="d-flex justify-content-between align-items-start me-2">
                    <PageHeading heading="Corporates List" />
                    <div className="d-flex align-items-center gap-3">
                        <div className="exportAll">
                            {/* <button type= "button" className="btn btn-primary themeBtn"> Export All <i className="fe fe-download ms-1"></i> </button> */}
                            <Dropdown isOpen={dropdownOpen1} toggle={toggle1}>
                                <DropdownToggle color="dark" className="themeBtn">Export<i className="fe fe-download ms-2"></i></DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Pdf</DropdownItem>
                                    <DropdownItem>Excel</DropdownItem>
                                    <DropdownItem>CSV</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                        <div className="exportAll">
                            {/* <button type= "button" className="btn btn-primary themeBtn"> Export All <i className="fe fe-download ms-1"></i> </button> */}
                            <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
                                <DropdownToggle color="dark" className="themeBtn">Export All <i className="fe fe-download ms-2"></i></DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Pdf</DropdownItem>
                                    <DropdownItem>Excel</DropdownItem>
                                    <DropdownItem>CSV</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                </div>

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
                                            >
                                                <option disabled selected>
                                                    Type
                                                </option>
                                                <option value="individual">Individual</option>
                                                <option value="corporate">Corporate</option>
                                            </select>
                                        </div>

                                        <div className="stts-flter">
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
                                <div className="table-responsived">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    <input
                                                        type="checkbox"

                                                        className="form-check-input"
                                                    />
                                                </th>
                                                <th scope="col">Corporate ID</th>
                                                <th scope="col">Registration Number</th>
                                                <th scope="col">Corporate Name</th>
                                                <th scope="col">Industry Type</th>
                                                <th scope="col">Number of Employees</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    {" "}
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                    />{" "}
                                                </td>
                                                <th scope="row">5869858555</th>
                                                <td>CATA9874562</td>
                                                <td>NexGen Enterprises</td>
                                                <td>Technology</td>
                                                <td>250</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    {" "}
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                    />{" "}
                                                </td>
                                                <th scope="row">5869858555</th>
                                                <td>CATA9874562</td>
                                                <td>NexGen Enterprises</td>
                                                <td>Technology</td>
                                                <td>250</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    {" "}
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                    />{" "}
                                                </td>
                                                <th scope="row">5869858555</th>
                                                <td>CATA9874562</td>
                                                <td>NexGen Enterprises</td>
                                                <td>Technology</td>
                                                <td>250</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    {" "}
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                    />{" "}
                                                </td>
                                                <th scope="row">5869858555</th>
                                                <td>CATA9874562</td>
                                                <td>NexGen Enterprises</td>
                                                <td>Technology</td>
                                                <td>250</td>
                                            </tr>
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
                                                            className={`page-item ${currentPage === pageNumber ? "active" : ""
                                                                }`}
                                                        >
                                                            <button
                                                                className={`page-link ${currentPage === pageNumber
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
                                <h1 class="modal-title fs-5" id="exampleModalLabel">
                                    Delete User
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
                                        Are you sure want to delete this user?
                                    </h4>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-primary"
                                >
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

                <div
                    class="modal fade"
                    id="deleteall-mddl"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">
                                    Delete User
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
                                        Are you sure want to delete users?
                                    </h4>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-primary"
                                >
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

                {/* <!--Block- Modal --> */}

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
                                    Block User
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
                                        Are you sure want to block this user?
                                    </h4>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" >
                                    Block
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
                    id="blockall-mddl"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">
                                    Block User
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
                                        Are you sure want to block users?
                                    </h4>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-primary"
                                >
                                    Block
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
                    id="unblock-mddl"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">
                                    Unblock User
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
                                        Are you sure want to unblock this user?
                                    </h4>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" >
                                    Unlock
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

export default CorporatesReport;