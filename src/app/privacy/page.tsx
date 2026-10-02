import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | EcomLayer.ai',
  description: 'EcomLayer privacy policy, data security practices, and GDPR compliance.',
};

export default function PrivacyPage() {
  return (
    <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-300 text-xs sm:text-sm leading-relaxed space-y-6">
      <h1 className="text-3xl font-black text-white mb-8">Privacy Policy</h1>
      <p>Last updated: October 2, 2026</p>
      <h2 className="text-lg font-bold text-white pt-4">1. Data Ownership & Intellectual Property</h2>
      <p>All product photos, typography assets, and marketing collateral uploaded to EcomLayer.ai remain 100% your exclusive intellectual property. We do not use your proprietary listing photos to train public foundation models without explicit written consent.</p>
      <h2 className="text-lg font-bold text-white pt-4">2. Ephemeral Processing Architecture</h2>
      <p>Images uploaded for layer separation are processed in encrypted memory containers and automatically purged within 24 hours of generation.</p>
      <h2 className="text-lg font-bold text-white pt-4">3. GDPR & CCPA Compliance</h2>
      <p>Users located in the European Economic Area (EEA) and California enjoy full rights of deletion, export, and restriction under applicable global data privacy statutes.</p>
    </div>
  );
}
