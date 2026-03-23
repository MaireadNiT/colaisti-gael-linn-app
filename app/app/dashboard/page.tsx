
import { createServerSupabase } from '@/lib/supabase/server';

export default async function DashboardPage() {
  const supabase = createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Welcome back to Gael Linn</h1>
      <p>You are logged in as: {user?.email}</p>

      <ul>
        <li><a href="/settings/profile">Edit Profile</a></li>
        <li><a href="/admin/users">Manage Users (admins only)</a></li>
      </ul>
    </main>
  );
}
