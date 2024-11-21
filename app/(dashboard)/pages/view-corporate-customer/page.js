'use client'
// import node module libraries
import { Container } from 'react-bootstrap'

// import widget as custom components
import { PageHeading } from 'widgets'

// import subcomponents
import CorporateCustomerGeneralInfo from 'sub-components/corporate-customer-management/CorporateCustomerGeneralInfo'
import CorporateCustomerBankDetails from 'sub-components/corporate-customer-management/CorporateCustomerBankDetails'
import CorporateAdmins from 'sub-components/corporate-customer-management/CorporateAdmins'

const ViewCorporateCustomer = () => {
  return (
    <>
      <Container fluid className='p-6'>
        {/* Page Heading */}
        <PageHeading heading='View Corporate Customer' />

        <div className='main-content-wrapper'>
          <div className='myVerticalTabs'>
            <div class='d-flex align-items-start gap-4'>
              <div
                class='nav flex-column nav-pills'
                id='v-pills-tab'
                role='tablist'
                aria-orientation='vertical'
              >
                <button
                  class='nav-link active text-nowrap'
                  id='v-pills-home-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#v-pills-general'
                  type='button'
                  role='tab'
                  aria-controls='v-pills-home'
                  aria-selected='true'
                >
                  General Information
                </button>
                <button
                  class='nav-link'
                  id='v-pills-admins-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#v-pills-admins'
                  type='button'
                  role='tab'
                  aria-controls='v-pills-admins'
                  aria-selected='false'
                >
                  Admins
                </button>
                <button
                  class='nav-link'
                  id='v-pills-profile-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#v-pills-employees'
                  type='button'
                  role='tab'
                  aria-controls='v-pills-profile'
                  aria-selected='false'
                >
                  Bank Details
                </button>
              </div>

              <div class='tab-content' id='v-pills-tabContent'>
                {/* general-info-tab-start */}

                <div
                  class='tab-pane fade show active'
                  id='v-pills-general'
                  role='tabpanel'
                  aria-labelledby='v-pills-home-tab'
                  tabindex='0'
                >
                  <CorporateCustomerGeneralInfo />
                </div>

                {/* employees-tab-start */}

                <div
                  class='tab-pane fade'
                  id='v-pills-admins'
                  role='tabpanel'
                  aria-labelledby='v-pills-profile-tab'
                  tabindex='0'
                >
                  {/* Corporate-employees-list */}

                  <CorporateAdmins />
                </div>
                
                <div
                  class='tab-pane fade'
                  id='v-pills-employees'
                  role='tabpanel'
                  aria-labelledby='v-pills-profile-tab'
                  tabindex='0'
                >
                  {/* Corporate-employees-list */}

                  <CorporateCustomerBankDetails />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* modals */}
      </Container>
    </>
  )
}

export default ViewCorporateCustomer
