"use client";
// import node module libraries
import { Container, Form } from "react-bootstrap";

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

const AddUser = () => {
  return (
    <>
      <Container fluid className="p-6">
        {/* Page Heading */}
        <PageHeading heading="Add User" />

        <div className="main-content-wrapper">
          <div className="card">
            <div className="card-body">
              <div className="myform">
                <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>First Name </label>
                        <input className="form-control" placeholder="First Name" />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                      <label>Last Name </label>
                        <input className="form-control" placeholder="Last Name" />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                      <label>Personal Email </label>
                        <input className="form-control" placeholder="Personal Email" />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Corporate Email (Optional) </label>
                        <input className="form-control" placeholder="Corporate Email" />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Year of Birth </label>
                        <input className="form-control" placeholder="Year of Birth" />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Zip Code </label>
                        <input className="form-control" placeholder="Zip Code " />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Phone Number </label>
                        <input className="form-control" placeholder="Phone Number" />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Address</label>
                       <textarea className="form-control">

                       </textarea>
                      </div>
                    </div>
                

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Status</label>
                        <select className="form-control">
                          <option>Active</option>
                          <option>Block</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" placeholder="Password" />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Confirm Password</label>
                        <input className="form-control" placeholder="Confirm Password" />
                      </div>
                    </div>



                </div>
                <div className="d-flex justify-content-center p-3 gap-2">
                  <button className="btn btn-primary">
                    Add
                  </button>
                  <button className="btn btn-outline-white">
                    Cancel
                  </button>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AddUser;