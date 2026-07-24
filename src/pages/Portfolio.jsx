import { CircleCheck, TriangleAlert, ArrowRight, Building2, Star, TrendingUp, Globe, Monitor, ShieldCheck, Cpu, ExternalLink, Laptop, Smartphone } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/button.jsx";
import Card from "../components/ui/card.jsx";
import Badge from "../components/ui/badge.jsx";
import mock from "../mock";
import SEO from "../components/SEO.jsx";

// Standardized Projects Data Array
const showcaseProjects = [
  {
    title: "Kriscel Tech Agency Website",
    subtitle: "Brand identity and core service showcase.",
    description: "A high-performance agency website showcasing automation, AI solutions, software development, and digital transformation.",
    meta: "Showcase Website",
    link: "https://kriscel.com/",
    image: "/images/kriscel-agency-showcase.png",
    techStack: ["React.js", "GSAP", "Framer Motion", "Tailwind CSS"],
    tags: ["Service Ecosystem", "Interactive Animations", "Lead Funnels"],
    details: {
      industry: "Information Technology",
      goal: "Establish industry credibility & generate inbound automation leads.",
      challenge: "Differentiating services and explaining complex workflow concepts to non-technical business owners.",
      solution: "Immersive animations showing copy-paste operations vs database workflows dynamically.",
      impact: "+45% increase in form submissions, -20% bounce rate.",
      duration: "Completed in 4 Weeks",
      features: ["GSAP timeline triggers", "Private cloud deployment", "Dark/Light responsive theme"]
    }
  },
  {
    title: "Symo Developers",
    subtitle: "Real estate & architectural client portal.",
    description: "Symo Developers was created to establish a strong digital presence for a real estate and construction brand. The site communicates trust and project excellence.",
    meta: "Property Website",
    link: "https://symo-devlopers.vercel.app/",
    image: "/images/showcase/symo-developers-home-v2.png",
    techStack: ["React.js", "Tailwind CSS", "GSAP", "Framer Motion"],
    tags: ["Architectural UI", "Inquiry Forms", "Interactive Maps"],
    details: {
      industry: "Real Estate & Construction",
      goal: "Showcase luxury properties and generate direct investor inquiries.",
      challenge: "High-resolution media assets caused slow initial loading times, causing user drop-offs.",
      solution: "Implemented lazy-loading sequences, picture tags, and custom WebP compression engines.",
      impact: "Page load time reduced to under 1.2s, 3x increase in investor call requests.",
      duration: "Completed in 3 Weeks",
      features: ["Custom WebP loader", "Interactive master plan maps", "Direct agent WhatsApp hooks"]
    }
  },
  {
    title: "Lisha Engineers",
    subtitle: "Civil infrastructure & engineering showcase.",
    description: "The page highlights large-scale civil work with a strong brand message, combining project-driven storytelling, structured navigation, and high-impact layouts.",
    meta: "Infrastructure Website",
    link: "https://lisha-engineers-8zrk.onrender.com/",
    image: "/images/showcase/lisha-engineers-home-new.png",
    techStack: ["React.js", "Tailwind CSS", "Responsive Design"],
    tags: ["Case Studies", "Corporate Profiling", "Lead Intake"],
    details: {
      industry: "Civil Engineering",
      goal: "Win national government and private infrastructure tenders.",
      challenge: "Presenting complex project catalogs and machine specs in a clean, readable layout.",
      solution: "Tabbed catalog structures with search filters and heavy focus on project image gallery layouts.",
      impact: "Successfully shortlisted for 3 major private infrastructure bids within 60 days.",
      duration: "Completed in 3 Weeks",
      features: ["Tabbed spec lists", "Interactive machinery database", "PDF tender print layouts"]
    }
  },
  {
    title: "Kriscel EV",
    subtitle: "Futuristic mobility product page.",
    description: "Kriscel EV presents electric scooters and bikes through a bold hero section, high-contrast visuals, and conversion-focused booking layouts.",
    meta: "Electric Mobility Website",
    link: "https://kriscel-ev-o82g.onrender.com/",
    image: "/images/showcase/kriscel-ev-home.png",
    techStack: ["React.js", "Tailwind CSS", "Responsive Design", "Modern UI"],
    tags: ["Scooter Showcases", "Specification Tables", "Test Ride Bookings"],
    details: {
      industry: "E-Mobility",
      goal: "Generate pre-bookings and inquiries for test rides.",
      challenge: "Visualizing electric vehicle statistics (range, charge time) without cluttering the screen.",
      solution: "Interactive stat badges and sliders to highlight range based on speed profiles.",
      impact: "500+ test ride bookings in the first week of deployment.",
      duration: "Completed in 2 Weeks",
      features: ["Dynamic range calculator", "Pre-order reservation portal", "3D vehicle angle sliders"]
    }
  },
  {
    title: "Shoes Manufacturers Website",
    subtitle: "High-density B2B manufacturing hub.",
    description: "This experience emphasizes manufacturing expertise, production quality, and scalability through B2B visuals, catalogs, and factory highlights.",
    meta: "Footwear Manufacturing",
    link: "https://shoes-manufacturers.onrender.com/",
    image: "/images/showcase/shoes-manufacturers-home-v2.png",
    techStack: ["React.js", "GSAP", "Tailwind CSS", "Node.js"],
    tags: ["B2B Catalog", "Global Trade Intake", "Factory Video tours"],
    details: {
      industry: "Footwear & Retail B2B",
      goal: "Attract global distributors, wholesalers and retail chains.",
      challenge: "Bridging the gap between offline factory trust and digital onboarding.",
      solution: "Integrated structured B2B catalogs, factory certifications, and live capacity counters.",
      impact: "Attracted export requests from 4 international distributors.",
      duration: "Completed in 3 Weeks",
      features: ["Certification vaults", "B2B bulk pricing calculators", "Multi-language intake filters"]
    }
  },
  {
    title: "Jewelry E-Commerce Website",
    subtitle: "Luxury catalog & visual boutique.",
    description: "Built to create a high-end digital presence for a jewelry brand, the layout focuses on luxury, craftsmanship, and exclusivity through elegant typography.",
    meta: "Luxury E-Commerce",
    link: "https://jewellery-09ej.onrender.com/",
    image: "/images/showcase/jewellery-ecommerce-home.png",
    techStack: ["React.js", "Tailwind CSS", "GSAP", "Framer Motion"],
    tags: ["Boutique UI", "Immersive Galleries", "Add-To-Cart Flows"],
    details: {
      industry: "Luxury Jewelry",
      goal: "Provide a digital showroom experience that mirrors the luxury of the physical boutique.",
      challenge: "Typical commerce interfaces felt cheap and distracted from the fine jewelry craftsmanship.",
      solution: "Minimalist layout with generous whitespace, fine serif typography, and fade-in zoom animations.",
      impact: "+35% higher average order value compared to their legacy store.",
      duration: "Completed in 4 Weeks",
      features: ["Serif font integrations", "Full-screen detailed zoom cards", "Private client bookings scheduler"]
    }
  },
  {
    title: "Luxury Watches Website",
    subtitle: "Timepiece cinematic presentation.",
    description: "The design showcases luxury timepieces through cinematic product presentation, smooth transitions, and high-end aesthetics.",
    meta: "Luxury Watches",
    link: "https://kriscel-watches.onrender.com/",
    image: "/images/showcase/kriscel-watches-home.png",
    techStack: ["React.js", "GSAP", "Tailwind CSS", "Responsive Design"],
    tags: ["Cinematic Hero", "Product Collections", "Scroll Storytelling"],
    details: {
      industry: "Luxury Accessories",
      goal: "Generate private viewer bookings and collector inquiries.",
      challenge: "Capturing the intricate detail of watch dials and movements in a responsive mobile layout.",
      solution: "Macro photography focus zones and CSS clip-path watch dissection diagrams.",
      impact: "Collector engagement time increased by 180 seconds on average.",
      duration: "Completed in 3 Weeks",
      features: ["Watch dissection charts", "Private viewing booking modules", "GSAP scroll-bound watch rotation"]
    }
  },
  {
    title: "Cookie Haven",
    subtitle: "Mouth-watering retail bakery shop.",
    description: "Cookie Haven presents signature cookies and featured collections through an attractive, engaging experience highlighting freshness and quality.",
    meta: "Bakery E-Commerce",
    link: "https://cookies-o829.onrender.com/",
    image: "/images/showcase/cookie-haven-home-v2.png",
    techStack: ["React.js", "Tailwind CSS", "GSAP", "Framer Motion"],
    tags: ["Food Presentation", "Interactive Menu cards", "Store Locator"],
    details: {
      industry: "Bakery & FMCG",
      goal: "Direct consumer orders and franchise inquiries.",
      challenge: "Selling food products online requires creating sensory desire through visual presentation.",
      solution: "Warm color palettes, macro product shots, dynamic cookie crumbs animation on scroll.",
      impact: "24% conversion rate from organic visitors.",
      duration: "Completed in 3 Weeks",
      features: ["Sensory color mapping", "Dynamic item picker animations", "Franchise intake module"]
    }
  },
  {
    title: "Fire Safety Website",
    subtitle: "Industrial security & compliance page.",
    description: "The platform presents a fire safety company as an industry leader through structured information architecture and clear service categorization.",
    meta: "Fire Protection",
    link: "https://fire-safety-website.onrender.com/",
    image: "/images/showcase/fire-safety-home.png",
    techStack: ["React.js", "GSAP", "Tailwind CSS", "Form Integration"],
    tags: ["Safety Compliance", "Service Spec lists", "Industrial Lead Intake"],
    details: {
      industry: "Industrial Safety",
      goal: "Generate corporate safety audits and equipment service requests.",
      challenge: "Compliance data is dry and often ignored by corporate procurement managers.",
      solution: "Implemented quick-calculators for warehouse safety compliance checks.",
      impact: "80+ safety inspection requests generated in the first month.",
      duration: "Completed in 2 Weeks",
      features: ["Interactive audit calculators", "Equipment spec databases", "Compliance cert verification"]
    }
  }
];

