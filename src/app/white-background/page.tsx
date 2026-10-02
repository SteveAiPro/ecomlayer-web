import React from 'react';
import type { Metadata } from 'next';
import DemoMatrix from '@/components/DemoMatrix';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Change Image Background to White Online | Amazon Pure White (RGB 255)',
  description: 'Change product image background to pure white (RGB 255, 255, 255) for Amazon MAIN image compliance. Keeps contact shadows intact.',
  alternates: {
    canonical: 'https://ecomlayer.ai/white-background',
  },
};

export default function WhiteBackgroundPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase">
          ⚪️ Job-To-Be-Done: Amazon White Background
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white mt-4 mb-6">
          Instant Amazon Pure White Background (RGB 255, 255, 255)
        </h1>
        <p className="text-slate-300 text-base leading-relaxed mb-8">
          Ensure 100% compliance with Amazon Main Image requirements. Separate products cleanly while preserving realistic bottom shadows for natural depth.
        </p>
        <div className="flex justify-center gap-4 text-xs font-semibold text-emerald-400">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Strict RGB 255 Compliance</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Natural Ground Shadow Preserved</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Pass Amazon Search Audits</span>
        </div>
      </div>

      <DemoMatrix />
    </div>
  );
}
