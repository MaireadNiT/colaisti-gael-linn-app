
'use client';
import { useState } from 'react';
import { createBrowserSupabase } from '@/lib/supabase/client';

export default function ForgotPasswordPage() {
  const supabase = createBrowserSupabase();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  async function sendReset(e) {
    e.preventDefault();
    setError('');

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) setError(error.message);
    else setSent(true);
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Reset Password</h1>

      {sent ? (
        <p>Check your email for the reset link.</p>
      ) : (
        <form onSubmit={sendReset} style={{ display: 'grid', gap: '1rem', maxWidth: '300px' }}>
          <input
            type="email"
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button>Send Reset Email</button>
        </form>
      )}
    </main>
  );
}
