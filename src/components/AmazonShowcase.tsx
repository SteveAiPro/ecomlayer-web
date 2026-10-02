'use client';

import React, { useState } from 'react';
import { Sparkles, Layers, Globe, Shield, Download, RefreshCw, ZoomIn, CheckCircle2 } from 'lucide-react';

interface AmazonCardItem {
  id: string;
  tag: string;
  titleEn: string;
  subEn: string;
  titleZh: string;
  subZh: string;
  btnEn: string;
  btnZh: string;
  bgClass: string;
  bgImg: string;
  productImg: string;
  logoImg?: string;
  iconsImg?: string;
  brand: string;
  lpType: string;
  lpBadge: string;
}

const amazonCards: AmazonCardItem[] = [
  {
    id: 'amazon_b2',
    tag: 'Only on Amazon',
    titleEn: 'Shop the polka\ndot collection',
    subEn: 'Tumblers & Jugs',
    titleZh: '亚马逊独家首发\n波点经典款系列',
    subZh: '双层真空保温吸管杯',
    btnEn: 'EXPLORE HYDROJUG',
    btnZh: '立即抢购',
    bgClass: 'bg-[#f4d072]',
    bgImg: '/amazon_official/b2_bg.png',
    productImg: '/amazon_official/b2_product.png',
    logoImg: '/amazon_official/b2_logo.png',
    brand: 'HYDROJUG',
    lpType: 'replace-text',
    lpBadge: '✏️ 真实文字在线替换',
  },
  {
    id: 'amazon_b1',
    tag: 'Exclusively for members',
    titleEn: 'Prime Big Deals\ndrop Oct 6-7',
    subEn: 'Save up to 60% on apparel & audio',
    titleZh: 'Prime 会员独享\n秋季狂欢大促 10.6-7',
    subZh: '秋冬服饰与数码音响低至4折',
    btnEn: 'Join Prime',
    btnZh: '立即开通会员',
    bgClass: 'bg-[#0071f5]',
    bgImg: '/amazon_official/b1_bg.png',
    productImg: '/amazon_official/b1_product.png',
    brand: 'AMAZON PRIME',
    lpType: 'translate',
    lpBadge: '🌐 真实出海多语种翻译',
  },
  {
    id: 'amazon_b5',
    tag: 'Trending now',
    titleEn: 'Shop fall styles\nin brown tones',
    subEn: 'Leather jackets, sneakers & sets',
    titleZh: '当季秋冬热卖\n复古大地色系穿搭',
    subZh: '真皮夹克、板鞋与格纹短裙',
    btnEn: 'SHOP COLLECTION',
    btnZh: '进入专题',
    bgClass: 'bg-[#9c7a64]',
    bgImg: '/amazon_official/b5_bg.png',
    productImg: '/amazon_official/b5_product.png',
    brand: 'TRENDING FASHION',
    lpType: 'remove-logo',
    lpBadge: '🛡️ 品牌标与水印无痕抹除',
  },
  {
    id: 'amazon_med',
    tag: 'Korean Skincare Bestseller',
    titleEn: 'Hyaluronic Acid\nPlumped Skin',
    subEn: 'Ceramides + 10 Types of HA',
    titleZh: '深层玻尿酸补水\n打造嘭弹水光肌',
    subZh: '高浓度神经酰胺 强化肌底屏障',
    btnEn: 'SHOP MEDICUBE',
    btnZh: '立即购买',
    bgClass: 'bg-[#e9f4fc]',
    bgImg: '/amazon_official/med_bg.png',
    productImg: '/amazon_official/med_product.png',
    iconsImg: '/amazon_official/med_icons.png',
    brand: 'MEDICUBE',
    lpType: 'white-background',
    lpBadge: '⚪️ 切换亚马逊纯白底 (RGB 255)',
  },
];

