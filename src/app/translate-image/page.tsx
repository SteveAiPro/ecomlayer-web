import React from 'react';
import type { Metadata } from 'next';
import DemoMatrix from '@/components/DemoMatrix';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Translate Product Image Online | AI E-Commerce Localization Tool',
  description: 'Translate text in product photos for Amazon US, Japan, Germany, and Latin America. Preserves typography layout and inpaints clean backgrounds.',
  alternates: {
    canonical: 'https://ecomlayer.ai/translate-image',
  },
};

export default function TranslateImagePage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase">
          🌐 Job-To-Be-Done: Translate Product Image
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white mt-4 mb-6">
          Translate E-Commerce Infographics into 4+ Languages in 1 Click
        </h1>
        <p className="text-slate-300 text-base leading-relaxed mb-8">
          Cross-border sellers can localize product feature infographics into English, Japanese, Spanish, and German without re-designing master files.
        </p>
        <div className="flex justify-center gap-4 text-xs font-semibold text-emerald-400">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Native E-Commerce Terminology</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Layout Auto-Balancing</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Amazon & Shopify Ready</span>
        </div>
      </div>

      <DemoMatrix />
    </div>
  );
}
