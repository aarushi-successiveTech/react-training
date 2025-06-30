
"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from './AuthProvider';

export default function HomePage() {
  const { isAuthenticated, login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    login(); 
    router.push('/products');
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Home Page</h1>
      {isAuthenticated ? (
        <p>You are already logged in.</p>
      ) : (
        <p>Please log in to view protected content.</p>
      )}

      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
        <button onClick={handleLogin} disabled={isAuthenticated}>
          Log In
        </button>
        <Link href="/products">
          <button>Go to Products (Protected)</button>
        </Link>
      </div>
      
      <div style={{ marginTop: '2rem', border: '1px solid #ccc', padding: '1rem' }}>
        <h3>How to Test:</h3>
        <ol>
          <li>Click on "Go to Products". You should be sent back here.</li>
          <li>Click the "Log In" button. You will be redirected to the Products page.</li>
          <li>Now you can see the products. Click "Log Out" to return here.</li>
        </ol>
      </div>
    </main>
  );
}