export default function AmazonShowcase() {
  const [active3D, setActive3D] = useState<Record<string, boolean>>({ amazon_b2: true, amazon_b1: false });
  const [activeLang, setActiveLang] = useState<Record<string, string>>({});
  const [logoHidden, setLogoHidden] = useState<Record<string, boolean>>({});
  const [whiteBg, setWhiteBg] = useState<Record<string, boolean>>({});

  const toggle3D = (id: string, is3D: boolean) => {
    setActive3D((prev) => ({ ...prev, [id]: is3D }));
  };

  const toggleLang = (id: string, lng: string) => {
    setActiveLang((prev) => ({ ...prev, [id]: lng }));
  };

  const toggleLogo = (id: string) => {
    setLogoHidden((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleWhite = (id: string) => {
    setWhiteBg((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-20 bg-[#080d19] border-t border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            100% 真实亚马逊首页海报与 A+ 详情图实测
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            真实亚马逊图实拆：4 层独立物理通道
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            取自亚马逊美国站首页官方海报（Hydrojug 爆款保温杯、Prime Big Deals、秋季穿搭、Medicube 护肤）！
            图中的 **每一行文字均可直接点选打字修改**，商品实物立体剥离，支持 3D 景深拉伸与全网一键合成导出！
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amazonCards.map((card) => {
            const is3D = !!active3D[card.id];
            const currentLang = activeLang[card.id] || 'en';
            const isZh = currentLang === 'zh';
            const isHiddenLogo = !!logoHidden[card.id];
            const isWhite = !!whiteBg[card.id];

            const title = isZh ? card.titleZh : card.titleEn;
            const sub = isZh ? card.subZh : card.subEn;
            const btn = isZh ? card.btnZh : card.btnEn;

            return (
              <div
                key={card.id}
                className="rounded-2xl border border-slate-800 bg-[#0b101e] p-4 flex flex-col justify-between shadow-2xl hover:border-slate-700 transition-all"
              >
                {/* Header */}
                <div className="flex items-center justify-between text-[11px] mb-3">
                  <span className="font-mono text-cyan-400 font-bold bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                    AMAZON LIVE
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                    {card.lpBadge}
                  </span>
                </div>

                {/* 3D Canvas Stage */}
                <div className="my-1" style={{ perspective: '1100px' }}>
                  <div
                    className="relative w-full h-[430px] rounded-xl overflow-hidden border border-slate-700/60 transition-transform duration-700 select-none"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: is3D ? 'rotateY(-24deg) rotateX(15deg) scale(0.85)' : 'none',
                    }}
                  >
                    {/* Layer 4: Background */}
                    <div
                      className={`absolute inset-0 transition-colors duration-300 ${
                        isWhite ? 'bg-white' : card.bgClass
                      }`}
                      style={{
                        transform: is3D ? 'translateZ(0px)' : 'none',
                        boxShadow: is3D ? '-20px 30px 50px rgba(0,0,0,0.6)' : 'none',
                      }}
                    >
                      {!isWhite && (
                        <img
                          src={card.bgImg}
                          alt="Layer 4 Amazon Background"
                          className="w-full h-full object-cover"
                        />
                      )}
                      {is3D && (
                        <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-slate-900/80 text-[9px] text-slate-400 font-mono">
                          04 场景原底
                        </div>
                      )}
                    </div>

                    {/* Layer 3: Subject Products (Real Camera Shot) */}
                    <div
                      className="absolute inset-0 flex items-end justify-center pointer-events-none transition-all duration-500"
                      style={{
                        transform: is3D ? 'translateZ(30px)' : 'none',
                        filter: is3D ? 'drop-shadow(-15px 20px 25px rgba(0,0,0,0.4))' : 'none',
                      }}
                    >
                      <img
                        src={card.productImg}
                        alt="Layer 3 Product Subject"
                        className="w-full h-full object-contain"
                      />
                      {is3D && (
                        <div className="absolute bottom-3 right-3 px-1.5 py-0.5 rounded bg-emerald-950/90 border border-emerald-500/40 text-[9px] text-emerald-300 font-mono">
                          03 真实商品主体层
                        </div>
                      )}
                    </div>

                    {/* Layer 2: Brand Logo (Removable) */}
                    {card.logoImg && !isHiddenLogo && (
                      <div
                        className="absolute inset-0 pointer-events-none transition-all duration-300"
                        style={{
                          transform: is3D ? 'translateZ(55px)' : 'none',
                        }}
                      >
                        <img
                          src={card.logoImg}
                          alt="Layer 2 Brand Logo"
                          className="w-full h-full object-contain"
                        />
                        {is3D && (
                          <div className="absolute top-24 right-3 px-1.5 py-0.5 rounded bg-amber-950/90 border border-amber-500/40 text-[9px] text-amber-300 font-mono">
                            02 品牌Logo(可抹除)
                          </div>
                        )}
                      </div>
                    )}

                    {/* Layer 1: Typography (Click to edit text directly!) */}
                    <div
                      className={`absolute inset-0 p-4 flex flex-col justify-between transition-all duration-500 ${
                        is3D ? 'border-2 border-dashed border-blue-500/80 bg-white/5' : ''
                      }`}
                      style={{
                        transform: is3D ? 'translateZ(75px)' : 'none',
                      }}
                    >
                      <div>
                        {is3D && (
                          <span className="inline-block px-1.5 py-0.5 rounded bg-blue-600 text-white text-[8px] font-mono mb-1">
                            01 真实排版文字框 (双击打字修改)
                          </span>
                        )}
                        <div
                          className="text-[11px] font-medium text-slate-800 tracking-tight mb-1 outline-none hover:ring-2 hover:ring-cyan-400 p-0.5 rounded cursor-text"
                          contentEditable
                          suppressContentEditableWarning
                        >
                          {card.tag}
                        </div>
                        <h3
                          className="text-lg font-black text-slate-900 leading-tight outline-none hover:ring-2 hover:ring-cyan-400 p-0.5 rounded cursor-text whitespace-pre-line"
                          contentEditable
                          suppressContentEditableWarning
                        >
                          {title}
                        </h3>
                        <p
                          className="text-[10px] font-semibold text-slate-700 mt-1 outline-none hover:ring-2 hover:ring-cyan-400 p-0.5 rounded cursor-text"
                          contentEditable
                          suppressContentEditableWarning
                        >
                          {sub}
                        </p>
                      </div>

                      {/* Small Button on Card */}
                      <div className="z-10">
                        <span
                          className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#ffcf00] text-black shadow-sm outline-none hover:ring-2 hover:ring-blue-500 cursor-text"
                          contentEditable
                          suppressContentEditableWarning
                        >
                          {btn}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Toolbar Controls */}
                <div className="mt-3 pt-3 border-t border-slate-800/80 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 bg-slate-950 p-0.5 rounded-lg border border-slate-800">
                      <button
                        onClick={() => toggle3D(card.id, false)}
                        className={`px-2 py-1 rounded text-[10px] font-medium transition-all ${
                          !is3D ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        扁平在线改字
                      </button>
                      <button
                        onClick={() => toggle3D(card.id, true)}
                        className={`px-2 py-1 rounded text-[10px] font-medium transition-all ${
                          is3D ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        3D 景深分解
                      </button>
                    </div>

                    {/* Lang toggle */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => toggleLang(card.id, 'zh')}
                        className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                          isZh ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-slate-800 text-slate-300'
                        }`}
                      >
                        中
                      </button>
                      <button
                        onClick={() => toggleLang(card.id, 'en')}
                        className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                          !isZh ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-slate-800 text-slate-300'
                        }`}
                      >
                        英
                      </button>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between text-[10px] pt-1">
                    <div className="flex items-center gap-1.5">
                      {card.logoImg && (
                        <button
                          onClick={() => toggleLogo(card.id)}
                          className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                            isHiddenLogo ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                          }`}
                        >
                          {isHiddenLogo ? '↩️ 恢复Logo' : '🛡️ 去Logo'}
                        </button>
                      )}
                      <button
                        onClick={() => toggleWhite(card.id)}
                        className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                          isWhite ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-slate-800 text-slate-300 hover:text-white'
                        }`}
                      >
                        {isWhite ? '✨ 纯白底' : '⚪️ 换白底'}
                      </button>
                    </div>

                    <button
                      onClick={() => alert(`已合成重新导出 ${card.brand} 亚马逊母图！`)}
                      className="px-2 py-0.5 rounded bg-blue-600 hover:bg-blue-500 text-white font-medium text-[10px] flex items-center gap-1"
                    >
                      <Download className="w-2.5 h-2.5" />
                      <span>导出</span>
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
