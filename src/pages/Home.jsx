import { ChartLine, Sparkles, UsersRound, ArrowRight, Boxes, Briefcase, Cpu, Factory, FileSpreadsheet, Landmark, ListChecks, MessageSquareText, Play, Quote, ShieldCheck, ShoppingBag, ShoppingCart, Star, Stethoscope, TrendingUp, Users, Wallet, Zap } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/button.jsx";
import Card from "../components/ui/card.jsx";
import Badge from "../components/ui/badge.jsx";
import SEO from "../components/SEO.jsx";
import AutomationShowcase from "../components/AutomationShowcase.jsx";
import mock from "../mock";

const iconMap = {
  Sparkles: Sparkles,
  FileSpreadsheet: FileSpreadsheet,
  LineChart: ChartLine,
  ShieldCheck: ShieldCheck,
  MessageSquareText: MessageSquareText,
  Users: Users,
  TrendingUp: TrendingUp,
  Factory: Factory,
  ShoppingBag: ShoppingBag,
  Stethoscope: Stethoscope,
  Cpu: Cpu,
  Briefcase: Briefcase,
  Landmark: Landmark,
  UsersRound: UsersRound,
  ShoppingCart: ShoppingCart,
  Boxes: Boxes,
  Wallet: Wallet,
  ListChecks: ListChecks
};

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (videoRef.current) {
        if (document.hidden) {
          videoRef.current.pause();
        } else {
          videoRef.current.play().catch(() => {});
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div>
      <SEO title="Business Automation, ERP & Digital Growth for Indian Businesses" description="Kriscel Tech helps 120+ Indian businesses replace spreadsheets and WhatsApp chaos with connected ERP, marketing and hiring systems. Delhi NCR-based, transparent pricing, real outcomes." keywords="business automation Delhi, ERP software Delhi NCR, digital marketing agency Delhi, custom ERP India, workflow automation, MIS dashboard, recruitment services Dwarka" path="/" schema={SEO.organizationSchema} />
      
      <section className="relative overflow-hidden bg-white">
        {/* Cinematic Looping Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover scale-[1.01]"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          {/* Subtle Gradient Overlay */}
          <div 
            className="absolute inset-0" 
            style={{
              background: "linear-gradient(90deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.72) 50%, rgba(255,255,255,0.55) 100%)"
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100 border-0 rounded-full px-3 py-1 text-xs font-medium mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500 mr-2 animate-pulse" />
                Business Automation & Digital Growth Partner
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05]">
                From <span className="line-through text-slate-400 decoration-2">manual chaos</span> <br />
                to <span className="gradient-text">full automation</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                No shortcuts. No fake promises. We help growing businesses replace spreadsheets, WhatsApp threads and gut-feel decisions with connected systems that actually run themselves.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact">
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full h-12 px-6 text-sm font-semibold shadow-lg shadow-slate-900/20">
                    Start Automating <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="outline" className="rounded-full h-12 px-6 text-sm font-semibold border-slate-300 hover:border-sky-500 hover:text-sky-600 bg-white">
                    <Play className="mr-2 h-4 w-4" /> Explore Platform
                  </Button>
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {["AK", "MI", "RP", "KN"].map((a, i) => (
                    <div key={i} className={`h-9 w-9 rounded-full ring-2 ring-white grid place-items-center text-xs font-semibold text-white bg-gradient-to-br ${i === 0 ? "from-sky-400 to-blue-600" : i === 1 ? "from-blue-500 to-indigo-600" : i === 2 ? "from-cyan-400 to-sky-600" : "from-indigo-400 to-blue-600"}`}>
                      {a}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-1 text-sm font-semibold text-slate-900">4.9/5</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Trusted by <span className="font-semibold text-slate-900">120+ businesses</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-up" style={{ animationDelay: "120ms" }}>
              <div className="absolute -inset-4 bg-gradient-to-tr from-sky-200/40 to-blue-300/40 rounded-3xl blur-3xl" />
              <div className="relative bg-white/40 rounded-2xl border border-white/20 shadow-2xl shadow-sky-500/10 overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-white/20">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-3 text-[10px] text-slate-500 font-mono">kriscel.tech / mis-dashboard</span>
                </div>
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500">Good morning, Rakesh</p>
                      <h3 className="text-lg font-bold text-slate-900">Kriscel Automation</h3>
                    </div>
                    <Badge className="bg-emerald-50/50 text-emerald-700 hover:bg-emerald-50/50 border-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
                      Live sync
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[{
                      l: "This Month Sales",
                      v: "₹1.24Cr",
                      c: "+18%",
                      from: "from-sky-500 to-blue-600"
                    }, {
                      l: "Receivables",
                      v: "₹42.6L",
                      c: "−8%",
                      from: "from-cyan-500 to-sky-600"
                    }, {
                      l: "Order Fill",
                      v: "97.4%",
                      c: "+3.1%",
                      from: "from-indigo-500 to-blue-600"
                    }].map((k, i) => (
                      <div key={i} className="rounded-xl border border-white/10 bg-white/20 p-3">
                        <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{k.l}</p>
                        <p className={`text-lg font-bold mt-1 bg-gradient-to-r ${k.from} bg-clip-text text-transparent`}>{k.v}</p>
                        <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">
                          <span style={{ display: "contents" }}>{k.c}</span> vs last mo
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl border border-white/20 bg-sky-50/20 p-4">
                    <div className="flex items-start gap-2.5">
                      <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-sky-505 to-blue-600 grid place-items-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)" }}>
                        <MessageSquareText className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-slate-900">Kriscel Ops Alert</p>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">Vendor ABC quoted 6% higher than last PO. 3 payments due today totaling ₹2.4L. Stock of SKU-4471 below reorder level.</p>
                        <div className="flex gap-2 mt-2">
                          <button className="text-[10px] px-2.5 py-1 rounded-full bg-slate-900 text-white font-semibold">Review</button>
                          <button className="text-[10px] px-2.5 py-1 rounded-full bg-white/80 border border-slate-200 text-slate-700 font-semibold">Snooze</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5 space-y-2 border-t border-white/10">
                  {[{
                    l: "Purchase orders auto-matched",
                    v: 84,
                    c: "bg-sky-500"
                  }, {
                    l: "GST invoices reconciled",
                    v: 96,
                    c: "bg-blue-500"
                  }, {
                    l: "Attendance captured",
                    v: 91,
                    c: "bg-cyan-500"
                  }].map((r, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-600">{r.l}</span>
                        <span className="font-semibold text-slate-900">
                          <span style={{ display: "contents" }}>{r.v}</span>%
                        </span>
                      </div>
                      <div className="h-1.5 bg-slate-100/50 rounded-full overflow-hidden">
                        <div className={`h-full ${r.c} rounded-full`} style={{ width: `${r.v}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white/60 rounded-2xl shadow-xl border border-white/20 p-3 flex items-center gap-2.5 animate-float">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 grid place-items-center">
                  <Zap className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500">Hours saved / week</p>
                  <p className="text-sm font-bold text-slate-900">62 hours</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white/60 rounded-2xl shadow-xl border border-white/20 p-3 flex items-center gap-2.5 animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500">Cost per lead</p>
                  <p className="text-sm font-bold text-slate-900">−62%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 border-y border-slate-100 bg-slate-50/40">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {mock.stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{s.value}</div>
              <div className="text-sm text-slate-600 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-center text-xs uppercase tracking-widest text-slate-500 font-semibold mb-8">Trusted by growing businesses across India</p>
          <div className="overflow-hidden relative">
            <div className="flex gap-14 animate-marquee whitespace-nowrap py-4">
              {[...mock.trustLogos, ...mock.trustLogos, ...mock.trustLogos, ...mock.trustLogos].map((logo, i) => (
                <a key={i} href={logo.url || "#"} target={logo.url ? "_blank" : undefined} rel={logo.url ? "noopener noreferrer" : undefined} className="flex-shrink-0 client-logo-container">
                  <div className="client-logo-wrapper">
                    <img src={logo.logo} alt={logo.name} className="client-logo" />
                  </div>
                  <span className="client-logo-label">{logo.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100 border-0 rounded-full px-3 py-1 text-xs font-medium mb-4">Real Problems We Solve</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              You know these <span className="gradient-text">daily headaches</span>?
            </h2>
            <p className="mt-4 text-lg text-slate-600">Every one of these has cost you time, money and sleep. Here's how we make them go away.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mock.features.map((f, i) => {
              const Icon = iconMap[f.icon] || Sparkles;
              return (
                <Card key={i} className="p-6 border border-slate-100 rounded-2xl card-shadow card-shadow-hover bg-white">
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-sky-50 to-blue-100 grid place-items-center mb-4">
                    <Icon className="h-5 w-5 text-sky-600" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-sky-50/40">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 rounded-full px-3 py-1 text-xs font-medium mb-4">Our Systems</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              One connected ecosystem. <span className="gradient-text">Seven live systems.</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">Every module works standalone or plugs into the others. Start with one, add more as you grow.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mock.products.map((p, i) => {
              if (p.isExternal) {
                return (
                  <a 
                    href={p.externalUrl} 
                    key={p.id} 
                    className="group relative border border-slate-100 rounded-2xl card-shadow card-shadow-hover bg-white overflow-hidden flex flex-col justify-between h-full cursor-pointer transition-all duration-300"
                  >
                    <div className="relative overflow-hidden aspect-[2/1] w-full border-b border-slate-100 bg-slate-50 flex items-center justify-center p-4">
                      <img 
                        src={p.image} 
                        alt={p.name} 
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" 
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-xs text-sky-600 font-semibold uppercase tracking-wider">{p.tagline}</p>
                        <h3 className="text-xl font-bold text-slate-900 mt-1">{p.name}</h3>
                        <p className="text-sm text-slate-600 mt-2 leading-relaxed">{p.desc}</p>
                      </div>
                      <div className="mt-6 flex items-center justify-between">
                        <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50 border-0 text-xs">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-1.5" />
                          Active
                        </Badge>
                        <span className="text-sm font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1 group/link">
                          Explore Product <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </a>
                );
              }
              const Icon = iconMap[p.icon] || Sparkles;
              return (
                <Card key={p.id} className="group relative p-6 border border-slate-100 rounded-2xl card-shadow card-shadow-hover bg-white overflow-hidden">
                  <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${p.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <div className="relative">
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${p.color} grid place-items-center mb-4 shadow-md`}>
                      <Icon className="h-6 w-6 text-white" strokeWidth={2.2} />
                    </div>
                    <p className="text-xs text-sky-600 font-semibold uppercase tracking-wider">{p.tagline}</p>
                    <h3 className="text-xl font-bold text-slate-900 mt-1">{p.name}</h3>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">{p.desc}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50 border-0 text-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-1.5" />
                        Active
                      </Badge>
                      <Link to={`/products/${p.slug}`} className="text-sm font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1 group/link">
                        Learn more <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <AutomationShowcase />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100 border-0 rounded-full px-3 py-1 text-xs font-medium mb-4">End-to-End Growth Cycle</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              From website to <span className="gradient-text">full automation</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">We handle every step of the growth journey. Start where you are — we'll take you where you want to be.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {mock.workflowSteps.map((s, i) => (
              <div key={i} className="relative">
                <Card className="p-5 rounded-2xl border border-slate-100 card-shadow card-shadow-hover bg-white h-full">
                  <div className="text-3xl font-bold gradient-text tracking-tight">{s.step}</div>
                  <h3 className="text-lg font-bold text-slate-900 mt-2">{s.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{s.desc}</p>
                </Card>
                {i < mock.workflowSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 h-5 w-5 text-sky-300 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-3">Multisector Growth</p>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Deep expertise across diverse domains</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {mock.industries.map((ind, i) => {
              const Icon = iconMap[ind.icon] || Factory;
              return (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:border-sky-200 hover:shadow-md transition-all cursor-pointer group">
                  <div className="h-11 w-11 rounded-xl bg-sky-50 grid place-items-center group-hover:bg-sky-100 transition-colors flex-shrink-0">
                    <Icon className="h-5 w-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{ind.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{ind.note}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100 border-0 rounded-full px-3 py-1 text-xs font-medium mb-4">Real Stories, Real Numbers</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Not testimonials. <span className="gradient-text">Receipts.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mock.testimonials.slice(0, 3).map((t, i) => (
              <Card key={i} className="relative p-6 rounded-2xl border border-slate-100 card-shadow card-shadow-hover bg-white flex flex-col justify-between">
                <div>
                  <Quote className="absolute top-5 right-5 h-6 w-6 text-sky-100" />
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 leading-relaxed text-sm">{t.quote}</p>
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100">
                    <TrendingUp className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="text-xs font-semibold text-emerald-700">{t.result}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-5 pt-5 border-t border-slate-100">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center text-sm font-bold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">
                      <span style={{ display: "contents" }}>{t.role}</span> · <span style={{ display: "contents" }}>{t.industry}</span>
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600 p-10 md:p-16 text-white" style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 50%, #312e81 100%)" }}>
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">Ready to stop firefighting?</h2>
              <p className="mt-4 text-lg text-sky-100 leading-relaxed">Book a free 30-min discovery call. We'll walk through your current mess, show you exactly what we'd automate first, and share a realistic timeline. No slides. No sales pitch.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact">
                  <Button className="bg-white hover:bg-sky-50 text-slate-900 rounded-full h-12 px-6 text-sm font-semibold">
                    Book Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="https://wa.me/918985419420" target="_blank" rel="noreferrer">
                  <Button variant="outline" className="rounded-full h-12 px-6 text-sm font-semibold border-white/40 text-white bg-white/10 hover:bg-white/20 hover:text-white">WhatsApp Us</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;