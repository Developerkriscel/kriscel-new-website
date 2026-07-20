// Kriscel Tech — Business Automation & Digital Growth Partner
// Content rewritten with human, problem-solver tone based on kriscel.com

const companyInfo = {
  name: "Kriscel Tech",
  tagline: "Business Automation & Digital Growth Partner",
  promise: "No shortcuts. No fake promises. Just real execution — manual to fully automated.",
  description: "We help growing businesses move from spreadsheets, WhatsApp groups and gut-feel decisions to fully automated operations, data-driven marketing, and structured hiring — without overwhelming your team or breaking your workflow.",
  phone: "+91 89854 19420",
  email: "Info@kriscel.com",
  address: "229, Bharthal, Sector 26, Dwarka, South West Delhi, 110077",
  socials: {
    instagram: "https://www.instagram.com/krisceltech/",
    facebook: "https://www.facebook.com/KriscelTech/",
    youtube: "https://www.youtube.com/@krisceltech/",
    linkedin: "https://in.linkedin.com/company/kriscel-tech-pvt-ltd"
  }
};

// Realistic numbers — not inflated
const stats = [{
  value: "120+",
  label: "Businesses Automated"
}, {
  value: "40+",
  label: "Team Members"
}, {
  value: "250+",
  label: "Projects Delivered"
}, {
  value: "8+",
  label: "Years of Execution"
}];

const trustLogos = [
  { name: "Kalinga Premium", logo: "/logos/kalinga.png" },
  { name: "Krishna Overseas", logo: "/logos/krishna.png" },
  { name: "Om Resources", logo: "/logos/om.png" },
  { name: "Chukde", logo: "/logos/chukde.png" },
  { name: "Malvika Pride India", logo: "/logos/malvika.png" }
];

// Problem-solver features — what pain do we actually kill?
const features = [{
  icon: "FileSpreadsheet",
  title: "Bye-bye Excel chaos",
  desc: "Your team fights 40+ Excel sheets to find one number. We unify them into a single dashboard your CEO can trust."
}, {
  icon: "MessageSquareText",
  title: "No more WhatsApp firefighting",
  desc: "Orders lost in group chats. Approvals forgotten. We put every workflow into a system where nothing slips."
}, {
  icon: "LineChart",
  title: "See your business at a glance",
  desc: "Sales, stock, cash, production — one MIS dashboard. Know exactly where the money is stuck, in real-time."
}, {
  icon: "Users",
  title: "Hire without HR headaches",
  desc: "From JD to joining — an ATS pipeline that filters resumes, schedules interviews and tracks candidates for you."
}, {
  icon: "TrendingUp",
  title: "Marketing that actually converts",
  desc: "We don't run ads for likes. We build campaigns tied to your CRM so you can measure ROI down to the rupee."
}, {
  icon: "ShieldCheck",
  title: "Own your data. Always.",
  desc: "Everything runs on your infrastructure or private cloud. No vendor lock-in, no data leaks, no surprises."
}];

