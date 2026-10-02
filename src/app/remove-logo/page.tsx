import React from 'react';
import type { Metadata } from 'next';
import DemoMatrix from '@/components/DemoMatrix';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Remove Logo from Image Free | AI E-Commerce Watermark Eraser',
  description: 'Remove brand logos and supplier watermarks from product photos without blur. Inpaint textures cleanly to protect intellectual property.',
  alternates: {
    canonical: 'https://ecomlayer.ai/remove-logo',
  },
};

export default function RemoveLogoPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase">
          🛡️ Job-To-Be-Done: Remove Brand Logo & Watermark
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white mt-4 mb-6">
          Erase Supplier Logos and Watermarks Without Losing Image Quality
        </h1>
        <p className="text-slate-300 text-base leading-relaxed mb-8">
          Preparing white-label listings from factory supply photos? Isolate competitor logos and let our deep inpainting model fill textures seamlessly.
        </p>
        <div className="flex justify-center gap-4 text-xs font-semibold text-emerald-400">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Zero Smudge or Artifacts</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Non-Destructive Layer Separation</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Safe for Commercial Use</span>
        </div>
      </div>

      <DemoMatrix />
    </div>
  );
}
