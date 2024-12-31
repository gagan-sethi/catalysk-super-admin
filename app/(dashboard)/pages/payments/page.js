'use client'

// Import necessary libraries
import { useState, useEffect } from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import axios from 'axios';

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rejectionReason, setRejectionReason] = useState('');
  const [selectedPayment, setSelectedPayment] = useState(null);

  // Fetch payments data
  const fetchPayments = async () => {
    try {
      const response = await axios.get(
        
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/payment/getPaymentProof?limit=10&offset=0&search=`,
        {
          headers: {
            Authorization: 'Bearer d527c719af2db07b02b744f836bd3361b4609c45bade79e1b9417641f79022e8935ac128ed40cc8fb52279e56cfcfba86d2d86d40ea005fb6192bb3f906ee49fe984947f584fb0661785c49afc6553b4da9c2ad86c8a4ed07d100f370e8fc2343a74c3ed68d3fe2768612cde0b208ee5444f3b902a436dc4a5d6f900ceea866c33c83265b708c617cde2ac6dc755456a491236d8e996e3b8f740435459619c13282276d91505d74839aa129b0a17f16a4976c589b59944104ec6927ecc2fab3eddd67087a1aa5d4444462cd48be77a8d',
          },
        }
      );
      setPayments(response.data.data);
    } catch (error) {
      console.error('Error fetching payments:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  // Handle approve or reject action
  const handleAction = async (paymentId, status) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/payment/approveOrRejectPayment`,
        {
          id: paymentId,
          status,
          note: status === 'rejected' ? rejectionReason : '',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer d527c719af2db07b02b744f836bd3361b4609c45bade79e1b9417641f79022e8935ac128ed40cc8fb52279e56cfcfba86d2d86d40ea005fb6192bb3f906ee49fe984947f584fb0661785c49afc6553b4da9c2ad86c8a4ed07d100f370e8fc2343a74c3ed68d3fe2768612cde0b208ee5444f3b902a436dc4a5d6f900ceea866c33c83265b708c617cde2ac6dc755456a491236d8e996e3b8f740435459619c13282276d91505d74839aa129b0a17f16a4976c589b59944104ec6927ecc2fab3eddd67087a1aa5d4444462cd48be77a8d',
          },
        }
      );
      console.log('Action response:', response.data);
      fetchPayments(); // Refresh payments list
    } catch (error) {
      console.error('Error processing action:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid className="p-6">
      <PageHeading heading="Subscription Info" />

      <div className="card">  
        <div className="card-body">
          <div className="table-div">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Sr. No.</th>
                    <th scope="col">Username</th>
                    <th scope="col">User ID</th>
                    <th scope="col">Plan Name</th>
                    <th scope="col">Txn ref no</th>
                    <th scope="col">Payment Date</th>
                    <th scope="col">Rejection Reason</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment, index) => (
                    <tr key={payment._id}>
                      <td>{index + 1}</td>
                      <td>{payment.full_name}</td>
                      <td>{payment.email}</td>
                      <td>{payment.plan_name}</td>
                      <td>{payment.ref_number}</td>
                      <td>{new Date(payment.createdAt).toLocaleDateString()}</td>
                      <td>{payment.status === 'rejected' ? payment.note : 'N/A'}</td>
                      <td>
                        {payment.status === 'approved' ? (
                          <Button variant="success" disabled>
                            Approved
                          </Button>
                        ) : payment.status === 'rejected' ? (
                          <div>
                            <Button variant="danger" disabled>
                              Rejected
                            </Button>
                           
                          </div>
                        ) : (
                          <div className="d-flex gap-2">
                            <Button
                              variant="primary"
                              onClick={() => handleAction(payment._id, 'approved')}
                            >
                              Approve
                            </Button>
                            <Button
                              variant="danger"
                              onClick={() => {
                                setSelectedPayment(payment._id);
                                setRejectionReason('');
                              }}
                              data-bs-toggle="modal"
                              data-bs-target="#rejection-modal"
                            >
                              Reject
                            </Button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Rejection Modal */}
      <div
        className="modal fade"
        id="rejection-modal"
        tabIndex="-1"
        aria-labelledby="rejectionModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="rejectionModalLabel">
                Rejection Reason
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Enter reason for rejection"
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
              ></textarea>
            </div>
            <div className="modal-footer">
              <Button
                variant="primary"
                onClick={() => {
                  handleAction(selectedPayment, 'rejected');
                  document.getElementById('rejection-modal').click();
                }}
                disabled={!rejectionReason.trim()}
              >
                Submit
              </Button>
              <Button variant="secondary" data-bs-dismiss="modal">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Payments;