// 3 Core Services from actual Kriscel
const services = [{
  id: "automation",
  slug: "business-automation",
  icon: "Cpu",
  title: "Business Automation",
  badge: "Scalable Systems",
  heroTitle: "Top Business Automation Services",
  short: "From manual chaos to a fully connected operating system.",
  problem: "Your team spends 4-6 hours a day copy-pasting data between Excel, Tally, WhatsApp and email. Reports are always outdated. Approvals get lost. Owners become bottlenecks.",
  desc: "We unify your production, purchase, inventory, HR, accounts and tasks into a single connected system. Every entry auto-syncs. Every stakeholder gets exactly the view they need. You run the business — not the paperwork.",
  features: ["Custom ERP built around YOUR workflow", "Tally, Excel, Zoho & existing tool sync", "Role-based dashboards for every team", "Automated alerts on WhatsApp & email"],
  whatWeDo: [{
    title: "Workflow Automation",
    desc: "Automate daily operations and eliminate the copy-paste tax. What took your team 4 hours now takes 4 minutes."
  }, {
    title: "Smart Integration",
    desc: "Connect Tally, Excel, WhatsApp, IndiaMART, your website and CRM into one flowing river of data."
  }, {
    title: "Real-Time Insights",
    desc: "Live dashboards that show exactly where the money, orders and problems are — no waiting for month-end reports."
  }],
  benefits: [{
    title: "Reduce Operational Costs",
    desc: "Eliminate repetitive manual work. Our clients save 40-70% of admin hours in the first quarter itself."
  }, {
    title: "Enhance Data Accuracy",
    desc: "Auto-validation catches errors before they become GST notices or customer complaints."
  }, {
    title: "Speed Up Decisions",
    desc: "Owners get answers in seconds. No more 'let me check with the team and get back'."
  }, {
    title: "Full Transparency",
    desc: "Every entry, approval and change is logged. Blame games end. Accountability becomes automatic."
  }, {
    title: "Boost Team Productivity",
    desc: "Your people stop being data-entry clerks. They start doing the strategic work you actually hired them for."
  }, {
    title: "Reports on Autopilot",
    desc: "Daily, weekly, monthly reports land in your inbox at 8AM. No manual pulling, no delays."
  }],
  midCta: {
    title: "Stop Losing Money on Manual Processes",
    desc: "Every day of manual work is money left on the table. Let's fix that this quarter."
  }
}, {
  id: "marketing",
  slug: "digital-marketing",
  icon: "Megaphone",
  title: "Digital Marketing",
  badge: "Growth Engine",
  heroTitle: "Digital Marketing That Drives Real Revenue",
  short: "Ads and SEO tied to revenue — not just impressions.",
  problem: "Your agency shows you 'reach' and 'engagement' but sales haven't moved. You don't know which ad brought which customer. Half the budget is guessing.",
  desc: "We build attribution-first campaigns. Every lead is tracked back to the exact ad, keyword or post. SEO, Meta Ads, Google Ads, LinkedIn, YouTube — all connected to your CRM so ROI is crystal clear.",
  features: ["Full-funnel PPC (Google, Meta, LinkedIn)", "SEO with revenue-linked KPIs", "Landing page CRO & A/B testing", "Monthly ROI reports (not vanity metrics)"],
  whatWeDo: [{
    title: "Performance PPC",
    desc: "Google Ads, Meta, LinkedIn campaigns built around your CAC target — not our commission."
  }, {
    title: "SEO That Converts",
    desc: "Rank for the buyer-intent keywords your competitors are milking. Not vanity traffic."
  }, {
    title: "CRO & Landing Pages",
    desc: "Split-tested pages that turn visitors into leads. Sometimes a headline change doubles your conversions."
  }],
  benefits: [{
    title: "Every Rupee Tracked",
    desc: "See exactly which ad, which keyword, which post brought which customer. No more 'branding' excuses."
  }, {
    title: "Lower Cost per Lead",
    desc: "Our clients average 40-60% reduction in CPL within 90 days of takeover."
  }, {
    title: "Attribution Clarity",
    desc: "First-touch, multi-touch, view-through — pick your model. We build the reports around it."
  }, {
    title: "Faster Sales Cycles",
    desc: "Leads get scored, routed and nurtured automatically. Sales talks only to hot ones."
  }, {
    title: "SEO That Compounds",
    desc: "Content clusters and technical fixes that keep working long after the invoice is paid."
  }, {
    title: "Zero Vanity Metrics",
    desc: "We don't send reach/impression reports. Only revenue, pipeline and CAC."
  }],
  midCta: {
    title: "Tired of Marketing Reports Full of Empty Numbers?",
    desc: "Let's rebuild your marketing so every rupee spent is a rupee tracked to revenue."
  }
}, {
  id: "recruitment",
  slug: "recruitment-solutions",
  icon: "UserSearch",
  title: "Recruitment Solutions",
  badge: "Talent Engine",
  heroTitle: "Hire the Top 1% Without Drowning in Resumes",
  short: "AI-powered ATS + expert recruiters.",
  problem: "You've posted the job 3 weeks ago. 400 resumes came in. Your HR is exhausted. Interviews keep getting rescheduled. Good candidates ghost you because the process took too long.",
  desc: "We deploy an intelligent ATS + a curated recruiter team. Resumes get pre-screened by AI, top matches get automated invites, interview slots auto-schedule with your calendar. You only meet finalists.",
  features: ["AI-powered resume screening", "Automated scheduling & follow-ups", "Sourcing across Naukri, LinkedIn, Indeed", "Onboarding kits & 90-day check-ins"],
  whatWeDo: [{
    title: "Smart Sourcing",
    desc: "We pull from Naukri, LinkedIn, Indeed, referrals and passive channels — not just posting and praying."
  }, {
    title: "AI Screening",
    desc: "Every resume gets rated against your JD in seconds. You only see the top 10%."
  }, {
    title: "White-glove Onboarding",
    desc: "From offer letter to Day-1 kit to 90-day check-ins — we make sure the hire stays."
  }],
  benefits: [{
    title: "Faster Hiring Cycles",
    desc: "Average time-to-hire drops from 6-8 weeks to 2-3 weeks. Your business doesn't wait."
  }, {
    title: "Zero Resume Fatigue",
    desc: "Your team never sees the 90% that don't fit. We filter, they interview."
  }, {
    title: "Auto-scheduled Interviews",
    desc: "Candidates pick slots from your team's calendar. No more email ping-pong."
  }, {
    title: "Better Retention",
    desc: "Structured onboarding + 90-day check-ins = 30% higher first-year retention."
  }, {
    title: "Wider Talent Pool",
    desc: "We reach passive candidates who aren't actively job-hunting but are open to great roles."
  }, {
    title: "Transparent Pipeline",
    desc: "You see every candidate's stage, feedback and next step — in real-time."
  }],
  midCta: {
    title: "Still Hiring the Excel-and-Email Way?",
    desc: "It's costing you your best candidates. Let's fix your hiring engine."
  }
}, {
  id: "web",
  slug: "web-ecommerce",
  icon: "Globe",
  title: "Web & E-commerce",
  badge: "Digital Presence",
  heroTitle: "Websites & Stores That Actually Convert",
  short: "Fast, conversion-focused digital storefronts.",
  problem: "Your current website looks good but nobody buys. Load time is 6 seconds. Mobile checkout breaks. You lose 70% of visitors before they even see your product.",
  desc: "We build fast, SEO-first websites and Shopify / WooCommerce stores optimized for conversion. Speed under 2s. Mobile-first UX. Integrated with your ERP so stock, prices and orders stay in sync.",
  features: ["Next.js / Shopify / WooCommerce builds", "PageSpeed 90+ guaranteed", "ERP & payment gateway integration", "Ongoing CRO & maintenance"],
  whatWeDo: [{
    title: "Custom Web Builds",
    desc: "Marketing sites, portals, dashboards on Next.js — beautiful, fast, SEO-ready."
  }, {
    title: "E-commerce Stores",
    desc: "Shopify and WooCommerce stores built for conversion, not just for existing."
  }, {
    title: "Integrations & Ongoing CRO",
    desc: "Payment gateways, ERP sync, WhatsApp checkout, cart recovery — everything wired up."
  }],
  benefits: [{
    title: "PageSpeed 90+",
    desc: "Fast-loading sites rank better on Google and convert 3x higher on mobile."
  }, {
    title: "Mobile-first UX",
    desc: "70% of your traffic is mobile. We design for the thumb, not just the mouse."
  }, {
    title: "ERP-connected Stock",
    desc: "Stock, prices and orders sync bidirectionally — never oversell again."
  }, {
    title: "Conversion Optimized",
    desc: "Every element is A/B tested. Data drives the design, not just designer instinct."
  }, {
    title: "SEO from Day One",
    desc: "Schema, sitemaps, structured content and Core Web Vitals — all built-in."
  }, {
    title: "Ongoing Support",
    desc: "Updates, security patches, and monthly CRO experiments as part of your AMC."
  }],
  midCta: {
    title: "Your Website Should Be Your #1 Salesperson",
    desc: "If it's not, we need to talk. Free audit, 24-hour turnaround."
  }
}, {
  id: "mis",
  slug: "mis-sheet-automation",
  icon: "BarChart3",
  title: "MIS & Sheet Automation",
  badge: "Data Command",
  heroTitle: "Decision-Grade Reports Without the Manual Work",
  short: "Turn your spaghetti sheets into decision-grade reports.",
  problem: "The MD asks 'what's this month's margin by product?' — and your team needs 3 days to answer. By then the moment is gone.",
  desc: "We audit your existing Google Sheets and Excel workbooks, then rebuild them with automated data pulls, conditional alerts, and executive-ready dashboards. Answers in seconds, not days.",
  features: ["Google Sheets & Excel automation", "Live MIS dashboards", "Data validation & error alerts", "Executive reporting templates"],
  whatWeDo: [{
    title: "Sheet Audit & Rebuild",
    desc: "We take your mess of tabs and formulas and rebuild them properly — with data validation and version control."
  }, {
    title: "Auto Data Pulls",
    desc: "Your sheets pull data from Tally, CRM, marketplaces and databases automatically."
  }, {
    title: "Executive Dashboards",
    desc: "Beautiful, single-page dashboards that MDs and CFOs can read in 30 seconds."
  }],
  benefits: [{
    title: "Zero Manual Updates",
    desc: "Sheets refresh themselves. No more 'my colleague was on leave so the report is late'."
  }, {
    title: "Real-Time Answers",
    desc: "Any question about margins, sales, stock — answered in under a minute."
  }, {
    title: "Error-Proof",
    desc: "Data validation and conditional alerts catch mistakes before they hit reports."
  }, {
    title: "Consistent Reports",
    desc: "Same format every week/month. Trends become visible instead of hidden."
  }, {
    title: "Cross-Team Access",
    desc: "Role-based access lets sales see sales, ops see ops — same source of truth."
  }, {
    title: "Mobile-Ready",
    desc: "View dashboards on your phone during travel or meetings — no laptop needed."
  }],
  midCta: {
    title: "Your Sheets Are Eating Your Team Alive",
    desc: "Let's rebuild them so they work for you, not the other way around."
  }
}, {
  id: "seo",
  slug: "seo-dominance",
  icon: "Search",
  title: "SEO Dominance",
  badge: "Organic Growth",
  heroTitle: "Rank for Keywords That Actually Bring Customers",
  short: "Traffic that converts — not just numbers.",
  problem: "You rank for your brand name — nothing else. Competitors are showing up on Google for every product search and you're invisible.",
  desc: "Technical SEO audit, competitor gap analysis, content strategy, backlink outreach and monthly performance reviews. We chase traffic that converts — not just numbers.",
  features: ["Technical + on-page + off-page SEO", "Content clusters & topic authority", "Ethical backlink outreach", "Monthly ranking & traffic reports"],
  whatWeDo: [{
    title: "Technical Foundation",
    desc: "Site speed, schema, indexing, Core Web Vitals — the plumbing that decides if Google even shows you."
  }, {
    title: "Content Strategy",
    desc: "Topic clusters around buyer-intent keywords, not vanity ones. We build authority around what pays."
  }, {
    title: "Authority Building",
    desc: "Ethical link outreach, PR mentions, guest posts and digital PR that Google actually respects."
  }],
  benefits: [{
    title: "Buyer-Intent Traffic",
    desc: "We rank for 'buy X in Y' queries, not just informational fluff. Traffic that pays back."
  }, {
    title: "Compounding Returns",
    desc: "Unlike ads, SEO keeps working after the invoice is paid. Content earns for years."
  }, {
    title: "Local Domination",
    desc: "For local businesses, we own the Map Pack and 'near me' searches in your city."
  }, {
    title: "Transparent Reporting",
    desc: "Rankings, traffic, conversions — all in a monthly dashboard you can share with your board."
  }, {
    title: "Competitor Gap Closure",
    desc: "We find every keyword your competitors rank for that you don't — and go after it methodically."
  }, {
    title: "No Black Hat",
    desc: "Only Google-approved tactics. Your rankings won't collapse in the next algorithm update."
  }],
  midCta: {
    title: "Google Is Sending Your Customers to Competitors",
    desc: "Every day you're not ranking is a customer walking to someone else. Let's change that."
  }
}];

