import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import mock from "../mock";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 mt-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center mb-4">
            <img src="/logo.png" alt="Kriscel Tech" className="h-[72px] w-auto brightness-0 invert" />
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed max-w-md">
            Business automation, digital marketing and recruitment solutions for growing enterprises. No shortcuts, no fake promises.
          </p>
          <ul className="mt-6 space-y-3">
            <li>
              <a href={`tel:${mock.companyInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-sm text-slate-300 hover:text-sky-400 transition-colors group">
                <div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 grid place-items-center group-hover:bg-sky-500/20 group-hover:border-sky-500/40 transition-colors">
                  <Phone className="h-4 w-4 text-sky-400" />
                </div>
                <span className="font-medium">{mock.companyInfo.phone}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${mock.companyInfo.email}`} className="flex items-center gap-3 text-sm text-slate-300 hover:text-sky-400 transition-colors group">
                <div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 grid place-items-center group-hover:bg-sky-500/20 group-hover:border-sky-500/40 transition-colors">
                  <Mail className="h-4 w-4 text-sky-400" />
                </div>
                <span className="font-medium">{mock.companyInfo.email}</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-400">
              <div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 grid place-items-center flex-shrink-0">
                <MapPin className="h-4 w-4 text-sky-400" />
              </div>
              <span className="leading-relaxed mt-1">{mock.companyInfo.address}</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-white font-semibold mb-4 text-xs tracking-widest uppercase">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/" className="text-slate-400 hover:text-sky-400 transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-slate-400 hover:text-sky-400 transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/services" className="text-slate-400 hover:text-sky-400 transition-colors">Services</Link>
            </li>
            <li>
              <Link to="/products" className="text-slate-400 hover:text-sky-400 transition-colors">Products</Link>
            </li>
            <li>
              <Link to="/portfolio" className="text-slate-400 hover:text-sky-400 transition-colors">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact" className="text-slate-400 hover:text-sky-400 transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-white font-semibold mb-4 text-xs tracking-widest uppercase">Follow Us</h4>
          <p className="text-slate-400 text-sm mb-5">
            Connect with us on our social media platforms for the latest updates in AI and automation.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <a href={mock.companyInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center justify-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all duration-300 text-sm font-semibold">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href={mock.companyInfo.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center justify-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent hover:text-white transition-all duration-300 text-sm font-semibold">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a href={mock.companyInfo.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center justify-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-[#1877f2] hover:border-[#1877f2] hover:text-white transition-all duration-300 text-sm font-semibold">
              <Facebook className="h-4 w-4" /> Facebook
            </a>
            <a href={mock.companyInfo.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex items-center justify-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-[#ff0000] hover:border-[#ff0000] hover:text-white transition-all duration-300 text-sm font-semibold">
              <Youtube className="h-4 w-4" /> YouTube
            </a>
            <a href={`https://wa.me/${mock.companyInfo.phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex items-center justify-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-[#25d366] hover:border-[#25d366] hover:text-white transition-all duration-300 text-sm font-semibold">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} Kriscel Tech Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;