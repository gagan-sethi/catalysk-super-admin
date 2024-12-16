'use client'

// import node module libraries
import { Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { PageHeading } from 'widgets'
import Link from 'next/link'

const PaymentPlans = () => {
  // State to manage payment plans
  const [plans, setPlans] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [token, setToken] = useState("");

  useEffect(() => {
    // Only runs on the client-side
    const tokenFromLocalStorage = localStorage.getItem("token");
    setToken(tokenFromLocalStorage || "");
  }, []);

  
    

  // Fetch payment plans from the API
  const fetchPlans = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(
        'https://betazone.promaticstechnologies.com/admin/payment/getPlans',
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      if (!response.ok) {
        throw new Error('Failed to fetch payment plans')
      }
      const data = await response.json()
      setPlans(data.data || [])
    } catch (error) {
      console.error('Error fetching payment plans:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Delete a plan using the API
  const deletePlan = async planId => {
    if (!confirm('Are you sure you want to delete this plan?')) return
    try {
      const response = await fetch(
        `https://betazone.promaticstechnologies.com/admin/payment/deletePlan/${planId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      if (!response.ok) {
        throw new Error('Failed to delete the plan')
      }
      alert('Plan deleted successfully')
      // Refresh the plans after deletion
      fetchPlans()
    } catch (error) {
      console.error('Error deleting plan:', error)
      alert('Failed to delete the plan')
    }
  }

  useEffect(() => {
    fetchPlans()
  }, [token])

  return (
    <>
      <Container fluid className='p-6'>
        {/* Page Heading */}
        <div className='d-flex justify-content-between'>
          <PageHeading heading='Payment Plans' />
          <Link href='/pages/add-payment-plan' passHref>
            <button type='button' className='btnPrimary'>
              Add New Plan
            </button>
          </Link>
        </div>

        <div className='main-content-wrapper'>
          <div className='card'>
            <div className='card-body'>
              <div className='table-div'>
                {isLoading ? (
                  <div>Loading...</div>
                ) : (
                  <div className='table-responsive'>
                    <table className='table table-striped'>
                      <thead>
                        <tr>
                          <th>Plan Name</th>
                          <th>Duration</th>
                          <th>Duration Type</th>
                          <th>Amount</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {plans.map(plan => (
                          <tr key={plan._id}>
                            <td>{plan.plan_name}</td>
                            <td>{plan.duration}</td>
                            <td>{plan.duration_type}</td>
                            <td>${plan.amount}</td>
                            <td>
                              <button
                                className='btn btn-danger btn-sm'
                                onClick={() => deletePlan(plan._id)}
                              >
                                Delete Plan
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default PaymentPlans