// 6 Real Products from kriscel.com "Active" systems
const products = [{
  id: "production",
  slug: "production-management-system",
  name: "Production Management",
  tagline: "Shop-floor Control System",
  badge: "Manufacturing Grade",
  color: "from-sky-500 to-blue-600",
  icon: "Factory",
  desc: "Plan, track and optimize production in real-time. From work orders to job cards to quality checks — every stage visible on one screen.",
  problem: "You don't know which order is where. Delays happen because someone forgot to raise a job card. Rework costs you 8-12% every month.",
  highlights: ["Work order & job card automation", "Real-time WIP tracking", "BOM & routing management", "Machine-wise output reports"],
  price: "Custom quote",
  whatWeDo: [{
    title: "Real-Time Production Tracking",
    desc: "Live dashboards show every job card, machine, and operator status — no more walking the floor to know what's going on."
  }, {
    title: "Smart Scheduling",
    desc: "AI-driven scheduling predicts bottlenecks and reorders jobs to keep machines running at peak utilization."
  }, {
    title: "Quality Control Built-in",
    desc: "In-process QC checks with photo capture and rejection tracking — quality issues get flagged instantly."
  }],
  benefits: [{
    title: "Real-Time Stock Tracking",
    desc: "Raw material and WIP tracked at every stage. You always know what's available and what's blocked."
  }, {
    title: "Zero Job Card Slips",
    desc: "Every work order auto-generates job cards. No more 'my supervisor forgot to raise it' delays."
  }, {
    title: "Reduced Rework",
    desc: "In-process QC catches defects at Stage 2, not at packaging. Rework costs drop 40-60%."
  }, {
    title: "Machine Utilization",
    desc: "See exactly which machines are idle, which are bottlenecks. Optimize without guesswork."
  }, {
    title: "Order-Level Traceability",
    desc: "Customer asks 'where's my order?' — you answer in 5 seconds with a full stage-wise timeline."
  }, {
    title: "Data-Driven Costing",
    desc: "Actual production cost per SKU based on real machine hours, material and rejection data."
  }],
  midCta: {
    title: "Still Running Production on Registers?",
    desc: "Your competitors have live dashboards. You're getting yesterday's reports tomorrow. Let's fix that."
  }
}, {
  id: "hr",
  slug: "hr-management-system",
  name: "HR Management",
  tagline: "People Operations Platform",
  badge: "People-First",
  color: "from-blue-500 to-indigo-600",
  icon: "UsersRound",
  desc: "Attendance, leaves, payroll, appraisals — every HR workflow in one place. Employees self-serve. HR focuses on strategy, not paperwork.",
  problem: "Attendance registers, leave emails, salary spreadsheets, appraisal forms — your HR is drowning. Employees keep asking the same questions.",
  highlights: ["Biometric & mobile attendance", "Auto-calculated payroll & compliance", "Self-service employee portal", "Appraisal & goal tracking"],
  price: "Custom quote",
  whatWeDo: [{
    title: "Attendance & Leaves",
    desc: "Biometric, mobile GPS or face-scan — pick your method. Leaves apply and approve inside WhatsApp."
  }, {
    title: "Auto Payroll",
    desc: "Attendance flows into payroll. PF, ESI, TDS auto-calculated. Bank files generated in one click."
  }, {
    title: "Self-Service Portal",
    desc: "Employees check payslips, apply leave, update KYC — without emailing HR for every little thing."
  }],
  benefits: [{
    title: "HR Time Saved",
    desc: "Payroll that took 4 days now takes 4 hours. HR gets time to actually do strategic work."
  }, {
    title: "Zero Compliance Slips",
    desc: "PF, ESI, PT, TDS filed automatically with reminders. No more compliance-notice heart attacks."
  }, {
    title: "Happy Employees",
    desc: "Payslips available instantly. Leave balance visible always. No more chasing HR for basics."
  }, {
    title: "Real-Time Attendance",
    desc: "See who's in, who's late, who's on leave — live. No more end-of-day muster confusion."
  }, {
    title: "Structured Appraisals",
    desc: "Goals, self-ratings, manager-ratings and 360 feedback — all in one place, all searchable."
  }, {
    title: "Reduced HR Overhead",
    desc: "One HR person handles 200+ employees comfortably. Scale team without scaling HR headcount."
  }],
  midCta: {
    title: "Your HR Deserves Better Than 12 Spreadsheets",
    desc: "Give them one platform that handles everything — from Day 1 to Day 1,000."
  }
}, {
  id: "purchase",
  slug: "purchase-management-system",
  name: "Purchase Management",
  tagline: "Procurement Automation",
  badge: "Procurement Grade",
  color: "from-cyan-500 to-sky-600",
  icon: "ShoppingCart",
  desc: "From indent to invoice — a fully digital procurement pipeline with vendor comparison, approval chains and 3-way matching built-in.",
  problem: "Purchase requests get lost. Vendor prices vary week to week and nobody notices. You keep paying more than you should.",
  highlights: ["Digital indents & RFQs", "Vendor rate history & comparison", "Multi-level approval chains", "PO — GRN — Invoice 3-way match"],
  price: "Custom quote",
  whatWeDo: [{
    title: "Digital Indents & RFQs",
    desc: "Teams raise indents from phone. RFQs go to vendors automatically. Comparisons happen in real-time."
  }, {
    title: "Approval Chains",
    desc: "Multi-level approvals based on amount, category or department — with WhatsApp notifications."
  }, {
    title: "3-Way Matching",
    desc: "PO, GRN and Invoice matched automatically. Payments only released when everything ties."
  }],
  benefits: [{
    title: "Purchase Order Automation",
    desc: "No more manual POs. From indent to PO to vendor — the flow is fully digital and traceable."
  }, {
    title: "Vendor Rate Intelligence",
    desc: "Historical vendor rates auto-compared. Overpaying gets flagged before you sign the PO."
  }, {
    title: "Budget Control",
    desc: "Category-wise budgets enforced. Approvals blocked when limits crossed — no surprise expenses."
  }, {
    title: "Faster Approvals",
    desc: "Managers approve from WhatsApp. Purchase cycles that took 2 weeks now close in 2 days."
  }, {
    title: "Reduced Fraud",
    desc: "3-way matching means fake invoices get caught. Vendor collusion becomes almost impossible."
  }, {
    title: "Better Vendor Terms",
    desc: "Data on spend, on-time delivery and quality gives you leverage to negotiate better rates yearly."
  }],
  midCta: {
    title: "Every Manual PO Is Money Left on the Table",
    desc: "Vendor prices creep up when nobody's watching. Let's put a system that watches."
  }
}, {
  id: "inventory",
  slug: "inventory-management-system",
  name: "Inventory Management",
  tagline: "Stock Intelligence",
  badge: "Enterprise Grade",
  color: "from-indigo-500 to-blue-600",
  icon: "Boxes",
  desc: "Know exactly what you have, where it is, and when to reorder. Bin-level tracking, barcode scanning, low-stock alerts — all live.",
  problem: "Physical stock never matches the register. You either over-order (blocking cash) or run out at the worst possible moment.",
  highlights: ["Multi-location & bin tracking", "Barcode & QR scanning", "Auto reorder-level alerts", "Batch, serial & expiry tracking"],
  price: "Custom quote",
  whatWeDo: [{
    title: "AI-Driven Stock Management",
    desc: "Track stock across warehouses, stores and consignment locations — with predictive reorder suggestions."
  }, {
    title: "Real-Time Visibility",
    desc: "Every scan updates the master stock. No more end-of-day tallying or physical stock-take drama."
  }, {
    title: "Multi-Channel Sync",
    desc: "Amazon, Flipkart, Shopify and your website — all inventories stay in sync automatically."
  }],
  benefits: [{
    title: "Real-Time Stock Tracking",
    desc: "Instant visibility across locations, bins and channels — one truth for the entire organization."
  }, {
    title: "Reduced Stockouts",
    desc: "Smart reorder levels + demand forecasting = you're never surprised by a stockout again."
  }, {
    title: "Automated Reordering",
    desc: "System raises indents when stock hits reorder level. Purchase team just approves."
  }, {
    title: "Multi-Channel Sync",
    desc: "Sell on Amazon, Flipkart, Shopify — stock deducts from one master. No overselling ever."
  }, {
    title: "Enhanced Accuracy",
    desc: "Barcode scanning eliminates data-entry errors. Physical stock and system stock always match."
  }, {
    title: "Better Cash Flow",
    desc: "Dead stock reports and turnover ratios help you free up capital blocked in slow-moving items."
  }],
  midCta: {
    title: "Still Managing Inventory in Excel?",
    desc: "Manual tracking = stock errors, delayed orders, lost sales. Automate before your competitors do."
  }
}, {
  id: "account",
  slug: "account-management-system",
  name: "Account Management",
  tagline: "Finance Command Center",
  badge: "GST Ready",
  color: "from-sky-400 to-blue-500",
  icon: "Wallet",
  desc: "Invoicing, receivables, payables, GST filing and MIS in one place. Syncs with Tally so your CA doesn't need to change anything.",
  problem: "Receivables are aging. Cash flow is a mystery. GST reconciliation eats up 3 days every month. Your CA's fees keep climbing.",
  highlights: ["Auto GST-ready invoicing", "Aging analysis & payment reminders", "Bank recon & cash flow forecast", "Two-way Tally sync"],
  price: "Custom quote",
  whatWeDo: [{
    title: "GST-Ready Invoicing",
    desc: "Every invoice is HSN-tagged, GST-compliant and IRN-generated automatically. Zero rework at filing time."
  }, {
    title: "Receivables on Autopilot",
    desc: "Aging reports refresh live. Payment reminders go on WhatsApp and email — automatically, with escalation."
  }, {
    title: "Cash Flow Forecast",
    desc: "See your cash position 30/60/90 days out — based on real receivables, payables and forecasted orders."
  }],
  benefits: [{
    title: "GST in 20 Minutes",
    desc: "Reconciliation that took 3 days now takes 20 minutes. Filing is a click, not a project."
  }, {
    title: "Faster Collections",
    desc: "Automated reminders + WhatsApp follow-ups cut DSO (days sales outstanding) by 30-40%."
  }, {
    title: "Tally Two-Way Sync",
    desc: "Your CA keeps using Tally. Your team stops double-entry. Everyone's happy."
  }, {
    title: "Real Cash Visibility",
    desc: "MDs see live bank balance, pending receivables and upcoming payables — one screen, always current."
  }, {
    title: "Fraud Alerts",
    desc: "Duplicate invoices, unusual expenses and vendor payment anomalies get flagged before approval."
  }, {
    title: "Reduced CA Fees",
    desc: "Clean books mean less back-and-forth with your CA. AMC fees typically drop 25-35%."
  }],
  midCta: {
    title: "Your Books Should Be Boring",
    desc: "If closing your books is a 'project' every month, your finance stack is broken. Let's fix it."
  }
}, {
  id: "tasks",
  slug: "employee-task-management-system",
  name: "Task Management",
  tagline: "Employee Productivity Hub",
  badge: "Team Productivity",
  color: "from-blue-400 to-indigo-500",
  icon: "ListChecks",
  desc: "Assign, track and close tasks across departments. No more 'I forgot' or 'nobody told me'. Every task has an owner, deadline and audit trail.",
  problem: "You said it in the meeting. Nobody wrote it down. It never got done. Meetings turn into blame games and Monday reviews become firefights.",
  highlights: ["Kanban, list & calendar views", "Recurring & dependent tasks", "WhatsApp reminders to owners", "Team-wise productivity reports"],
  price: "Custom quote",
  whatWeDo: [{
    title: "Multi-View Task Boards",
    desc: "Kanban for teams, list for managers, calendar for planning — everyone works in their preferred view."
  }, {
    title: "Smart Recurring Tasks",
    desc: "Weekly reviews, monthly reports, daily huddles — create once, run forever with auto-owner rotation."
  }, {
    title: "WhatsApp Nudges",
    desc: "Overdue tasks get gentle WhatsApp reminders. No more 'I didn't see the email' excuses."
  }],
  benefits: [{
    title: "Task & Deadline Assignment",
    desc: "Every task has an owner and a due date. Zero ambiguity, zero verbal instructions floating in air."
  }, {
    title: "Progress Tracking",
    desc: "See what's blocked, what's on track, what's overdue — team-wise, project-wise or personal."
  }, {
    title: "Internal Communication",
    desc: "Comments and files attach to tasks — not scattered across 12 WhatsApp groups and email threads."
  }, {
    title: "Recurring Automation",
    desc: "Monthly MIS, weekly reviews, daily standups — all auto-created with the right owners."
  }, {
    title: "Productivity Insights",
    desc: "See who's overloaded, who's underutilized, and who's actually closing tasks vs just moving them."
  }, {
    title: "Reduced Meeting Time",
    desc: "Status meetings shrink from 60 min to 15 min because the board already has the answers."
  }],
  midCta: {
    title: "Meetings Shouldn't Be Where Work Goes to Die",
    desc: "Every 'I'll do it' in a meeting deserves an owner and deadline. Let's make that automatic."
  }
}, {
  id: "taskeasy",
  slug: "taskeasy-workflow-management",
  name: "TaskEasy Workflow Management",
  tagline: "Ecosystem Command Platform",
  badge: "Business Operations",
  color: "from-sky-500 to-blue-600",
  icon: "Sparkles",
  desc: "Complete workflow, delegation, checklist, approvals & MIS platform for business operations.",
  problem: "Delegation gets lost, checklists are ignored, and approvals stall. You lack a unified command center to run operations on autopilot.",
  highlights: [
    "Workflow & delegation tracking",
    "Compliance checklist audits",
    "Multi-level approval engine",
    "Real-time MIS dashboard"
  ],
  price: "Custom quote",
  image: "/taskeasy-preview.png",
  isExternal: true,
  externalUrl: "https://www.taskeasyapp.in/",
  whatWeDo: [
    {
      title: "Workflow & Delegation",
      desc: "Assign tasks and delegate responsibility with clear ownership and deadline tracking."
    },
    {
      title: "Checklist Compliance",
      desc: "Ensure standard operating procedures are followed through audit-ready digital checklists."
    },
    {
      title: "Approvals & MIS",
      desc: "Streamline manager sign-offs and view clean operational metrics on a live dashboard."
    }
  ],
  benefits: [
    {
      title: "Run on Autopilot",
      desc: "Systemize your operations so they function smoothly even when you are away."
    },
    {
      title: "100% Accountability",
      desc: "Track status, ownership, and completion timestamps for all tasks and processes."
    },
    {
      title: "No Slipping Tasks",
      desc: "Automated reminders prevent critical work from falling through the cracks."
    }
  ],
  midCta: {
    title: "Take Control of Your Operations Today",
    desc: "Deploy a complete workflow system designed to help your team execute flawlessly."
  }
}];

