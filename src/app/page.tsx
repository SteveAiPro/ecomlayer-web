import React from 'react';
import Link from 'next/link';
import True3DExplodedStage from '@/components/True3DExplodedStage';
import AmazonShowcase from '@/components/AmazonShowcase';
import DemoMatrix from '@/components/DemoMatrix';
import { ArrowRight, Sparkles, Layers, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-600/15 via-cyan-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          Next-Gen AI E-Commerce Layer Decomposition
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-none mb-6">
          Decompose Product Photos into{' '}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
            Editable Layers
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
          No Photoshop required. Turn any flat e-commerce master shot into separated typography, product, logo, and background layers. Edit copy in-place, localize into 4 languages, and switch to Amazon pure white backgrounds.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="#amazon-3d-stage"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
          >
            <Zap className="w-4 h-4" />
            <span>体验真实电商图 3D 分层与在线改字</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#demos"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 border border-slate-700/80 hover:border-slate-600 text-slate-200 transition-colors"
          >
            浏览 40 款品类演示
          </Link>
        </div>

        {/* E-Commerce Trust Badges */}
        <div className="pt-8 border-t border-slate-800/80 max-w-3xl mx-auto">
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-4">
            Trusted by Top Sellers on Global Marketplaces
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-xs font-semibold">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Amazon FBA Ready</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Shopify Storefronts</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> TikTok Shop Viral Clips</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> TEMU & AliExpress</span>
          </div>
        </div>
      </section>

      {/* Flagship Section: True 3D Exploded Layer Decomposition Stage */}
      <div id="amazon-3d-stage">
        <True3DExplodedStage />
      </div>

      {/* Real Amazon Official Multi-Card Grid */}
      <div id="amazon-live">
        <AmazonShowcase />
      </div>

      {/* 4 Core Pillars Section */}
      <section className="py-16 bg-[#0a0f1d] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
              Four Core Workflows for E-Commerce Efficiency
            </h2>
            <p className="text-sm text-slate-400">
              Replace days of manual Photoshop revisions with instant, non-destructive layer editing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: 'Replace Text in Image',
                slug: '/replace-text',
                desc: 'Click on any copy to change specs, ingredient percentages, and discount badges without touching the product.',
                icon: '✏️',
                cta: 'Explore Replace Text →',
              },
              {
                title: 'Translate Product Image',
                slug: '/translate-image',
                desc: 'Auto-translate listings into English, Japanese, Spanish, and German while keeping typography matching.',
                icon: '🌐',
                cta: 'Explore Translation →',
              },
              {
                title: 'Remove Brand Logo',
                slug: '/remove-logo',
                desc: 'Clean supplier logos and watermarks from 1688/Taobao master shots with seamless background inpainting.',
                icon: '🛡️',
                cta: 'Explore Logo Eraser →',
              },
              {
                title: 'Amazon White Background',
                slug: '/white-background',
                desc: 'Switch to RGB 255 pure white background in 1 click to satisfy Amazon compliance with contact shadows preserved.',
                icon: '⚪️',
                cta: 'Explore White Bg →',
              },
            ].map((feature, i) => (
              <Link
                key={i}
                href={feature.slug}
                className="group p-6 rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-blue-500/50 hover:bg-[#10182b] transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl mb-4 block">{feature.icon}</span>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {feature.desc}
                  </p>
                </div>
                <span className="text-xs font-semibold text-blue-400 group-hover:text-cyan-300 transition-colors">
                  {feature.cta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 40 Live Demos Interactive Section */}
      <DemoMatrix />
    </div>
  );
}
