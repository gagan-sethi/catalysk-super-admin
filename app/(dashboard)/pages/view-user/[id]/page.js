"use client";
// import node module libraries
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import subcomponents

import Head from "next/head";
import Questionnaires from "sub-components/questionnaires/Questionnaires";
import SparksGained from "sub-components/sparks-gained/SparksGained";
import UsersLocations from "sub-components/users-locations/UsersLocations";
import UsersGeneralInfo from "sub-components/users-general-info/UsersGeneralnfo";
import React, { useState, useEffect } from "react";

import ElectricQuestionnaires from "sub-components/questionnaires/ElectricQuestionnaires";
import WaterQuestionnaires from "sub-components/questionnaires/WaterQuestionnaires";
import CommuteQuestionnaires from "sub-components/questionnaires/CommuteQuestionnaires";

const ViewUser = () => {
  const [user, setUsers] = useState("");
  const [consumption, setConsumtion] = useState("");
  const [waterconsumption, setConsumtionwater] = useState("");

  const [location, setLocation] = useState([]);
  const [locData, setLocationdata] = useState("");

  function capitalizeFirstLetter(string) {
    if (string) {
      return string?.charAt(0)?.toUpperCase() + string.slice(1);
    }
  }

  const settab = (e, id) => {
    console.log(e);

    const filter = location.filter((item) => item._id === id);
    console.log(filter);
    setLocationdata(filter[0]);
  };

  const getuserList = async () => {
    const urlObj =
      typeof window !== "undefined" ? new URL(window.location.href) : "";

    const pathname = urlObj ? urlObj.pathname : "";
    const id = pathname.split("/").pop();
    console.log(id);

    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : "";

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/userbyId/${id}`,
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
      setUsers(data.data[0]);
    }
  };

  const getconsumptionforwater = async () => {
    const urlObj =
      typeof window !== "undefined" ? new URL(window.location.href) : "";

    const pathname = urlObj ? urlObj.pathname : "";
    const id = pathname.split("/").pop();
    console.log(id);

    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : "";

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/waterConsumption/${id}`,
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
      setConsumtionwater(data.data);
    }
  };

  const getconsumption = async () => {
    const urlObj =
      typeof window !== "undefined" ? new URL(window.location.href) : "";

    const pathname = urlObj ? urlObj.pathname : "";
    const id = pathname.split("/").pop();
    console.log(id);

    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : "";

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/electricityConsumption/${id}`,
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
      setConsumtion(data.data);
    }
  };

  const getlocation = async () => {
    const urlObj =
      typeof window !== "undefined" ? new URL(window.location.href) : "";

    const pathname = urlObj ? urlObj.pathname : "";
    const id = pathname.split("/").pop();
    console.log(id);

    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : "";

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/getLocation/${id}`,
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
      setLocation(data.data);
      setLocationdata(data.data[0]);
    }
  };

  useEffect(() => {
    getuserList();
    getlocation();
    getconsumption();
    getconsumptionforwater();
  }, []);

  return (
    <>
      <Container fluid className="p-6">
        {/* Page Heading */}
        <PageHeading heading="View User" />

        <div className="main-content-wrapper">
          <div className="myVerticalTabs">
            <div class="d-flex align-items-start gap-4">
              <div
                class="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  class="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-general"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  General Information
                </button>
                <button
                  class="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-locations"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  Location
                </button>
                <button
                  class="nav-link"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-sparks"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  Sparks Gained
                </button>
                <button
                  class="nav-link"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-questions"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  Questionnaires
                </button>
              </div>

              <div class="tab-content" id="v-pills-tabContent">
                {/* general-info-tab-start */}

                <div
                  class="tab-pane fade show active"
                  id="v-pills-general"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                  tabindex="0"
                >
                  <div className="general-tabs-cntnt only-view">
                    <div className="card">
                      <div className="card-body">
                        <div className="mb-6 d-flex justify-content-between align-items-center">
                          <h4 className="mb-1">General Information</h4>
                          <span class="individual-tag">
                            {capitalizeFirstLetter(user.user_type)}
                          </span>
                        </div>

                        <Form>
                          <Row className="mb-3">
                            <Form.Label
                              className="col-sm-4 col-form-label form-label"
                              htmlFor="fullName"
                            >
                              User ID
                            </Form.Label>
                            <Col sm={8} className="mb-3 mb-lg-0">
                              <Form.Control
                                type="text"
                                value={user?.user_info?.user_id}
                              />
                            </Col>
                          </Row>
                          <Row className="mb-3">
                            <Form.Label
                              className="col-sm-4 col-form-label form-label"
                              htmlFor="fullName"
                            >
                              Full name
                            </Form.Label>
                            <Col sm={8} className="mb-3 mb-lg-0">
                              <Form.Control
                                type="text"
                                value={user?.user_info?.full_name}
                              />
                            </Col>
                          </Row>
                          {/* row */}
                          <Row className="mb-3">
                            <Form.Label
                              className="col-sm-4 col-form-label form-label"
                              htmlFor="email"
                            >
                              Personal Email
                            </Form.Label>
                            <Col md={8} xs={12}>
                              <Form.Control type="email" value={user?.email} />
                            </Col>
                          </Row>
                          {/* <Row className="mb-3">
        <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="email">Corporate Email</Form.Label>
          <Col md={8} xs={12} className="position-relative">
            <Form.Control type="email" value="ginger@gmail.com" />
            <span className="verified">Verified</span>
          </Col>
        </Row>

        <Row className="mb-3">
        <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="email">Year of Birth</Form.Label>
          <Col md={8} xs={12} className="">
            <Form.Control type="email" value="1999" />                                     
          </Col>
        </Row>
       
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="phone">Phone Number</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" value="+91-9874656396"  />
          </Col>
        </Row>*/}

                          <Row className="mb-3">
                            <Form.Label className="col-sm-4" htmlFor="phone">
                              Status
                            </Form.Label>
                            <Col md={8} xs={12}>
                              <Form.Control
                                type="text"
                                value={capitalizeFirstLetter(user?.status)}
                              />
                            </Col>
                          </Row>

                          {/* <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="phone">Last Login Date</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" value="19/03/2023" />
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="phone">IP Address</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" value="198.172.3.2" />
          </Col>
        </Row>*/}
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Locations-tab-start */}

                <div
                  class="tab-pane fade"
                  id="v-pills-locations"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                  tabindex="0"
                >
                  <div className="locations-tab-cntnt">
                    <div className="card">
                      <div className="card-body">
                        <div className="mb-6">
                          <h4 className="mb-1">Location</h4>
                        </div>
                        <Form>
                          {/* Address Line One */}
                          <Row className="mb-3">
                            <Form.Label
                              className="col-sm-4"
                              htmlFor="addressLine"
                            >
                              Zip Code
                            </Form.Label>
                            <Col md={8} xs={12}>
                              <Form.Control
                                type="text"
                                value={user?.user_info?.zip_code}
                              />
                            </Col>
                          </Row>

                          <nav className="cstm-tabs mt-5">
                            <div
                              class="nav nav-tabs"
                              id="nav-tab"
                              role="tablist"
                            >
                              {location.map((bedroom, index) => (
                                <button
                                  className="nav-link active"
                                  id="nav-home-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target={index}
                                  type="button"
                                  role="tab"
                                  aria-controls="nav-home"
                                  aria-selected="true"
                                  onClick={(e) => settab(index, bedroom._id)}
                                >
                                  Location {index + 1}
                                </button>
                              ))}
                            </div>
                          </nav>
                          {location.map((bedroom, index) => (
                            <div
                              className="tab-content w-100 mt-4"
                              id="nav-tabContent"
                            >
                              <div
                                class="tab-pane fade show active"
                                id={index}
                                role="tabpanel"
                                aria-labelledby="nav-home-tab"
                                tabindex="0"
                              >
                                {/* Address Line Two */}
                                <Row className="mb-3">
                                  <Form.Label
                                    className="col-sm-4"
                                    htmlFor="addressLineTwo"
                                  >
                                    Circle Name
                                  </Form.Label>
                                  <Col md={8} xs={12}>
                                    <Form.Control
                                      type="text"
                                      value={locData.circle_name}
                                    />
                                  </Col>
                                </Row>

                                <Row className="mb-3">
                                  <Form.Label
                                    className="col-sm-4"
                                    htmlFor="zipcode"
                                  >
                                    Region Name
                                  </Form.Label>

                                  <Col md={8} xs={12}>
                                    <Form.Control
                                      type="text"
                                      value={locData.region_name}
                                    />
                                  </Col>
                                </Row>

                                <Row className="mb-3">
                                  <Form.Label
                                    className="col-sm-4"
                                    htmlFor="zipcode"
                                  >
                                    Division Name
                                  </Form.Label>

                                  <Col md={8} xs={12}>
                                    <Form.Control
                                      type="text"
                                      value={locData.division_name}
                                    />
                                  </Col>
                                </Row>

                                <Row className="mb-3">
                                  <Form.Label
                                    className="col-sm-4"
                                    htmlFor="zipcode"
                                  >
                                    Area
                                  </Form.Label>

                                  <Col md={8} xs={12}>
                                    <Form.Control
                                      type="text"
                                      value={locData.zip_code}
                                    />
                                  </Col>
                                </Row>

                                <Row className="mb-3">
                                  <Form.Label
                                    className="col-sm-4"
                                    htmlFor="zipcode"
                                  >
                                    {" "}
                                    Office Type
                                  </Form.Label>

                                  <Col md={8} xs={12}>
                                    <Form.Control
                                      type="text"
                                      value={locData.office_type}
                                    />
                                  </Col>
                                </Row>

                                <Row className="mb-3">
                                  <Form.Label
                                    className="col-sm-4"
                                    htmlFor="zipcode"
                                  >
                                    {" "}
                                    Delivery
                                  </Form.Label>

                                  <Col md={8} xs={12}>
                                    <Form.Control
                                      type="text"
                                      value={locData.delivery}
                                    />
                                  </Col>
                                </Row>

                                <Row className="mb-3">
                                  <Form.Label
                                    className="col-sm-4"
                                    htmlFor="zipcode"
                                  >
                                    District
                                  </Form.Label>

                                  <Col md={8} xs={12}>
                                    <Form.Control
                                      type="text"
                                      value={locData.district}
                                    />
                                  </Col>
                                </Row>

                                <Row className="mb-3">
                                  <Form.Label
                                    className="col-sm-4"
                                    htmlFor="zipcode"
                                  >
                                    State Name
                                  </Form.Label>

                                  <Col md={8} xs={12}>
                                    <Form.Control
                                      type="text"
                                      value={locData.state_name}
                                    />
                                  </Col>
                                </Row>

                                <Row className="mb-3">
                                  <Form.Label
                                    className="col-sm-4"
                                    htmlFor="zipcode"
                                  >
                                    Latitude
                                  </Form.Label>

                                  <Col md={8} xs={12}>
                                    <Form.Control
                                      type="text"
                                      value={locData.latitude}
                                    />
                                  </Col>
                                </Row>

                                <Row className="mb-3">
                                  <Form.Label
                                    className="col-sm-4"
                                    htmlFor="zipcode"
                                  >
                                    Longitude
                                  </Form.Label>

                                  <Col md={8} xs={12}>
                                    <Form.Control
                                      type="text"
                                      value={locData.longitude}
                                    />
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          ))}
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>

                {/* sparks-gained-tab-start */}

                <div
                  class="tab-pane fade"
                  id="v-pills-sparks"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                  tabindex="0"
                >
                  <SparksGained />
                </div>

                {/* Questionnaires-tab-start*/}

                <div
                  class="tab-pane fade"
                  id="v-pills-questions"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                  tabindex="0"
                >
                  <div className="questions-tab-cntnt">
                    {/* nav */}

                    <div className="questions-tabs cstm-accordian">
                      <nav className="cstm-tabs">
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                          <button
                            class="nav-link active"
                            id="nav-home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#electricity"
                            type="button"
                            role="tab"
                            aria-controls="nav-home"
                            aria-selected="true"
                          >
                            Electricity
                          </button>
                          <button
                            class="nav-link"
                            id="nav-profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#water"
                            type="button"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                          >
                            Water
                          </button>
                          <button
                            class="nav-link"
                            id="nav-contact-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#commute"
                            type="button"
                            role="tab"
                            aria-controls="nav-contact"
                            aria-selected="false"
                          >
                            Commute
                          </button>
                        </div>
                      </nav>

                      <div class="tab-content" id="nav-tabContent">
                        <div
                          class="tab-pane fade show active"
                          id="electricity"
                          role="tabpanel"
                          aria-labelledby="nav-home-tab"
                          tabindex="0"
                        >
                          {/* Electricity-Questions-Content */}
                          <div className="electricity-ques">
                            <div className=" d-flex justify-content-between mt-5 mb-5">
                              <div>
                                <h3>Users's Summary</h3>
                              </div>
                              <div>
                              {consumption?.completed?<h3>Completed</h3>:<h3>Not Completed</h3>}
                              </div>
                            </div>

                            <div className="answers-list-sec">
                              <div className="row row-gap-5">
                                <div className="col-sm-4">
                                  <div
                                    className="answer-card card-bg uppr-card"
                                    data-bs-toggle="modal"
                                    data-bs-target="#bhk-mddl"
                                  >
                                    <img src="/images/bhk.svg" />
                                    <h4>{consumption?.no_of_rooms}</h4>
                                    <p>
                                      {consumption?.room_type == "RK"
                                        ? "RK"
                                        : "BHK"}
                                    </p>
                                  </div>
                                </div>

                                <div className="col-sm-4">
                                  <div
                                    className="answer-card card-bg uppr-card"
                                    data-bs-toggle="modal"
                                    data-bs-target="#devices-mddl"
                                  >
                                    <img src="/images/elec-devices.jpg" />
                                    <h4>{consumption?.total_device_count}</h4>
                                    <p>Devices</p>
                                  </div>
                                </div>

                                <div className="col-sm-4">
                                  <div
                                    className="answer-card card-bg uppr-card"
                                    data-bs-toggle="modal"
                                    data-bs-target="#kwh-mddl"
                                  >
                                    <img src="/images/kwh.jpg" />
                                    <h4>{consumption?.total_consumption}</h4>
                                    <p>KWH</p>
                                  </div>
                                </div>

                                <div className="col-sm-4">
                                  <div className="answer-card card-bg">
                                    <h4 className="givenAns">
                                      {capitalizeFirstLetter(
                                        consumption?.house_type
                                      )}
                                    </h4>
                                    <p className="givenQue">
                                      Do you live in a..
                                    </p>
                                  </div>
                                </div>

                                <div className="col-sm-4">
                                  <div className="answer-card card-bg">
                                    <h4 className="givenAns">
                                      {consumption?.no_of_people}
                                    </h4>
                                    <p className="givenQue">
                                      How many people in your home?
                                    </p>
                                  </div>
                                </div>

                                <div className="col-sm-4">
                                  <div className="answer-card card-bg">
                                    <h4 className="givenAns">
                                      {consumption?.no_of_rooms}   {consumption?.room_type == "RK"
                                        ? "RK"
                                        : "BHK"}
                                    </h4>
                                    <p className="givenQue">
                                      How many rooms do you have?
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="mt-5 mb-5">
                                <h3>Appliances Details</h3>
                              </div>

                              <div className="row row-gap-5">
                                {consumption?.rooms_detail?.map(
                                  (item, index) => (
                                    <div className="col-sm-4">
                                      <div className="answer-card card-bg">
                                        <h4 className="givenAns">
                                          {item.name}
                                        </h4>
                                        <ul className="applince-list">
                                          <li>
                                            <div>
                                              <p className="appli-nme">
                                                Lights
                                              </p>
                                              <p className="appli-nme-sub">
                                                {item.incandecentbulb}{" "}
                                                Incandescent bulbs,{" "}
                                                {item.ledbulb} LED bulbs,
                                                {item.cflbulb} CFL bulb,{" "}
                                                {item.fluorescenttube}{" "}
                                                Incandescent tube,{" "}
                                                {item.ledtube} LED tube,{" "}
                                                {item.unknownbulb} Unknown bulb,{" "}
                                                {item.unknowntube} Unknown tube
                                              </p>
                                            </div>
                                            <span className="appli-qty">
                                              {item.lights}
                                            </span>
                                          </li>

                                          <li>
                                            <div>
                                              <p className="appli-nme">Fans</p>
                                              <p className="appli-nme-sub">
                                                {item.acfan} AC-Powered fans,{" "}
                                                {item.bldcfan} BLDC fans
                                              </p>
                                            </div>
                                            <span className="appli-qty">
                                              {item.fans}
                                            </span>
                                          </li>

                                          <li>
                                            <div>
                                              <p className="appli-nme">
                                                Air conditioners
                                              </p>
                                              <p className="appli-nme-sub">
                                                {item.splitac} Split air
                                                conditioners, {item.windowac}{" "}
                                                Window air conditioners
                                              </p>
                                            </div>
                                            <span className="appli-qty">
                                              {item.acs}
                                            </span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  )
                                )}

                                {/*  <div className='col-sm-4'>
                        <div className='answer-card card-bg'>
                            <h4 className='givenAns'>Bedroom-01</h4>
                            <ul className='applince-list'>
                                <li>
                                    <div>
                                        <p className='appli-nme'>Lights</p>
                                        <p className='appli-nme-sub'>2 CFLs , 1 Tubelight ,  2 Incandescent</p>
                                    </div>
                                    <span className='appli-qty'>05</span>
                                </li>

                                <li>
                                    <div>
                                        <p className='appli-nme'>Fans</p>
                                        <p className='appli-nme-sub'>2 BLDC , 1 AC</p>
                                    </div>                                    
                                    <span className='appli-qty'>03</span>
                                </li>

                                <li>
                                     <div>
                                        <p className='appli-nme'>Air conditioners</p>
                                        <p className='appli-nme-sub'>1 Split AC, 2 Window AC
                                        </p>
                                    </div>
                                    <span className='appli-qty'>03</span>
                                </li>
                            </ul>
                        </div>  
                    </div>

                    <div className='col-sm-4'>
                        <div className='answer-card card-bg'>
                            <h4 className='givenAns'>Bedroom-02</h4>
                            <ul className='applince-list'>
                                <li>
                                    <div>
                                        <p className='appli-nme'>Lights</p>
                                        <p className='appli-nme-sub'>2 CFLs , 1 Tubelight ,  2 Incandescent</p>
                                    </div>
                                    <span className='appli-qty'>05</span>
                                </li>

                                <li>
                                    <div>
                                        <p className='appli-nme'>Fans</p>
                                        <p className='appli-nme-sub'>2 BLDC , 1 AC</p>
                                    </div>                                    
                                    <span className='appli-qty'>03</span>
                                </li>

                                <li>
                                     <div>
                                        <p className='appli-nme'>Air conditioners</p>
                                        <p className='appli-nme-sub'>1 Split AC, 2 Window AC
                                        </p>
                                    </div>
                                    <span className='appli-qty'>03</span>
                                </li>
                            </ul>
                        </div>  
                    </div>

                    <div className='col-sm-4'>
                        <div className='answer-card card-bg'>
                            <h4 className='givenAns'>Staff Room</h4>
                            <ul className='applince-list'>
                                <li>
                                    <div>
                                        <p className='appli-nme'>Lights</p>
                                        <p className='appli-nme-sub'>2 CFLs , 1 Tubelight ,  2 Incandescent</p>
                                    </div>
                                    <span className='appli-qty'>05</span>
                                </li>

                                <li>
                                    <div>
                                        <p className='appli-nme'>Fans</p>
                                        <p className='appli-nme-sub'>2 BLDC , 1 AC</p>
                                    </div>                                    
                                    <span className='appli-qty'>03</span>
                                </li>

                                <li>
                                     <div>
                                        <p className='appli-nme'>Air conditioners</p>
                                        <p className='appli-nme-sub'>1 Split AC, 2 Window AC
                                        </p>
                                    </div>
                                    <span className='appli-qty'>03</span>
                                </li>
                            </ul>
                        </div>  
                    </div>

                    <div className='col-sm-4'>
                        <div className='answer-card card-bg'>
                            <h4 className='givenAns'>Rest of the house</h4>
                            <ul className='applince-list'>
                                <li>
                                    <div>
                                        <p className='appli-nme'>Lights</p>
                                        <p className='appli-nme-sub'>2 CFLs , 1 Tubelight ,  2 Incandescent</p>
                                    </div>
                                    <span className='appli-qty'>05</span>
                                </li>

                                <li>
                                    <div>
                                        <p className='appli-nme'>Fans</p>
                                        <p className='appli-nme-sub'>2 BLDC , 1 AC</p>
                                    </div>                                    
                                    <span className='appli-qty'>03</span>
                                </li>

                                <li>
                                     <div>
                                        <p className='appli-nme'>Air conditioners</p>
                                        <p className='appli-nme-sub'>1 Split AC, 2 Window AC
                                        </p>
                                    </div>
                                    <span className='appli-qty'>03</span>
                                </li>
                            </ul>
                        </div>  
                    </div> */}
                              </div>
                            </div>

                            {/* modals */}

                            <div
                              className="modal fade"
                              id="devices-mddl"
                              tabindex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h1
                                      className="modal-title fs-5"
                                      id="exampleModalLabel"
                                    >
                                      Electric Devices
                                    </h1>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className="modal-body">
                                    <div className="answer-card">
                                      <h4 className="givenAns">
                                        Appliances Details
                                      </h4>

                                      {consumption?.rooms_detail?.map(
                                        (item, index) => (
                                          <ul className="applince-list">
                                            {item.name}
                                            <li>
                                              <div>
                                                <p className="appli-nme">
                                                  Lights
                                                </p>
                                                <p className="appli-nme-sub">
                                                  {item.incandecentbulb}{" "}
                                                  Incandescent bulbs,{" "}
                                                  {item.ledbulb} LED bulbs,
                                                  {item.cflbulb} CFL bulb,{" "}
                                                  {item.fluorescenttube}{" "}
                                                  Incandescent tube,{" "}
                                                  {item.ledtube} LED tube,{" "}
                                                  {item.unknownbulb} Unknown
                                                  bulb, {item.unknowntube}{" "}
                                                  Unknown tube
                                                </p>
                                              </div>
                                              <span className="appli-qty">
                                                {item.lights}
                                              </span>
                                            </li>

                                            <li>
                                              <div>
                                                <p className="appli-nme">
                                                  Fans
                                                </p>
                                                <p className="appli-nme-sub">
                                                  {item.acfan} AC-Powered fans,{" "}
                                                  {item.bldcfan} BLDC fans
                                                </p>
                                              </div>
                                              <span className="appli-qty">
                                                {item.fans}
                                              </span>
                                            </li>

                                            <li>
                                              <div>
                                                <p className="appli-nme">
                                                  Air conditioners
                                                </p>
                                                <p className="appli-nme-sub">
                                                  {item.acfan} AC-Powered fans,{" "}
                                                  {item.bldcfan} BLDC fans
                                                </p>
                                              </div>
                                              <span className="appli-qty">
                                                {item.acs}
                                              </span>
                                            </li>
                                          </ul>
                                        )
                                      )}
                                    </div>
                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-outline-white"
                                      data-bs-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="modal fade"
                              id="kwh-mddl"
                              tabindex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h1
                                      className="modal-title fs-5"
                                      id="exampleModalLabel"
                                    >
                                      KWH
                                    </h1>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className="modal-body">
                                    <div className="answer-card">
                                      <h4 className="givenAns">KWH Details</h4>
                                      <ul className="applince-list kwh-mdl">
                                        {consumption?.rooms_detail?.map(
                                          (item, index) => (
                                            <li>
                                              <span className="appli-nme">
                                                {item?.name}
                                              </span>
                                              <span className="appli-qty">
                                                {(
                                                  item.acfanConsumption +
                                                  item.bldcfanConsumption +
                                                  item.cflbulbConsumption +
                                                  item.fluorescenttubeConsumption +
                                                  item.incandecentbulbConsumption +
                                                  item.ledbulbConsumption +
                                                  item.ledtubeConsumption +
                                                  item.splitacConsumption +
                                                  item.unknownbulbConsumption +
                                                  item.unknownfanConsumption +
                                                  item.unknowntubeConsumption +
                                                  item.windowacConsumption
                                                ).toFixed(2)}{" "}
                                                kWH
                                              </span>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-outline-white"
                                      data-bs-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="modal fade"
                              id="bhk-mddl"
                              tabindex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h1
                                      className="modal-title fs-5"
                                      id="exampleModalLabel"
                                    >
                                      {consumption?.room_type == "RK" ? (
                                        <h4 className="givenAns">RK</h4>
                                      ) : (
                                        <h4 className="givenAns">BHK</h4>
                                      )}

                                      {/* BHK */}
                                    </h1>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                 
                                  </div>
                                  <div className="modal-body">
                                    <div className="answer-card">
                                      {consumption?.room_type == "RK" ? (
                                        <h4 className="givenAns">RK Details</h4>
                                      ) : (
                                        <h4 className="givenAns">
                                          BHK Details
                                        </h4>
                                      )}
                                      <ul className="applince-list kwh-mdl">
                                        {consumption?.rooms_detail?.map(
                                          (item, index) => (
                                            <li>
                                              <span className="appli-nme">
                                                {item.name}
                                              </span>
                                              <span className="appli-qty">
                                                {item.lights +
                                                  item.acs +
                                                  item.fans}
                                              </span>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-outline-white"
                                      data-bs-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="tab-pane fade"
                          id="water"
                          role="tabpanel"
                          aria-labelledby="nav-profile-tab"
                          tabindex="0"
                        >
                          <WaterQuestionnaires />
                        </div>
                        <div
                          class="tab-pane fade"
                          id="commute"
                          role="tabpanel"
                          aria-labelledby="nav-contact-tab"
                          tabindex="0"
                        >
                          <CommuteQuestionnaires />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* modals */}

        {/* <!-- Modal --> */}

        <div
          class="modal fade"
          id="sparks-update"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Sparks Update
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="update-sparks-mdl">
                  <div className="form-group mt-2">
                    <label className="mb-2">Sparks Amount</label>
                    <input
                      className="form-control"
                      placeholder="Enter Amount"
                    />
                  </div>
                  <div className="form-group mt-2">
                    <label className="mb-2">Reason</label>
                    <input
                      className="form-control"
                      placeholder="Enter Reason"
                    />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-white">
                  Add
                </button>
                <button type="button" class="btn btn-outline-white">
                  Minus
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
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

export default ViewUser;