// Real testimonials with problem→solution framing
const testimonials = [{
  quote: "Before Kriscel, my 3 factory managers used to send me 40+ WhatsApp updates a day. Now I get one dashboard every morning at 8AM. My weekends are actually mine again.",
  name: "Rakesh Agarwal",
  role: "MD, Kalinga Premium",
  industry: "Manufacturing",
  result: "70% less operational overhead",
  avatar: "RA"
}, {
  quote: "We were burning ₹4 lakh a month on ads and had no idea what worked. Kriscel tied every lead back to its ad. In 6 months, our cost per lead dropped 62%.",
  name: "Priya Menon",
  role: "Marketing Head, Krishna Overseas",
  industry: "Export",
  result: "62% lower cost per lead",
  avatar: "PM"
}, {
  quote: "Hiring for our expansion was breaking us. Kriscel's recruitment engine screened 800+ resumes, shortlisted 12, and we hired 8 within 5 weeks.",
  name: "Sandeep Rao",
  role: "COO, Om Resources",
  industry: "Services",
  result: "5-week hiring cycle",
  avatar: "SR"
}, {
  quote: "Our GST reconciliation used to take 3 days every month. Now it's 20 minutes. That alone justified the entire investment in Kriscel.",
  name: "Meera Shah",
  role: "Finance Director, Chukde",
  industry: "FMCG",
  result: "3 days → 20 minutes",
  avatar: "MS"
}, {
  quote: "The team didn't sell me software. They sat with us for a week, understood the mess, and rebuilt our operations properly. That's rare.",
  name: "Vikram Malhotra",
  role: "Founder, Malvika Pride India",
  industry: "Retail",
  result: "Full ops transformation",
  avatar: "VM"
}];

