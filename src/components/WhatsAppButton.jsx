import { MessageCircle, Send, X } from "lucide-react";

import React, { useState, useEffect, useRef } from "react";






const WhatsAppButton = () => {
  const [open, setOpen] = (0, useState)(false);
  const [pulseVisible, setPulseVisible] = (0, useState)(true);
  const phone = "918985419420";
  (0, useEffect)(() => {
    // Show a subtle nudge after 8 seconds
    const t = setTimeout(() => setPulseVisible(true), 8000);
    return () => clearTimeout(t);
  }, []);
  const Send = msg => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };
  const quickMessages = ["Hi, I'd like to book a free demo of Kriscel ERP", "Tell me more about your AI automation services", "What's the pricing for the Growth plan?", "I need help with ERP implementation"];
  return /*#__PURE__*/<>{open && /*#__PURE__*/<div className="fixed bottom-24 right-5 md:right-8 z-[60] w-[calc(100vw-2.5rem)] max-w-sm animate-fade-up">{/*#__PURE__*/<div className="rounded-2xl bg-white shadow-2xl border border-slate-100 overflow-hidden">{/*#__PURE__*/<div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-4 flex items-center gap-3">{/*#__PURE__*/<div className="relative">{/*#__PURE__*/<div className="h-11 w-11 rounded-full bg-white grid place-items-center shadow-md">{/*#__PURE__*/<MessageCircle className="h-5 w-5 text-emerald-600" strokeWidth={2.5} />}</div>}{/*#__PURE__*/<span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-emerald-400 border-2 border-white" />}</div>}{/*#__PURE__*/<div className="flex-1">{/*#__PURE__*/<p className="text-white font-semibold text-sm">Kriscel Support</p>}{/*#__PURE__*/<p className="text-emerald-50 text-xs">Typically replies in minutes</p>}</div>}{/*#__PURE__*/<button onClick={() => setOpen(false)} className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/30 grid place-items-center transition-colors" aria-label="Close chat">{/*#__PURE__*/<X className="h-4 w-4 text-white" />}</button>}</div>}{/*#__PURE__*/<div className="p-4 bg-slate-50/60 max-h-96 overflow-y-auto">{/*#__PURE__*/<div className="flex gap-2 mb-4">{/*#__PURE__*/<div className="h-8 w-8 rounded-full bg-emerald-500 grid place-items-center flex-shrink-0">{/*#__PURE__*/<MessageCircle className="h-4 w-4 text-white" />}</div>}{/*#__PURE__*/<div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm border border-slate-100 max-w-[80%]">{/*#__PURE__*/<p className="text-sm text-slate-700">Namaste! 👋 How can we help you automate your business today?</p>}</div>}</div>}{/*#__PURE__*/<p className="text-xs text-slate-500 font-medium mb-2 mt-4">Quick messages:</p>}{/*#__PURE__*/<div className="space-y-2">{quickMessages.map((m, i) => /*#__PURE__*/<button onClick={() => Send(m)} className="w-full text-left px-3 py-2.5 rounded-xl bg-white hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 text-sm text-slate-700 transition-all group flex items-center justify-between gap-2">{/*#__PURE__*/<span>{m}</span>}{/*#__PURE__*/<Send className="h-3.5 w-3.5 text-slate-400 group-hover:text-emerald-600 flex-shrink-0 group-hover:translate-X-0.5 transition-all" />}</button>)}</div>}</div>}{/*#__PURE__*/<button onClick={() => Send("Hi Kriscel Team!")} className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm py-3.5 flex items-center justify-center gap-2 transition-colors">{/*#__PURE__*/<MessageCircle className="h-4 w-4" />}Start WhatsApp Chat</button>}</div>}</div>}{/*#__PURE__*/<button onClick={() => setOpen(!open)} className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[60] group" aria-label="WhatsApp chat">{!open && /*#__PURE__*/<>{/*#__PURE__*/<span className="absolute inset-0 rounded-full bg-emerald-500 opacity-60 animate-ping" />}{/*#__PURE__*/<span className="absolute inset-0 rounded-full bg-emerald-400 opacity-40 animate-pulse" />}</>}{/*#__PURE__*/<div className="relative h-14 w-14 md:h-16 md:w-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 grid place-items-center shadow-lg shadow-emerald-500/40 group-hover:scale-110 transition-transform">{open ? /*#__PURE__*/<X className="h-6 w-6 text-white" strokeWidth={2.5} /> : /*#__PURE__*/<MessageCircle className="h-6 w-6 md:h-7 md:w-7 text-white" strokeWidth={2.2} />}</div>}{!open && pulseVisible && /*#__PURE__*/<div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white rounded-full px-4 py-2 shadow-lg border border-slate-100 text-sm font-medium text-slate-700 hidden md:flex items-center gap-2">{/*#__PURE__*/<span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />}Chat with us</div>}</button>}</>;
};

/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = WhatsAppButton;

export default __WEBPACK_DEFAULT_EXPORT__;