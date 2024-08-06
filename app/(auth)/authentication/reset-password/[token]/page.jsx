'use client'

// import node module libraries
import { Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useParams } from 'react-router';

// import hooks
import useMounted from 'hooks/useMounted';
import { useEffect, useState } from "react";

const ResetPassword = () => {
  const hasMounted = useMounted();
 
   const [password, setPassword] = useState('')
  const router = useRouter();
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
   const params= useParams()


   const urlObj = typeof window !== "undefined" ? new URL(window.location.href) : '';

   const pathname =  urlObj ? urlObj.pathname : '';
const token = pathname.split('/').pop();
console.log(token); 

     


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(false);
    setErrorMessage("");
  };

  const validatePassword = (password) => {
    const minLength = /.{8,}/;
  

    return {
      minLength: minLength.test(password),
     
    };
  };

  const passwordValidations = validatePassword(password);
  const allValid = Object.values(passwordValidations).every(Boolean);

  const handlechangePassword = async (e) => {
        e.preventDefault();

    if (!allValid) {
      setPasswordError(true);
    } else {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/resetPassword`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({password, token }),
        });
        const data = await res.json();
        console.log(data)
        if (data.code == 200) {
          router.push('/authentication/sign-in');
        } else {
          setErrorMessage(data.errors?.msg || "An error occurred");
          setPasswordError(true);
        }
      } catch (error) {
        setErrorMessage("An error occurred. Please try again.");
        setPasswordError(true);
      }
    }
  };




  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6">
            <div className="mb-4">
              <Link href="/"><Image src="/images/brand/logo/logo.svg" className="mb-3" height="50" alt="" /></Link>
              <p className="mb-4"> Reset your password.</p>
            </div>
            {/* Form */}
            {hasMounted && 
            <Form  onSubmit={handlechangePassword}>
              {/* Email */}
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" name="email" placeholder="Enter Your password"  value={password}
                onChange={handlePasswordChange}/>
                 <div className="text-xs text-textColor placeholder-opacity-70 mt-2 space-x-1 flex flex-wrap">
                <span className={`text-${passwordValidations.minLength ? "successColor" : "red-500"}`}>Minimum 8 characters required.</span>
              
              </div>
                {passwordError && (
                <div className="text-red-500 mt-2">
                  {errorMessage}
                </div>
              )}
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

export default ResetPassword