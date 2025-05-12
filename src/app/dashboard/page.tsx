'use client'
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch('/api/admin-only');

        if (!response.ok) {
          throw new Error('Access Denied');
        }

        const data = await response.json();
        setMessage(data.message);
      } catch (err) {
        setError('You are not authorized to view this page.');
      }
    }

    checkAuth();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {message ? <p>{message}</p> : <p>Loading...</p>}
    </div>
  );
}
