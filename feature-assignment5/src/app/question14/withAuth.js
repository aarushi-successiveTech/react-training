
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './AuthProvider'; 


const withAuth = (WrappedComponent) => {
  return function AuthenticatedComponent(props) {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
    
      if (!isAuthenticated) {
        router.push('/');
      }
    }, [isAuthenticated, router]);

    
    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    }
    
    return <p>Redirecting to login...</p>;
  };
};


function ProductsPage() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/'); 
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Protected Products Page</h1>
      <p>You can only see this page if you are logged in!</p>
      <ul>
        <li>Product A</li>
        <li>Product B</li>
      </ul>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default withAuth(ProductsPage);