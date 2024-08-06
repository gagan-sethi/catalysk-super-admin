// pages/index.js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';




export default function Home() {
  const router = useRouter();


if (localStorage.getItem('isLogedIn')){
router.push('/authentication/sign-in')
        return;
    }
    else{
    router.push('/')
        return
    }
}