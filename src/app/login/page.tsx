import React from 'react';
// Remove any Header/Footer imports if they exist
import LoginForm from '@/components/auth/LoginForm';
// ...existing code...

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <LoginForm />
    </main>
  );
}