// End-to-End Growth Cycle from kriscel.com
const workflowSteps = [{
  step: "01",
  title: "Web Presence",
  desc: "A fast, conversion-focused website or store — the foundation of every growth journey."
}, {
  step: "02",
  title: "SEO & Content",
  desc: "Rank for what your buyers search. Content clusters, technical SEO and topical authority."
}, {
  step: "03",
  title: "Paid Ads (PPC)",
  desc: "Google, Meta, LinkedIn campaigns tied to your CRM. Every rupee traceable to revenue."
}, {
  step: "04",
  title: "E-commerce Scaling",
  desc: "Optimize checkout, retention, WhatsApp commerce and repeat-order flows."
}, {
  step: "05",
  title: "Full Automation",
  desc: "Once growth kicks in, we automate ops so scaling doesn't multiply chaos."
}];

// Realistic team
const teamMembers = [{
  name: "Sunny Jaijaniya",
  role: "Founder & CEO",
  bio: "Business Automation Strategist • SaaS & Digital Transformation Expert • 12+ Years Experience",
  avatar: "SJ"
}, {
  name: "Nandlal Gupta",
  role: "Director – Digital Marketing",
  bio: "Digital Growth Strategist • SEO & Performance Marketing Expert • 12+ Years Experience",
  avatar: "NG"
}];

