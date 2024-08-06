'use client'

// import node module libraries
import { Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import Link from 'next/link';
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

// import hooks
import useMounted from 'hooks/useMounted';

const Home = () => {
  const hasMounted = useMounted();
  const router = useRouter()
  if (typeof window !== 'undefined' && !(localStorage.getItem('isLogedIn'))){
                  router.push('/authentication/sign-in')

    }
  

}


export default Home