// Interactive Browser Frame Component with Skeleton loaders
const BrowserFrame = ({ image, title, link }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-950 shadow-xl overflow-hidden aspect-[16/10] w-full">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800/80">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
          <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
          <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex-1 max-w-xs mx-3 bg-slate-950 rounded py-0.5 px-2 text-[10px] text-slate-500 truncate flex items-center justify-center gap-1 font-mono">
          <Globe className="h-2.5 w-2.5" />
          <span>{link.replace("https://", "").replace("http://", "")}</span>
        </div>
        <div className="w-10" />
      </div>

      {/* Frame Viewport */}
      <div className="relative w-full h-[calc(100%-30px)] bg-slate-900 flex items-center justify-center overflow-hidden">
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 bg-slate-800 dark:bg-slate-950 animate-pulse z-10" />
        )}
        {!imgError ? (
          <img 
            src={image}
            alt={title}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`w-full h-full object-cover object-top transition-all duration-700 ${
              imgLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            } group-hover:scale-[1.03]`}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 p-6 text-center">
            <Laptop className="h-6 w-6 text-slate-500 mb-2" />
            <p className="text-xs text-slate-500">Preview temporary unavailable.</p>
          </div>
        )}
        {/* Glass reflection cover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none z-20" />
      </div>
    </div>
  );
};

// Consistent Showcase Layout for every single project
const ShowcaseProjectRow = ({ project, idx }) => {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const angleX = (yc - y) / 35;
    const angleY = (x - xc) / 35;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.008, 1.008, 1.008)`,
      transition: "transform 0.15s ease-out"
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
    });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...tiltStyle, transitionDelay: `${(idx % 2) * 100}ms` }}
      className={`w-full group relative border border-slate-200/60 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/40 backdrop-blur-md rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0 scale-100 blur-0" : "opacity-0 translate-y-12 scale-95 blur-md"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Side: Browser Mockup Preview */}
        <div className="lg:col-span-7">
          <BrowserFrame image={project.image} title={project.title} link={project.link} />
        </div>
        
        {/* Right Side: Project Details Information */}
        <div className="lg:col-span-5 space-y-5">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest block">
              {project.meta}
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs text-slate-450 dark:text-slate-400 font-medium">
              {project.details.duration} · {project.details.industry}
            </p>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            {project.description}
          </p>

          {/* Goal & Result card */}
          <div className="p-4 rounded-xl bg-slate-55 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/50 space-y-2 text-xs">
            <p className="text-slate-600 dark:text-slate-400">
              <strong className="text-slate-800 dark:text-slate-200">Goal:</strong> {project.details.goal}
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              <strong className="text-slate-800 dark:text-slate-200">Result:</strong> {project.details.impact}
            </p>
          </div>

          {/* Technology stack badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, i) => (
              <span 
                key={i} 
                className="px-2.5 py-1 rounded-lg bg-sky-50 dark:bg-sky-950/20 border border-sky-100/30 dark:border-sky-900/20 text-[10px] font-semibold text-sky-600 dark:text-sky-400"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Link */}
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="block pt-2">
            <Button className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 text-white rounded-full h-11 px-6 text-xs font-bold transition-all flex items-center justify-center gap-2 group/btn shadow">
              <span>🚀 View Live Demo</span>
              <ExternalLink className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const containerRef = useRef(null);

  // Derive all filter tags from client projects
  const allTags = ["All", ...Array.from(new Set(mock.portfolio.flatMap(p => p.tags)))];
  const filteredCaseStudies = filter === "All" ? mock.portfolio : mock.portfolio.filter(p => p.tags.includes(filter));

  return (
    <div className="bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden">
      <SEO 
        title="Our Portfolio — Premium Web Systems & Digital Growth" 
        description="Case studies of high-performance custom ERP, automation hubs, CRM integrations and digital marketing campaigns." 
        path="/portfolio" 
      />

      {/* Premium Redesigned Header/Hero Section */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden py-24 bg-white dark:bg-slate-900/20 border-b border-slate-100 dark:border-slate-800/40">
        {/* Soft designer lighting, noise layer, and subtle gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-100/50 via-transparent to-transparent dark:from-sky-900/10 pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-sky-400/10 to-blue-500/10 dark:from-sky-950/10 dark:to-blue-950/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center z-10 space-y-4">
          <Badge className="bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border-sky-100/50 dark:border-sky-900/20 rounded-full px-3.5 py-1 text-xs font-bold tracking-widest uppercase mb-2">
            Selected Work
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Crafting Digital Experiences <br />
            <span className="gradient-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">That Deliver Results</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A curated collection of real-world B2B websites, luxury commerce brands, and engineering catalogs. Built with modern framework technologies, performance optimization, and clean conversion pipelines.
          </p>
        </div>
      </section>

      {/* Projects Showcase Container Stack */}
      <section 
        ref={containerRef}
        className="relative py-20 md:py-24 bg-white dark:bg-slate-900/10 border-b border-slate-100 dark:border-slate-800/40"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-12">
          {showcaseProjects.map((project, idx) => (
            <ShowcaseProjectRow key={idx} project={project} idx={idx} />
          ))}
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-14 border-b border-slate-100 dark:border-slate-800/40 bg-slate-50/40 dark:bg-slate-900/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {mock.stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-5xl font-bold gradient-text bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Grid View of Case Studies */}
      <section id="case-studies-section" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 border-sky-100 dark:border-sky-900/30 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase mb-3">
              Case Studies
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Operational Automation &amp; <span className="gradient-text bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">Lead Metrics</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {allTags.map((tag, i) => (
              <button 
                key={i} 
                onClick={() => setFilter(tag)} 
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === tag 
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md" 
                    : "bg-sky-50 text-slate-700 hover:bg-sky-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredCaseStudies.map((p, i) => (
              <Card key={i} className="group relative p-7 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 card-shadow card-shadow-hover bg-white dark:bg-slate-900/40 overflow-hidden">
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-950/20 dark:to-blue-950/20 opacity-40 group-hover:opacity-70 transition-opacity" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center shadow-md">
                        <Building2 className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-slate-900 dark:text-white">{p.client}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-450">{p.industry}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 justify-end">
                      {p.tags.slice(0, 2).map((t, ti) => (
                        <Badge key={ti} className="bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-400 hover:bg-sky-50 border-0 text-[10px]">{t}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/10 border border-amber-100/50 dark:border-amber-900/20 mb-3">
                    <div className="flex items-start gap-2">
                      <TriangleAlert className="h-4 w-4 text-amber-600 dark:text-amber-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wide">Challenge</p>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mt-0.5 leading-relaxed">{p.challenge}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-sky-50/60 dark:bg-sky-950/10 border border-sky-100/50 dark:border-sky-900/20 mb-3">
                    <div className="flex items-start gap-2">
                      <CircleCheck className="h-4 w-4 text-sky-600 dark:text-sky-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] font-bold text-sky-700 dark:text-sky-400 uppercase tracking-wide">Solution</p>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mt-0.5 leading-relaxed">{p.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/10 border border-emerald-100/50 dark:border-emerald-900/20">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">Result</p>
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5 leading-relaxed">{p.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Logos / Client Section */}
      <section className="py-16 bg-slate-50/50 dark:bg-slate-900/10 border-y border-slate-100 dark:border-slate-850">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 hover:bg-blue-100 border-0 rounded-full px-3 py-1 text-xs font-medium mb-4">Our Esteemed Clients</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Supporting growth across <span className="gradient-text bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">India &amp; beyond</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {mock.trustLogos.map((logo, i) => (
              <div key={i} className="h-24 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 grid place-items-center hover:border-sky-200 dark:hover:border-sky-900 hover:shadow-md transition-all group cursor-pointer">
                <span className="text-sm md:text-base font-bold text-slate-400 group-hover:text-sky-650 dark:group-hover:text-sky-400 tracking-tight uppercase text-center px-3 transition-colors">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <Badge className="bg-sky-100 dark:bg-sky-950/50 text-sky-700 dark:text-sky-400 hover:bg-sky-100 border-0 rounded-full px-3 py-1 text-xs font-medium mb-4">What Clients Say</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              Words from <span className="gradient-text bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">real founders</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mock.testimonials.map((t, i) => (
              <Card key={i} className="p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 card-shadow bg-white dark:bg-slate-900/40 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 dark:text-slate-350 leading-relaxed text-sm">{t.quote}</p>
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/20">
                    <TrendingUp className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">{t.result}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-5 pt-5 border-t border-slate-100 dark:border-slate-800/50">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center text-sm font-bold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{t.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <span style={{ display: "contents" }}>{t.role}</span> · <span style={{ display: "contents" }}>{t.industry}</span>
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="relative rounded-3xl p-10 md:p-14 text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)" }}>
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