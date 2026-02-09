
import React, { useState, useEffect, useCallback } from 'react';
import { 
  Phone, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck, 
  Lock,
  MessageSquareText,
  FileSearch,
  FileCheck,
  HandCoins,
  ChevronRight,
  ChevronLeft,
  Star,
  Play,
  Facebook
} from 'lucide-react';
import { LoanType } from './types';

interface Slide {
  title: string;
  subtitle: string;
  description?: string;
  image: string;
  ctaText: string;
}

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides: Slide[] = [
    {
      title: "萬物典當周轉金",
      subtitle: "專業鑑定 珍藏轉現金",
      description: "針對名錶、珠寶、名牌包提供專業鑑定服務，即時評估，火速撥款。",
      image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=2000",
      ctaText: "立即估價"
    },
    {
      title: "債務整合轉本利攤還",
      subtitle: "金融專業 重新掌握生活重心",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000",
      ctaText: "免費評估"
    },
    {
      title: "汽機車貸款",
      subtitle: "免留車 尊榮還款方案",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000",
      ctaText: "線上試算"
    },
    {
      title: "高端房產 | 土地融資",
      subtitle: "高額低利 靈活運用大額資金",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000",
      ctaText: "專人服務"
    },
    {
      title: "勞保憑證貸款",
      subtitle: "多元審核 挺過您的資金難關",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2000",
      ctaText: "快速申辦"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const navLinks = [
    { name: '首頁', en: 'Home', href: 'http://tsloan.com.tw/?muid=154' },
    { 
      name: '關於我們', 
      en: 'About us', 
      href: '/tw/html/page/page.php?cid=21&muid=118',
      subLinks: [
        { name: '認識我們', href: '/tw/html/page/page.php?cid=21&cid2=85' },
        { name: '服務據點', href: '/tw/html/page/page.php?cid=21&cid2=107' },
      ]
    },
    { 
      name: '產品項目', 
      en: 'Service', 
      href: '/tw/html/page/page.php?cid=28&muid=151', 
      subLinks: [
        { name: '債務整合轉本利攤還', href: '/tw/html/page/page.php?cid=28&cid2=100' },
        { name: '勞保憑證貸款', href: '/tw/html/page/page.php?cid=28&cid2=101' },
        { name: '汽機車、中古車貸款', href: '/tw/html/page/page.php?cid=28&cid2=103' },
        { name: '房屋土地融資貸款', href: '/tw/html/page/page.php?cid=28&cid2=104' },
        { name: '萬物典當周轉金', href: '/tw/html/page/page.php?cid=28&cid2=105' },
        { name: '業務配合', href: '/tw/html/page/page.php?cid=28&cid2=110' },
      ]
    },
    { 
      name: '常見問題', 
      en: 'FAQ', 
      href: '/tw/html/faq/faq.php?muid=150',
      subLinks: [
        { name: '常見問題', href: '/tw/html/faq/faq.php?kid=43' }
      ]
    },
    { 
      name: '最新訊息', 
      en: 'News', 
      href: '/tw/html/news/index.php?muid=119',
      subLinks: [
        { name: '最新消息', href: '/tw/html/news/index.php?kid=116' }
      ]
    },
  ];

  const projectItems = [
    { 
      title: "債務整合", 
      href: "/tw/html/page/page.php?cid=28&cid2=100", 
      image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "勞保憑證貸款", 
      href: "/tw/html/page/page.php?cid=28&cid2=101", 
      image: "https://images.unsplash.com/photo-1454165833767-02a6e48077c4?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "汽機車貸款", 
      href: "/tw/html/page/page.php?cid=28&cid2=103", 
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "房屋土地融資", 
      href: "/tw/html/page/page.php?cid=28&cid2=104", 
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "萬物典當周轉", 
      href: "/tw/html/page/page.php?cid=28&cid2=105", 
      image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "業務配合", 
      href: "/tw/html/page/page.php?cid=28&cid2=110", 
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800" 
    },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#C5A059] selection:text-white">
      
      {/* Search Header */}
      <div 
        id="search" 
        className={`fixed top-0 left-0 w-full z-[70] bg-[#0F0F0F] transition-all duration-500 overflow-hidden ${isSearchOpen ? 'max-h-40 py-6 border-b border-[#C5A059]/30' : 'max-h-0'}`}
      >
        <div className="max-w-4xl mx-auto px-4 flex gap-4 items-center">
          <input 
            type="text" 
            placeholder="請輸入關鍵字" 
            className="flex-grow bg-white/5 border border-white/10 rounded-lg px-6 py-3 text-white placeholder:text-white/40 outline-none focus:border-[#C5A059]"
          />
          <button className="bg-[#C5A059] text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-[#B48F49] transition-colors">
            <Search className="w-5 h-5" />
            <span>Search</span>
          </button>
          <button onClick={() => setIsSearchOpen(false)} className="text-white/60 hover:text-white">
            <X className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Header */}
      <header id="g-header" className="sticky top-0 z-[60] bg-[#0F0F0F]/95 backdrop-blur-md border-b border-white/5 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
          <h1 className="logo">
            <a href="/index.php" className="flex items-center">
              <span className="text-white text-2xl md:text-3xl font-black tracking-[0.2em] hover:text-[#C5A059] transition-colors">
                融資租賃有限公司
              </span>
            </a>
          </h1>

          <div className="nav-right flex items-center gap-8">
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <li key={link.name} className="relative group px-4 py-2">
                    <a href={link.href} className="flex flex-col items-center group-hover:text-[#C5A059] transition-colors">
                      <span className="text-white text-lg font-bold group-hover:text-[#C5A059]">{link.name}</span>
                      <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mt-1">{link.en}</p>
                    </a>
                    {link.subLinks && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]">
                        <ul className="bg-[#1A1A1A] rounded-xl shadow-2xl py-3 w-48 border-t-2 border-[#C5A059]">
                          {link.subLinks.map((sub) => (
                            <li key={sub.name}>
                              <a href={sub.href} className="block px-6 py-2.5 text-slate-300 hover:bg-white/5 hover:text-[#C5A059] font-bold text-sm transition-colors">{sub.name}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
                <li>
                  <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-3 text-white hover:text-[#C5A059] transition-colors">
                    <Search className="w-6 h-6" />
                  </button>
                </li>
              </ul>
            </nav>

            <button className="lg:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[80] bg-[#0F0F0F] pt-24 px-6 overflow-y-auto">
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 text-white"><X className="w-10 h-10" /></button>
          <ul className="flex flex-col gap-4 mt-10">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-white/10 pb-4">
                <div className="flex items-center justify-between py-2" onClick={() => setActiveSubMenu(activeSubMenu === link.name ? null : link.name)}>
                  <span className="text-2xl font-black text-white">{link.name}</span>
                  {link.subLinks && <ChevronDown className={`w-6 h-6 text-[#C5A059] transition-transform ${activeSubMenu === link.name ? 'rotate-180' : ''}`} />}
                </div>
                {link.subLinks && activeSubMenu === link.name && (
                  <ul className="mt-4 flex flex-col gap-3 pl-4 bg-white/5 rounded-xl p-4">
                    {link.subLinks.map((sub) => (
                      <li key={sub.name}><a href={sub.href} className="text-white/80 text-lg font-medium">{sub.name}</a></li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <main className="flex-grow">
        {/* Anti-Fraud Notice */}
        <div className="bg-[#8E1B1B] text-white py-3 px-4 text-center shadow-inner">
          <p className="font-bold flex items-center justify-center gap-2 text-sm">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            重要資訊：防範金融詐騙 ‧ 本公司不事先收取任何費用
          </p>
        </div>

        {/* Hero Slider Section */}
        <section className="relative h-[700px] overflow-hidden bg-black">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10 visible scale-100' : 'opacity-0 z-0 invisible pointer-events-none scale-105'
              }`}
            >
              <div className="absolute inset-0">
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
              </div>

              <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
                <div className="max-w-2xl flex flex-col gap-6 items-start">
                  <div className="bg-[#C5A059] text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-[0.3em] animate-fade-in-up">
                    融資租賃有限公司 ‧ 專業服務
                  </div>
                  <h2 className="text-white text-5xl md:text-7xl font-black tracking-tight leading-tight animate-fade-in-up delay-100">
                    {slide.title}
                  </h2>
                  <p className="text-slate-300 text-xl md:text-2xl font-bold animate-fade-in-up delay-200 border-l-4 border-[#C5A059] pl-6">
                    {slide.subtitle}
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-6 animate-fade-in-up delay-200">
                    <button className="bg-white text-black px-12 py-5 rounded-full font-black text-lg shadow-2xl transition-all hover:bg-[#C5A059] hover:text-white active:scale-95">{slide.ctaText}</button>
                    <a href="https://line.me/ti/p/~@815nmnye" className="bg-[#00c300] text-white px-10 py-5 rounded-full font-black text-lg shadow-2xl flex items-center gap-3 hover:opacity-90 active:scale-95">
                      <MessageCircle className="w-6 h-6 fill-current" />
                      LINE 諮詢
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-6">
            {slides.map((_, index) => (
              <button key={index} onClick={() => setCurrentSlide(index)} className={`h-1.5 transition-all duration-500 rounded-full ${index === currentSlide ? 'w-16 bg-[#C5A059]' : 'w-6 bg-white/20 hover:bg-white/40'}`} />
            ))}
          </div>
        </section>

        {/* Project Items Section */}
        <section className="bg-white py-24 relative z-20 -mt-16 rounded-t-[80px] shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="text-[#C5A059] font-black tracking-[0.3em] text-sm mb-4 block uppercase font-bold">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16 tracking-tight">核心資產項目</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projectItems.map((item, idx) => (
                <div key={idx} className="group overflow-hidden rounded-[40px] shadow-xl border border-slate-50 transition-all duration-500 bg-white">
                  <a href={item.href} className="block relative">
                    <div className="h-72 overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800";
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 bg-[#C5A059] text-white px-8 py-3 rounded-full font-black transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">了解詳情</span>
                      </div>
                    </div>
                    <div className="p-10 bg-white group-hover:bg-slate-50 transition-colors">
                      <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#C5A059] tracking-[0.1em] transition-colors">{item.title}</h3>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Steps */}
        <section className="py-24 bg-[#F9F9F7]">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-20 tracking-tight">尊榮申貸 4 步驟</h2>
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
              {[
                { label: '預約諮詢', icon: MessageSquareText, step: '01' },
                { label: '資產鑑價', icon: FileSearch, step: '02' },
                { label: '簽約對保', icon: FileCheck, step: '03' },
                { label: '即刻撥款', icon: HandCoins, step: '04' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-8 group">
                  <div className="w-44 h-44 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-slate-50 group-hover:border-[#C5A059] transition-all duration-500 relative">
                    <div className="absolute -top-1 -right-1 w-12 h-12 bg-slate-900 text-[#C5A059] rounded-full flex items-center justify-center font-black">{item.step}</div>
                    <item.icon className="w-16 h-16 text-slate-400 group-hover:text-[#C5A059] transition-colors" />
                  </div>
                  <span className="text-2xl font-black text-slate-900">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-24 tracking-[0.2em]">信 賴 見 證</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
              <div className="bg-[#F9F9F7] p-12 rounded-[50px] shadow-sm flex flex-col items-center gap-10 border border-slate-50">
                <h3 className="text-slate-900 text-2xl font-black">林 先生</h3>
                <div className="flex gap-1.5"><Star className="w-5 h-5 fill-[#C5A059] text-[#C5A059]" /><Star className="w-5 h-5 fill-[#C5A059] text-[#C5A059]" /><Star className="w-5 h-5 fill-[#C5A059] text-[#C5A059]" /><Star className="w-5 h-5 fill-[#C5A059] text-[#C5A059]" /><Star className="w-5 h-5 fill-[#C5A059] text-[#C5A059]" /></div>
                <p className="text-slate-500 font-bold leading-relaxed text-center italic">非常感謝協助，讓我擺脫被小額追著跑的生活，生活回歸平靜。</p>
              </div>
              <div className="bg-[#F9F9F7] p-12 rounded-[50px] shadow-sm flex flex-col items-center gap-10 border border-slate-50">
                <h3 className="text-slate-900 text-2xl font-black">Jhang 先生</h3>
                <div className="flex gap-1.5"><Star className="w-5 h-5 fill-[#C5A059] text-[#C5A059]" /><Star className="w-5 h-5 fill-[#C5A059] text-[#C5A059]" /><Star className="w-5 h-5 fill-[#C5A059] text-[#C5A059]" /><Star className="w-5 h-5 fill-[#C5A059] text-[#C5A059]" /><Star className="w-5 h-5 fill-[#C5A059] text-[#C5A059]" /></div>
                <p className="text-slate-500 font-bold leading-relaxed text-center italic">沒想到真的成功了，把煩惱的分期跟當鋪結清掉，真的很感謝。</p>
              </div>
              <div className="bg-[#F9F9F7] p-12 rounded-[50px] shadow-sm flex flex-col items-center gap-10 border border-slate-50">
                <h3 className="text-slate-900 text-2xl font-black">柏 志</h3>
                <div className="flex gap-1.5"><Star className="w-5 h-5 fill-[#C5A059] text-[#C5A059]" /><Star className="w-5 h-5 fill-[#C5A059] text-[#C5A059]" /><Star className="w-5 h-5 fill-[#C5A059] text-[#C5A059]" /><Star className="w-5 h-5 fill-[#C5A059] text-[#C5A059]" /><Star className="w-5 h-5 fill-[#C5A059] text-[#C5A059]" /></div>
                <p className="text-slate-500 font-bold leading-relaxed text-center italic">真心想幫忙的，非常感謝台盛，給五顆星！！</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-24 bg-slate-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-[60px] shadow-2xl overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-5/12 bg-slate-900 p-16 text-white flex flex-col justify-center">
                <h2 className="text-4xl font-black mb-10 border-b-4 border-[#C5A059] pb-8 uppercase tracking-widest">線上審核</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-6"><CheckCircle2 className="w-8 h-8 text-[#C5A059]" /><div><p className="font-black text-xl">零代辦手續費</p><p className="text-sm text-slate-400">核貸前不收任何費用</p></div></div>
                  <div className="flex items-start gap-6"><ShieldCheck className="w-8 h-8 text-[#C5A059]" /><div><p className="font-black text-xl">資安保密</p><p className="text-sm text-slate-400">個資全程 SSL 加密</p></div></div>
                </div>
              </div>
              <div className="md:w-7/12 p-12 lg:p-20">
                <form className="space-y-10">
                  <div>
                    <label className="block text-sm font-black text-slate-500 mb-4 tracking-wider">您的姓名 Full Name</label>
                    <input 
                      type="text" 
                      placeholder="例：林先生" 
                      className="w-full px-8 py-5 rounded-2xl border-2 border-slate-200 bg-white text-black placeholder:text-slate-400 focus:border-[#C5A059] outline-none transition-all font-bold" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-slate-500 mb-4 tracking-wider">聯繫電話 Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="09XX-XXX-XXX" 
                      className="w-full px-8 py-5 rounded-2xl border-2 border-slate-200 bg-white text-black placeholder:text-slate-400 focus:border-[#C5A059] outline-none transition-all font-bold" 
                    />
                  </div>
                  <button type="button" onClick={() => alert('已收到您的預約，專員將盡速聯絡！')} className="w-full bg-slate-900 text-[#C5A059] py-7 rounded-2xl font-black text-2xl shadow-2xl hover:bg-black transition-all active:scale-95">提交尊榮預約</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0F0F0F] text-slate-500 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-16 mb-24">
            <div>
              <h2 className="text-white text-3xl font-black mb-10 tracking-[0.2em]">融資租賃</h2>
              <p className="leading-relaxed font-bold text-lg">深耕金融貸款與奢侈品鑑定領域，提供最透明、高效的資金解決方案。</p>
            </div>
            <div>
              <h3 className="text-[#C5A059] text-xl font-black mb-10 border-l-4 border-[#C5A059] pl-6 tracking-widest">官方資訊</h3>
              <p className="font-bold text-slate-300">◆ 諮詢專線：0800-002-577</p>
              <p className="font-bold text-slate-300">◆ 公司地址：高雄市鼓山區明華路315號5樓之1</p>
            </div>
            <div>
              <h3 className="text-[#C5A059] text-xl font-black mb-10 border-l-4 border-[#C5A059] pl-6 tracking-widest">核心產品</h3>
              <div className="flex flex-wrap gap-4 text-sm font-bold">
                {Object.values(LoanType).slice(0, 6).map(t => <span key={t} className="hover:text-white cursor-default">▶ {t}</span>)}
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <p className="text-sm font-black tracking-widest uppercase">Copyright © 2026 融資租賃有限公司 版權所有</p>
            <div className="flex gap-12 text-sm font-black"><a href="#" className="hover:text-white transition-colors font-bold">隱私權保護</a><a href="#" className="hover:text-white transition-colors font-bold">服務條約</a></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
