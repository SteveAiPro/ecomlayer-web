import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Zap, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing & API Plans | EcomLayer.ai',
  description: 'Transparent pricing for individual e-commerce sellers, agencies, and enterprise ERP API integration.',
  alternates: {
    canonical: 'https://ecomlayer.ai/pricing',
  },
};

export default function PricingPage() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase">
          Flexible Credits & Unlimited Plans
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white mt-4 mb-4">
          Supercharge Your E-Commerce Listings
        </h1>
        <p className="text-slate-400 text-sm sm:text-base">
          Start for free with 5 daily image layer exports. Upgrade anytime for 4K exports, batch processing, and API access.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Free Plan */}
        <div className="rounded-2xl border border-slate-800 bg-[#0c1220] p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Free Starter</h3>
            <p className="text-xs text-slate-400 mb-6">Perfect for solo sellers testing a new store.</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-black text-white">$0</span>
              <span className="text-xs text-slate-400">/ month</span>
            </div>
            <ul className="space-y-3 text-xs text-slate-300 mb-8">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 5 image layer separations / day</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Direct in-place text editing</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Standard 1080p WebP export</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 4-language basic translation</li>
            </ul>
          </div>
          <Link href="/#demos" className="w-full py-2.5 rounded-xl border border-slate-700 hover:border-slate-500 text-center font-semibold text-xs text-white transition-colors">
            Start Free
          </Link>
        </div>

        {/* Pro Plan */}
        <div className="rounded-2xl border-2 border-blue-500 bg-[#0f172a] p-8 flex flex-col justify-between relative shadow-2xl shadow-blue-500/10">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[10px] font-bold uppercase tracking-wider">
            Most Popular
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Pro Seller</h3>
            <p className="text-xs text-slate-400 mb-6">For active Amazon, Shopify & TikTok merchants.</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-black text-white">$19</span>
              <span className="text-xs text-slate-400">/ month</span>
            </div>
            <ul className="space-y-3 text-xs text-slate-300 mb-8">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 300 image layer separations / mo</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Ultra-high 4K PNG lossless export</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Lossless logo & watermark inpainting</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 1-Click Amazon pure white background</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Priority neural processing queue</li>
            </ul>
          </div>
          <Link href="/#demos" className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-center font-bold text-xs text-white shadow-lg shadow-blue-500/20 transition-all">
            Upgrade to Pro
          </Link>
        </div>

        {/* Agency / API */}
        <div className="rounded-2xl border border-slate-800 bg-[#0c1220] p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Agency & API</h3>
            <p className="text-xs text-slate-400 mb-6">For brands, ERP software, and high-volume teams.</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-black text-white">$79</span>
              <span className="text-xs text-slate-400">/ month</span>
            </div>
            <ul className="space-y-3 text-xs text-slate-300 mb-8">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 2,000 layer decompositions / mo</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> REST API & Webhook automation</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Batch folder upload & translation</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Custom PSD / Figma export options</li>
            </ul>
          </div>
          <Link href="/#demos" className="w-full py-2.5 rounded-xl border border-slate-700 hover:border-slate-500 text-center font-semibold text-xs text-white transition-colors">
            Contact Enterprise
          </Link>
        </div>
      </div>
    </div>
  );
}
