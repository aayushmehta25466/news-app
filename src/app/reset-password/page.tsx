import React from 'react';
// Remove any Header/Footer imports if they exist
import ResetPasswordForm from '@/components/auth/ResetPasswordForm';
// ...existing code...

export default function ResetPasswordPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <ResetPasswordForm />
    </main>
  );
}
