import React from 'react';
// Remove any Header/Footer imports if they exist
import OtpVerification from '@/components/auth/OtpVerification';
// ...existing code...

export default function VerifyPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <OtpVerification />
    </main>
  );
}
