import React from 'react';
// Remove any Header/Footer imports if they exist
import SignupForm from '@/components/auth/SignupForm';
// ...existing code...

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <SignupForm />
    </main>
  );
}
