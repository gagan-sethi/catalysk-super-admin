'use client'

// import node module libraries
import { useState } from 'react'
import { usePathname } from 'next/router'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import { PageHeading } from 'widgets'

const AddPaymentPlan = () => {
  // const router = usePathname();

  // Form state
  const [formData, setFormData] = useState({
    plan_name: '',
    duration_type: '',
    duration: '',
    amount: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [successMessage, setSuccessMessage] = useState('')

  const AUTH_TOKEN =
    'Bearer d527c719af2db07b02b744f836bd3361b4609c45bade79e1b9417641f79022e8935ac128ed40cc8fb52279e56cfcfba86d2d86d40ea005fb6192bb3f906ee49fe984947f584fb0661785c49afc6553b4da9c2ad86c8a4ed07d100f370e8fc2343a74c3ed68d3fe2768612cde0b208ee5444f3b902a436dc4a5d6f900ceea866c33c83265b708c617cde2ac6dc755456a491236d8e996e3b8f740435459619c13282276d91505d74839aa129b0a17f16a4976c589b59944104ec6927ecc2fab3eddd67087a1aa5d4444462cd48be77a8d'

  // Handle input changes
  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Validate form data
  const validateForm = () => {
    const { plan_name, duration_type, duration, amount } = formData
    if (!plan_name || !duration_type || !duration || !amount) {
      setError('All fields are required.')
      return false
    }
    if (isNaN(duration) || duration <= 0) {
      setError('Duration must be a positive number.')
      return false
    }
    if (isNaN(amount) || amount <= 0) {
      setError('Amount must be a positive number.')
      return false
    }
    setError(null)
    return true
  }

  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSuccessMessage('')

    try {
      const response = await fetch(
        'https://betazone.promaticstechnologies.com/admin/payment/addPlan',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: AUTH_TOKEN
          },
          body: JSON.stringify(formData)
        }
      )

      if (!response.ok) {
        throw new Error('Failed to add the payment plan')
      }

      const data = await response.json()
      if (data.code === 200) {
        setSuccessMessage(data.message)
        setFormData({
          plan_name: '',
          duration_type: '',
          duration: '',
          amount: ''
        })
      } else {
        setError('An unexpected error occurred.')
      }
    } catch (error) {
      console.error('Error adding payment plan:', error)
      setError('Failed to add the payment plan.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Container fluid className='p-6'>
      {/* Page Heading */}
      <PageHeading heading='Add Payment Plan' />

      <div className='main-content-wrapper'>
        <div className='card'>
          <div className='card-body'>
            <Form onSubmit={handleSubmit}>
              {/* Error Message */}
              {error && <Alert variant='danger'>{error}</Alert>}

              {/* Success Message */}
              {successMessage && (
                <Alert variant='success'>{successMessage}</Alert>
              )}

              {/* Plan Name */}
              <Form.Group className='mb-3'>
                <Form.Label>Plan Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter plan name'
                  name='plan_name'
                  value={formData.plan_name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </Form.Group>

              {/* Duration Type */}
              <Form.Group className='mb-3'>
                <Form.Label>Duration Type</Form.Label>
                <Form.Select
                  name='duration_type'
                  value={formData.duration_type}
                  onChange={handleChange}
                  disabled={isSubmitting}
                >
                  <option value=''>Select Duration Type</option>
                  <option value='day'>Day</option>
                  <option value='month'>Month</option>
                  <option value='year'>Year</option>
                </Form.Select>
              </Form.Group>

              {/* Duration */}
              <Form.Group className='mb-3'>
                <Form.Label>Duration</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Enter duration (e.g., 1)'
                  name='duration'
                  value={formData.duration}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </Form.Group>

              {/* Amount */}
              <Form.Group className='mb-3'>
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Enter amount'
                  name='amount'
                  value={formData.amount}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </Form.Group>

              <div className='d-flex justify-content-center align-items-center'>
                <Button variant='primary' type='submit' disabled={isSubmitting}>
                  {isSubmitting ? 'Saving...' : 'Save Plan'}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default AddPaymentPlan
