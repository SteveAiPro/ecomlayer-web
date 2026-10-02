import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import DemoMatrix from '@/components/DemoMatrix';
import { Locale, supportedLocales, translations } from '@/lib/i18n';
import { ArrowRight, Sparkles, CheckCircle2, Zap } from 'lucide-react';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return supportedLocales
    .filter((loc) => loc !== 'en')
    .map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const loc = (supportedLocales.includes(locale as Locale) ? locale : 'en') as Locale;
  const t = translations[loc]?.hero || translations.en.hero;

  return {
    title: `EcomLayer.ai | ${t.title1}`,
    description: t.desc,
    alternates: {
      canonical: `https://ecomlayer.ai/${loc}`,
    },
  };
}

export default async function LocalizedPage({ params }: Props) {
  const { locale } = await params;
  const loc = (supportedLocales.includes(locale as Locale) ? locale : 'en') as Locale;
  const t = translations[loc]?.hero || translations.en.hero;
  const f = translations[loc]?.features || translations.en.features;

  return (
    <div className="relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-600/15 via-cyan-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Hero */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          {t.badge}
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-none mb-6">
          {t.title1}{' '}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
            {t.title2}
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
          {t.desc}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="#demos"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
          >
            <Zap className="w-4 h-4" />
            <span>{t.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/replace-text"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 border border-slate-700/80 hover:border-slate-600 text-slate-200 transition-colors"
          >
            {t.ctaSecondary}
          </Link>
        </div>

        <div className="pt-8 border-t border-slate-800/80 max-w-3xl mx-auto">
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-4">
            {t.trust}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-[#0a0f1d] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
              {f.title}
            </h2>
            <p className="text-sm text-slate-400">{f.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: f.f1_title, desc: f.f1_desc, icon: '✏️', slug: '/replace-text' },
              { title: f.f2_title, desc: f.f2_desc, icon: '🌐', slug: '/translate-image' },
              { title: f.f3_title, desc: f.f3_desc, icon: '🛡️', slug: '/remove-logo' },
              { title: f.f4_title, desc: f.f4_desc, icon: '⚪️', slug: '/white-background' },
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DemoMatrix />
    </div>
  );
}
