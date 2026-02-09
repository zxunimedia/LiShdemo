
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 pr-0">
      <a
        href="tel:0800002577"
        className="flex items-center gap-3 bg-[#C5A059] text-white px-6 py-5 rounded-l-3xl shadow-2xl hover:bg-[#B48F49] transition-all group scale-100 hover:scale-110 active:scale-95 border-y border-l border-white/10"
      >
        <Phone className="w-6 h-6 animate-pulse" />
        <span className="hidden md:inline font-black text-lg tracking-widest">撥打專線</span>
      </a>
      <a
        href="https://line.me/ti/p/~@815nmnye"
        target="_blank"
        className="flex items-center gap-3 bg-[#00c300] text-white px-6 py-5 rounded-l-3xl shadow-2xl hover:opacity-90 transition-all scale-100 hover:scale-110 active:scale-95 border-y border-l border-white/10"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="hidden md:inline font-black text-lg tracking-widest">LINE 諮詢</span>
      </a>
    </div>
  );
};

export default FloatingCTA;