// Values — reflecting "no shortcuts, no fake promises"
const values = [{
  icon: "Handshake",
  title: "No fake promises",
  desc: "If we can't do it well, we say so. If we can, we sign an SLA on it."
}, {
  icon: "Target",
  title: "Outcome over output",
  desc: "We measure success in your KPIs — leads, orders, margins — not our billable hours."
}, {
  icon: "Zap",
  title: "Speed with substance",
  desc: "MVPs in weeks, not months. But engineered right, so they last decades."
}, {
  icon: "HeartHandshake",
  title: "Long-term partnership",
  desc: "We're not a one-shot vendor. 78% of our clients have been with us 3+ years."
}];

// Honest, useful FAQs
const faqs = [{
  q: "How long does a typical automation project take?",
  a: "It depends on scope. A single module (say Inventory or HR) goes live in 4-6 weeks. A full end-to-end business system takes 3-5 months. We share weekly milestones so you always know where things stand."
}, {
  q: "Do you replace our existing Tally / Zoho / accounting software?",
  a: "No. We integrate with them. Your CA keeps using Tally. Your team stops double-entry. Data flows both ways automatically."
}, {
  q: "What tech stack do you use?",
  a: "Our core stack is Next.js, React, Node.js, MongoDB and AWS. For automation we use n8n, Zapier and custom APIs. For marketing analytics — GA4, Mixpanel and Meta Conversion API."
}, {
  q: "Do you offer post-launch support?",
  a: "Yes. Every project includes 3 months of free support. After that, we offer AMC plans starting ₹15,000/month with defined SLAs and a dedicated success manager."
}, {
  q: "Can I own the code and host it myself?",
  a: "Absolutely. Every custom build ships with full source code, documentation and deployment scripts. No vendor lock-in — you own everything."
}, {
  q: "How is pricing decided?",
  a: "Fixed price for defined scope. We do a 2-day paid discovery, share a detailed proposal with milestones, and only then start building. No surprises later."
}];

