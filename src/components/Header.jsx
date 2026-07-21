import { CodeXml, PenLine, Sparkles, UsersRound, ArrowRight, Boxes, Building2, ChevronDown, Factory, ListChecks, MapPin, Menu, MousePointerClick, PackageOpen, Palette, Search, Share2, ShieldCheck, ShoppingCart, Store, Target, UserPlus, UserSearch, Wallet, X } from "lucide-react";

import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useParams, useNavigate } from "react-router-dom";

























import Button from "./ui/button.jsx";
import mock from "../mock";



const iconMap = {
  Boxes: Boxes,
  ListChecks: ListChecks,
  Factory: Factory,
  Wallet: Wallet,
  UsersRound: UsersRound,
  ShoppingCart: ShoppingCart,
  Search: Search,
  MousePointerClick: MousePointerClick,
  Share2: Share2,
  PenLine: PenLine,
  MapPin: MapPin,
  Code2: CodeXml,
  Palette: Palette,
  PackageOpen: PackageOpen,
  Target: Target,
  UserSearch: UserSearch,
  UserPlus: UserPlus,
  ShieldCheck: ShieldCheck,
  Store: Store,
  Building2: Building2
};
const nav = [{
  to: "/",
  label: "Home"
}, {
  to: "/about",
  label: "About"
}];
const Header = () => {
  const [open, setOpen] = (0, useState)(false);
  const [scrolled, setScrolled] = (0, useState)(false);
  const [activeMenu, setActiveMenu] = (0, useState)(null);
  const location = (0, useLocation)();
  const closeTimer = (0, useRef)(null);
  (0, useEffect)(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  (0, useEffect)(() => {
    setOpen(false);
    setActiveMenu(null);
  }, [location.pathname]);
  const openMenu = name => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(name);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };
  return /*#__PURE__*/<header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/85 backdrop-blur-lg border-b border-sky-100 shadow-sm" : "bg-transparent"}`}>{/*#__PURE__*/<div className="max-w-7xl mx-auto px-5 md:px-8 h-20 md:h-[110px] flex items-center justify-between">{/*#__PURE__*/<Link to="/" className="flex-shrink-0 flex items-center group mr-8 md:mr-16">{/*#__PURE__*/<img src="/logo.png" alt="Kriscel Tech" className="h-[112px] md:h-[164px] my-[-16px] md:my-[-27px] w-auto max-w-none block object-contain group-hover:scale-105 transition-transform" />}</Link>}{/*#__PURE__*/<nav className="hidden lg:flex items-center gap-1">{nav.map(n => /*#__PURE__*/<NavLink to={n.to} className={({
          isActive
        }) => `px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive ? "text-sky-600 bg-sky-50" : "text-slate-700 hover:text-sky-600 hover:bg-sky-50/60"}`}>{n.label}</NavLink>)}{/*#__PURE__*/<div className="relative" onMouseEnter={() => openMenu("services")} onMouseLeave={scheduleClose}>{/*#__PURE__*/<NavLink to="/services" className={({
            isActive
          }) => `px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${isActive || activeMenu === "services" ? "text-sky-600 bg-sky-50" : "text-slate-700 hover:text-sky-600 hover:bg-sky-50/60"}`}>Services{/*#__PURE__*/<ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeMenu === "services" ? "rotate-180" : ""}`} />}</NavLink>}{activeMenu === "services" && /*#__PURE__*/<div className="absolute top-full left-1/2 -translate-X-1/2 mt-2 w-[720px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl border border-sky-100 shadow-2xl shadow-sky-500/10 p-5" onMouseEnter={() => openMenu("services")} onMouseLeave={scheduleClose}>{/*#__PURE__*/<div className="grid grid-cols-2 gap-5">{/*#__PURE__*/<div>{/*#__PURE__*/<div className="flex items-center justify-between mb-3">{/*#__PURE__*/<p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Management Systems</p>}{/*#__PURE__*/<Link to="/products" className="text-[10px] font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-0.5">View all {/*#__PURE__*/<ArrowRight className="h-2.5 w-2.5" />}</Link>}</div>}{/*#__PURE__*/<div className="space-y-0.5">{mock.managementSystems.map((s, i) => {
                    const Icon = iconMap[s.icon] || Boxes;
                    const linkPath = s.slug === "taskeasy-workflow-management" ? "/products?product=taskeasy" : `/products/${s.slug}`;
                    return /*#__PURE__*/<Link to={linkPath} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-sky-50 transition-colors group">{/*#__PURE__*/<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-100 to-blue-100 grid place-items-center flex-shrink-0 group-hover:from-sky-200 group-hover:to-blue-200 transition-colors">{/*#__PURE__*/<Icon className="h-3.5 w-3.5 text-sky-600" />}</div>}{/*#__PURE__*/<p className="text-xs font-semibold text-slate-900 group-hover:text-sky-600 transition-colors truncate">{s.title}</p>}</Link>;
                  })}</div>}</div>}{/*#__PURE__*/<div>{/*#__PURE__*/<div className="flex items-center justify-between mb-3">{/*#__PURE__*/<p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Growth & Visibility</p>}{/*#__PURE__*/<Link to="/services" className="text-[10px] font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-0.5">View all {/*#__PURE__*/<ArrowRight className="h-2.5 w-2.5" />}</Link>}</div>}{/*#__PURE__*/<div className="space-y-0.5">{mock.growthServices.slice(0, 6).map((s, i) => {
                    const Icon = iconMap[s.icon] || Search;
                    return /*#__PURE__*/<Link to="/services" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-sky-50 transition-colors group">{/*#__PURE__*/<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-50 to-sky-100 grid place-items-center flex-shrink-0 group-hover:from-cyan-100 group-hover:to-sky-200 transition-colors">{/*#__PURE__*/<Icon className="h-3.5 w-3.5 text-sky-600" />}</div>}{/*#__PURE__*/<p className="text-xs font-semibold text-slate-900 group-hover:text-sky-600 transition-colors truncate">{s.title}</p>}</Link>;
                  })}</div>}</div>}</div>}{/*#__PURE__*/<div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">{/*#__PURE__*/<p className="text-xs text-slate-600">{/*#__PURE__*/<span className="font-semibold text-slate-900">20+ services</span>} across automation & growth</p>}{/*#__PURE__*/<Link to="/services">{/*#__PURE__*/<Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full h-8 px-3.5 text-[11px] font-semibold whitespace-nowrap">Browse all {/*#__PURE__*/<ArrowRight className="ml-1 h-3 w-3" />}</Button>}</Link>}</div>}</div>}</div>}{/*#__PURE__*/<div className="relative" onMouseEnter={() => openMenu("products")} onMouseLeave={scheduleClose}>{/*#__PURE__*/<NavLink to="/products" className={({
            isActive
          }) => `px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${isActive || activeMenu === "products" ? "text-sky-600 bg-sky-50" : "text-slate-700 hover:text-sky-600 hover:bg-sky-50/60"}`}>Products{/*#__PURE__*/<ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeMenu === "products" ? "rotate-180" : ""}`} />}</NavLink>}{activeMenu === "products" && /*#__PURE__*/<div className="absolute top-full right-0 mt-2 w-[440px] bg-white rounded-2xl border border-sky-100 shadow-2xl shadow-sky-500/10 p-4 animate-fade-up" onMouseEnter={() => openMenu("products")} onMouseLeave={scheduleClose}>{/*#__PURE__*/<div className="grid grid-cols-2 gap-1">{mock.managementSystems.map((s, i) => {
                const Icon = iconMap[s.icon] || Boxes;
                const linkPath = s.slug === "taskeasy-workflow-management" ? "/products?product=taskeasy" : `/products/${s.slug}`;
                return /*#__PURE__*/<Link to={linkPath} className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-sky-50 transition-colors group">{/*#__PURE__*/<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-100 to-blue-100 grid place-items-center flex-shrink-0">{/*#__PURE__*/<Icon className="h-4 w-4 text-sky-600" />}</div>}{/*#__PURE__*/<div>{/*#__PURE__*/<p className="text-xs font-semibold text-slate-900 group-hover:text-sky-600">{s.title}</p>}</div>}</Link>;
              })}</div>}</div>}</div>}{/*#__PURE__*/<NavLink to="/portfolio" className={({
          isActive
        }) => `px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive ? "text-sky-600 bg-sky-50" : "text-slate-700 hover:text-sky-600 hover:bg-sky-50/60"}`}>Portfolio</NavLink>}{/*#__PURE__*/<NavLink to="/contact" className={({
          isActive
        }) => `px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive ? "text-sky-600 bg-sky-50" : "text-slate-700 hover:text-sky-600 hover:bg-sky-50/60"}`}>Contact</NavLink>}</nav>}{/*#__PURE__*/<div className="hidden lg:flex items-center gap-3">{/*#__PURE__*/<Link to="/contact">{/*#__PURE__*/<Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-5 h-10 text-sm font-semibold">Book a Demo</Button>}</Link>}</div>}{/*#__PURE__*/<button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-sky-50" aria-label="Toggle Menu">{open ? /*#__PURE__*/<X className="h-6 w-6" /> : /*#__PURE__*/<Menu className="h-6 w-6" />}</button>}</div>}{open && /*#__PURE__*/<div className="lg:hidden bg-white border-t border-sky-100 shadow-xl max-h-[85vh] overflow-y-auto transition-all duration-300">{/*#__PURE__*/<div className="px-5 py-4 space-y-1.5">{[{
          to: "/",
          label: "Home"
        }, {
          to: "/about",
          label: "About"
        }, {
          to: "/services",
          label: "Services"
        }, {
          to: "/products",
          label: "Products"
        }, {
          to: "/portfolio",
          label: "Portfolio"
        }, {
          to: "/contact",
          label: "Contact"
        }].map(n => /*#__PURE__*/<NavLink to={n.to} className={({
          isActive
        }) => `block px-4 py-3 min-h-[44px] flex items-center rounded-xl text-base font-medium transition-colors ${isActive ? "text-sky-600 bg-sky-50 font-semibold" : "text-slate-700 hover:bg-sky-50/60"}`}>{n.label}</NavLink>)}{/*#__PURE__*/<div className="pt-3 mt-3 border-t border-slate-100">{/*#__PURE__*/<p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest px-4 mb-2">Management Systems</p>}{mock.managementSystems.map((s, i) => {
          const linkPath = s.slug === "taskeasy-workflow-management" ? "/products?product=taskeasy" : `/products/${s.slug}`;
          return /*#__PURE__*/<Link to={linkPath} onClick={() => setOpen(false)} className="block px-4 py-2.5 min-h-[40px] text-sm text-slate-600 hover:text-sky-600 hover:bg-sky-50/60 rounded-xl transition-colors">{s.title}</Link>;
        })}</div>}{/*#__PURE__*/<Link to="/contact">{/*#__PURE__*/<Button className="w-full mt-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full h-12 text-sm font-semibold shadow-md active:scale-[0.98] transition-transform">Book a Demo</Button>}</Link>}</div>}</div>}</header>;
};

/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = Header;

export default __WEBPACK_DEFAULT_EXPORT__;