
'use client';
import { useState } from 'react';
import { createBrowserSupabase } from '@/lib/supabase/client';

export default function LoginPage() {
  const supabase = createBrowserSupabase();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    setError('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      window.location.href = '/';
    }
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Log In</h1>

      <form
        onSubmit={handleLogin}
        style={{ display: 'grid', gap: '1rem', maxWidth: '300px' }}
      >
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '0.5rem' }}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: '0.5rem' }}
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button style={{ padding: '0.5rem' }}>Log In</button>
      </form>

      <p style={{ marginTop: '1rem' }}>
        <a href="/register">Create an account</a>
      </p>

      <p style={{ marginTop: '0.5rem' }}>
        <a href="/forgot-password">Forgot your password?</a>
      </p>
    </main>
  );
}
``
