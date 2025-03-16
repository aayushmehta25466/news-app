import React from 'react';
// Remove any Header/Footer imports if they exist
import FindAccountForm from '@/components/auth/FindAccountForm';
// ...existing code...

export default function FindAccountPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <FindAccountForm />
    </main>
  );
}
