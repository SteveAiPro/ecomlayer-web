import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Locale } from '@/lib/i18n';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const resolvedParams = await params;
  return (
    <>
      <Navbar locale={resolvedParams.locale as Locale} />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
