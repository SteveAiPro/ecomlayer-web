import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | EcomLayer.ai',
  description: 'EcomLayer terms of service and commercial license guidelines.',
};

export default function TermsPage() {
  return (
    <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-300 text-xs sm:text-sm leading-relaxed space-y-6">
      <h1 className="text-3xl font-black text-white mb-8">Terms of Service</h1>
      <p>Last updated: October 2, 2026</p>
      <h2 className="text-lg font-bold text-white pt-4">1. Acceptance of Terms</h2>
      <p>By accessing or using EcomLayer.ai, you agree to be bound by these terms. The service is provided to facilitate legal, non-infringing e-commerce content production.</p>
      <h2 className="text-lg font-bold text-white pt-4">2. Commercial Use</h2>
      <p>Outputs generated through EcomLayer.ai may be freely utilized for commercial listings on Amazon, Shopify, Walmart, eBay, and social media channels.</p>
      <h2 className="text-lg font-bold text-white pt-4">3. Prohibited Uses</h2>
      <p>Users may not use EcomLayer.ai to infringe upon third-party trademarks, forge counterfeit logos, or publish misleading product specifications.</p>
    </div>
  );
}
