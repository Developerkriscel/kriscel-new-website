import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Shield, Mail, Globe, Clock, FileText, ChevronRight, ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO.jsx";
import Badge from "../components/ui/badge.jsx";

const personalInfo = [
  "Full name, email address, phone number, and company name",
  "Billing details, including address and credit/debit card information",
  "Business requirements and project-related information",
  "Communication history, including emails, calls, and chat records",
  "Website usage data, including IP address, browser type, and pages visited",
];

const automaticInfo = [
  "Data collected through cookies and tracking technologies",
  "Log files, including IP address, access times, and referring URLs",
  "Device information, including operating system and browser version",
  "Analytics data through Google Analytics or similar tools",
];

const uses = [
  "Providing and managing the services you have requested",
  "Creating and maintaining client accounts",
  "Processing invoices, payments, and receipts",
  "Providing customer support and resolving queries",
  "Sending marketing campaigns, newsletters, and promotional emails, with opt-out available",
  "Improving website performance and enhancing user experience",
  "Complying with legal obligations and resolving disputes",
  "Fraud prevention and security monitoring",
];

const securityMeasures = [
  "SSL/TLS encryption for all data transmissions",
  "Secure servers and firewalls",
  "Regular security audits and vulnerability assessments",
  "Employee training on data privacy best practices",
  "Access controls ensuring only authorised personnel can access your data",
];

const cookieUses = [
  "Session management, including maintaining your logged-in state",
  "Remembering your preferences, such as language and settings",
  "Analytics, including tracking website traffic and usage patterns",
  "Marketing, including displaying relevant advertisements",
];

const retentionRules = [
  "Your services remain active or your account exists",
  "Retention is required to fulfil legal obligations",
  "Retention is necessary to resolve disputes",
];

const rights = [
  "Access: the right to know what information we hold about you",
  "Correction: the right to have inaccurate information updated",
  "Deletion: the right to request deletion of your information",
  "Portability: the right to export your data",
  "Objection: the right to object to certain uses of your data",
  "Marketing opt-out: the right to unsubscribe from promotional communications",
];

