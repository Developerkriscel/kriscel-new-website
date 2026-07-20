import { CircleCheck, Sparkles, Bot, Database, FileText, Mail, MessageSquareText, Zap } from "lucide-react";

import React, { useState, useEffect, useRef } from "react";








import Badge from "./ui/badge.jsx";



const steps = [{
  icon: FileText,
  label: "Invoice received",
  sub: "PDF · WhatsApp",
  color: "from-sky-400 to-blue-600"
}, {
  icon: Bot,
  label: "AI extracts data",
  sub: "OCR + matching",
  color: "from-blue-500 to-indigo-600"
}, {
  icon: Database,
  label: "ERP entry created",
  sub: "GRN + PO linked",
  color: "from-cyan-500 to-sky-600"
}, {
  icon: MessageSquareText,
  label: "Alerts sent",
  sub: "Team + supplier",
  color: "from-indigo-500 to-blue-600"
}, {
  icon: CircleCheck,
  label: "Approved & filed",
  sub: "Zero manual work",
  color: "from-emerald-500 to-teal-600"
}];
const AutomationShowcase = () => {
  const [active, setActive] = (0, useState)(0);
  const [count, setCount] = (0, useState)(0);
  (0, useEffect)(() => {
    const interval = setInterval(() => {
      setActive(a => (a + 1) % steps.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);
  (0, useEffect)(() => {
    const target = 1842;
    let current = 0;
    const step = Math.ceil(target / 60);
    const t = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(t);
      }
      setCount(current);
    }, 30);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/<section className="py-20 md:py-28 relative overflow-hidden bg-slate-950 text-white">{/*#__PURE__*/<div className="absolute inset-0 opacity-30">{/*#__PURE__*/<div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-sky-500 blur-[120px] animate-float" />}{/*#__PURE__*/<div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-600 blur-[120px] animate-float" style={{
        animationDelay: "2s"
      }} />}</div>}{/*#__PURE__*/<div className="absolute inset-0" style={{
      backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      backgroundSize: "40px 40px"
    }} />}{/*#__PURE__*/<div className="relative max-w-7xl mx-auto px-5 md:px-8">{/*#__PURE__*/<div className="max-w-2xl mx-auto text-center mb-14">{/*#__PURE__*/<Badge className="bg-sky-500/20 text-sky-300 hover:bg-sky-500/20 border border-sky-500/30 rounded-full px-3 py-1 text-xs font-medium mb-4">{/*#__PURE__*/<Sparkles className="h-3 w-3 mr-1.5" />}Automation in Action</Badge>}{/*#__PURE__*/<h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">Watch AI handle the boring stuff{/*#__PURE__*/<span data-ve-dynamic="true" style={{
            display: "contents"
          }}> </span>}{/*#__PURE__*/<span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">in real-time</span>}</h2>}{/*#__PURE__*/<p className="mt-4 text-lg text-slate-400 leading-relaxed">From invoice OCR to ERP entry to WhatsApp alerts — every step happens automatically. Your team just approves.</p>}</div>}{/*#__PURE__*/<div className="grid lg:grid-cols-5 gap-4 items-stretch">{steps.map((s, i) => {
          const Icon = s.icon;
          const isActive = active === i;
          const isDone = i < active || active === 0 && i === steps.length - 1;
          return /*#__PURE__*/<div className="relative">{/*#__PURE__*/<div className={`relative rounded-2xl p-5 border transition-all duration-500 h-full ${isActive ? "bg-white/10 border-sky-400/60 shadow-2xl shadow-sky-500/30 scale-105" : "bg-white/[0.03] border-white/10"}`}>{isActive && /*#__PURE__*/<span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">{/*#__PURE__*/<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />}{/*#__PURE__*/<span className="relative inline-flex rounded-full h-4 w-4 bg-sky-500" />}</span>}{/*#__PURE__*/<div className="flex items-center justify-between mb-4">{/*#__PURE__*/<div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${s.color} grid place-items-center shadow-lg transition-all ${isActive ? "animate-pulse-glow" : ""}`}>{/*#__PURE__*/<Icon className="h-5 w-5 text-white" strokeWidth={2.2} />}</div>}{/*#__PURE__*/<span className="text-[10px] font-mono text-slate-500">{String(i + 1).padStart(2, "0")}</span>}</div>}{/*#__PURE__*/<p className="text-sm font-semibold text-white">{s.label}</p>}{/*#__PURE__*/<p className="text-xs text-slate-400 mt-1">{s.sub}</p>}{/*#__PURE__*/<div className="mt-4 h-1 rounded-full bg-white/5 overflow-hidden">{/*#__PURE__*/<div className={`h-full bg-gradient-to-r ${s.color} transition-all duration-500 ${isActive ? "w-full" : isDone ? "w-full opacity-40" : "w-0"}`} />}</div>}</div>}{i < steps.length - 1 && /*#__PURE__*/<div className="hidden lg:block absolute top-1/2 -right-2 -translate-y-1/2 z-10">{/*#__PURE__*/<div className="relative h-0.5 w-4 bg-slate-700 overflow-hidden">{/*#__PURE__*/<div className={`absolute top-0 left-0 h-full bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-700 ${active > i ? "w-full" : "w-0"}`} />}</div>}</div>}</div>;
        })}</div>}{/*#__PURE__*/<div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">{[{
          icon: Zap,
          label: "AI decisions today",
          value: count.toLocaleString(),
          color: "text-sky-400"
        }, {
          icon: FileText,
          label: "Invoices processed",
          value: "12.4M+",
          color: "text-blue-400"
        }, {
          icon: Mail,
          label: "Alerts sent",
          value: "48.7K",
          color: "text-cyan-400"
        }, {
          icon: CircleCheck,
          label: "Hours saved / month",
          value: "248",
          color: "text-emerald-400"
        }].map((c, i) => {
          const Icon = c.icon;
          return /*#__PURE__*/<div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 hover:bg-white/[0.06] transition-colors">{/*#__PURE__*/<Icon className={`h-5 w-5 ${c.color} mb-2`} />}{/*#__PURE__*/<p className="text-2xl md:text-3xl font-bold text-white tracking-tight">{c.value}</p>}{/*#__PURE__*/<p className="text-xs text-slate-400 mt-1">{c.label}</p>}</div>;
        })}</div>}</div>}</section>;
};

/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = AutomationShowcase;

export default __WEBPACK_DEFAULT_EXPORT__;