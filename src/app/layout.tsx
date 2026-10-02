import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'EcomLayer.ai | AI E-Commerce Image Layer Decomposition & Live Text Editor',
  description: 'Decompose flat e-commerce photos into editable text, subject, and background layers. Edit typography in-place, translate across 4 languages, and switch to Amazon white background.',
  metadataBase: new URL('https://ecomlayer.ai'),
  alternates: {
    canonical: 'https://ecomlayer.ai',
    languages: {
      'en': 'https://ecomlayer.ai',
      'zh': 'https://ecomlayer.ai/zh',
      'ja': 'https://ecomlayer.ai/ja',
      'es': 'https://ecomlayer.ai/es',
      'de': 'https://ecomlayer.ai/de',
      'fr': 'https://ecomlayer.ai/fr',
      'pt': 'https://ecomlayer.ai/pt',
      'ko': 'https://ecomlayer.ai/ko',
      'x-default': 'https://ecomlayer.ai',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'EcomLayer.ai - AI E-Commerce Layer Decomposition & Live Text Editor',
    description: 'Decompose e-commerce photos into editable layers. Click-to-edit copy, translate to 4 languages, and export 4K images.',
    url: 'https://ecomlayer.ai',
    siteName: 'EcomLayer.ai',
    images: [
      {
        url: 'https://ecomlayer.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EcomLayer.ai E-Commerce Layer Decomposition',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EcomLayer.ai - AI E-Commerce Layer Decomposition',
    description: 'Decompose product photos into editable layers in seconds.',
    images: ['https://ecomlayer.ai/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#070b14] text-slate-100 min-h-screen flex flex-col font-sans antialiased selection:bg-cyan-500 selection:text-black">
        <Navbar locale="en" />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
