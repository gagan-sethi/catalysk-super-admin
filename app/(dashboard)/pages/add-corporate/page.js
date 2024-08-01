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
import Link from "next/link";

const AddCorporate = () => {
  return (
    <>
      <Container fluid className="p-6">
        {/* Page Heading */}
        <PageHeading heading="Add Corporate" />

        <div className="main-content-wrapper">
          <div className="card">
            <div className="card-body">
              <div className="myform">
                <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Registration Number </label>
                        <input className="form-control" placeholder="Registration Number " />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                      <label>Corporate Name</label>
                        <input className="form-control" placeholder="Corporate Name" />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                      <label>Email </label>
                        <input className="form-control" placeholder="Email" />
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
                        <label>Number of Employees</label>
                        <input className="form-control" placeholder="Number of Employees" />
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
                        <label>Industry Type</label>
                        <select className="form-control">
                          <option>Technology</option>
                          <option>Automobile</option>
                          <option>Agriculture</option>
                          <option>Accounts</option>
                          <option>Medical</option>
                        </select>
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

                </div>
                <div className="d-flex justify-content-center p-3 gap-2">
                  <button className="btn btn-primary">
                    Add
                  </button>
                  
                    <Link className="btn btn-outline-white" href="/pages/corporates-management">                        
                        Cancel
                    </Link>
                
                </div>
              </div>  
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AddCorporate;