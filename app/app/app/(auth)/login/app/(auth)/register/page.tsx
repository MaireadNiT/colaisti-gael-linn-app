
import { useState } from 'react';
import { createBrowserSupabase } from '@/lib/supabase/client';

export default function RegisterPage() {
  const supabase = createBrowserSupabase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  async function handleRegister(e) {
    e.preventDefault();
    setError('');

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });

    if (error) setError(error.message);
    else window.location.href = '/';
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Create an Account</h1>
      <form onSubmit={handleRegister} style={{ display: 'grid', gap: '1rem', maxWidth: '300px' }}>
        <input
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button>Create Account</button>
      </form>

      <p><a href="/login">Have an account? Log in</a></p>
    </main>
  );
}
