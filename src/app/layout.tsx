export const metadata = {
  title: 'Indieverse.art',
  description: 'Cinematic Landing Page',
};

import './globals.css';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

