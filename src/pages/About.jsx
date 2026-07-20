import { Earth, ArrowRight, Award, Handshake, HeartHandshake, Target, TrendingUp, Users, Zap } from "lucide-react";

import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useParams, useNavigate } from "react-router-dom";









import Button from "../components/ui/button.jsx";
import Card from "../components/ui/card.jsx";
import Badge from "../components/ui/badge.jsx";
import SEO from "../components/SEO.jsx";
import mock from "../mock";



const iconMap = {
  Target: Target,
  HeartHandshake: HeartHandshake,
  Zap: Zap,
  Handshake: Handshake
};
const About = () => {
  return /*#__PURE__*/<div>{/*#__PURE__*/<SEO title="About Us — Automation Experts Based in Dwarka, Delhi" description="Built by operators, for operators. Meet the Kriscel Tech team — 40+ engineers, marketers and consultants based in Dwarka, Delhi. 120+ businesses automated. 78% client retention." keywords="about Kriscel Tech, automation company Delhi, ERP consultants Dwarka, tech agency Delhi NCR" path="/about" />}{/*#__PURE__*/<section className="relative hero-bg overflow-hidden">{/*#__PURE__*/<div className="absolute inset-0 grid-bg opacity-70" />}{/*#__PURE__*/<div className="relative max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">{/*#__PURE__*/<Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100 border-0 rounded-full px-3 py-1 text-xs font-medium mb-5">About Us</Badge>}{/*#__PURE__*/<h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">We help businesses {/*#__PURE__*/<br />}move from {/*#__PURE__*/<span className="line-through text-slate-400 decoration-2">chaos</span>} to {/*#__PURE__*/<span className="gradient-text">clarity</span>}</h1>}{/*#__PURE__*/<p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">Kriscel Tech was built by operators who lived the pain of running growing businesses on Excel and WhatsApp. We're not a software company that also does consulting — we're operators who happen to build software.</p>}</div>}</section>}{/*#__PURE__*/<section className="py-16 border-y border-slate-100 bg-slate-50/40">{/*#__PURE__*/<div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">{mock.stats.map((s, i) => /*#__PURE__*/<div className="text-center">{/*#__PURE__*/<div className="text-3xl md:text-5xl font-bold gradient-text">{s.value}</div>}{/*#__PURE__*/<div className="text-sm text-slate-600 mt-1">{s.label}</div>}</div>)}</div>}</section>}{/*#__PURE__*/<section className="py-20 md:py-24">{/*#__PURE__*/<div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-14 items-center">{/*#__PURE__*/<div>{/*#__PURE__*/<Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100 border-0 rounded-full px-3 py-1 text-xs font-medium mb-4">Our Story</Badge>}{/*#__PURE__*/<h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Built by operators, {/*#__PURE__*/<span className="gradient-text">for operators</span>}</h2>}{/*#__PURE__*/<p className="mt-5 text-slate-600 leading-relaxed">We started because we were sick of watching good businesses drown in bad process. Owners working 14-hour days. Teams stuck in copy-paste hell. Reports that were always a week late.</p>}{/*#__PURE__*/<p className="mt-4 text-slate-600 leading-relaxed">Today we've automated 120+ businesses across manufacturing, retail, fintech and healthcare. But the metric we track hardest isn't clients or revenue — it's how many founders we've helped reclaim their weekends.</p>}{/*#__PURE__*/<div className="mt-8">{/*#__PURE__*/<Link to="/contact">{/*#__PURE__*/<Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full h-12 px-6 text-sm font-semibold">Meet the team {/*#__PURE__*/<ArrowRight className="ml-2 h-4 w-4" />}</Button>}</Link>}</div>}</div>}{/*#__PURE__*/<div className="grid grid-cols-2 gap-4">{[{
            icon: Award,
            label: "ISO 27001 Ready",
            sub: "Security-first builds"
          }, {
            icon: Earth,
            label: "India & Global",
            sub: "Cross-border delivery"
          }, {
            icon: TrendingUp,
            label: "120+ Clients",
            sub: "78% renewal rate"
          }, {
            icon: Users,
            label: "40+ Team",
            sub: "Engineers & marketers"
          }].map((it, i) => /*#__PURE__*/<Card className="p-5 rounded-2xl border border-slate-100 card-shadow bg-white">{/*#__PURE__*/<div className="h-11 w-11 rounded-xl bg-gradient-to-br from-sky-50 to-blue-100 grid place-items-center mb-3">{/*#__PURE__*/<it.icon className="h-5 w-5 text-sky-600" />}</div>}{/*#__PURE__*/<p className="text-lg font-bold text-slate-900">{it.label}</p>}{/*#__PURE__*/<p className="text-xs text-slate-500 mt-0.5">{it.sub}</p>}</Card>)}</div>}</div>}</section>}{/*#__PURE__*/<section className="py-20 md:py-24 bg-gradient-to-b from-white to-sky-50/40">{/*#__PURE__*/<div className="max-w-7xl mx-auto px-5 md:px-8">{/*#__PURE__*/<div className="max-w-2xl mx-auto text-center mb-14">{/*#__PURE__*/<Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 rounded-full px-3 py-1 text-xs font-medium mb-4">Our Values</Badge>}{/*#__PURE__*/<h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Principles that guide {/*#__PURE__*/<span className="gradient-text">every decision</span>}</h2>}</div>}{/*#__PURE__*/<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">{mock.values.map((v, i) => {
            const Icon = iconMap[v.icon] || Target;
            return /*#__PURE__*/<Card className="p-6 rounded-2xl border border-slate-100 card-shadow card-shadow-hover bg-white">{/*#__PURE__*/<div className="h-11 w-11 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center mb-4 shadow-md">{/*#__PURE__*/<Icon className="h-5 w-5 text-white" />}</div>}{/*#__PURE__*/<h3 className="text-lg font-bold text-slate-900">{v.title}</h3>}{/*#__PURE__*/<p className="text-sm text-slate-600 mt-2 leading-relaxed">{v.desc}</p>}</Card>;
          })}</div>}</div>}</section>}{/*#__PURE__*/<section className="py-20 md:py-24">{/*#__PURE__*/<div className="max-w-7xl mx-auto px-5 md:px-8">{/*#__PURE__*/<div className="max-w-2xl mx-auto text-center mb-14">{/*#__PURE__*/<Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100 border-0 rounded-full px-3 py-1 text-xs font-medium mb-4">Leadership</Badge>}{/*#__PURE__*/<h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Meet the {/*#__PURE__*/<span className="gradient-text">founding team</span>}</h2>}</div>}{/*#__PURE__*/<div className="flex flex-wrap justify-center gap-5">{mock.teamMembers.map((m, i) => /*#__PURE__*/<Card className="p-6 rounded-2xl border border-slate-100 card-shadow card-shadow-hover bg-white text-center w-full sm:w-[280px]">{/*#__PURE__*/<div className="h-24 w-24 mx-auto rounded-full bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center text-2xl font-bold text-white shadow-lg">{m.avatar}</div>}{/*#__PURE__*/<h3 className="text-lg font-bold text-slate-900 mt-4">{m.name}</h3>}{/*#__PURE__*/<p className="text-sm text-sky-600 font-semibold">{m.role}</p>}{/*#__PURE__*/<p className="text-xs text-slate-500 mt-2 leading-relaxed">{m.bio}</p>}</Card>)}</div>}</div>}</section>}{/*#__PURE__*/<section className="py-20">{/*#__PURE__*/<div className="max-w-4xl mx-auto px-5 md:px-8 text-center">{/*#__PURE__*/<h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Want to work with us?</h2>}{/*#__PURE__*/<p className="mt-4 text-lg text-slate-600">Whether you're a client, a partner or a future Kriscel-ite — we'd love to hear from you.</p>}{/*#__PURE__*/<div className="mt-8">{/*#__PURE__*/<Link to="/contact">{/*#__PURE__*/<Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full h-12 px-6 text-sm font-semibold">Get in touch {/*#__PURE__*/<ArrowRight className="ml-2 h-4 w-4" />}</Button>}</Link>}</div>}</div>}</section>}</div>;
};

/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = About;

export default __WEBPACK_DEFAULT_EXPORT__;