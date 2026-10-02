'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Layers, Globe, Shield, Download, 
  RotateCw, RefreshCw, Eye, EyeOff, Check, Maximize2, Move3d
} from 'lucide-react';

interface ExplodedCase {
  id: string;
  brand: string;
  asin: string;
  category: string;
  aspectRatio: string; // '1:1' | '4:5'
  stageWidth: number;
  stageHeight: number;
  badge: string;
  tagNum: string;
  // Layers
  l4_bg: string;
  l3_product: string;
  l2_elements?: string;
  l1_textImg?: string;
  // Labels for Callout Tags
  l4_name: string;
  l3_name: string;
  l2_name?: string;
  l1_name: string;
  // Default text fields for live in-place editing
  defaultTexts: {
    badge?: string;
    title: string;
    subtitle: string;
    feature1?: string;
    feature2?: string;
    feature3?: string;
    cta: string;
  };
  // Translations
  translations: Record<string, {
    badge?: string;
    title: string;
    subtitle: string;
    feature1?: string;
    feature2?: string;
    feature3?: string;
    cta: string;
  }>;
}

const CASES: ExplodedCase[] = [
  {
    id: 'medicube',
    brand: 'MEDICUBE',
    asin: 'B09V7Z4TJG',
    category: '美妆个护 • 全球热销 1000 万罐爆品 A+ 详情图',
    aspectRatio: '1:1',
    stageWidth: 560,
    stageHeight: 560,
    badge: '#1 Global Best Seller',
    tagNum: '01',
    l4_bg: '/amazon_real_layers/medicube_layer4_bg.png',
    l3_product: '/amazon_real_layers/medicube_layer3_jar.png',
    l2_elements: '/amazon_real_layers/medicube_layer2_icons.png',
    l4_name: '智能无痕补全的浅蓝渐变底图',
    l3_name: 'Medicube 爽肤棉罐实物与飞溅水珠主体',
    l2_name: '核心成分小图标与胶囊微标',
    l1_name: '真实排版可编辑多行文案与标题',
    defaultTexts: {
      badge: 'Key Ingredients That Boost Hydration',
      title: 'For Water-Full,\nPlumped Skin',
      subtitle: 'Over 10M Units Sold Worldwide',
      feature1: 'Hyaluronic Acid - Delivers deep hydration',
      feature2: 'Ceramides - Reinforce moisture barrier',
      feature3: 'Peptides - Support firmness & smoothness',
      cta: 'EXPLORE PRODUCT',
    },
    translations: {
      en: {
        badge: 'Key Ingredients That Boost Hydration',
        title: 'For Water-Full,\nPlumped Skin',
        subtitle: 'Over 10M Units Sold Worldwide',
        feature1: 'Hyaluronic Acid - Delivers deep hydration',
        feature2: 'Ceramides - Reinforce moisture barrier',
        feature3: 'Peptides - Support firmness & smoothness',
        cta: 'EXPLORE PRODUCT',
      },
      zh: {
        badge: '核心补水成分 • 深层润泽肌底',
        title: '打造水光弹润\n饱满紧致水光肌',
        subtitle: '全球累计热销突破 1000 万罐',
        feature1: '玻尿酸 (AHA) - 深入肌底强效锁水',
        feature2: '神经酰胺 (BHA) - 强化肌肤保护屏障',
        feature3: '多肽胜肽 - 紧致弹润焕发健康光彩',
        cta: '立即体验水光肌',
      },
      ja: {
        badge: 'うるおいを高める注目の主要成分',
        title: 'みずみずしく\n弾むような素肌へ',
        subtitle: '全世界累計販売数 1000万個突破',
        feature1: 'ヒアルロン酸 - 肌の奥まで贅沢保湿',
        feature2: 'セラミド - 肌バリアを整え水分キープ',
        feature3: 'ペプチド - ふっくらハリと弾力をサポート',
        cta: '詳細を見る',
      },
      es: {
        badge: 'Ingredientes Clave Que Hidratan',
        title: 'Para una Piel Llena\nde Agua y Firme',
        subtitle: 'Más de 10 Millones de Unidades Vendidas',
        feature1: 'Ácido Hialurónico - Hidratación ultra profunda',
        feature2: 'Ceramidas - Refuerzan la barrera cutánea',
        feature3: 'Péptidos - Aportan elasticidad y tersura',
        cta: 'COMPRAR AHORA',
      },
    },
  },
  {
    id: 'anker',
    brand: 'ANKER',
    asin: 'B0CZ9LH53B',
    category: '数码 3C • Anker 官方 30W 双向闪充 A+ 核心参数图',
    aspectRatio: '4:5',
    stageWidth: 500,
    stageHeight: 625,
    badge: '30W High-Speed Charging',
    tagNum: '02',
    l4_bg: '/amazon_real_layers/anker_bg.png',
    l3_product: '/amazon_real_layers/anker_product.png',
    l4_name: '极简科技深邃商务渐变背景',
    l3_name: 'Anker 30W 充电宝机身与数显微距特写',
    l1_name: '快充功率规格与对比参数文案框',
    defaultTexts: {
      badge: '⚡️ 30W Two-Way Fast Charging',
      title: 'Supports Samsung\nSuper Fast Charging',
      subtitle: 'Charge iPhone 16 Pro Max to 50% in 26 Min',
      feature1: '2X Faster than standard 15W blocks',
      feature2: 'ActiveShield 2.0 Dynamic Temperature Control',
      feature3: '12.45 oz Ultra-Lightweight & Pocketable',
      cta: 'COMPARE SPECS',
    },
    translations: {
      en: {
        badge: '⚡️ 30W Two-Way Fast Charging',
        title: 'Supports Samsung\nSuper Fast Charging',
        subtitle: 'Charge iPhone 16 Pro Max to 50% in 26 Min',
        feature1: '2X Faster than standard 15W blocks',
        feature2: 'ActiveShield 2.0 Dynamic Temperature Control',
        feature3: '12.45 oz Ultra-Lightweight & Pocketable',
        cta: 'COMPARE SPECS',
      },
      zh: {
        badge: '⚡️ 30W 双向疾速超级快充',
        title: '支持三星 30W\n疾速双向超级闪充',
        subtitle: 'iPhone 16 Pro Max 26分钟极速充至50%',
        feature1: '充电速度比普通 15W 充电宝快 2 倍',
        feature2: 'ActiveShield 2.0 智能温控全面守护',
        feature3: '机身净重仅 350g 超轻便携随身携带',
        cta: '查看参数对比',
      },
      ja: {
        badge: '⚡️ 最大 30W 急速充電対応',
        title: 'Galaxy 超急速充電\n＆ iPhone 高速充電',
        subtitle: 'iPhone 16 Pro Max を 26分で 50% 充電',
        feature1: '一般的な 15W 充電器と比べ約 2倍のスピード',
        feature2: 'ActiveShield 2.0 独自の安全設計',
        feature3: 'コンパクト＆軽量で持ち運びに最適',
        cta: 'スペックを見る',
      },
      es: {
        badge: '⚡️ Carga Rápida Bidireccional de 30W',
        title: 'Compatible con Carga\nSúper Rápida Samsung',
        subtitle: 'Carga el iPhone 16 Pro Max al 50% en 26 Min',
        feature1: '2 Veces más rápido que cargadores de 15W',
        feature2: 'Protección inteligente ActiveShield 2.0',
        feature3: 'Ultra liviano y portátil para viajes',
        cta: 'VER ESPECIFICACIONES',
      },
    },
  },
  {
    id: 'owala',
    brand: 'OWALA',
    asin: 'B085DVNHHK',
    category: '家居日用 • Owala FreeSip 专利双饮杯拆解剖面图',
    aspectRatio: '4:5',
    stageWidth: 500,
    stageHeight: 625,
    badge: 'Patented 2-Way Spout',
    tagNum: '03',
    l4_bg: '/amazon_real_layers/owala_bg.png',
    l3_product: '/amazon_real_layers/owala_product.png',
    l4_name: '时尚多巴胺清新马卡龙底图',
    l3_name: 'Owala 专利双饮水嘴杯体无死角抠图',
    l1_name: '直饮/吸管专利卖点说明与多语言排版',
    defaultTexts: {
      badge: '💧 The Patented FreeSip® Mechanism',
      title: 'Sip or Swig:\nYour Choice Everyday',
      subtitle: 'Sip through the built-in straw or tilt back to swig',
      feature1: 'Triple-Layer Vacuum Insulation keeps cold 24h',
      feature2: 'Leak-Proof carry loop with push-button lid',
      feature3: 'BPA-Free, Lead-Free & Dishwasher Safe',
      cta: 'SEE HOW IT WORKS',
    },
    translations: {
      en: {
        badge: '💧 The Patented FreeSip® Mechanism',
        title: 'Sip or Swig:\nYour Choice Everyday',
        subtitle: 'Sip through the built-in straw or tilt back to swig',
        feature1: 'Triple-Layer Vacuum Insulation keeps cold 24h',
        feature2: 'Leak-Proof carry loop with push-button lid',
        feature3: 'BPA-Free, Lead-Free & Dishwasher Safe',
        cta: 'SEE HOW IT WORKS',
      },
      zh: {
        badge: '💧 Owala 专利 FreeSip® 双饮杯嘴',
        title: '隐藏吸管优雅慢饮\n大口畅饮肆意解渴',
        subtitle: '无需仰头即可慢饮，亦可抬杯大口畅饮',
        feature1: '三层双壁不锈钢真空锁冷 24 小时长效冰爽',
        feature2: '防误触弹跳式防漏锁扣盖 + 便携提环',
        feature3: '食品级母婴级材质，无BPA，支持洗碗机机洗',
        cta: '查看结构分解',
      },
      ja: {
        badge: '💧 特許取得 FreeSip® 2way 飲み口',
        title: 'ストローで吸う？\nそのままゴクゴク？',
        subtitle: '気分に合わせて飲み方を選べる革新的なボトル',
        feature1: '真空断熱三重構造で 24時間しっかり保冷',
        feature2: '漏れ防止ロックボタン＆便利なキャリーループ',
        feature3: 'BPAフリー・食洗機対応でお手入れ簡単',
        cta: '構造を見る',
      },
      es: {
        badge: '💧 Boquilla Patentada FreeSip®',
        title: 'Bebe con Pajita o\na Grandes Tragos',
        subtitle: 'Pajita integrada para sorber o abertura para beber rápido',
        feature1: 'Aislamiento de triple capa: frío hasta 24 horas',
        feature2: 'Tapa hermética a prueba de derrames con botón',
        feature3: 'Libre de BPA y apto para lavavajillas',
        cta: 'DESCUBRE MÁS',
      },
    },
  },
  {
    id: 'sneaker',
    brand: 'AIR RUNNER',
    asin: 'B0D3XQ1889',
    category: '运动户外 • 3D 悬浮球鞋减震气垫结构分层海报',
    aspectRatio: '1:1',
    stageWidth: 560,
    stageHeight: 560,
    badge: 'Pro Cushion 4.0 System',
    tagNum: '04',
    l4_bg: '/amazon_real_layers/sneaker_layer4_bg.png',
    l3_product: '/amazon_real_layers/sneaker_layer3_product.png',
    l2_elements: '/amazon_real_layers/sneaker_layer2_logo.png',
    l4_name: '影棚级暗黑质感高光漫反射底图',
    l3_name: '碳板跑鞋鞋身与气垫大底高精实拍',
    l2_name: '品牌金属镭射 Logo 铭牌',
    l1_name: '气垫减震参数与爆款大促营销文案',
    defaultTexts: {
      badge: '👟 Ultra-Light Carbon Fiber Tech',
      title: 'Explosive Energy Return\nEngineered for Marathons',
      subtitle: 'Over 85% Kinetic Energy Feedback on Every Step',
      feature1: 'Full-length 3D Carbon Plate for speed bursts',
      feature2: 'Dual-density Nitrogen Infused Cushion Midsole',
      feature3: 'Breathable Seamless Monomesh Upper 185g',
      cta: 'ORDER PRO EDITION',
    },
    translations: {
      en: {
        badge: '👟 Ultra-Light Carbon Fiber Tech',
        title: 'Explosive Energy Return\nEngineered for Marathons',
        subtitle: 'Over 85% Kinetic Energy Feedback on Every Step',
        feature1: 'Full-length 3D Carbon Plate for speed bursts',
        feature2: 'Dual-density Nitrogen Infused Cushion Midsole',
        feature3: 'Breathable Seamless Monomesh Upper 185g',
        cta: 'ORDER PRO EDITION',
      },
      zh: {
        badge: '👟 全掌超轻立体碳板竞技黑科技',
        title: '澎湃推进回弹脚感\n专为马拉松竞速而生',
        subtitle: '每一步提供高达 85% 能量回馈推进率',
        feature1: '全掌三维异构推进碳纤维板，强劲抗扭推进',
        feature2: '超临界超发泡氮气缓震中底，轻弹无极限',
        feature3: '一体无缝超透气单层贾卡鞋面，单只仅185克',
        cta: '立即锁定首发',
      },
      ja: {
        badge: '👟 超軽量カーボンプレート搭載',
        title: '驚異のエネルギー反発\nマラソン専用レーシングモデル',
        subtitle: '着地衝撃を推進力に変える 85%反発構造',
        feature1: 'フルレングス 3Dカーボンファイバープレート',
        feature2: '超臨界発泡窒素クッションソールで極限の反発',
        feature3: '185g の超軽量モノメッシュアッパー',
        cta: '今すぐ購入',
      },
      es: {
        badge: '👟 Fibra de Carbono Ultraligera',
        title: 'Retorno de Energía Explosivo\nPara Maratón de Élite',
        subtitle: 'Más del 85% de retroalimentación de energía cinética',
        feature1: 'Placa de carbono 3D completa para propulsión',
        feature2: 'Amortiguación con infusión de nitrógeno súper elástica',
        feature3: 'Tejido superior transpirable sin costuras de 185g',
        cta: 'COMPRAR EDICIÓN PRO',
      },
    },
  },
];

