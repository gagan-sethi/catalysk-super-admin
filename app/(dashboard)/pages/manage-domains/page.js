'use client';

import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const ManageDomains = () => {
  const searchParams = useSearchParams();
  const companyId = searchParams.get('customerId'); // Get `company_id` from the URL
  const [token, setToken] = useState('');
  const [domains, setDomains] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [domain, setDomain] = useState('');

  const handleAddDomain = async () => {
    //   if (!companyId) return;
 
       setIsLoading(true);
 
       const formData={'company_id':'67779f1d3562465c7fb6ba0b', domain:domain};
       try {
         const response = await fetch(`http://localhost:7001/corp_customer/addDomain`, {
           method: 'POST',
           body: JSON.stringify(formData),
           headers: {
             'Content-Type': 'application/json',
             Authorization: `Bearer ${token}`,
           },
         });
 
         if (!response.ok) {
           throw new Error('Failed to fetch domains');
         }
 
         const data = await response.json();
         setDomains(data.domains || []);
       } catch (error) {
         console.error('Error fetching domains:', error);
       } finally {
         setIsLoading(false);
       }
     };

  useEffect(() => {
    // Fetch the token from localStorage
    const tokenFromLocalStorage = localStorage.getItem('token');
    setToken(tokenFromLocalStorage || '');
  }, []);

  useEffect(() => {
    // Fetch domains for the company when the component loads
    const fetchDomains = async () => {
   //   if (!companyId) return;

      setIsLoading(true);

      const formData={'company_id':'67779f1d3562465c7fb6ba0b'};
      try {
        const response = await fetch(`http://localhost:7001/corp_customer/getDomains`, {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch domains');
        }

        const data = await response.json();
        setDomains(data.domains || []);
      } catch (error) {
        console.error('Error fetching domains:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      fetchDomains();
    }
  }, [companyId, token]);

  const handleDeleteDomain = async (domainId) => {
    try {
      const response = await fetch(`/api/domain/${domainId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete domain');
      }

      // Refresh domains after deletion
      setDomains(domains.filter((domain) => domain._id !== domainId));
    } catch (error) {
      console.error('Error deleting domain:', error);
    }
  };

  return (
    <>
      <Container fluid className="p-6">
        {/* Page Heading and Add New Invoice Button */}
        <div className="d-flex justify-content-between mb-4">
          <h2>Domains Management</h2>
          <Link href="">
            <button
              type="button"
              className="btnPrimary"
              data-bs-target="#addDomain"
              data-bs-toggle="modal"
            >
              Add New Domain
            </button>
          </Link>
        </div>

        <div className="main-content-wrapper">
          <div className="card">
            <div className="card-body">
              <div className="table-div">
                {isLoading ? (
                  <p>Loading domains...</p>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-striped text-center">
                      <thead>
                        <tr>
                          <th>Domain</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {domains.length > 0 ? (
                          domains.map((domain) => (
                            <tr key={domain._id}>
                              <td>{domain.domain}</td>
                              <td className="d-flex justify-content-center">
                                <div className="dropdown">
                                  <span
                                    className="cstmDropdown dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="fe fe-more-vertical"></i>
                                  </span>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        onClick={() =>
                                          handleDeleteDomain(domain._id)
                                        }
                                      >
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="2">No domains found</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Add Domain Modal */}
      <div
        className="modal fade"
        id="addDomain"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-4" id="exampleModalLabel">
                Add New Domain
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <h5>Please Enter the Domain Name</h5>
                <input
                  className="form-control"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddDomain}
                data-bs-dismiss="modal"
              >
                Save Changes
              </button>
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
    </>
  );
};

export default ManageDomains;
