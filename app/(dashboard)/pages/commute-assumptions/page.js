"use client";
// import node module libraries
import { Container, Form, Image } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

import React, { useState, useEffect } from "react";
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

const CommuteAssumptions = () => {
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
    }, [currentPage, search, token]);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

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


    return (
        <>
            <Container fluid className="p-6">
                {/* Page Heading */}
                <PageHeading heading="Commute Assumptions" />

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
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    <input
                                                        type="checkbox"

                                                        class="form-check-input"
                                                    />
                                                </th>
                                                <th scope="col">Sr. No.</th>
                                                <th scope="col">Vehicle Type</th>
                                                <th scope="col">Fuel Type</th>
                                                <th scope="col">Fuel Value</th>
                                                <th scope="col">Action</th>
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
                                                <th scope="row">1</th>
                                                <td>Car</td>
                                                <td>Petrol</td>

                                                <td>40 Liters</td>

                                                <td className="action-td">
                                                    <div className="actions-bttns">
                                                        <span

                                                        >
                                                            {" "}
                                                            <i className="fe fe-eye"></i>
                                                        </span>
                                                        <span

                                                        >
                                                            {" "}
                                                            <i className="fe fe-edit"></i>
                                                        </span>
                                                        <span

                                                        >
                                                            {" "}
                                                            <i className="fe fe-trash"></i>
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    {" "}
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                    />{" "}
                                                </td>
                                                <th scope="row">1</th>
                                                <td>Car</td>
                                                <td>Petrol</td>

                                                <td>40 Liters</td>

                                                <td className="action-td">
                                                    <div className="actions-bttns">
                                                        <span

                                                        >
                                                            {" "}
                                                            <i className="fe fe-eye"></i>
                                                        </span>
                                                        <span

                                                        >
                                                            {" "}
                                                            <i className="fe fe-edit"></i>
                                                        </span>
                                                        <span

                                                        >
                                                            {" "}
                                                            <i className="fe fe-trash"></i>
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    {" "}
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                    />{" "}
                                                </td>
                                                <th scope="row">1</th>
                                                <td>Car</td>
                                                <td>Petrol</td>

                                                <td>40 Liters</td>

                                                <td className="action-td">
                                                    <div className="actions-bttns">
                                                        <span

                                                        >
                                                            {" "}
                                                            <i className="fe fe-eye"></i>
                                                        </span>
                                                        <span

                                                        >
                                                            {" "}
                                                            <i className="fe fe-edit"></i>
                                                        </span>
                                                        <span

                                                        >
                                                            {" "}
                                                            <i className="fe fe-trash"></i>
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    {" "}
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                    />{" "}
                                                </td>
                                                <th scope="row">1</th>
                                                <td>Car</td>
                                                <td>Petrol</td>

                                                <td>40 Liters</td>

                                                <td className="action-td">
                                                    <div className="actions-bttns">
                                                        <span

                                                        >
                                                            {" "}
                                                            <i className="fe fe-eye"></i>
                                                        </span>
                                                        <span

                                                        >
                                                            {" "}
                                                            <i className="fe fe-edit"></i>
                                                        </span>
                                                        <span

                                                        >
                                                            {" "}
                                                            <i className="fe fe-trash"></i>
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    {" "}
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                    />{" "}
                                                </td>
                                                <th scope="row">1</th>
                                                <td>Car</td>
                                                <td>Petrol</td>

                                                <td>40 Liters</td>

                                                <td className="action-td">
                                                    <div className="actions-bttns">
                                                        <span

                                                        >
                                                            {" "}
                                                            <i className="fe fe-eye"></i>
                                                        </span>
                                                        <span

                                                        >
                                                            {" "}
                                                            <i className="fe fe-edit"></i>
                                                        </span>
                                                        <span

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

export default CommuteAssumptions;