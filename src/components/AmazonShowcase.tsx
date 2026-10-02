'use client';

import React, { useState } from 'react';
import { Sparkles, Layers, Globe, Shield, Download, RefreshCw, ZoomIn, CheckCircle2 } from 'lucide-react';

interface AmazonCardItem {
  id: string;
  asin: string;
  categoryName: string;
  tag: string;
  titleEn: string;
  subEn: string;
  titleZh: string;
  subZh: string;
  feature1En?: string;
  feature1Zh?: string;
  feature2En?: string;
  feature2Zh?: string;
  btnEn: string;
  btnZh: string;
  bgImg: string;
  productImg: string;
  logoImg?: string;
  brand: string;
  lpType: string;
  lpBadge: string;
}

const amazonCards: AmazonCardItem[] = [
  {
    id: 'amazon_anker',
    asin: 'B0CZ9LH53B',
    categoryName: '数码 3C • Anker 官方 A+ 详情图',
    tag: '⚡️ 30W High-Speed Charging',
    titleEn: 'Supports Samsung\nFast Charging',
    subEn: 'Charge iPhone 16 Pro Max to 50% in 26 Min',
    titleZh: '支持三星 30W\n疾速双向超级闪充',
    subZh: 'iPhone 16 Pro Max 26分钟极速充至50%',
    feature1En: '2X Faster than 15W',
    feature1Zh: '充电速度比普通15W快2倍',
    feature2En: '12.45 oz Ultra-Lightweight',
    feature2Zh: '机身净重仅 350g 超轻便携',
    btnEn: 'COMPARE SPECS',
    btnZh: '查看参数对比',
    bgImg: '/amazon_real_layers/anker_bg.png',
    productImg: '/amazon_real_layers/anker_product.png',
    brand: 'ANKER',
    lpType: 'replace-text',
    lpBadge: '✏️ 充电功率/参数直接打字修改',
  },
  {
    id: 'amazon_owala',
    asin: 'B085DVNHHK',
    categoryName: '家居生活 • Owala 专利吸管杯 A+ 结构图',
    tag: '💧 Patented 2-Way Spout',
    titleEn: 'The FreeSip® Spout\nSip or Swig',
    subEn: 'Sip with built-in straw or chug upright',
    titleZh: 'Owala FreeSip®\n专利双饮水嘴结构',
    subZh: '直饮大口畅饮 / 隐藏吸管优雅慢饮',
    feature1En: 'Triple-Layer Insulation',
    feature1Zh: '三层真空锁冷 24小时冰爽',
    feature2En: 'Cup Holder Friendly',
    feature2Zh: '适配车载杯架 防漏锁扣设计',
    btnEn: 'VIEW MECHANISM',
    btnZh: '结构分解视图',
    bgImg: '/amazon_real_layers/owala_bg.png',
    productImg: '/amazon_real_layers/owala_product.png',
    brand: 'OWALA',
    lpType: 'translate',
    lpBadge: '🌐 英文参数图一键地道中文/日文翻译',
  },
  {
    id: 'amazon_medicube',
    asin: 'B09V7Z4TJG',
    categoryName: '美妆个护 • Medicube 全球榜首海报',
    tag: '#1 Global Best Seller',
    titleEn: 'Zero Pore Pad 2.0\nOver 10M Units Sold',
    subEn: 'Dual-Textured AHA 4.5% & BHA 0.45%',
    titleZh: '毛孔爽肤棉片 2.0\n全球累计热销超千万罐',
    subZh: '果酸 AHA 4.5% + 水杨酸 BHA 深入毛孔',
    feature1En: 'Nearly 5 units sold every min',
    feature1Zh: '全球平均每分钟售出 5 罐',
    feature2En: 'Embossed & Silky Dual Side',
    feature2Zh: '压花面去角质 + 丝滑面补水修护',
    btnEn: 'ORDER NOW',
    btnZh: '立即购买',
    bgImg: '/amazon_real_layers/medicube_bg.png',
    productImg: '/amazon_real_layers/medicube_product.png',
    brand: 'MEDICUBE',
    lpType: 'white-background',
    lpBadge: '⚪️ 切换亚马逊纯白底 (RGB 255)',
  },
  {
    id: 'amazon_hydrojug',
    asin: 'B0D3XQ1889',
    categoryName: '亚马逊首页 • Hydrojug 独家专题海报',
    tag: 'Only on Amazon',
    titleEn: 'Shop the polka\ndot collection',
    subEn: 'Triple-wall insulated tumblers',
    titleZh: '亚马逊独家首发\n波点经典款系列保温杯',
    subZh: '三层不锈钢真空锁温 防漏盖',
    feature1En: 'Limited Edition Design',
    feature1Zh: '2026 秋冬限量版波点印花',
    feature2En: 'BPA Free & Dishwasher Safe',
    feature2Zh: '食品级无BPA 可机洗',
    btnEn: 'EXPLORE HYDROJUG',
    btnZh: '进入品牌旗舰店',
    bgImg: '/amazon_official/b2_bg.png',
    productImg: '/amazon_official/b2_product.png',
    logoImg: '/amazon_official/b2_logo.png',
    brand: 'HYDROJUG',
    lpType: 'remove-logo',
    lpBadge: '🛡️ 供应商Logo与标语独立抹除',
  },
];

