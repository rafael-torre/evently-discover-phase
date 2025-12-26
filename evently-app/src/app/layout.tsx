import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Evently App',
  description: 'Create and manage events with AI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

