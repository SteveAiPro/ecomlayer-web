'use client';

import React, { useState } from 'react';
import catalogData from '@/data/catalog.json';
import { Layers, Globe, Shield, Sparkles, Download, Check, RefreshCw } from 'lucide-react';

export default function DemoMatrix() {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [selectedLP, setSelectedLP] = useState<string>('all');
  const [modes3D, setModes3D] = useState<Record<string, boolean>>({ b1: true });
  const [langs, setLangs] = useState<Record<string, string>>({});
  const [logosHidden, setLogosHidden] = useState<Record<string, boolean>>({});
  const [whiteBgs, setWhiteBgs] = useState<Record<string, boolean>>({});

  const filteredItems = catalogData.filter((item: any) => {
    const matchCat = selectedCat === 'all' || item.category_id === selectedCat;
    const matchLP = selectedLP === 'all' || item.lp_slug === selectedLP;
    return matchCat && matchLP;
  });

  const toggle3D = (id: string, is3D: boolean) => {
    setModes3D((prev) => ({ ...prev, [id]: is3D }));
  };

  const changeLang = (id: string, lang: string) => {
    setLangs((prev) => ({ ...prev, [id]: lang }));
  };

  const toggleLogo = (id: string) => {
    setLogosHidden((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleWhite = (id: string) => {
    setWhiteBgs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="demos" className="py-16 bg-[#070b14] text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            40 Live Cross-Category E-Commerce Demos
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Try True Layer Decomposition Live in Your Browser
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Click directly on any text to type new copy, rotate 3D depth perspective along the Z-axis, switch 4 languages, erase brand logos, and toggle Amazon pure white background.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="bg-[#0b101e] border border-slate-800 rounded-2xl p-4 mb-10 flex flex-col gap-4">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
            <span className="text-xs font-semibold text-slate-400">Category Filter:</span>
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: 'all', label: 'All Categories (40)' },
                { id: 'beauty_cosmetics', label: '💄 Beauty & Skincare (10)' },
                { id: 'electronics_3c', label: '📱 Electronics & 3C (10)' },
                { id: 'fashion_shoes', label: '👟 Fashion & Apparel (10)' },
                { id: 'home_kitchen', label: '☕️ Home & Living (10)' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCat(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedCat === cat.id
                      ? 'bg-blue-600 text-white shadow shadow-blue-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Landing Page Jobs */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-slate-400">SEO Feature Workflows:</span>
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All (40)' },
                { id: 'replace-text', label: '✏️ Replace Text & Specs' },
                { id: 'translate', label: '🌐 4-Lang Translation' },
                { id: 'remove-logo', label: '🛡️ Remove Brand Logo' },
                { id: 'white-background', label: '⚪️ Amazon White Bg (255)' },
              ].map((lp) => (
                <button
                  key={lp.id}
                  onClick={() => setSelectedLP(lp.id)}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                    selectedLP === lp.id
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lp.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 40 Demos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item: any) => {
            const is3D = !!modes3D[item.id];
            const currentLang = langs[item.id] || 'en';
            const t = item.translations[currentLang] || item.translations.en;
            const logoHidden = !!logosHidden[item.id];
            const isWhite = !!whiteBgs[item.id];

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-800 bg-[#0c1220] p-5 shadow-xl transition-all hover:border-slate-700 flex flex-col justify-between"
              >
                {/* Card Top */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono font-bold">
                      #{String(item.index).padStart(2, '0')}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                      {item.category_badge}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[11px]">
                    {item.lp_label}
                  </span>
                </div>

                {/* Interactive Stage */}
                <div className="my-2" style={{ perspective: '1200px' }}>
                  <div
                    className={`relative w-full h-[360px] rounded-xl border border-slate-700/60 transition-transform duration-700 ${
                      is3D ? 'scale-90 rotate-x-12 -rotate-y-24' : ''
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: is3D ? 'rotateY(-24deg) rotateX(14deg) scale(0.88)' : 'none',
                    }}
                  >
                    {/* Layer 4: Background */}
                    <div
                      className={`absolute inset-0 rounded-xl transition-colors duration-300 flex items-center justify-center overflow-hidden ${
                        isWhite
                          ? 'bg-white'
                          : 'bg-gradient-to-b from-slate-100 to-slate-200'
                      }`}
                      style={{
                        transform: is3D ? 'translateZ(0px)' : 'none',
                        boxShadow: is3D ? '-20px 30px 60px rgba(0,0,0,0.6)' : 'none',
                      }}
                    >
                      {!isWhite && (
                        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,transparent_70%)]" />
                      )}
                    </div>

                    {/* Layer 3: Product Subject Graphic */}
                    <div
                      className="absolute inset-0 flex items-center justify-end pr-8 transition-all duration-500"
                      style={{
                        transform: is3D ? 'translateZ(25px)' : 'none',
                        filter: is3D ? 'drop-shadow(-15px 20px 25px rgba(0,0,0,0.3))' : 'none',
                      }}
                    >
                      <div className="w-32 h-32 rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-700 border border-slate-600 flex flex-col items-center justify-center p-3 text-center shadow-2xl">
                        <span className="text-3xl mb-1">
                          {item.category_id === 'beauty_cosmetics' ? '🧴' : item.category_id === 'electronics_3c' ? '🎧' : item.category_id === 'fashion_shoes' ? '👟' : '☕️'}
                        </span>
                        <span className="text-[10px] font-bold text-white leading-tight">{item.title.split(' ')[0]}</span>
                        <span className="text-[9px] text-cyan-300 font-mono mt-0.5">LAYER_3_PRODUCT</span>
                      </div>
                    </div>

                    {/* Layer 2: Brand Logo */}
                    {!logoHidden && (
                      <div
                        className="absolute top-4 right-4 transition-all duration-300 z-10"
                        style={{
                          transform: is3D ? 'translateZ(45px)' : 'none',
                        }}
                      >
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/90 backdrop-blur border border-slate-700 text-[11px] font-bold text-amber-300 tracking-wider shadow">
                          <span>BRAND</span>
                          <span className="text-white font-black">{item.brand.toUpperCase()}</span>
                        </div>
                      </div>
                    )}

                    {/* Layer 1: Typography (Click-to-edit contenteditable) */}
                    <div
                      className={`absolute inset-0 p-5 flex flex-col justify-between rounded-xl transition-all duration-500 ${
                        is3D ? 'border-2 border-dashed border-blue-500/80 bg-white/5' : ''
                      }`}
                      style={{
                        transform: is3D ? 'translateZ(65px)' : 'none',
                      }}
                    >
                      <div className="max-w-[210px]">
                        <div
                          className="inline-block text-[10px] font-semibold text-slate-500 tracking-wider uppercase mb-1 outline-none hover:ring-2 hover:ring-cyan-400 p-0.5 rounded cursor-text"
                          contentEditable
                          suppressContentEditableWarning
                        >
                          {t.tag}
                        </div>
                        <h3
                          className="text-base font-black text-slate-900 leading-snug outline-none hover:ring-2 hover:ring-cyan-400 p-0.5 rounded cursor-text"
                          contentEditable
                          suppressContentEditableWarning
                        >
                          {t.h1}
                        </h3>
                        <p
                          className="text-xs font-bold text-blue-600 mt-1 outline-none hover:ring-2 hover:ring-cyan-400 p-0.5 rounded cursor-text"
                          contentEditable
                          suppressContentEditableWarning
                        >
                          {t.h2}
                        </p>
                      </div>

                      <div className="bg-white/95 backdrop-blur rounded-lg p-2.5 shadow border border-slate-200/80 max-w-[210px]">
                        <div
                          className="text-[11px] font-bold text-slate-800 outline-none hover:ring-2 hover:ring-cyan-400 p-0.5 rounded cursor-text"
                          contentEditable
                          suppressContentEditableWarning
                        >
                          {t.p1_title}
                        </div>
                        <div
                          className="text-[10px] text-slate-600 leading-snug mt-0.5 outline-none hover:ring-2 hover:ring-cyan-400 p-0.5 rounded cursor-text"
                          contentEditable
                          suppressContentEditableWarning
                        >
                          {t.p1_desc}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Toolbar */}
                <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    {/* Flat vs 3D */}
                    <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                      <button
                        onClick={() => toggle3D(item.id, false)}
                        className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                          !is3D ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        扁平改字
                      </button>
                      <button
                        onClick={() => toggle3D(item.id, true)}
                        className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                          is3D ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        3D 景深
                      </button>
                    </div>

                    {/* i18n Translation */}
                    <div className="flex items-center gap-1">
                      {['zh', 'ja', 'es', 'en'].map((lng) => (
                        <button
                          key={lng}
                          onClick={() => changeLang(item.id, lng)}
                          className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                            currentLang === lng
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                              : 'bg-slate-800 text-slate-300 hover:text-white'
                          }`}
                        >
                          {lng === 'zh' ? '中' : lng === 'ja' ? '日' : lng === 'es' ? '西' : '英'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between text-xs pt-1">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleLogo(item.id)}
                        className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                          logoHidden
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : 'bg-amber-500/10 text-amber-300 border border-amber-500/20 hover:bg-amber-500/20'
                        }`}
                      >
                        {logoHidden ? '↩️ 恢复品牌Logo' : '🛡️ 抹除品牌Logo'}
                      </button>

                      <button
                        onClick={() => toggleWhite(item.id)}
                        className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                          isWhite
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                            : 'bg-slate-800 text-slate-300 hover:text-white'
                        }`}
                      >
                        {isWhite ? '✨ 纯白底 (RGB 255)' : '⚪️ 亚马逊白底'}
                      </button>
                    </div>

                    <button
                      onClick={() => alert(`已重新合成 #${item.id} 高保真母图，文案与设置已固化！`)}
                      className="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-medium text-[11px] flex items-center gap-1 shadow shadow-blue-500/20"
                    >
                      <Download className="w-3 h-3" />
                      <span>合成导出</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