function BulletList({ items }) {
  return (
    <ul className="list-disc pl-6 space-y-2.5 my-4 text-slate-600 dark:text-slate-400">
      {items.map((item, idx) => (
        <li key={idx} className="leading-relaxed">{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: "section-1", title: "1. Information We Collect" },
    { id: "section-2", title: "2. How We Use Your Information" },
    { id: "section-3", title: "3. Sharing of Information" },
    { id: "section-4", title: "4. Data Security" },
    { id: "section-5", title: "5. Cookies Policy" },
    { id: "section-6", title: "6. Data Retention" },
    { id: "section-7", title: "7. Your Rights" },
    { id: "section-8", title: "8. Third-Party Links" },
    { id: "section-9", title: "9. Children's Privacy" },
    { id: "section-10", title: "10. Changes to This Policy" },
    { id: "section-11", title: "11. Contact Information" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Update reading progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // ScrollSpy
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 160) {
            current = section.id;
          }
        }
      }
      setActiveSection(current || sections[0].id);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <SEO
        title="Privacy Policy | Kriscel Tech Pvt. Ltd."
        description="Privacy Policy for Kriscel Tech Pvt. Ltd. covering information collection, use, sharing, cookies, security, retention, and user rights."
        path="/privacy-policy"
      />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-100 dark:bg-slate-900 z-50">
        <div
          className="h-full bg-gradient-to-r from-sky-500 to-blue-600 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-sky-100/40 via-transparent to-transparent dark:from-sky-900/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
            <Link to="/" className="hover:text-sky-500 transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-slate-400 dark:text-slate-500">Legal</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-slate-950 dark:text-slate-200 font-medium">Privacy Policy</span>
          </nav>

          <Badge className="bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 hover:bg-sky-100/50 dark:hover:bg-sky-950/70 border-sky-100 dark:border-sky-900/30 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase mb-4">
            Kriscel Tech Pvt. Ltd.
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <Clock className="h-4 w-4 text-sky-500" />
            <span>Effective Date: May 2025</span>
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Desktop Sidebar (Table of Contents) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-28 self-start">
            <div className="border border-slate-200/60 dark:border-slate-800/60 rounded-2xl bg-white dark:bg-slate-900/50 p-6 shadow-sm">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                <FileText className="h-4 w-4 text-sky-500" />
                <span>On This Page</span>
              </h2>
              <ul className="space-y-3 text-sm">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`text-left w-full transition-all duration-200 ${
                        activeSection === section.id
                          ? "text-sky-500 font-semibold translate-x-1"
                          : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Reading Layout Content */}
          <main className="lg:col-span-9 max-w-4xl w-full">
            <div className="prose prose-slate dark:prose-invert max-w-none bg-white dark:bg-slate-900/30 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl p-6 md:p-10 shadow-sm space-y-12">
              
              <section className="space-y-4">
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  Kriscel Tech Pvt. Ltd. (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or
                  &quot;our&quot;) is an IT services company providing Business Development and
                  Digital Marketing solutions. This Privacy Policy explains how we collect,
                  use, disclose, and protect your personal information when you visit our
                  website (www.kriscel.com) or use our services.
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  Please read this policy carefully. By accessing our website or using our
                  services, you consent to the terms of this Privacy Policy.
                </p>
              </section>

              {/* Section 1 */}
              <section id="section-1" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  1. Information We Collect
                </h2>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    1.1 Personal Information
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    We may collect the following personal information:
                  </p>
                  <BulletList items={personalInfo} />
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    1.2 Automatically Collected Information
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    When you visit our website, we automatically collect:
                  </p>
                  <BulletList items={automaticInfo} />
                </div>
              </section>

              {/* Section 2 */}
              <section id="section-2" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  2. How We Use Your Information
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  We use the collected information for the following purposes:
                </p>
                <BulletList items={uses} />
              </section>

              {/* Section 3 */}
              <section id="section-3" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  3. Sharing of Information
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  We may share your personal information with the following parties:
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    3.1 Service Providers
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Trusted third-party vendors who operate on our behalf, including payment
                    processors, cloud hosting providers, email service providers, and analytics
                    companies. These vendors are permitted to use your information only as
                    instructed by us.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    3.2 Business Partners
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Relevant partners involved in digital marketing campaigns or business
                    development projects, only with your prior consent.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    3.3 Legal Requirements
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    When required by law, such as in response to court orders, requests from
                    government agencies, or during legal proceedings.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    3.4 Business Transfers
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    In the event of a company merger, acquisition, or asset sale, your
                    information may be transferred. You will be given advance notice in such
                    cases.
                  </p>
                </div>

                <p className="font-semibold text-slate-900 dark:text-white leading-relaxed pt-2">
                  We will never sell, rent, or trade your personal information to third
                  parties for commercial purposes.
                </p>
              </section>

              {/* Section 4 */}
              <section id="section-4" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  4. Data Security
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  We implement industry-standard security measures to protect your
                  information, including:
                </p>
                <BulletList items={securityMeasures} />
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Please note that no transmission over the internet is 100% secure. While
                  we take reasonable precautions, we cannot guarantee absolute security.
                </p>
              </section>

              {/* Section 5 */}
              <section id="section-5" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  5. Cookies Policy
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Our website uses cookies, which are small text files stored in your
                  browser. Cookies are used for:
                </p>
                <BulletList items={cookieUses} />
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  You may disable cookies through your browser settings; however, this may
                  affect certain website features.
                </p>
              </section>

              {/* Section 6 */}
              <section id="section-6" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  6. Data Retention
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  We retain your personal information for as long as:
                </p>
                <BulletList items={retentionRules} />
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  After account closure, we retain basic records for 3 years for legal
                  compliance purposes, after which the data is permanently deleted.
                </p>
              </section>

              {/* Section 7 */}
              <section id="section-7" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  7. Your Rights
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  You have the following rights regarding your personal information:
                </p>
                <BulletList items={rights} />
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  To exercise any of these rights, please contact us at{" "}
                  <a href="mailto:legal@kriscel.com" className="text-sky-500 font-semibold hover:underline">
                    legal@kriscel.com
                  </a>
                  .
                </p>
              </section>

              {/* Section 8 */}
              <section id="section-8" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  8. Third-Party Links
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Our website may contain links to third-party websites. We are not
                  responsible for the privacy practices of those websites. We recommend that
                  you review their privacy policies separately.
                </p>
              </section>

              {/* Section 9 */}
              <section id="section-9" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  9. Children&apos;s Privacy
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do
                  not knowingly collect personal information from minors. If you believe we
                  have collected such information, please contact us immediately.
                </p>
              </section>

              {/* Section 10 */}
              <section id="section-10" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  10. Changes to This Policy
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  We may update this Privacy Policy from time to time. Changes will take
                  effect upon posting to our website. For material changes, we will notify
                  you via email or a prominent website notice. Continued use of our services
                  implies acceptance of the updated policy.
                </p>
              </section>

              {/* Section 11 */}
              <section id="section-11" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <div className="rounded-2xl border border-sky-100 dark:border-sky-950/40 bg-sky-50/50 dark:bg-sky-950/10 p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    11. Contact Information
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    For any questions, concerns, or requests related to this Privacy Policy,
                    please contact us:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 dark:text-slate-300">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center text-sky-600">
                          <Globe className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Company</p>
                          <p className="font-semibold text-slate-800 dark:text-slate-200">Kriscel Tech Pvt. Ltd.</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center text-sky-600">
                          <Globe className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Website</p>
                          <a href="http://www.kriscel.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-sky-500 hover:underline flex items-center gap-1">
                            www.kriscel.com <ArrowUpRight className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center text-sky-600">
                          <Mail className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Email</p>
                          <a href="mailto:legal@kriscel.com" className="font-semibold text-sky-500 hover:underline">
                            legal@kriscel.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center text-sky-600">
                          <Clock className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Response Time</p>
                          <p className="font-semibold text-slate-800 dark:text-slate-200">Within 7 business days</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
