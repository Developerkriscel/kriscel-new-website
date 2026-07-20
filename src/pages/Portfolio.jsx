import { CircleCheck, TriangleAlert, ArrowRight, Building2, Star, TrendingUp } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/button.jsx";
import Card from "../components/ui/card.jsx";
import Badge from "../components/ui/badge.jsx";
import mock from "../mock";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const allTags = ["All", ...Array.from(new Set(mock.portfolio.flatMap(p => p.tags)))];
  const filtered = filter === "All" ? mock.portfolio : mock.portfolio.filter(p => p.tags.includes(filter));

  return (
    <div>
      <section className="relative hero-bg overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-70" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24 text-center">
          <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100 border-0 rounded-full px-3 py-1 text-xs font-medium mb-5">Case Studies & Portfolio</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
            Real businesses. <br />
            <span className="gradient-text">Real transformations.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Every project below has a real name, real problem and real numbers. No stock photos. No filler content. Just receipts.
          </p>
        </div>
      </section>

      <section className="py-14 border-y border-slate-100 bg-slate-50/40">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {mock.stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-5xl font-bold gradient-text">{s.value}</div>
              <div className="text-sm text-slate-600 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {allTags.map((tag, i) => (
              <button 
                key={i} 
                onClick={() => setFilter(tag)} 
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${filter === tag ? "bg-slate-900 text-white shadow-md" : "bg-sky-50 text-slate-700 hover:bg-sky-100"}`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((p, i) => (
              <Card key={i} className="group relative p-7 rounded-2xl border border-slate-100 card-shadow card-shadow-hover bg-white overflow-hidden">
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br from-sky-100 to-blue-100 opacity-40 group-hover:opacity-70 transition-opacity" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center shadow-md">
                        <Building2 className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-slate-900">{p.client}</p>
                        <p className="text-xs text-slate-500">{p.industry}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 justify-end">
                      {p.tags.slice(0, 2).map((t, ti) => (
                        <Badge key={ti} className="bg-sky-50 text-sky-700 hover:bg-sky-50 border-0 text-[10px]">{t}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-100 mb-3">
                    <div className="flex items-start gap-2">
                      <TriangleAlert className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] font-bold text-amber-700 uppercase tracking-wide">Challenge</p>
                        <p className="text-sm text-slate-700 mt-0.5 leading-relaxed">{p.challenge}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-sky-50/60 border border-sky-100 mb-3">
                    <div className="flex items-start gap-2">
                      <CircleCheck className="h-4 w-4 text-sky-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] font-bold text-sky-700 uppercase tracking-wide">Solution</p>
                        <p className="text-sm text-slate-700 mt-0.5 leading-relaxed">{p.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide">Result</p>
                        <p className="text-sm font-semibold text-slate-800 mt-0.5 leading-relaxed">{p.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 rounded-full px-3 py-1 text-xs font-medium mb-4">Our Esteemed Clients</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Supporting growth across <span className="gradient-text">India & beyond</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {mock.trustLogos.map((logo, i) => (
              <div key={i} className="h-24 rounded-2xl bg-white border border-slate-100 grid place-items-center hover:border-sky-200 hover:shadow-md transition-all group cursor-pointer">
                <span className="text-sm md:text-base font-bold text-slate-400 group-hover:text-sky-600 tracking-tight uppercase text-center px-3">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100 border-0 rounded-full px-3 py-1 text-xs font-medium mb-4">What Clients Say</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Words from <span className="gradient-text">real founders</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mock.testimonials.map((t, i) => (
              <Card key={i} className="p-6 rounded-2xl border border-slate-100 card-shadow bg-white flex flex-col justify-between">
                <div>
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

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-sky-505 to-blue-600 p-10 md:p-14 text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)" }}>
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold">Your business, next case study?</h3>
                <p className="mt-2 text-sky-100">Let's talk about the problem eating your weekends.</p>
              </div>
              <Link to="/contact">
                <Button className="bg-white text-slate-900 hover:bg-sky-50 rounded-full h-12 px-6 font-semibold whitespace-nowrap">
                  Start a conversation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;