
'use client';
import { useEffect, useState } from 'react';
import { createBrowserSupabase } from '@/lib/supabase/client';

export default function ProfileSettingsPage() {
  const supabase = createBrowserSupabase();

  const [profile, setProfile] = useState(null);
  const [name, setName] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase
        .from('profiles')
        .select('full_name')
        .eq('id', user.id)
        .single();

      setProfile(data);
      setName(data?.full_name || '');
    }
    loadProfile();
  }, []);

  async function save() {
    setSaved(false);
    const { data: { user } } = await supabase.auth.getUser();

    await supabase.from('profiles').update({ full_name: name }).eq('id', user.id);
    setSaved(true);
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Edit Profile</h1>

      <input
        type="text"
        value={name}
        placeholder="Your name"
        onChange={(e) => setName(e.target.value)}
        style={{ padding: '0.5rem', marginBottom: '1rem' }}
      />

      <button onClick={save} style={{ padding: '0.5rem' }}>
        Save
      </button>

      {saved && <p>Your name has been updated.</p>}
    </main>
  );
}
