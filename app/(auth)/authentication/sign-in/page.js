"use client";

// import node module libraries
import { Row, Col, Card, Form, Button, Image, Toast } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SpinnersCode from "data/code/SpinnersCode";
import { Spinner } from "react-bootstrap";
import toast, { Toaster }  from 'react-hot-toast';
import Cookies from 'js-cookie';



// import hooks
import useMounted from "hooks/useMounted";
import { useEffect, useState } from "react";

const SignIn = () => {
  const hasMounted = useMounted();
  const router = useRouter();

  const [inputActive, setInputActive] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setpasswordError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");



  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    // setErrorMessage(false);
    setpasswordError("")
  };
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if((!email || !validateEmail(email)) && !password ){
      setEmailError("Enter a valid email address");
      setpasswordError("Please enter password");
    }else  if (!email || !validateEmail(email)) {
      setEmailError("Enter a valid email address");
      return;
    } else if (!password) {
      setpasswordError("Please enter password");
      return;
    } else {
      try {
        setIsLoader(true);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          }
        );
        const data = await res.json();
                                    
        if(data.errors){
          // console.log(data)
          toast.error(data.errors.msg);
        }
        
        if (data.code == 200) {
          // console.log(data);
          toast.success("Login Successfully");
          // Cookies.set('token', data.data.token, { expires: 7 });
          // Cookies.set("isLogedIn", true);
          localStorage.setItem("token", data.data.token);
          localStorage.setItem("isLogedIn", true);
          router.push("/pages/dashboard");
          // localStorage.setItem("token", data.data.token);
          // localStorage.setItem("isLogedIn", true);

        } else {
          setErrorMessage(data.errors?.msg || "An error occurred");
        }
      } catch (error) {
        setErrorMessage("An error occurred. Please try again.");
      }
      setIsLoader(false);
    }
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setInputActive(e.target.value !== "");
    setEmailError("");
  };

  

  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6">
            <div className="mb-4">
              <Link href="/">
                {/* <Image
                  src="/images/brand/logo/logo.svg"
                  className="mb-4"
                  height={50}
                  alt=""
                /> */}
                <Image
                  // src='/images/brand/logo/logo.svg'
                  src='/images/brand/logo/newBlackCatalyskLogo.png'
                  className='signInLogo mb-4'
                  alt=''
                />
              </Link>
              <p className="mb-4">Please enter your user information.</p>
            </div>
            {/* Form */}
            {hasMounted && (
              <Form onSubmit={handleClick}>
                {/* Username */}
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Username or email</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter address here"
                    required=""
                    className={`text-lg font-plusJakartaMedium shadow-inputshadow w-full h-14 rounded-xl text-inputTextColor py-3 px-6 bg-inputBg customInput ${
                      emailError ? "border border-red-500" : ""
                    }`}
                    value={email}
                    onChange={(event)=>{handleInputChange(event)}}
                  />
                  {emailError && (
                    <p className="text-danger text-sm mt-2">{emailError}</p>
                  )}
                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="**************"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  {passwordError && (
                    <p className="text-danger text-sm mt-2">{passwordError}</p>
                  )}
                </Form.Group>

                {/* {errorMessage && (
                  <div className="text-red-500 mt-2">{errorMessage}</div>
                )} */}

                {/* Checkbox */}
                <div className="d-lg-flex justify-content-between align-items-center mb-4">
                  <Form.Check type="checkbox" id="rememberme">
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>Remember me</Form.Check.Label>
                  </Form.Check>
                </div>
                <div>
                  {/* Button */}
                 { !isLoader?
                  <div className="d-grid" >
                    <Button variant="primary" type="submit">
                      Sign In
                    </Button>
                  </div>:
                  <div className="d-grid">
                    <Button variant="primary"  style={{
                         height: "2.5rem",
                      }} >
                  <SpinnersCode.BorderSpinner />
                    </Button>

                 </div>}
                  <div className="d-md-flex justify-content-between mt-4">
                    {/* <div className="mb-2 mb-md-0">
                      <Link href="/authentication/sign-up" className="fs-5">Create An Account </Link>
                    </div> */}
                    <div>
                      <Link
                        href="/authentication/forget-password"
                        className="text-inherit fs-5"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Card.Body>
        </Card>
      </Col>
      {/* <Toaster position="top-right" /> */}

    </Row>
  );
};

export default SignIn;