// Industries from kriscel.com
const industries = [{
  name: "Retail & Commerce",
  icon: "ShoppingBag",
  note: "Neighborhood stores to global e-commerce."
}, {
  name: "Manufacturing & Industrial",
  icon: "Factory",
  note: "Smart automation for local factories."
}, {
  name: "Tech & SaaS",
  icon: "Cpu",
  note: "Software for the next billion users."
}, {
  name: "Health & Pharma",
  icon: "Stethoscope",
  note: "Digital health made accessible."
}, {
  name: "Banking & Fintech",
  icon: "Landmark",
  note: "Secure, scalable financial tech."
}, {
  name: "Services & Consulting",
  icon: "Briefcase",
  note: "Operations for people-first businesses."
}];

// Full services list from kriscel.com — split into 2 categories

const managementSystems = [{
  slug: "inventory-management-system",
  title: "Inventory Management",
  icon: "Boxes",
  desc: "Eliminate stockouts and overstock. Track every item across warehouses in real-time.",
  features: ["Real-time Stock Tracking", "Barcode Scanning", "Multi-warehouse Support"]
}, {
  slug: "employee-task-management-system",
  title: "Employee Task Management",
  icon: "ListChecks",
  desc: "Assign tasks, track progress, and boost transparency across your workforce.",
  features: ["Task & Deadline Assignment", "Progress Boards", "Team Chat"]
}, {
  slug: "production-management-system",
  title: "Production Management",
  icon: "Factory",
  desc: "Streamline manufacturing from raw materials to finished goods.",
  features: ["BOM Management", "Shop Floor Tracking", "Quality Control"]
}, {
  slug: "account-management-system",
  title: "Account Management",
  icon: "Wallet",
  desc: "Keep finances clean with robust invoicing and compliance-ready accounting.",
  features: ["Invoicing & Billing", "Expense Tracking", "Financial Reports"]
}, {
  slug: "hr-management-system",
  title: "HR Management",
  icon: "UsersRound",
  desc: "Digitize HR — from onboarding to payroll to appraisals.",
  features: ["Employee Records", "Payroll Automation", "Leave Management"]
}, {
  slug: "purchase-management-system",
  title: "Purchase Management",
  icon: "ShoppingCart",
  desc: "Automated POs, vendor management and spend analytics.",
  features: ["PO Automation", "Vendor Management", "Budget Tracking"]
}];
const growthServices = [{
  slug: "ecommerce-solutions",
  title: "E-commerce Solutions",
  icon: "Store",
  desc: "Custom storefronts and marketplace integrations that convert.",
  features: ["Custom Storefronts", "Payment Gateway", "Inventory Sync"]
}, {
  slug: "indiamart-account-management",
  title: "IndiaMART Management",
  icon: "Building2",
  desc: "Maximize leads on India's largest B2B marketplace.",
  features: ["Listing Optimization", "Lead Response", "Keyword Research"]
}, {
  slug: "search-engine-optimization",
  title: "SEO (Search Engine Optimization)",
  icon: "Search",
  desc: "Rank on Google, Bing & Yahoo with proven strategies.",
  features: ["Technical SEO Audit", "On-page Optimization", "Backlink Strategy"]
}, {
  slug: "online-reputation-management",
  title: "Online Reputation Management",
  icon: "ShieldCheck",
  desc: "Monitor, protect and enhance your brand's digital narrative.",
  features: ["Review Management", "Sentiment Analysis", "Crisis Handling"]
}, {
  slug: "paid-ads-management",
  title: "Paid Ads (PPC)",
  icon: "MousePointerClick",
  desc: "High-ROI Google Ads and social media campaigns.",
  features: ["Google Ads", "Social Ads", "Retargeting"]
}, {
  slug: "social-media-optimization",
  title: "Social Media Optimization",
  icon: "Share2",
  desc: "Grow followers, engagement and reach across every platform.",
  features: ["Strategy Planning", "Content Calendar", "Audience Growth"]
}, {
  slug: "content-marketing",
  title: "Content Marketing",
  icon: "PenLine",
  desc: "Blogs, videos, whitepapers and infographics that convert readers.",
  features: ["Blog & Articles", "Video Strategy", "Infographic Design"]
}, {
  slug: "gmb-creation",
  title: "GMB Creation & Optimization",
  icon: "MapPin",
  desc: "Dominate local search with optimized Google Business Profile.",
  features: ["Profile Setup", "Photo Optimization", "Review Generation"]
}, {
  slug: "web-development",
  title: "Web App Development",
  icon: "Code2",
  desc: "Custom dashboards, portals and SaaS platforms built to scale.",
  features: ["Custom Web Apps", "API Development", "Database Design"]
}, {
  slug: "web-designing",
  title: "Web Designing",
  icon: "Palette",
  desc: "Premium responsive design that captivates and converts.",
  features: ["UI/UX Design", "Responsive Layouts", "Brand Integration"]
}, {
  slug: "catalog-management",
  title: "Catalog Management",
  icon: "PackageOpen",
  desc: "Organized product catalogs that drive conversions across channels.",
  features: ["Product Data Mgmt", "Image Optimization", "Category Structure"]
}, {
  slug: "ads-campaign-management",
  title: "ADS Campaign Management",
  icon: "Target",
  desc: "End-to-end campaign management with data-driven optimization.",
  features: ["Campaign Strategy", "Budget Optimization", "Audience Targeting"]
}, {
  slug: "recruitment",
  title: "Recruitment Services",
  icon: "UserSearch",
  desc: "Source, screen and onboard the top 1% talent for your team.",
  features: ["Requirement Analysis", "Candidate Sourcing", "Skill Assessments"]
}, {
  slug: "account-creation",
  title: "Marketplace Account Creation",
  icon: "UserPlus",
  desc: "Seamless setup on Amazon, Flipkart and other marketplaces.",
  features: ["Platform Registration", "Profile Setup", "Compliance"]
}];

// Marketplace / platform badges
const platforms = ["Amazon", "Flipkart", "LinkedIn", "Meta", "Google Ads", "Instagram", "Reddit", "YouTube", "IndiaMART", "Shopify"];