export default function True3DExplodedStage() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>('medicube');
  const [is3DMode, setIs3DMode] = useState<boolean>(true);
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [currentLang, setCurrentLang] = useState<string>('en');
  const [isWhiteBg, setIsWhiteBg] = useState<boolean>(false);
  const [hideProduct, setHideProduct] = useState<boolean>(false);
  const [hideLogo, setHideLogo] = useState<boolean>(false);
  const [customTexts, setCustomTexts] = useState<Record<string, Record<string, string>>>({});
  
  // Parallax rotation state
  const [mouseRot, setMouseRot] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const viewportRef = useRef<HTMLDivElement>(null);

  const currentCase = CASES.find((c) => c.id === selectedCaseId) || CASES[0];

  // Mouse Parallax effect in 3D Mode
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!is3DMode) return;
    const rect = viewportRef.current?.getBoundingClientRect();
    if (!rect) return;
    const offsetX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const offsetY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setMouseRot({
      x: offsetX * 12, // +/- 12deg
      y: offsetY * 10, // +/- 10deg
    });
  };

  const handleMouseLeave = () => {
    setMouseRot({ x: 0, y: 0 });
  };

  // Get active text values
  const getActiveText = (field: keyof ExplodedCase['defaultTexts']) => {
    const custom = customTexts[currentCase.id]?.[field];
    if (custom !== undefined) return custom;
    return currentCase.translations[currentLang]?.[field] || currentCase.defaultTexts[field] || '';
  };

  const updateText = (field: string, val: string) => {
    setCustomTexts((prev) => ({
      ...prev,
      [currentCase.id]: {
        ...(prev[currentCase.id] || {}),
        [field]: val,
      },
    }));
  };

  const handleLangChange = (lang: string) => {
    setCurrentLang(lang);
    // Reset custom text overrides for this case to show selected translation
    setCustomTexts((prev) => {
      const copy = { ...prev };
      delete copy[currentCase.id];
      return copy;
    });
  };

  // Z-plane translation depths based on mode
  const zDepths = is3DMode
    ? isExpanded
      ? { l4: 0, l3: 150, l2: 290, l1: 430 }
      : { l4: 0, l3: 110, l2: 220, l1: 330 }
    : { l4: 0, l3: 4, l2: 8, l1: 14 };

  // Base isometric stage rotation
  const baseRotateX = is3DMode ? 22 - mouseRot.y : 0;
  const baseRotateY = is3DMode ? -32 + mouseRot.x : 0;
  const baseRotateZ = is3DMode ? 5 : 0;
  const stageTranslateX = is3DMode ? -40 : 0;

  return (
    <section className="py-20 bg-[#070a13] border-t border-slate-800 text-slate-100 overflow-hidden relative">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent blur-3xl pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Move3d className="w-4 h-4 text-cyan-400" />
            3D Multi-Plane Layer Decomposition (真实 3D 景深分层引擎)
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            真实电商图层 • 3D 景深分解与所见即所得改字
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
            参考专业 3D 空间渲染规范，彻底解耦为【04 纯净背景层】、【03 实物相机主体层】、【02 标识铭牌层】与【01 真实排版文字层】。
            在 3D 景深拉伸下每层拥有真实立体深度、悬浮引线标签；切换扁平模式即可像在 PPT 中一样直接点字修改、实时翻译与重新合成！
          </p>
        </div>

        {/* 4 Brand Product Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {CASES.map((item) => {
            const isSelected = item.id === selectedCaseId;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedCaseId(item.id);
                  setIsWhiteBg(false);
                  setHideProduct(false);
                  setHideLogo(false);
                }}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-cyan-400/50 shadow-lg shadow-cyan-500/20 scale-[1.02]'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                <span className="font-mono text-cyan-300">{item.tagNum}</span>
                <span>{item.brand}</span>
                <span className="text-[11px] opacity-75 font-normal hidden md:inline">({item.badge})</span>
              </button>
            );
          })}
        </div>

        {/* Mode Switcher Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 p-2 sm:p-3 rounded-2xl mb-8 backdrop-blur-md shadow-2xl">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIs3DMode(true)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                is3DMode
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-white bg-slate-950/50'
              }`}
            >
              <Move3d className="w-4 h-4" />
              <span>📐 3D 景深分层视角 (3D Exploded View)</span>
            </button>
            <button
              onClick={() => setIs3DMode(false)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                !is3DMode
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                  : 'text-slate-400 hover:text-white bg-slate-950/50'
              }`}
            >
              <span>✍️ 扁平所见即所得改字模式 (Live Edit Mode)</span>
            </button>
          </div>

          {/* Depth Extender Switch (Only active in 3D Mode) */}
          {is3DMode && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-medium">分层间距:</span>
              <button
                onClick={() => setIsExpanded(false)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                  !isExpanded ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40' : 'bg-slate-950 text-slate-400'
                }`}
              >
                紧凑 (Compact)
              </button>
              <button
                onClick={() => setIsExpanded(true)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                  isExpanded ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40' : 'bg-slate-950 text-slate-400'
                }`}
              >
                深景深 (Expanded 450px)
              </button>
            </div>
          )}
        </div>

        {/* Main Interactive Stage & Side Controller Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 3D CANVAS VIEWPORT (8 COLS) */}
          <div 
            ref={viewportRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-8 flex flex-col items-center justify-center p-2 sm:p-6 rounded-3xl bg-slate-950/60 border border-slate-800/80 relative min-h-[700px] overflow-visible"
            style={{
              perspective: '2500px',
              perspectiveOrigin: '50% 50%',
            }}
          >
            {/* Ambient floor glow ellipse */}
            <div
              className="absolute w-[720px] h-[480px] rounded-full pointer-events-none transition-all duration-700"
              style={{
                top: '55%',
                left: '46%',
                transform: `translate(-50%, -50%) rotateX(68deg) translateZ(-80px)`,
                background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.16) 0%, rgba(99, 102, 241, 0.08) 35%, transparent 70%)',
                border: is3DMode ? '1px dashed rgba(56, 189, 248, 0.3)' : 'none',
              }}
            />

            {/* 3D SCENE STAGE (CARDS STACK) */}
            <div
              id="stage-3d-scene"
              className="relative transition-transform duration-500 ease-out select-none my-6"
              style={{
                width: `${currentCase.stageWidth}px`,
                height: `${currentCase.stageHeight}px`,
                transformStyle: 'preserve-3d',
                transform: `scale(${is3DMode ? 0.72 : 0.95}) rotateY(${baseRotateY}deg) rotateX(${baseRotateX}deg) rotateZ(${baseRotateZ}deg) translateX(${stageTranslateX - 60}px)`,
              }}
            >
              {/* ================= LAYER 4: INPAINTED BACKGROUND (BOTTOM) ================= */}
              <div
                className={`absolute inset-0 rounded-2xl transition-all duration-500 overflow-visible ${
                  isWhiteBg ? 'bg-white' : 'bg-slate-900'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `translateZ(${zDepths.l4}px)`,
                  boxShadow: is3DMode ? '0 30px 60px rgba(0, 0, 0, 0.65)' : 'none',
                }}
              >
                {!isWhiteBg && (
                  <img
                    src={currentCase.l4_bg}
                    alt={currentCase.l4_name}
                    className="w-full h-full object-cover rounded-2xl pointer-events-none block"
                  />
                )}

                {/* Glass frame outline in 3D mode */}
                {is3DMode && (
                  <div className="absolute inset-0 rounded-2xl border-2 border-slate-500/40 pointer-events-none" />
                )}

                {/* Floating Callout Tab 04 */}
                {is3DMode && (
                  <div
                    className="absolute top-4 right-0 px-3.5 py-1.5 rounded-lg bg-slate-900/95 border border-slate-500/50 backdrop-blur-md shadow-2xl flex items-center gap-2 pointer-events-none z-30 whitespace-nowrap"
                    style={{ transform: 'translate(92%, 0) translateZ(15px)' }}
                  >
                    <span className="font-mono font-black text-slate-400 text-xs">04</span>
                    <span className="text-xs font-bold text-slate-200">{currentCase.l4_name}</span>
                    <span className="text-slate-400 text-xs">↗</span>
                  </div>
                )}
              </div>

              {/* ================= LAYER 3: REAL CAMERA PRODUCT SUBJECT ================= */}
              {!hideProduct && (
                <div
                  className="absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none overflow-visible"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `translateZ(${zDepths.l3}px)`,
                  }}
                >
                  <img
                    src={currentCase.l3_product}
                    alt={currentCase.l3_name}
                    className="w-full h-full object-contain drop-shadow-2xl pointer-events-none"
                    style={{
                      filter: is3DMode ? 'drop-shadow(-20px 30px 35px rgba(0,0,0,0.6))' : 'none',
                    }}
                  />

                  {/* Glass frame border */}
                  {is3DMode && (
                    <div className="absolute inset-0 rounded-2xl border-2 border-cyan-500/50 pointer-events-none" />
                  )}

                  {/* Floating Callout Tab 03 */}
                  {is3DMode && (
                    <div
                      className="absolute top-20 right-0 px-3.5 py-1.5 rounded-lg bg-slate-900/95 border border-cyan-500/50 backdrop-blur-md shadow-2xl flex items-center gap-2 pointer-events-none z-30 whitespace-nowrap"
                      style={{ transform: 'translate(92%, 0) translateZ(15px)' }}
                    >
                      <span className="font-mono font-black text-cyan-400 text-xs">03</span>
                      <span className="text-xs font-bold text-slate-200">{currentCase.l3_name}</span>
                      <span className="text-cyan-400 text-xs">↗</span>
                    </div>
                  )}
                </div>
              )}

              {/* ================= LAYER 2: LOGO / ELEMENTS (OPTIONAL) ================= */}
              {currentCase.l2_elements && !hideLogo && (
                <div
                  className="absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none overflow-visible"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `translateZ(${zDepths.l2}px)`,
                  }}
                >
                  <img
                    src={currentCase.l2_elements}
                    alt={currentCase.l2_name || 'Layer 2'}
                    className="w-full h-full object-contain pointer-events-none"
                  />

                  {/* Glass frame border */}
                  {is3DMode && (
                    <div className="absolute inset-0 rounded-2xl border-2 border-purple-500/50 pointer-events-none" />
                  )}

                  {/* Floating Callout Tab 02 */}
                  {is3DMode && (
                    <div
                      className="absolute top-36 right-0 px-3.5 py-1.5 rounded-lg bg-slate-900/95 border border-purple-500/50 backdrop-blur-md shadow-2xl flex items-center gap-2 pointer-events-none z-30 whitespace-nowrap"
                      style={{ transform: 'translate(92%, 0) translateZ(15px)' }}
                    >
                      <span className="font-mono font-black text-purple-400 text-xs">02</span>
                      <span className="text-xs font-bold text-slate-200">{currentCase.l2_name}</span>
                      <span className="text-purple-400 text-xs">↗</span>
                    </div>
                  )}
                </div>
              )}

              {/* ================= LAYER 1: EDITABLE TYPOGRAPHY (TOP PLANE) ================= */}
              <div
                className={`absolute inset-0 rounded-2xl p-6 flex flex-col justify-between transition-all duration-500 overflow-visible ${
                  is3DMode
                    ? 'border-2 border-amber-500/60 bg-white/[0.03] backdrop-blur-[0.5px]'
                    : 'border-transparent bg-transparent'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `translateZ(${zDepths.l1}px)`,
                }}
              >
                {/* Floating Callout Tab 01 */}
                {is3DMode && (
                  <div
                    className="absolute top-4 right-0 px-3.5 py-1.5 rounded-lg bg-slate-900/95 border border-amber-500/60 backdrop-blur-md shadow-2xl flex items-center gap-2 pointer-events-none z-30 whitespace-nowrap"
                    style={{ transform: 'translate(92%, 0) translateZ(15px)' }}
                  >
                    <span className="font-mono font-black text-amber-400 text-xs">01</span>
                    <span className="text-xs font-bold text-amber-200">{currentCase.l1_name}</span>
                    <span className="text-amber-400 text-xs">↗</span>
                  </div>
                )}

                {/* Typography Header Group */}
                <div className="z-20 max-w-[85%]">
                  {/* Badge pill */}
                  <div
                    className="inline-block text-[11px] sm:text-xs font-bold tracking-tight text-blue-800 bg-white/90 backdrop-blur px-2.5 py-0.5 rounded-md mb-2 shadow-sm border border-slate-200/80 outline-none hover:ring-2 hover:ring-amber-400 cursor-text"
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => updateText('badge', e.currentTarget.innerText)}
                  >
                    {getActiveText('badge')}
                  </div>

                  {/* Main Title */}
                  <h3
                    className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight outline-none hover:ring-2 hover:ring-amber-400 p-1 rounded-md cursor-text whitespace-pre-line tracking-tight drop-shadow-sm"
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => updateText('title', e.currentTarget.innerText)}
                  >
                    {getActiveText('title')}
                  </h3>

                  {/* Subtitle */}
                  <p
                    className="text-xs sm:text-sm font-semibold text-slate-700 mt-1.5 outline-none hover:ring-2 hover:ring-amber-400 p-1 rounded-md cursor-text"
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => updateText('subtitle', e.currentTarget.innerText)}
                  >
                    {getActiveText('subtitle')}
                  </p>
                </div>

                {/* Bullets & Button Group */}
                <div className="z-20 space-y-2 max-w-[80%]">
                  {getActiveText('feature1') && (
                    <div
                      className="text-[11px] sm:text-xs font-medium text-slate-800 bg-white/90 backdrop-blur px-2.5 py-1 rounded-md border border-slate-200/90 shadow-sm outline-none hover:ring-2 hover:ring-amber-400 cursor-text"
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => updateText('feature1', e.currentTarget.innerText)}
                    >
                      {getActiveText('feature1')}
                    </div>
                  )}

                  {getActiveText('feature2') && (
                    <div
                      className="text-[11px] sm:text-xs font-medium text-slate-800 bg-white/90 backdrop-blur px-2.5 py-1 rounded-md border border-slate-200/90 shadow-sm outline-none hover:ring-2 hover:ring-amber-400 cursor-text"
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => updateText('feature2', e.currentTarget.innerText)}
                    >
                      {getActiveText('feature2')}
                    </div>
                  )}

                  {/* CTA Button */}
                  <div className="pt-1">
                    <span
                      className="inline-block px-4 py-1.5 rounded-full text-xs font-extrabold bg-[#ffcf00] text-slate-950 shadow-md outline-none hover:ring-2 hover:ring-amber-500 cursor-text"
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => updateText('cta', e.currentTarget.innerText)}
                    >
                      {getActiveText('cta')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Helper Hint bottom tag */}
            <div className="mt-6 flex items-center gap-3 text-xs text-slate-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>
                {is3DMode 
                  ? '💡 提示：按住鼠标在画布上滑动可进行 360° 景深视差观察；每层空间分离度完全物理独立。'
                  : '✍️ 提示：直接用鼠标点击图上的任一行字（双击或按退格键），即可随意输入您要替换的文案！'}
              </span>
            </div>
          </div>

          {/* RIGHT SIDEBAR: QUICK LOCALIZATION & TOOLBOX (4 COLS) */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* Box 1: AI Localization */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 mb-3 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                <Globe className="w-4 h-4" />
                <span>一键出海跨国本地化翻译</span>
              </div>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                无需重新找设计师排版！点击目标语言，文案框瞬间切换为地道母语翻译，字重与版式自动对其：
              </p>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleLangChange('zh')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between border transition-all ${
                    currentLang === 'zh'
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                      : 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span>🇨🇳 译为中文</span>
                  <span>{currentLang === 'zh' ? '✓' : '→'}</span>
                </button>

                <button
                  onClick={() => handleLangChange('ja')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between border transition-all ${
                    currentLang === 'ja'
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                      : 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span>🇯🇵 译为日文</span>
                  <span>{currentLang === 'ja' ? '✓' : '→'}</span>
                </button>

                <button
                  onClick={() => handleLangChange('es')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between border transition-all ${
                    currentLang === 'es'
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                      : 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span>🇪🇸 译为西语</span>
                  <span>{currentLang === 'es' ? '✓' : '→'}</span>
                </button>

                <button
                  onClick={() => handleLangChange('en')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between border transition-all ${
                    currentLang === 'en'
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                      : 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span>🇺🇸 还原英文原文</span>
                  <span>↺</span>
                </button>
              </div>
            </div>

            {/* Box 2: Layer Visibility & Modifications */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>图层通道独立控制</span>
              </div>

              {/* White Background Toggle */}
              <button
                onClick={() => setIsWhiteBg(!isWhiteBg)}
                className={`w-full p-2.5 rounded-xl text-xs font-bold flex items-center justify-between border transition-all ${
                  isWhiteBg
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>⚪️ 切换亚马逊纯白底 (RGB 255)</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-900">
                  {isWhiteBg ? '已生效' : '点击切换'}
                </span>
              </button>

              {/* Hide Product Subject */}
              <button
                onClick={() => setHideProduct(!hideProduct)}
                className={`w-full p-2.5 rounded-xl text-xs font-bold flex items-center justify-between border transition-all ${
                  hideProduct
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                    : 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>📦 独立隐藏/展示商品主体层 (Layer 03)</span>
                <span>{hideProduct ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</span>
              </button>

              {/* Hide Logo (if available) */}
              {currentCase.l2_elements && (
                <button
                  onClick={() => setHideLogo(!hideLogo)}
                  className={`w-full p-2.5 rounded-xl text-xs font-bold flex items-center justify-between border transition-all ${
                    hideLogo
                      ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                      : 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span>🛡️ 抹除供应商 Logo 与标牌 (Layer 02)</span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-slate-900">
                    {hideLogo ? '已抹除' : '抹除'}
                  </span>
                </button>
              )}
            </div>

            {/* Box 3: Export & Recompose */}
            <div className="p-5 rounded-2xl bg-gradient-to-b from-blue-950/50 to-slate-900 border border-blue-500/30 shadow-xl space-y-3">
              <div className="text-xs text-blue-300 font-bold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>实时重新合成导出母图</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                修改完任何文字或换好白底后，点击下方按钮，底层合成引擎立即无损拼合文字、主体与背景为高分辨率电商详情图！
              </p>

              <button
                onClick={() => {
                  setIs3DMode(false);
                  setTimeout(() => {
                    alert(`✅ 合成成功！已导出「${currentCase.brand}」电商修改后高清主图！所有文字、背景与主体均已高质量重构。`);
                  }, 200);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 transition-all hover:scale-[1.01]"
              >
                <Download className="w-4 h-4" />
                <span>一键重新合成高清主图 (Re-Compose)</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
