
'use client';
import { useEffect } from 'react';
import { createBrowserSupabase } from '@/lib/supabase/client';

export default function LogoutPage() {
  useEffect(() => {
    const run = async () => {
      const supabase = createBrowserSupabase();
      await supabase.auth.signOut();
      window.location.href = '/login';
