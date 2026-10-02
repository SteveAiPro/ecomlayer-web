import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#060a12] text-slate-400 py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">⚡️</span>
              <span className="font-extrabold text-base text-white">EcomLayer.ai</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-4">
              AI E-Commerce Layer Decomposition & Real-Time Typography Editing SaaS. Empowering global cross-border sellers on Amazon, Shopify, TEMU, and TikTok Shop.
            </p>
            <p className="text-slate-500">© 2026 EcomLayer.ai. All rights reserved.</p>
          </div>

          <div>
            <h4 className="font-bold text-slate-200 mb-3 uppercase tracking-wider text-[11px]">Core Features</h4>
            <ul className="space-y-2">
              <li><Link href="/replace-text" className="hover:text-white">Replace Text in Image</Link></li>
              <li><Link href="/translate-image" className="hover:text-white">Translate Product Image</Link></li>
              <li><Link href="/remove-logo" className="hover:text-white">Remove Brand Logo</Link></li>
              <li><Link href="/white-background" className="hover:text-white">Amazon White Background</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-200 mb-3 uppercase tracking-wider text-[11px]">E-E-A-T Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="hover:text-white">10 Technical Guides</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Pricing & API</Link></li>
              <li><Link href="#demos" className="hover:text-white">40 Live Demos</Link></li>
              <li><Link href="/blog/amazon-main-image-guidelines-2026" className="hover:text-white">Amazon Compliance 2026</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-200 mb-3 uppercase tracking-wider text-[11px]">Legal & Trust</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><span className="text-emerald-400 font-semibold">SOC2 Type II Ready</span></li>
              <li><span className="text-slate-500">GDPR & CCPA Compliant</span></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
