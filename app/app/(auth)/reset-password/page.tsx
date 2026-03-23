
'use client';
import { useState } from 'react';
import { createBrowserSupabase } from '@/lib/supabase/client';

export default function ResetPasswordPage() {
  const supabase = createBrowserSupabase();
  const [password, setPassword] = useState('');
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  async function updatePassword(e) {
    e.preventDefault();
    setError('');

    const { error } = await supabase.auth.updateUser({ password });

    if (error) setError(error.message);
    else setDone(true);
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Choose a New Password</h1>

      {done ? (
        <p>Your password has been updated. You can now <a href="/login">log in</a>.</p>
      ) : (
        <form
          onSubmit={updatePassword}
          style={{ display: 'grid', gap: '1rem', maxWidth: '300px' }}
        >
          <input
            type="password"
            placeholder="New password"
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: '0.5rem' }}
          />

        
   <p style={{ marginTop: '1rem' }}>
        <a href="/login">Have an account? Log in</a>
      </p>

