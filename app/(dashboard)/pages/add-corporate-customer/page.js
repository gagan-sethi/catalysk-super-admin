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

const AddCorporateCustomer = () => {
  return (
    <>
      <Container fluid className="p-6">
        {/* Page Heading */}
        <PageHeading heading="Add Corporate Customer" />

        <div className="main-content-wrapper">
          <div className="card">
            <div className="card-body">
              <div className="myform">
                <div className="row">

                <div className="col-sm-6">
                      <div className="form-group">
                      <label>Corporate Name</label>
                        <input className="form-control" placeholder="Enter Corporate Name" />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Corporate Id </label>
                        <input className="form-control" placeholder="Enter Corporate Id" />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                      <label>Email </label>
                        <input className="form-control" placeholder="Enter Email" />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                      <label>Alternate Email </label>
                        <input className="form-control" placeholder="Enter Alternate Email" />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Number of Employees</label>
                        <input className="form-control" placeholder="Enter Number of Employees" />
                      </div>
                    </div>                  
                    

                    {/* <div className="col-sm-6">
                      <div className="form-group">
                        <label>Website URL</label>
                        <input className="form-control" placeholder="Enter Website" />
                      </div>
                    </div>  */}

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Industry Type</label>
                        <select className="form-control">
                          <option>Select Industry Type</option>
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
                          <option>Select Status</option>
                          <option>Active</option>
                          <option>Block</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Current / former customer
                        </label>
                        <input className="form-control" placeholder="Enter Current / former customer" />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>How did we get to them</label>
                        <select className="form-control">
                          <option selected>Select from below</option>
                          <option>Social Ad</option>
                          <option>Referral</option>
                          <option >Social Media</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>Address</label>
                       <textarea className="form-control" placeholder="Enter Address">
                       </textarea>
                      </div>
                    </div>

                </div>
                <div className="d-flex justify-content-center p-3 gap-2">
                  <button className="btn btn-primary">
                    Add
                  </button>
                  
                    <Link className="btn btn-outline-white" href="/pages/corporate-customer-management">                        
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

export default AddCorporateCustomer;