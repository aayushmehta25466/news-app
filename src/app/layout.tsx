import Header from '@/components/Header';
import Footer from '@/components/Footer';
// ...existing code...

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  // Get the current pathname
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  
  // Check if the current page is an auth page
  const isAuthPage = [
    '/login',
    '/signup',
    '/findaccount',
    '/verify',
    '/reset-password'
  ].some(path => pathname.includes(path));

  return (
    <html lang="en">
      <body>
        {!isAuthPage && <Header />}
        {children}
        {!isAuthPage && <Footer />}
      </body>
    </html>
  );
}
