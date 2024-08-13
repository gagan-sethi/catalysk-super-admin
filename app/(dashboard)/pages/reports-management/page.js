"use client";
// import node module libraries
import { Col, Container, Dropdown, Form, Image, Row } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import {
  Notifications,
  DeleteAccount,
  GeneralSetting,
  EmailSetting,
  Preferences,
} from "sub-components";
import Head from "next/head";
import Link from 'next/link';
import { useState } from "react";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

const ReportsManagement = () => {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);
  const toggle3 = () => setDropdownOpen3((prevState) => !prevState);
  const [dropdownOpen4, setDropdownOpen4] = useState(false);
  const toggle4 = () => setDropdownOpen4((prevState) => !prevState);

  const [isVisible, setIsVisible] = useState(false);

  const showFilters = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Container fluid className="p-6">
        {/* Page Heading */}
        <PageHeading heading="Reports Management" />

        <div className="main-content-wrapper">
          <div className="card">
            <div className="card-body">
              <div className="filters-options-sec">
                <div className="flxx">
                  <div className="search-bar">
                    {/* Search Form */}
                    <Form className="d-flex align-items-center">
                      <Form.Control type="search" placeholder="Search" />
                    </Form>
                  </div>
                  <div className="bttns-sec">
                    <button className="btn btn-outline-white" onClick={showFilters}>
                      <i className="fe fe-sliders me-2"></i> Sort
                    </button>

                    <div className="bulk-action-btn">
                      <button
                        className="btn btn-outline-white dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fe fe-filter"></i>
                      </button>
                      <ul className="dropdown-menu">

                        <li>
                          <a className="dropdown-item">
                            Ascending
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item">
                            Descending
                          </a>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
                {isVisible && (
                  <div className="sub-filter-sec">
                    <div>
                      <h4 className="mb-0">From : </h4>
                    </div>
                    <div class="stts-flter">
                      <input className="form-control" type="date" />
                    </div>

                    <div>
                      <h4 className="mb-0">To :</h4>
                    </div>

                    <div class="stts-flter">
                      <input className="form-control" type="date" />
                    </div>
                  </div>
                )}
              </div>

              <Row>
                <Col lg={12}>
                  <div className="reportItem">
                    <h5 className="mb-0">List of Users</h5>
                    <Dropdown isOpen={dropdownOpen1} toggle={toggle1}>
                      <DropdownToggle color="dark" className="themeBtn"><i className="fe fe-download me-0"></i></DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Excel</DropdownItem>
                        <DropdownItem>CSV</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="reportItem">
                    <h5 className="mb-0">List of Corporates</h5>
                    <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
                      <DropdownToggle color="dark" className="themeBtn"><i className="fe fe-download me-0"></i></DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Excel</DropdownItem>
                        <DropdownItem>CSV</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="reportItem">
                    <h5 className="mb-0">List of Societies</h5>
                    <Dropdown isOpen={dropdownOpen3} toggle={toggle3}>
                      <DropdownToggle color="dark" className="themeBtn"><i className="fe fe-download me-0"></i></DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Excel</DropdownItem>
                        <DropdownItem>CSV</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="reportItem">
                    <h5 className="mb-0">List of Challenges</h5>
                    <Dropdown isOpen={dropdownOpen4} toggle={toggle4}>
                      <DropdownToggle color="dark" className="themeBtn"><i className="fe fe-download me-0"></i></DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Excel</DropdownItem>
                        <DropdownItem>CSV</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ReportsManagement;