export default function AmazonShowcase() {
  const [active3D, setActive3D] = useState<Record<string, boolean>>({
    amazon_anker: true,
    amazon_owala: false,
    amazon_medicube: true,
    amazon_hydrojug: false,
  });
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
    <section className="py-20 bg-[#060a14] border-t border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            100% 真实亚马逊官方详情图与 A+ Infographic 实拆实测
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            真实亚马逊图实拆：4 层物理独立通道
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            直接取自亚马逊大牌真实 Listing（Anker 快充参数图、Owala 专利水杯分解图、Medicube 榜首图、Hydrojug 专题海报）！
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
            const f1 = isZh ? card.feature1Zh : card.feature1En;

            return (
              <div
                key={card.id}
                className="rounded-2xl border border-slate-800 bg-[#0b101e] p-4 flex flex-col justify-between shadow-2xl hover:border-slate-700 transition-all"
              >
                {/* Header */}
                <div className="flex items-center justify-between text-[11px] mb-3">
                  <span className="font-mono text-cyan-400 font-bold bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                    ASIN: {card.asin}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                    {card.lpBadge}
                  </span>
                </div>

                <div className="text-[10px] text-slate-400 font-medium mb-1 truncate">
                  {card.categoryName}
                </div>

                {/* 3D Canvas Stage */}
                <div className="my-1" style={{ perspective: '1100px' }}>
                  <div
                    className="relative w-full h-[450px] rounded-xl overflow-hidden border border-slate-700/60 transition-transform duration-700 select-none bg-slate-900"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: is3D ? 'rotateY(-24deg) rotateX(15deg) scale(0.85)' : 'none',
                    }}
                  >
                    {/* Layer 4: Background */}
                    <div
                      className={`absolute inset-0 transition-colors duration-300 ${
                        isWhite ? 'bg-white' : ''
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
                        <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-slate-900/80 text-[9px] text-slate-400 font-mono z-30">
                          04 场景原底 (可一键换白)
                        </div>
                      )}
                    </div>

                    {/* Layer 3: Subject Products (Real Camera Shot) */}
                    <div
                      className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-500"
                      style={{
                        transform: is3D ? 'translateZ(35px)' : 'none',
                        filter: is3D ? 'drop-shadow(-15px 20px 25px rgba(0,0,0,0.45))' : 'none',
                      }}
                    >
                      <img
                        src={card.productImg}
                        alt="Layer 3 Product Subject"
                        className="w-full h-full object-contain"
                      />
                      {is3D && (
                        <div className="absolute bottom-3 right-3 px-1.5 py-0.5 rounded bg-emerald-950/90 border border-emerald-500/40 text-[9px] text-emerald-300 font-mono z-30">
                          03 亚马逊真实商品主体
                        </div>
                      )}
                    </div>

                    {/* Layer 2: Brand Logo (Removable) */}
                    {card.logoImg && !isHiddenLogo && (
                      <div
                        className="absolute inset-0 pointer-events-none transition-all duration-300"
                        style={{
                          transform: is3D ? 'translateZ(60px)' : 'none',
                        }}
                      >
                        <img
                          src={card.logoImg}
                          alt="Layer 2 Brand Logo"
                          className="w-full h-full object-contain"
                        />
                        {is3D && (
                          <div className="absolute top-24 right-3 px-1.5 py-0.5 rounded bg-amber-950/90 border border-amber-500/40 text-[9px] text-amber-300 font-mono z-30">
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
                        transform: is3D ? 'translateZ(85px)' : 'none',
                      }}
                    >
                      <div>
                        {is3D && (
                          <span className="inline-block px-1.5 py-0.5 rounded bg-blue-600 text-white text-[8px] font-mono mb-1">
                            01 真实排版文字框 (双击打字修改)
                          </span>
                        )}
                        <div
                          className="text-[11px] font-bold text-slate-800 tracking-tight mb-1 outline-none hover:ring-2 hover:ring-cyan-400 p-0.5 rounded cursor-text"
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

                      {/* Feature Badge or Button */}
                      <div className="z-10 flex flex-col gap-1 items-start">
                        {f1 && (
                          <span
                            className="inline-block px-2 py-0.5 rounded bg-white/90 backdrop-blur text-[9px] font-bold text-slate-800 border border-slate-300 shadow-sm outline-none hover:ring-2 hover:ring-blue-500 cursor-text"
                            contentEditable
                            suppressContentEditableWarning
                          >
                            {f1}
                          </span>
                        )}
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
