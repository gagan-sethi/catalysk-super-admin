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
import CorporateGeneralInfo from "sub-components/corporate-management/CorporateGeneralnfo";
import CorporateEmployees from "sub-components/corporate-management/CorporateEmployees";
import ViewCorporateEmployee from "sub-components/corporate-management/ViewCorporateEmployee";

const ViewCorporate = () => {
  return (
    <>
      <Container fluid className="p-6">
        {/* Page Heading */}
        <PageHeading heading="View Corporate" />

        <div className="main-content-wrapper">
       
              <div className="myVerticalTabs">

              <div class="d-flex align-items-start gap-4">

              <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button class="nav-link active text-nowrap" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-general" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">General Information</button>
                <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-employees" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Employees</button>
              </div>

              <div class="tab-content" id="v-pills-tabContent">
                
                  {/* general-info-tab-start */}
   
                <div class="tab-pane fade show active" id="v-pills-general" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                    <CorporateGeneralInfo/>
                </div>
    
                {/* employees-tab-start */}

                <div class="tab-pane fade" id="v-pills-employees" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">

                {/* Corporate-employees-list */}

                  <CorporateEmployees/>

                {/* view-corporate-employees-details */}

                  {/* <ViewCorporateEmployee/> */}

                </div> 
             
                       
               </div>

                  </div>
                            
           
          </div>
        </div>

        {/* modals */}

          {/* <!-- Modal --> */}

          <div class="modal fade" id="sparks-update" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Sparks Update</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                      <div className="update-sparks-mdl">
                          <div className="form-group mt-2">
                              <label className="mb-2">Sparks Amount</label>
                              <input className="form-control" placeholder="Enter Amount"/>
                          </div>
                          <div className="form-group mt-2">
                              <label className="mb-2">Reason</label>
                              <input className="form-control" placeholder="Enter Reason"/>
                          </div>
                      </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-white">Add</button>
                  <button type="button" class="btn btn-outline-white">Minus</button>
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default ViewCorporate;