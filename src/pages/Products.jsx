import { CircleCheck, Sparkles, TriangleAlert, UsersRound, ArrowRight, Boxes, Factory, ListChecks, ShoppingCart, Wallet, Zap } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../components/ui/button.jsx";
import Card from "../components/ui/card.jsx";
import Badge from "../components/ui/badge.jsx";
import mock from "../mock";

const iconMap = {
  Factory: Factory,
  UsersRound: UsersRound,
  ShoppingCart: ShoppingCart,
  Boxes: Boxes,
  Wallet: Wallet,
  ListChecks: ListChecks
};

const Products = () => {
  const location = useLocation();
  const cardRef = useRef(null);

  const getInitialActive = () => {
    const searchParams = new URLSearchParams(location.search);
    const productParam = searchParams.get("product");
    if (productParam) {
      const found = mock.products.find(p => p.id === productParam || p.slug === productParam);
      if (found) return found.id;
    }
    if (location.hash === "#taskeasy") {
      const found = mock.products.find(p => p.id === "taskeasy");
      if (found) return found.id;
    }
    return mock.products[0].id;
  };

  const [active, setActive] = useState(getInitialActive);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const productParam = searchParams.get("product");
    if (productParam) {
      const found = mock.products.find(p => p.id === productParam || p.slug === productParam);
      if (found) {
        setActive(found.id);
        setTimeout(() => {
          if (cardRef.current) {
            const yOffset = -120; // Navbar offset
            const y = cardRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 150);
      }
    } else if (location.hash === "#taskeasy") {
      const found = mock.products.find(p => p.id === "taskeasy");
      if (found) {
        setActive(found.id);
        setTimeout(() => {
          if (cardRef.current) {
            const yOffset = -120;
            const y = cardRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 150);
      }
    }
  }, [location.search, location.hash]);

  const current = mock.products.find(p => p.id === active) || mock.products[0];
  const CurrentIcon = iconMap[current.icon] || Sparkles;

  return (
    <div>
      <section className="relative hero-bg overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-70" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24 text-center">
          <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100 border-0 rounded-full px-3 py-1 text-xs font-medium mb-5">Our Platform</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
            Six connected systems. <br />
            <span className="gradient-text">One business OS.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Every module solves a specific daily pain. Start with one. Add more as you grow. They all talk to each other — no double entry, ever.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20" ref={cardRef} id="product-card-display">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {mock.products.map(p => (
              <button 
                key={p.id}
                onClick={() => setActive(p.id)} 
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${active === p.id ? "bg-slate-900 text-white shadow-md" : "bg-sky-50 text-slate-700 hover:bg-sky-100"}`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {current.isExternal ? (
            <a href={current.externalUrl} className="block group">
              <Card className="rounded-3xl border border-slate-100 card-shadow bg-white overflow-hidden hover:shadow-xl hover:border-slate-200 transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-10 md:p-12 flex flex-col justify-between h-full">
                    <div>
                      <div className={`inline-flex h-14 w-14 rounded-2xl bg-gradient-to-br ${current.color} grid place-items-center shadow-lg mb-5`}>
                        <CurrentIcon className="h-7 w-7 text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-xs text-sky-600 font-semibold uppercase tracking-wider">{current.tagline}</p>
                        <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50 border-0 text-[10px]">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-1.5" /> Active
                        </Badge>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-1">{current.name}</h2>
                      <p className="mt-4 text-slate-600 leading-relaxed">{current.desc}</p>
                      <div className="mt-5 p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
                        <div className="flex items-start gap-2.5">
                          <TriangleAlert className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-bold text-amber-700 uppercase tracking-wide">Sound familiar?</p>
                            <p className="text-sm text-slate-700 mt-1 leading-relaxed">{current.problem}</p>
                          </div>
                        </div>
                      </div>
                      <ul className="mt-5 space-y-2.5">
                        {current.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
                            <CircleCheck className="h-5 w-5 text-sky-500 flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-8">
                      <span className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white rounded-full h-12 px-6 text-sm font-semibold">
                        Explore Product <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                  <div className="relative p-6 md:p-10 grid place-items-center bg-slate-50 min-h-[420px] overflow-hidden">
                    <img 
                      src={current.image} 
                      alt={current.name} 
                      className="max-h-[350px] w-auto object-contain rounded-xl shadow-lg border border-slate-100 transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                </div>
              </Card>
            </a>
          ) : (
            <Card className="rounded-3xl border border-slate-100 card-shadow bg-white overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-10 md:p-12">
                  <div className={`inline-flex h-14 w-14 rounded-2xl bg-gradient-to-br ${current.color} grid place-items-center shadow-lg mb-5`}>
                    <CurrentIcon className="h-7 w-7 text-white" strokeWidth={2.2} />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-sky-600 font-semibold uppercase tracking-wider">{current.tagline}</p>
                    <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50 border-0 text-[10px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-1.5" /> Active
                    </Badge>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-1">{current.name}</h2>
                  <p className="mt-4 text-slate-600 leading-relaxed">{current.desc}</p>
                  <div className="mt-5 p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
                    <div className="flex items-start gap-2.5">
                      <TriangleAlert className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-amber-700 uppercase tracking-wide">Sound familiar?</p>
                        <p className="text-sm text-slate-700 mt-1 leading-relaxed">{current.problem}</p>
                      </div>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {current.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
                        <CircleCheck className="h-5 w-5 text-sky-500 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link to={`/products/${current.slug}`}>
                      <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full h-12 px-6 text-sm font-semibold">
                        Explore Features <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="outline" className="rounded-full h-12 px-6 text-sm font-semibold border-slate-300 hover:border-sky-500 hover:text-sky-600">
                        Book Demo
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className={`relative bg-gradient-to-br ${current.color} p-10 md:p-12 grid place-items-center min-h-[420px]`}>
                  <div className="absolute inset-0 grid-bg opacity-15" />
                  <div className="relative w-full max-w-sm">
                    <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-5">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${current.color} grid place-items-center`}>
                            <CurrentIcon className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-sm font-bold text-slate-900">{current.name}</span>
                        </div>
                        <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50 border-0 text-xs">Live</Badge>
                      </div>
                      <div className="space-y-2">
                        {current.highlights.map((h, i) => (
                          <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-sky-50/60">
                            <span className="text-xs text-slate-700 font-medium">{h}</span>
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-sky-500" />
                          <span className="text-xs font-semibold text-slate-900">Uptime: 99.98%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gradient-to-b from-white to-sky-50/40">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 rounded-full px-3 py-1 text-xs font-medium mb-4">Connected Ecosystem</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Everything talks to <span className="gradient-text">everything else</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">A purchase entry auto-updates inventory. Inventory low? Purchase system raises indent. Payroll pulls from attendance. Zero double entry.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                t: "One source of truth",
                d: "Master data (items, vendors, customers) lives in one place. Update once, reflects everywhere."
              },
              {
                t: "Real-time sync",
                d: "No end-of-day batch jobs. Every action reflects immediately across modules and dashboards."
              },
              {
                t: "Role-based views",
                d: "Your sales team sees sales. Your CFO sees finance. Same data, different lenses — auto-configured."
              }
            ].map((f, i) => (
              <Card key={i} className="p-6 rounded-2xl border border-slate-100 card-shadow bg-white">
                <div className="h-2 w-10 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900">{f.t}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{f.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 rounded-full px-3 py-1 text-xs font-medium mb-4">Pricing</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Simple, honest <span className="gradient-text">engagement models</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">No per-user seat games. No forced tiers. Pay for what you use.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Discovery",
                price: "₹25,000",
                per: "one-time",
                desc: "2-day paid audit of your current systems and workflows.",
                features: ["On-site process shadowing", "Gap analysis document", "Recommended roadmap", "Fixed-price proposal", "Fully adjusted if you sign"],
                cta: "Book Discovery",
                popular: false
              },
              {
                name: "Build",
                price: "Custom",
                per: "fixed-scope",
                desc: "Full module or platform build with weekly demos.",
                features: ["Fixed-price, fixed-timeline", "Weekly sprint demos", "Full source code included", "3 months free support", "Training & documentation", "Data migration included"],
                cta: "Get Proposal",
                popular: true
              },
              {
                name: "Grow",
                price: "From ₹15K",
                per: "per month",
                desc: "Ongoing support, enhancements & scaling.",
                features: ["Dedicated success manager", "Priority bug fixes (24h SLA)", "Monthly enhancement hours", "Quarterly business review", "Feature roadmap access"],
                cta: "Talk AMC",
                popular: false
              }
            ].map((tier, i) => (
              <Card key={i} className={`relative p-8 rounded-2xl bg-white ${tier.popular ? "border-2 border-sky-500 shadow-xl shadow-sky-500/10 scale-[1.02]" : "border border-slate-100 card-shadow"}`}>
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-500 hover:bg-sky-500 text-white border-0 rounded-full px-3 py-1 text-xs font-semibold shadow-md">
                    Most Popular
                  </Badge>
                )}
                <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
                <p className="text-sm text-slate-500 mt-1">{tier.desc}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                  <span className="text-sm text-slate-500">
                    / <span style={{ display: "contents" }}>{tier.per}</span>
                  </span>
                </div>
                <ul className="mt-6 space-y-2.5">
                  {tier.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-sm text-slate-700">
                      <CircleCheck className="h-4 w-4 text-sky-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button className={`w-full mt-7 rounded-full h-11 font-semibold ${tier.popular ? "bg-slate-900 hover:bg-slate-800 text-white" : "bg-sky-50 hover:bg-sky-100 text-sky-700"}`}>
                    {tier.cta}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            See it live in <span className="gradient-text">30 minutes</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Book a personalized walkthrough. Bring your questions — we'll bring the answers and a real demo of the module that fits your pain.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full h-12 px-6 text-sm font-semibold">
                Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;