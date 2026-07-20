import { ChartColumn, CircleCheck, CodeXml, PenLine, TriangleAlert, UsersRound, ArrowRight, Boxes, Building2, Cpu, Factory, Globe, ListChecks, MapPin, Megaphone, MousePointerClick, PackageOpen, Palette, Search, Share2, ShieldCheck, ShoppingCart, Store, Target, UserPlus, UserSearch, Wallet } from "lucide-react";

import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useParams, useNavigate } from "react-router-dom";



























import Button from "../components/ui/button.jsx";
import Card from "../components/ui/card.jsx";
import Badge from "../components/ui/badge.jsx";
import SEO from "../components/SEO.jsx";
import mock from "../mock";



const iconMap = {
  Cpu: Cpu,
  Megaphone: Megaphone,
  UserSearch: UserSearch,
  Globe: Globe,
  BarChart3: ChartColumn,
  Search: Search,
  Boxes: Boxes,
  ListChecks: ListChecks,
  Factory: Factory,
  Wallet: Wallet,
  UsersRound: UsersRound,
  ShoppingCart: ShoppingCart,
  MousePointerClick: MousePointerClick,
  Share2: Share2,
  PenLine: PenLine,
  MapPin: MapPin,
  Code2: CodeXml,
  Palette: Palette,
  PackageOpen: PackageOpen,
  Target: Target,
  UserPlus: UserPlus,
  ShieldCheck: ShieldCheck,
  Store: Store,
  Building2: Building2
};
const Services = () => {
  const [openFaq, setOpenFaq] = (0, useState)(0);
  return /*#__PURE__*/<div>{/*#__PURE__*/<section className="relative hero-bg overflow-hidden">{/*#__PURE__*/<div className="absolute inset-0 grid-bg opacity-70" />}{/*#__PURE__*/<div className="relative max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24 text-center">{/*#__PURE__*/<Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100 border-0 rounded-full px-3 py-1 text-xs font-medium mb-5">Our Services</Badge>}{/*#__PURE__*/<h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">Solutions that {/*#__PURE__*/<span className="gradient-text">fix real problems</span>}</h1>}{/*#__PURE__*/<p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">We don't sell software. We sell outcomes — measurable, tracked and delivered. Here's what we do, and the actual pain each service kills.</p>}</div>}</section>}{/*#__PURE__*/<section className="py-16 md:py-20">{/*#__PURE__*/<div className="max-w-7xl mx-auto px-5 md:px-8 space-y-6">{mock.services.map((s, i) => {
          const Icon = iconMap[s.icon] || Cpu;
          const reverse = i % 2 === 1;
          return /*#__PURE__*/<Card className="p-7 md:p-10 rounded-3xl border border-slate-100 card-shadow card-shadow-hover bg-white overflow-hidden">{/*#__PURE__*/<div className={`grid lg:grid-cols-2 gap-8 items-start ${reverse ? "lg:[direction:rtl]" : ""}`}>{/*#__PURE__*/<div className="lg:[direction:ltr]">{/*#__PURE__*/<div className="flex items-center gap-3 mb-4">{/*#__PURE__*/<div className="h-12 w-12 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center shadow-md">{/*#__PURE__*/<Icon className="h-6 w-6 text-white" strokeWidth={2.2} />}</div>}{/*#__PURE__*/<span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Service {/*#__PURE__*/<span data-ve-dynamic="true" style={{
                      display: "contents"
                    }}>{String(i + 1).padStart(2, "0")}</span>}</span>}</div>}{/*#__PURE__*/<h3 className="text-2xl md:text-3xl font-bold text-slate-900">{s.title}</h3>}{/*#__PURE__*/<p className="text-sm text-sky-600 font-medium mt-1">{s.short}</p>}{/*#__PURE__*/<div className="mt-5 p-4 rounded-2xl bg-amber-50/60 border border-amber-100">{/*#__PURE__*/<div className="flex items-start gap-2.5">{/*#__PURE__*/<TriangleAlert className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />}{/*#__PURE__*/<div>{/*#__PURE__*/<p className="text-xs font-bold text-amber-700 uppercase tracking-wide">The Pain</p>}{/*#__PURE__*/<p className="text-sm text-slate-700 mt-1 leading-relaxed">{s.problem}</p>}</div>}</div>}</div>}{/*#__PURE__*/<div className="mt-4 p-4 rounded-2xl bg-sky-50/60 border border-sky-100">{/*#__PURE__*/<div className="flex items-start gap-2.5">{/*#__PURE__*/<CircleCheck className="h-4 w-4 text-sky-600 mt-0.5 flex-shrink-0" />}{/*#__PURE__*/<div>{/*#__PURE__*/<p className="text-xs font-bold text-sky-700 uppercase tracking-wide">Our Fix</p>}{/*#__PURE__*/<p className="text-sm text-slate-700 mt-1 leading-relaxed">{s.desc}</p>}</div>}</div>}</div>}{/*#__PURE__*/<Link to={`/services/${s.slug}`} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-sky-600 group/link">Learn more {/*#__PURE__*/<ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />}</Link>}</div>}{/*#__PURE__*/<div className="lg:[direction:ltr]">{/*#__PURE__*/<div className="rounded-2xl bg-gradient-to-br from-slate-50 to-sky-50/40 border border-slate-100 p-6">{/*#__PURE__*/<p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-4">What you get</p>}{/*#__PURE__*/<ul className="space-y-3">{s.features.map((f, fi) => /*#__PURE__*/<li className="flex items-start gap-3">{/*#__PURE__*/<div className="h-6 w-6 rounded-full bg-sky-100 grid place-items-center flex-shrink-0 mt-0.5">{/*#__PURE__*/<CircleCheck className="h-3.5 w-3.5 text-sky-600" />}</div>}{/*#__PURE__*/<span className="text-sm text-slate-700 leading-relaxed">{f}</span>}</li>)}</ul>}</div>}</div>}</div>}</Card>;
        })}</div>}</section>}{/*#__PURE__*/<section className="py-20 md:py-24">{/*#__PURE__*/<div className="max-w-7xl mx-auto px-5 md:px-8">{/*#__PURE__*/<div className="max-w-2xl mx-auto text-center mb-12">{/*#__PURE__*/<Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100 border-0 rounded-full px-3 py-1 text-xs font-medium mb-4">Complete Service Directory</Badge>}{/*#__PURE__*/<h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">20+ services under {/*#__PURE__*/<span className="gradient-text">one roof</span>}</h2>}{/*#__PURE__*/<p className="mt-4 text-lg text-slate-600">Everything you need to run and grow — no vendor juggling required.</p>}</div>}{/*#__PURE__*/<div className="mb-12">{/*#__PURE__*/<div className="flex items-center gap-3 mb-6">{/*#__PURE__*/<div className="h-8 w-1.5 rounded-full bg-gradient-to-b from-sky-400 to-blue-600" />}{/*#__PURE__*/<h3 className="text-xl font-bold text-slate-900">Management Systems</h3>}{/*#__PURE__*/<span className="text-xs text-slate-500 font-semibold">({/*#__PURE__*/<span data-ve-dynamic="true" style={{
                display: "contents"
              }}>{mock.managementSystems.length}</span>})</span>}</div>}{/*#__PURE__*/<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{mock.managementSystems.map((s, i) => {
              const Icon = iconMap[s.icon] || Boxes;
              return /*#__PURE__*/<Card className="p-5 rounded-2xl border border-slate-100 card-shadow card-shadow-hover bg-white group">{/*#__PURE__*/<div className="flex items-start gap-3">{/*#__PURE__*/<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform">{/*#__PURE__*/<Icon className="h-5 w-5 text-white" />}</div>}{/*#__PURE__*/<div className="min-w-0">{/*#__PURE__*/<h4 className="text-sm font-bold text-slate-900">{s.title}</h4>}{/*#__PURE__*/<p className="text-xs text-slate-600 mt-1 leading-relaxed">{s.desc}</p>}</div>}</div>}{/*#__PURE__*/<div className="flex flex-wrap gap-1.5 mt-3">{s.features.map((f, fi) => /*#__PURE__*/<span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 font-medium">{f}</span>)}</div>}</Card>;
            })}</div>}</div>}{/*#__PURE__*/<div>{/*#__PURE__*/<div className="flex items-center gap-3 mb-6">{/*#__PURE__*/<div className="h-8 w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-sky-600" />}{/*#__PURE__*/<h3 className="text-xl font-bold text-slate-900">Growth & Visibility Services</h3>}{/*#__PURE__*/<span className="text-xs text-slate-500 font-semibold">({/*#__PURE__*/<span data-ve-dynamic="true" style={{
                display: "contents"
              }}>{mock.growthServices.length}</span>})</span>}</div>}{/*#__PURE__*/<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">{mock.growthServices.map((s, i) => {
              const Icon = iconMap[s.icon] || Search;
              return /*#__PURE__*/<Card className="p-4 rounded-xl border border-slate-100 card-shadow-hover bg-white group cursor-pointer">{/*#__PURE__*/<div className="flex items-start gap-2.5">{/*#__PURE__*/<div className="h-9 w-9 rounded-lg bg-gradient-to-br from-sky-100 to-blue-100 grid place-items-center flex-shrink-0 group-hover:from-sky-200 group-hover:to-blue-200 transition-colors">{/*#__PURE__*/<Icon className="h-4 w-4 text-sky-600" />}</div>}{/*#__PURE__*/<div className="min-w-0">{/*#__PURE__*/<h4 className="text-xs font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-tight">{s.title}</h4>}{/*#__PURE__*/<p className="text-[11px] text-slate-500 mt-1 leading-snug line-clamp-2">{s.desc}</p>}</div>}</div>}</Card>;
            })}</div>}</div>}{/*#__PURE__*/<div className="mt-14 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-sky-50/40 border border-slate-100">{/*#__PURE__*/<p className="text-center text-xs uppercase tracking-widest text-slate-500 font-semibold mb-4">We work across all major platforms</p>}{/*#__PURE__*/<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">{mock.platforms.map((p, i) => /*#__PURE__*/<span className="text-sm md:text-base font-bold text-slate-500 hover:text-sky-600 transition-colors cursor-default">{p}</span>)}</div>}</div>}</div>}</section>}{/*#__PURE__*/<section className="py-20 md:py-24 bg-gradient-to-b from-white to-sky-50/40">{/*#__PURE__*/<div className="max-w-6xl mx-auto px-5 md:px-8">{/*#__PURE__*/<div className="text-center mb-14">{/*#__PURE__*/<Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 rounded-full px-3 py-1 text-xs font-medium mb-4">How We Work</Badge>}{/*#__PURE__*/<h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">A process built on {/*#__PURE__*/<span className="gradient-text">honesty</span>}</h2>}{/*#__PURE__*/<p className="mt-4 text-lg text-slate-600">No surprises. No scope-creep drama. No 'oh we didn't budget for that'.</p>}</div>}{/*#__PURE__*/<div className="space-y-4">{[{
            n: "01",
            t: "Paid Discovery (2 days)",
            d: "We visit your office, shadow your team, audit your systems and produce a real assessment. Costs ₹25,000 — adjusted against project fees if you sign with us."
          }, {
            n: "02",
            t: "Fixed-Price Proposal",
            d: "You get a detailed scope document, milestone-wise timeline, deliverables and pricing. Sign only when everything is clear. No pressure calls."
          }, {
            n: "03",
            t: "Weekly Sprints",
            d: "You see progress every Friday via live demo. Change requests in the first 2 weeks are free. Beyond that, we discuss trade-offs honestly."
          }, {
            n: "04",
            t: "Parallel Run & Go-Live",
            d: "New system runs alongside your old one for 2 weeks. Users trained. Data validated. Only then we cut over — never the other way around."
          }, {
            n: "05",
            t: "3-Month Free Support",
            d: "Every bug, every 'how do I…', every small change — free for 90 days after go-live. After that, transparent AMC plans."
          }].map((step, i) => /*#__PURE__*/<div className="flex gap-5 items-start p-6 rounded-2xl bg-white border border-slate-100 card-shadow-hover">{/*#__PURE__*/<div className="h-14 w-14 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center text-white font-bold text-lg flex-shrink-0">{step.n}</div>}{/*#__PURE__*/<div>{/*#__PURE__*/<h3 className="text-lg font-bold text-slate-900">{step.t}</h3>}{/*#__PURE__*/<p className="text-sm text-slate-600 mt-1 leading-relaxed">{step.d}</p>}</div>}</div>)}</div>}</div>}</section>}{/*#__PURE__*/<section className="py-20 md:py-24">{/*#__PURE__*/<div className="max-w-4xl mx-auto px-5 md:px-8">{/*#__PURE__*/<div className="text-center mb-12">{/*#__PURE__*/<Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100 border-0 rounded-full px-3 py-1 text-xs font-medium mb-4">FAQs</Badge>}{/*#__PURE__*/<h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Straight answers to {/*#__PURE__*/<span className="gradient-text">common questions</span>}</h2>}</div>}{/*#__PURE__*/<div className="space-y-3">{mock.faqs.map((f, i) => /*#__PURE__*/<div className="rounded-2xl border border-slate-100 bg-white overflow-hidden">{/*#__PURE__*/<button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-sky-50/40 transition-colors">{/*#__PURE__*/<span className="font-semibold text-slate-900 pr-4">{f.q}</span>}{/*#__PURE__*/<span className={`h-7 w-7 rounded-full bg-sky-100 grid place-items-center flex-shrink-0 transition-transform ${openFaq === i ? "rotate-45" : ""}`}>{/*#__PURE__*/<span className="text-sky-600 text-lg leading-none">+</span>}</span>}</button>}{openFaq === i && /*#__PURE__*/<div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 bg-sky-50/20">{f.a}</div>}</div>)}</div>}</div>}</section>}{/*#__PURE__*/<section className="py-20">{/*#__PURE__*/<div className="max-w-6xl mx-auto px-5 md:px-8">{/*#__PURE__*/<div className="relative rounded-3xl bg-gradient-to-br from-sky-500 to-blue-600 p-10 md:p-14 text-white overflow-hidden">{/*#__PURE__*/<div className="absolute inset-0 grid-bg opacity-20" />}{/*#__PURE__*/<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">{/*#__PURE__*/<div>{/*#__PURE__*/<h3 className="text-2xl md:text-4xl font-bold">Not sure where to start?</h3>}{/*#__PURE__*/<p className="mt-2 text-sky-100">Book a free 30-min call. We'll help you figure out what to fix first.</p>}</div>}{/*#__PURE__*/<Link to="/contact">{/*#__PURE__*/<Button className="bg-white text-slate-900 hover:bg-sky-50 rounded-full h-12 px-6 font-semibold whitespace-nowrap">Schedule a call {/*#__PURE__*/<ArrowRight className="ml-2 h-4 w-4" />}</Button>}</Link>}</div>}</div>}</div>}</section>}</div>;
};

/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = Services;

export default __WEBPACK_DEFAULT_EXPORT__;