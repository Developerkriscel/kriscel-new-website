import { ChartColumn, CircleCheck, Sparkles, TriangleAlert, UsersRound, ArrowLeft, ArrowRight, Boxes, Cpu, Database, Eye, Factory, Globe, Headphones, ListChecks, Megaphone, MousePointerClick, Play, Plug, Search, ShoppingCart, Star, UserSearch, Wallet, Zap } from "lucide-react";

import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useParams, useNavigate } from "react-router-dom";

























import Button from "../components/ui/button.jsx";
import Card from "../components/ui/card.jsx";
import Badge from "../components/ui/badge.jsx";
import mock from "../mock";



const iconMap = {
  Cpu: Cpu,
  Megaphone: Megaphone,
  UserSearch: UserSearch,
  Globe: Globe,
  BarChart3: ChartColumn,
  Search: Search,
  Factory: Factory,
  UsersRound: UsersRound,
  ShoppingCart: ShoppingCart,
  Boxes: Boxes,
  Wallet: Wallet,
  ListChecks: ListChecks,
  Database: Database,
  Sparkles: Sparkles,
  Eye: Eye,
  MousePointerClick: MousePointerClick,
  Headphones: Headphones,
  Plug: Plug
};
const DetailPage = ({
  type
}) => {
  const {
    slug
  } = (0, useParams)();
  const [openFaq, setOpenFaq] = (0, useState)(0);
  const source = type === "product" ? mock.products : mock.services;
  const item = source.find(s => s.slug === slug);
  (0, useEffect)(() => {
    if (item && item.isExternal) {
      window.location.href = item.externalUrl;
    }
  }, [item]);
  if (!item) {
    return /*#__PURE__*/<chunk_5KNZJZUH.Navigate to={type === "product" ? "/products" : "/services"} replace={true} />;
  }
  const Icon = iconMap[item.icon] || Sparkles;
  const gradientColor = item.color || "from-sky-500 to-blue-600";
  const backLink = type === "product" ? "/products" : "/services";
  const backLabel = type === "product" ? "Back to Products" : "Back to Services";
  return /*#__PURE__*/<div>{/*#__PURE__*/<section className="relative hero-bg overflow-hidden">{/*#__PURE__*/<div className="absolute inset-0 grid-bg opacity-70" />}{/*#__PURE__*/<div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-10 md:pt-14 pb-16 md:pb-20">{/*#__PURE__*/<Link to={backLink} className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-sky-600 transition-colors mb-6">{/*#__PURE__*/<ArrowLeft className="h-4 w-4" />} {backLabel}</Link>}{/*#__PURE__*/<div className="grid lg:grid-cols-2 gap-10 items-center">{/*#__PURE__*/<div className="animate-fade-up">{/*#__PURE__*/<Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100 border-0 rounded-full px-3 py-1 text-xs font-medium mb-4">{item.badge || (type === "product" ? "Management System" : "Service")}</Badge>}{/*#__PURE__*/<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08]">{item.heroTitle || item.name || item.title}</h1>}{/*#__PURE__*/<p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">{item.desc}</p>}{/*#__PURE__*/<div className="mt-6">{/*#__PURE__*/<p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Works with</p>}{/*#__PURE__*/<div className="flex flex-wrap gap-x-4 gap-y-1">{mock.platforms.slice(0, 8).map((p, i) => /*#__PURE__*/<span className="text-sm font-bold text-slate-400 hover:text-sky-600 transition-colors cursor-default">{p}</span>)}</div>}</div>}{/*#__PURE__*/<div className="mt-7 flex flex-wrap gap-3">{/*#__PURE__*/<Link to="/contact">{/*#__PURE__*/<Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full h-12 px-6 text-sm font-semibold shadow-lg shadow-slate-900/20">Book a Demo {/*#__PURE__*/<ArrowRight className="ml-2 h-4 w-4" />}</Button>}</Link>}{/*#__PURE__*/<a href="#what-we-do">{/*#__PURE__*/<Button variant="outline" className="rounded-full h-12 px-6 text-sm font-semibold border-slate-300 hover:border-sky-500 hover:text-sky-600 bg-white">{/*#__PURE__*/<Play className="mr-2 h-4 w-4" />} Explore Features</Button>}</a>}</div>}</div>}{/*#__PURE__*/<div className="relative animate-fade-up" style={{
            animationDelay: "120ms"
          }}>{/*#__PURE__*/<div className="absolute -inset-4 bg-gradient-to-tr from-sky-200/40 to-blue-300/40 rounded-3xl blur-3xl" />}{/*#__PURE__*/<div className={`relative rounded-2xl bg-gradient-to-br ${gradientColor} p-8 md:p-10 overflow-hidden shadow-2xl shadow-sky-500/20`}>{/*#__PURE__*/<div className="absolute inset-0 grid-bg opacity-15" />}{/*#__PURE__*/<div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />}{/*#__PURE__*/<div className="relative">{/*#__PURE__*/<div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur border border-white/30 grid place-items-center mb-6">{/*#__PURE__*/<Icon className="h-8 w-8 text-white" strokeWidth={2} />}</div>}{/*#__PURE__*/<div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-5">{/*#__PURE__*/<div className="flex items-center justify-between mb-3">{/*#__PURE__*/<div className="flex items-center gap-2">{/*#__PURE__*/<div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${gradientColor} grid place-items-center`}>{/*#__PURE__*/<Icon className="h-4 w-4 text-white" />}</div>}{/*#__PURE__*/<span className="text-sm font-bold text-slate-900">{item.name || item.title}</span>}</div>}{/*#__PURE__*/<Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50 border-0 text-xs">{/*#__PURE__*/<span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />}Live</Badge>}</div>}{/*#__PURE__*/<div className="space-y-2">{(item.highlights || item.features || []).slice(0, 4).map((h, i) => /*#__PURE__*/<div className="flex items-center justify-between p-2.5 rounded-lg bg-sky-50/60">{/*#__PURE__*/<span className="text-xs text-slate-700 font-medium">{h}</span>}{/*#__PURE__*/<CircleCheck className="h-4 w-4 text-sky-500" />}</div>)}</div>}{/*#__PURE__*/<div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">{/*#__PURE__*/<div className="flex items-center gap-1.5">{/*#__PURE__*/<Zap className="h-4 w-4 text-sky-500" />}{/*#__PURE__*/<span className="text-xs font-semibold text-slate-900">Uptime: 99.98%</span>}</div>}{/*#__PURE__*/<div className="flex items-center gap-0.5">{[...Array(5)].map((_, i) => /*#__PURE__*/<Star className="h-3 w-3 fill-amber-400 text-amber-400" />)}</div>}</div>}</div>}</div>}</div>}</div>}</div>}</div>}</section>}{item.whatWeDo && /*#__PURE__*/<section id="what-we-do" className="py-16 md:py-20">{/*#__PURE__*/<div className="max-w-7xl mx-auto px-5 md:px-8">{/*#__PURE__*/<div className="max-w-2xl mx-auto text-center mb-12">{/*#__PURE__*/<p className="text-xs uppercase tracking-widest text-sky-600 font-bold mb-3">What We Do</p>}{/*#__PURE__*/<h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">{type === "product" ? "Total command over" : "Real results, not"} {/*#__PURE__*/<span className="gradient-text">{type === "product" ? "your operations" : "just promises"}</span>}</h2>}</div>}{/*#__PURE__*/<div className="grid md:grid-cols-3 gap-5">{item.whatWeDo.map((w, i) => /*#__PURE__*/<Card className="p-7 rounded-2xl border border-slate-100 card-shadow card-shadow-hover bg-white">{/*#__PURE__*/<div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${gradientColor} grid place-items-center mb-5 shadow-md`}>{/*#__PURE__*/<span className="text-white text-lg font-bold">{String(i + 1).padStart(2, "0")}</span>}</div>}{/*#__PURE__*/<h3 className="text-lg font-bold text-slate-900">{w.title}</h3>}{/*#__PURE__*/<p className="text-sm text-slate-600 mt-2 leading-relaxed">{w.desc}</p>}</Card>)}</div>}</div>}</section>}{item.problem && /*#__PURE__*/<section className="py-10">{/*#__PURE__*/<div className="max-w-5xl mx-auto px-5 md:px-8">{/*#__PURE__*/<Card className="p-7 md:p-10 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50/60 border border-amber-100">{/*#__PURE__*/<div className="flex items-start gap-4">{/*#__PURE__*/<div className="h-11 w-11 rounded-xl bg-amber-100 grid place-items-center flex-shrink-0">{/*#__PURE__*/<TriangleAlert className="h-5 w-5 text-amber-600" />}</div>}{/*#__PURE__*/<div>{/*#__PURE__*/<p className="text-xs font-bold text-amber-700 uppercase tracking-widest">Sound familiar?</p>}{/*#__PURE__*/<p className="mt-2 text-lg text-slate-800 leading-relaxed">{item.problem}</p>}</div>}</div>}</Card>}</div>}</section>}{item.benefits && /*#__PURE__*/<section className="py-16 md:py-20 bg-gradient-to-b from-white to-sky-50/40">{/*#__PURE__*/<div className="max-w-7xl mx-auto px-5 md:px-8">{/*#__PURE__*/<div className="max-w-2xl mx-auto text-center mb-12">{/*#__PURE__*/<Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 rounded-full px-3 py-1 text-xs font-medium mb-4">Core Benefits</Badge>}{/*#__PURE__*/<h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">What you actually {/*#__PURE__*/<span className="gradient-text">get out of it</span>}</h2>}{/*#__PURE__*/<p className="mt-4 text-lg text-slate-600">Comprehensive strategies to scale your efficiency — measured, not promised.</p>}</div>}{/*#__PURE__*/<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{item.benefits.map((b, i) => /*#__PURE__*/<Card className="p-6 rounded-2xl border border-slate-100 card-shadow card-shadow-hover bg-white">{/*#__PURE__*/<div className="text-3xl font-bold gradient-text tracking-tight mb-3">{String(i + 1).padStart(2, "0")}</div>}{/*#__PURE__*/<h3 className="text-lg font-bold text-slate-900">{b.title}</h3>}{/*#__PURE__*/<p className="text-sm text-slate-600 mt-2 leading-relaxed">{b.desc}</p>}</Card>)}</div>}</div>}</section>}{item.midCta && /*#__PURE__*/<section className="py-12">{/*#__PURE__*/<div className="max-w-6xl mx-auto px-5 md:px-8">{/*#__PURE__*/<div className={`relative rounded-3xl bg-gradient-to-br ${gradientColor} p-10 md:p-14 text-white overflow-hidden`}>{/*#__PURE__*/<div className="absolute inset-0 grid-bg opacity-20" />}{/*#__PURE__*/<div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />}{/*#__PURE__*/<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">{/*#__PURE__*/<div className="max-w-2xl">{/*#__PURE__*/<h3 className="text-2xl md:text-4xl font-bold leading-tight">{item.midCta.title}</h3>}{/*#__PURE__*/<p className="mt-3 text-sky-50 leading-relaxed">{item.midCta.desc}</p>}</div>}{/*#__PURE__*/<Link to="/contact">{/*#__PURE__*/<Button className="bg-white text-slate-900 hover:bg-sky-50 rounded-full h-12 px-6 font-semibold whitespace-nowrap shadow-lg">Automate Now {/*#__PURE__*/<ArrowRight className="ml-2 h-4 w-4" />}</Button>}</Link>}</div>}</div>}</div>}</section>}{/*#__PURE__*/<section className="py-16 md:py-20">{/*#__PURE__*/<div className="max-w-7xl mx-auto px-5 md:px-8">{/*#__PURE__*/<div className="max-w-2xl mx-auto text-center mb-12">{/*#__PURE__*/<p className="text-xs uppercase tracking-widest text-sky-600 font-bold mb-3">The Kriscel Advantage</p>}{/*#__PURE__*/<h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Why partner {/*#__PURE__*/<span className="gradient-text">with us?</span>}</h2>}</div>}{/*#__PURE__*/<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{mock.whyKriscel.map((w, i) => {
            const WhyIcon = iconMap[w.icon] || Sparkles;
            return /*#__PURE__*/<Card className="p-6 rounded-2xl border border-slate-100 card-shadow card-shadow-hover bg-white">{/*#__PURE__*/<div className="h-11 w-11 rounded-xl bg-gradient-to-br from-sky-50 to-blue-100 grid place-items-center mb-4">{/*#__PURE__*/<WhyIcon className="h-5 w-5 text-sky-600" strokeWidth={2.2} />}</div>}{/*#__PURE__*/<h3 className="text-lg font-bold text-slate-900">{w.title}</h3>}{/*#__PURE__*/<p className="text-sm text-slate-600 mt-2 leading-relaxed">{w.desc}</p>}</Card>;
          })}</div>}</div>}</section>}{/*#__PURE__*/<section className="py-10">{/*#__PURE__*/<div className="max-w-5xl mx-auto px-5 md:px-8">{/*#__PURE__*/<Card className="p-8 md:p-10 rounded-3xl border border-slate-100 card-shadow bg-white">{/*#__PURE__*/<div className="flex items-center gap-1 mb-3">{[...Array(5)].map((_, s) => /*#__PURE__*/<Star className="h-5 w-5 fill-amber-400 text-amber-400" />)}</div>}{/*#__PURE__*/<p className="text-xl md:text-2xl text-slate-800 leading-relaxed font-medium">“{/*#__PURE__*/<span data-ve-dynamic="true" style={{
              display: "contents"
            }}>{mock.testimonials[0].quote}</span>}”</p>}{/*#__PURE__*/<div className="flex items-center gap-4 mt-6">{/*#__PURE__*/<div className="h-12 w-12 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center text-sm font-bold text-white">{mock.testimonials[0].avatar}</div>}{/*#__PURE__*/<div>{/*#__PURE__*/<p className="text-sm font-semibold text-slate-900">{mock.testimonials[0].name}</p>}{/*#__PURE__*/<p className="text-xs text-slate-500">{/*#__PURE__*/<span data-ve-dynamic="true" style={{
                  display: "contents"
                }}>{mock.testimonials[0].role}</span>} · {/*#__PURE__*/<span data-ve-dynamic="true" style={{
                  display: "contents"
                }}>{mock.testimonials[0].industry}</span>}</p>}</div>}{/*#__PURE__*/<div className="ml-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">{/*#__PURE__*/<span className="text-xs font-semibold text-emerald-700">{mock.testimonials[0].result}</span>}</div>}</div>}</Card>}</div>}</section>}{/*#__PURE__*/<section className="py-16 md:py-20">{/*#__PURE__*/<div className="max-w-4xl mx-auto px-5 md:px-8">{/*#__PURE__*/<div className="text-center mb-12">{/*#__PURE__*/<p className="text-xs uppercase tracking-widest text-sky-600 font-bold mb-3">Knowledge Base</p>}{/*#__PURE__*/<h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Frequently asked {/*#__PURE__*/<span className="gradient-text">questions</span>}</h2>}{/*#__PURE__*/<p className="mt-3 text-slate-600">Everything you need to know about {/*#__PURE__*/<span data-ve-dynamic="true" style={{
              display: "contents"
            }}>{item.name || item.title}</span>}.</p>}</div>}{/*#__PURE__*/<div className="space-y-3">{mock.detailFaqs.map((f, i) => /*#__PURE__*/<div className="rounded-2xl border border-slate-100 bg-white overflow-hidden">{/*#__PURE__*/<button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-sky-50/40 transition-colors">{/*#__PURE__*/<span className="font-semibold text-slate-900 pr-4">{f.q}</span>}{/*#__PURE__*/<span className={`h-7 w-7 rounded-full bg-sky-100 grid place-items-center flex-shrink-0 transition-transform ${openFaq === i ? "rotate-45" : ""}`}>{/*#__PURE__*/<span className="text-sky-600 text-lg leading-none">+</span>}</span>}</button>}{openFaq === i && /*#__PURE__*/<div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 bg-sky-50/20">{f.a}</div>}</div>)}</div>}</div>}</section>}{/*#__PURE__*/<section className="py-20">{/*#__PURE__*/<div className="max-w-4xl mx-auto px-5 md:px-8 text-center">{/*#__PURE__*/<p className="text-xs uppercase tracking-widest text-sky-600 font-bold mb-3">{type === "product" ? "Systems" : "Automate"}</p>}{/*#__PURE__*/<h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">Ready to scale {/*#__PURE__*/<span className="gradient-text">your operations?</span>}</h2>}{/*#__PURE__*/<p className="mt-4 text-lg text-slate-600">Book a 30-min discovery call. Free. No slides. Just an honest conversation about what to fix first.</p>}{/*#__PURE__*/<div className="mt-8 flex flex-wrap justify-center gap-3">{/*#__PURE__*/<Link to="/contact">{/*#__PURE__*/<Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full h-12 px-6 text-sm font-semibold">Get Started Today {/*#__PURE__*/<ArrowRight className="ml-2 h-4 w-4" />}</Button>}</Link>}{/*#__PURE__*/<Link to={backLink}>{/*#__PURE__*/<Button variant="outline" className="rounded-full h-12 px-6 text-sm font-semibold border-slate-300 hover:border-sky-500 hover:text-sky-600 bg-white">See other {type === "product" ? "systems" : "services"}</Button>}</Link>}</div>}</div>}</section>}</div>;
};

/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = DetailPage;

export default __WEBPACK_DEFAULT_EXPORT__;