'use client';

import React, { useState } from 'react';
import catalogData from '@/data/catalog.json';
import { Layers, Globe, Shield, Sparkles, Download, Check, RefreshCw, ZoomIn } from 'lucide-react';

export default function DemoMatrix() {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [selectedLP, setSelectedLP] = useState<string>('all');
  // Default b1 to true 3D to immediately showcase the depth
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            40 真实出海电商图 • 4层物理通道解耦与实时改字
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            真实电商实物图：4 层立体解耦与在线点击改字
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            告别单薄的平面线框！每张均为 **真实高清电商拍摄实物**，智能剥离为【Layer 1 文字排版】、【Layer 2 品牌标/成分】、【Layer 3 真实商品实物】、【Layer 4 场景原底】四大独立图层。
          </p>
        </div>

        {/* Filter Controls */}
        <div className="bg-[#0b101e] border border-slate-800 rounded-2xl p-4 mb-10 flex flex-col gap-4 shadow-xl">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
            <span className="text-xs font-semibold text-slate-400">品类筛选 (Category):</span>
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: 'all', label: '全部品类 (40)' },
                { id: 'beauty_cosmetics', label: '💄 美妆个护 (10)' },
                { id: 'electronics_3c', label: '📱 数码 3C (10)' },
                { id: 'fashion_shoes', label: '👟 服饰鞋包 (10)' },
                { id: 'home_kitchen', label: '☕️ 家居生活 (10)' },
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
            <span className="font-semibold text-slate-400">SEO 落地页功能筛选:</span>
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: '全部 (40)' },
                { id: 'replace-text', label: '✏️ 改文案与参数 (Replace Text)' },
                { id: 'translate', label: '🌐 4语种翻译 (Translate)' },
                { id: 'remove-logo', label: '🛡️ 去品牌Logo/水印 (Remove Logo)' },
                { id: 'white-background', label: '⚪️ 换亚马逊白底 (White Bg)' },
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
            const subjectImg = `/products/${item.id}_subject.png`;
            const bgImg = `/products/${item.id}_bg.png`;

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-800 bg-[#0c1220] p-5 shadow-2xl transition-all hover:border-slate-700 flex flex-col justify-between"
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

                {/* Interactive Stage (Full Real Photo 4-Layer Decomposition) */}
                <div className="my-2" style={{ perspective: '1200px' }}>
                  <div
                    className="relative w-full h-[380px] rounded-xl border border-slate-700/60 transition-transform duration-700 select-none"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: is3D ? 'rotateY(-24deg) rotateX(14deg) scale(0.86)' : 'none',
                    }}
                  >
                    {/* Layer 4: Background Plate */}
                    <div
                      className={`absolute inset-0 rounded-xl transition-all duration-300 overflow-hidden ${
                        isWhite ? 'bg-white' : ''
                      }`}
                      style={{
                        transform: is3D ? 'translateZ(0px)' : 'none',
                        boxShadow: is3D ? '-20px 30px 60px rgba(0,0,0,0.6)' : 'none',
                      }}
                    >
                      {!isWhite && (
                        <img
                          src={bgImg}
                          alt="Layer 4 Clean Background"
                          className="w-full h-full object-cover"
                        />
                      )}
                      {is3D && (
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-slate-900/80 text-[10px] text-slate-400 font-mono">
                          04 底层场景
                        </div>
                      )}
                    </div>

                    {/* Layer 3: Real Product Subject (Real Camera Shot with Alpha Mask) */}
                    <div
                      className="absolute inset-0 flex items-center justify-end pr-4 transition-all duration-500 pointer-events-none"
                      style={{
                        transform: is3D ? 'translateZ(30px)' : 'none',
                        filter: is3D ? 'drop-shadow(-15px 25px 30px rgba(0,0,0,0.45))' : 'none',
                      }}
                    >
                      <img
                        src={subjectImg}
                        alt="Layer 3 Real Product Subject"
                        className="max-h-[82%] max-w-[62%] object-contain"
                      />
                      {is3D && (
                        <div className="absolute bottom-4 right-4 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-[10px] text-emerald-300 font-mono">
                          03 真实商品主体
                        </div>
                      )}
                    </div>

                    {/* Layer 2: Brand Logo (Removable) */}
                    {!logoHidden && (
                      <div
                        className="absolute top-4 right-4 transition-all duration-300 z-10"
                        style={{
                          transform: is3D ? 'translateZ(55px)' : 'none',
                        }}
                      >
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/90 backdrop-blur border border-slate-700 text-[11px] font-bold text-amber-300 tracking-wider shadow-lg">
                          <span>BRAND</span>
                          <span className="text-white font-black">{item.brand.toUpperCase()}</span>
                        </div>
                        {is3D && (
                          <div className="mt-1 text-right text-[9px] text-amber-300 font-mono">
                            02 品牌标(可抹除)
                          </div>
                        )}
                      </div>
                    )}

                    {/* Layer 1: Typography (Click-to-edit contenteditable) */}
                    <div
                      className={`absolute inset-0 p-5 flex flex-col justify-between rounded-xl transition-all duration-500 ${
                        is3D ? 'border-2 border-dashed border-blue-500/80 bg-white/5' : ''
                      }`}
                      style={{
                        transform: is3D ? 'translateZ(80px)' : 'none',
                      }}
                    >
                      <div className="max-w-[210px] z-20">
                        {is3D && (
                          <span className="inline-block px-1.5 py-0.5 rounded bg-blue-600 text-white text-[9px] font-mono mb-1">
                            01 可编辑排版文本框
                          </span>
                        )}
                        <div
                          className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase mb-1 outline-none hover:ring-2 hover:ring-cyan-400 p-0.5 rounded cursor-text"
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

                      <div className="bg-white/95 backdrop-blur rounded-lg p-2.5 shadow border border-slate-200/80 max-w-[210px] z-20">
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

                {/* Toolbar Controls */}
                <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    {/* Flat vs 3D */}
                    <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                      <button
                        onClick={() => toggle3D(item.id, false)}
                        className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                          !is3D ? 'bg-blue-600 text-white shadow shadow-blue-500/20' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        扁平在线改字
                      </button>
                      <button
                        onClick={() => toggle3D(item.id, true)}
                        className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                          is3D ? 'bg-blue-600 text-white shadow shadow-blue-500/20' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        3D 景深分解
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
                      onClick={() => alert(`已重新高精度栅格化合成 #${item.id} (${item.title}) 电商母图！`)}
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
