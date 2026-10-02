import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import DemoMatrix from '@/components/DemoMatrix';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Replace Text in Image Online | AI E-Commerce Copy & Typography Editor',
  description: 'How to replace text in product images online without Photoshop. AI detects text, separates background, and lets you type new specs and discounts directly.',
  alternates: {
    canonical: 'https://ecomlayer.ai/replace-text',
  },
};

export default function ReplaceTextPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase">
          ✏️ Job-To-Be-Done: Replace Text in Image
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white mt-4 mb-6">
          Replace Text in Product Images with In-Place AI Editing
        </h1>
        <p className="text-slate-300 text-base leading-relaxed mb-8">
          Need to change outdated warranty years, correct ingredient percentages, or update promotional copy? EcomLayer separates text from background, giving you a true contenteditable layer matching original fonts.
        </p>
        <div className="flex justify-center gap-4 text-xs font-semibold text-emerald-400">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> 0% Distortion on Product</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Matched Font Family & Weight</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Direct Canvas Typing</span>
        </div>
      </div>

      <DemoMatrix />
    </div>
  );
}
