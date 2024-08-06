'use client'

// import node module libraries
import { Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import Link from 'next/link';

// import hooks
import useMounted from 'hooks/useMounted';
import { useEffect, useState } from "react";

const ForgetPassword = () => {
  const hasMounted = useMounted();
    const [emailError, setEmailError] = useState("");
    const [email, setEmail] = useState("");
      const production = "true";
                const [errorMessage, setErrorMessage] = useState("");


const handleInputChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

    const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

     const handleClick =async (e) => {
    e.preventDefault();
    if (!email || !validateEmail(email)) {
         setEmailError("Enter a valid email address");
      return;
    
    }else {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/forgotPassword`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, production }),
        });
        const data = await res.json();
        console.log(data.code)
        if (data.code == 200) {
        console.log('test')
            setErrorMessage("Link sent to registered mail id. Please check your mail.");
              } else {
        setErrorMessage(data.errors?.msg || "An error occurred");
      }
      } catch (error) {
        setErrorMessage("An error occurred. Please try again.");
      }
    }

   }


  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6">
            <div className="mb-4">
              <Link href="/"><Image src="/images/brand/logo/logo.svg" className="mb-3" height="50" alt="" /></Link>
              <p className="mb-4">Don&apos;t worry, we&apos;ll send you an email to reset your password.</p>
            </div>
            {/* Form */}
            {hasMounted && 
            <Form  onSubmit={handleClick}>
              {/* Email */}
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name="email" placeholder="Enter Your Email"  value={email}
                onChange={handleInputChange}/>
                 {emailError && <p className="text-red-500 text-sm mt-2">{emailError}</p>}
                  {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
              </Form.Group>
              {/* Button */}
              <div className="mb-3 d-grid">
                <Button variant="primary" type="submit">Reset Password</Button>
              </div>
              <span>Don&apos;t have an account? <Link href="/authentication/sign-in">Sign In</Link></span>
            </Form>
            }
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default ForgetPassword