import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Get the token from localStorage
    const token = localStorage.getItem('token'); // or get from cookies, depending on where you store it
console.log("Token is==>", token);
    if (!token) {
      // If there's no token, the user is not logged in
      router.push('/authentication/sign-in');
      return;
    }

    // Check if the token is expired or invalid by decoding it (if using JWT)
    const tokenExpiration = decodeTokenExpiration(token); // Replace with your own decoding function
    console.log("Token Expiration Is===>", tokenExpiration);
    if (tokenExpiration && new Date(tokenExpiration) < new Date()) {
      // If token is expired, log out the user and redirect to login page
      localStorage.removeItem('token');
      router.push('/authentication/sign-in');
    } else {
      // Token is valid, stay on the home page or proceed
      router.push('/dashboard'); // Or wherever you want the user to go
    }
  }, [router]);

  const decodeTokenExpiration = (token) => {
    // Decode the token (you can use JWT or any method you use for tokens)
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      
      const decoded = JSON.parse(jsonPayload);
      return decoded.exp ? new Date(decoded.exp * 1000) : null; // Assuming 'exp' is the expiration time
    } catch (e) {
      return null;
    }
  };

  return <div>Loading...</div>; // Show loading state while checking the token
}
