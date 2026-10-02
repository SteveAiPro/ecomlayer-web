'use client';

import React from 'react';
import Link from 'next/link';
import { Locale, localeNames, supportedLocales, translations } from '@/lib/i18n';
import { Sparkles, Layers, Globe, Shield, RefreshCw, BookOpen } from 'lucide-react';

interface NavbarProps {
  locale?: Locale;
}

export default function Navbar({ locale = 'en' }: NavbarProps) {
  const t = translations[locale]?.nav || translations.en.nav;
  const basePath = locale === 'en' ? '' : `/${locale}`;

  return (
    <nav className="border-b border-slate-800 bg-[#080d1a]/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={basePath || '/'} className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              ⚡️
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-blue-200 bg-clip-text text-transparent">
                EcomLayer<span className="text-cyan-400">.ai</span>
              </span>
              <span className="text-[10px] text-slate-400 -mt-1 font-mono">E-Commerce Layer SaaS</span>
            </div>
          </Link>

          {/* Links */}
          <div className="hidden lg:flex items-center gap-6 text-xs font-medium text-slate-300">
            <Link href="#demos" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              {t.demos}
            </Link>
            <Link href="/replace-text" className="hover:text-cyan-300 transition-colors">
              {t.replaceText}
            </Link>
            <Link href="/translate-image" className="hover:text-cyan-300 transition-colors">
              {t.translate}
            </Link>
            <Link href="/remove-logo" className="hover:text-cyan-300 transition-colors">
              {t.removeLogo}
            </Link>
            <Link href="/white-background" className="hover:text-cyan-300 transition-colors">
              {t.whiteBg}
            </Link>
            <Link href="/blog" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              {t.blog}
            </Link>
            <Link href="/pricing" className="hover:text-cyan-300 transition-colors">
              {t.pricing}
            </Link>
          </div>

          {/* Language Selector + CTA */}
          <div className="flex items-center gap-3">
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-xs text-slate-300 px-2.5 py-1.5 rounded-lg border border-slate-700/80 bg-slate-900/60 hover:border-slate-600 transition-colors">
                <Globe className="w-3.5 h-3.5 text-slate-400" />
                <span>{localeNames[locale]}</span>
              </button>
              <div className="absolute right-0 mt-1 w-32 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl py-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all z-50">
                {supportedLocales.map((loc) => (
                  <Link
                    key={loc}
                    href={loc === 'en' ? '/' : `/${loc}`}
                    className={`block px-3 py-1.5 text-xs ${
                      loc === locale ? 'text-cyan-400 font-bold bg-slate-800/80' : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {localeNames[loc]}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="#demos"
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-md shadow-blue-500/20 transition-all"
            >
              {t.startFree}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