// Portfolio / case studies
const portfolio = [{
  client: "Kalinga Premium",
  industry: "Manufacturing",
  challenge: "40+ Excel sheets, no real-time visibility, factory downtime unnoticed for hours.",
  solution: "Deployed Production + Inventory + Account modules with live MIS dashboard.",
  result: "70% less ops overhead · 24% higher OEE · Weekend firefighting eliminated.",
  tags: ["Production", "Inventory", "MIS"]
}, {
  client: "Krishna Overseas",
  industry: "Export & Trading",
  challenge: "₹4L monthly ad spend with unclear ROI. Leads not tracked back to source.",
  solution: "Attribution-first PPC + CRM integration + custom landing page CRO.",
  result: "62% lower cost per lead · 3.4x pipeline value · Full source-to-sale visibility.",
  tags: ["PPC", "SEO", "CRO"]
}, {
  client: "Om Resources",
  industry: "HR Services",
  challenge: "5+ weeks average hiring cycle. Recruiters buried in 800+ resumes per role.",
  solution: "AI-powered ATS with auto-screening + scheduling + candidate pipeline.",
  result: "5-week cycle → 12 days · 8 hires in 5 weeks · Zero recruiter burnout.",
  tags: ["Recruitment", "ATS", "Automation"]
}, {
  client: "Chukde",
  industry: "FMCG",
  challenge: "GST reconciliation ate 3 full days every month. Errors caused compliance notices.",
  solution: "Account Management System with two-way Tally sync and auto-GST filing.",
  result: "3 days → 20 minutes · Zero GST notices · CA fees reduced 35%.",
  tags: ["Accounts", "GST", "Tally"]
}, {
  client: "Malvika Pride India",
  industry: "Retail Chain",
  challenge: "12 outlets, no unified inventory view. Stock imbalances across stores.",
  solution: "Multi-location Inventory + POS integration + auto-reorder engine.",
  result: "Zero stockouts in 6 months · 18% lower dead stock · Full store transparency.",
  tags: ["Inventory", "Retail", "POS"]
}, {
  client: "Safecord",
  industry: "Industrial Cable",
  challenge: "IndiaMART leads were coming but conversion was under 4%.",
  solution: "IndiaMART account overhaul + response automation + WhatsApp integration.",
  result: "4% → 14% conversion · 3.5x qualified leads · Response time under 2 min.",
  tags: ["IndiaMART", "B2B", "Lead Ops"]
}];

// Personas
const personas = [{
  n: "01",
  role: "Executive Leadership",
  desc: "Bird's-eye view with real-time analytics and strategic insights.",
  tags: ["Global Dashboards", "ROI Tracking", "Risk Assessment"]
}, {
  n: "02",
  role: "Sales & Marketing",
  desc: "Optimize your funnel with automated lead management and PPC intelligence.",
  tags: ["Lead Scoring", "Campaign Tracking", "Auto Follow-ups"]
}, {
  n: "03",
  role: "Operations & Supply",
  desc: "Streamline shop floor and warehouse with intelligent inventory tracking.",
  tags: ["Inventory Accuracy", "Quality Control", "Production Planning"]
}, {
  n: "04",
  role: "IT & Infrastructure",
  desc: "Build a future-ready digital core with scalable cloud foundations.",
  tags: ["API Modernization", "Cloud Scalability", "Enterprise Security"]
}];

// Common "Why Kriscel" reasons — shown on all detail pages
const whyKriscel = [{
  icon: "Database",
  title: "Data-Driven Approach",
  desc: "Every automation and campaign is backed by real data — measurable outcomes, not opinions."
}, {
  icon: "Sparkles",
  title: "AI-Powered Optimization",
  desc: "Our systems identify bottlenecks, suggest fixes and continuously improve — even after we're done building."
}, {
  icon: "Eye",
  title: "Transparent Reporting",
  desc: "Real-time dashboards, sync logs and performance metrics. You always know what's happening."
}, {
  icon: "MousePointerClick",
  title: "Conversion-Optimized",
  desc: "Whether it's a workflow or a landing page, we design for outcomes — leads, orders, closures."
}, {
  icon: "Headphones",
  title: "Dedicated Support",
  desc: "A named success manager. Priority chat, email and WhatsApp response. No ticket-black-holes."
}, {
  icon: "Plug",
  title: "Seamless Integrations",
  desc: "Works with Tally, SAP, Zoho, HubSpot, Google Sheets, marketplaces — we don't force rip-and-replace."
}];

// Detail-page shared FAQs (short version, service-agnostic)
const detailFaqs = [{
  q: "How long does implementation take?",
  a: "For a single module or service engagement, 3-6 weeks from kick-off to go-live. For platform-level projects, 2-4 months with weekly demos."
}, {
  q: "Do we need an IT team on our side?",
  a: "No. We handle the entire technical delivery. Your team just needs a project owner (usually the department head) who can share requirements and validate demos."
}, {
  q: "What if my requirements change midway?",
  a: "Minor changes in the first 2 weeks are free. After that, we discuss impact honestly — timeline, cost or trade-offs. No hidden change-request games."
}, {
  q: "Will it integrate with our existing tools?",
  a: "Very likely yes. Tally, Zoho, SAP, HubSpot, Google Workspace, marketplaces, WhatsApp Business API — we've integrated with almost every major platform."
}, {
  q: "What kind of support do you offer post-launch?",
  a: "3 months of free support included. After that, AMC plans start ₹15,000/month with a named success manager and defined SLAs."
}];

export {
  companyInfo,
  stats,
  trustLogos,
  features,
  services,
  products,
  detailFaqs,
  faqs,
  growthServices,
  industries,
  managementSystems,
  personas,
  platforms,
  portfolio,
  teamMembers,
  testimonials,
  values,
  whyKriscel,
  workflowSteps
};

export default {
  companyInfo,
  stats,
  trustLogos,
  features,
  services,
  products,
  detailFaqs,
  faqs,
  growthServices,
  industries,
  managementSystems,
  personas,
  platforms,
  portfolio,
  teamMembers,
  testimonials,
  values,
  whyKriscel,
  workflowSteps
};
