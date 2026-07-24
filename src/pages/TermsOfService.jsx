import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Shield, Mail, Globe, Clock, FileText, ChevronRight, ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO.jsx";
import Badge from "../components/ui/badge.jsx";

const services = [
  "Business Development: lead generation, market research, business strategy consulting, and partnership development",
  "Digital Marketing: SEO, social media marketing, content marketing, PPC advertising, email marketing, and analytics reporting",
  "Web & App Development: website design, development, and maintenance",
  "Brand Management: branding strategy, creative design, and reputation management",
  "Performance Marketing: ROI-driven campaigns and conversion rate optimisation",
];

const clientResponsibilities = [
  "Provide accurate and complete business information",
  "Provide required access, credentials, and assets in a timely manner, such as website login, social media accounts, and brand assets",
  "Provide feedback and approvals within the defined timelines",
  "Cooperate with the Company's team throughout the engagement",
  "Make agreed payments on time",
  "Comply with all applicable laws and regulations",
];

const paymentTerms = [
  "Service fees will be as defined in the SOW",
  "Invoices will be issued within the first 5 days of each month",
  "Payment is due within 15 days of the invoice date",
  "GST and other applicable taxes will be charged at prevailing rates",
];

const latePayment = [
  "A monthly interest of 2% will be charged on payments outstanding beyond 15 days",
  "Services may be temporarily suspended if payment remains outstanding for more than 30 days",
  "Services may be terminated if the outstanding balance remains unpaid for more than 60 days",
];

const refundPolicy = [
  "No refunds will be provided for completed work",
  "If the Company fails to deliver a service due to its own error, a proportional refund will be considered",
  "Refunds for prepaid but unused services will be issued on a pro-rata basis, after deduction of a 15% administrative fee",
];

const confidentiality = [
  "Business strategies, financial information, client lists, proprietary data, and trade secrets shall remain confidential",
  "Confidential information shall not be shared with third parties without prior written consent",
  "This obligation shall remain in effect for 3 years following the termination of services",
  "A separate Non-Disclosure Agreement (NDA) may be signed for additional confidentiality and non-disclosure protections",
];

const companyTermination = [
  "Payment default where outstanding balance remains unpaid for more than 60 days",
  "Material breach of these Terms by the Client",
  "Fraudulent, illegal, or unethical activities by the Client",
  "Force majeure events that prevent service delivery",
];

const liabilityLimits = [
  "The Company's total liability for any claim shall not exceed the total fees paid for the relevant project",
  "The Company shall not be liable for indirect, incidental, special, or consequential damages",
  "This includes, without limitation, loss of profits, loss of revenue, data loss, or reputational damage",
  "Digital marketing results, including ROI, rankings, and conversions, cannot be guaranteed; the Company will follow industry best practices",
];

const companyWarranties = [
  "Services will be delivered in a professional and workmanlike manner",
  "The Company holds all required licences and permissions to provide the services",
  "Delivered work will not infringe upon third-party intellectual property rights",
];

const disclaimers = [
  "Digital marketing outcomes, including search rankings, social reach, and conversion rates, are not guaranteed, as they are subject to the algorithms of third-party platforms such as Google and Meta",
  "Services are provided on an 'as is' basis; uninterrupted availability is not guaranteed",
];

const indemnification = [
  "Content, data, or materials provided by the Client",
  "The Client's breach of these Terms",
  "The Client's infringement of third-party intellectual property rights",
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

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: "section-1", title: "1. Services" },
    { id: "section-2", title: "2. Client Responsibilities" },
    { id: "section-3", title: "3. Payment Terms" },
    { id: "section-4", title: "4. Intellectual Property" },
    { id: "section-5", title: "5. Confidentiality" },
    { id: "section-6", title: "6. Term and Termination" },
    { id: "section-7", title: "7. Limitation of Liability" },
    { id: "section-8", title: "8. Warranties and Disclaimers" },
    { id: "section-9", title: "9. Dispute Resolution" },
    { id: "section-10", title: "10. Indemnification" },
    { id: "section-11", title: "11. Force Majeure" },
    { id: "section-12", title: "12. Modifications to Terms" },
    { id: "section-13", title: "13. Entire Agreement" },
    { id: "section-14", title: "14. Severability" },
    { id: "section-15", title: "15. Contact" }
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
        title="Terms & Conditions | Kriscel Tech Pvt. Ltd."
        description="Terms and Conditions for Kriscel Tech Pvt. Ltd. covering services, client responsibilities, payments, intellectual property, confidentiality, and dispute resolution."
        path="/terms-of-service"
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
            <span className="text-slate-950 dark:text-slate-200 font-medium">Terms &amp; Conditions</span>
          </nav>

          <Badge className="bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 hover:bg-sky-100/50 dark:hover:bg-sky-950/70 border-sky-100 dark:border-sky-900/30 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase mb-4">
            Kriscel Tech Pvt. Ltd.
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Terms &amp; Conditions
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
                  These Terms &amp; Conditions (&quot;Terms&quot;) constitute a legally binding
                  agreement between you (&quot;Client&quot;) and Kriscel Tech Pvt. Ltd.
                  (&quot;Company&quot;). By accessing or using our website or services, you
                  agree to be bound by these Terms.
                </p>
              </section>

              {/* Section 1 */}
              <section id="section-1" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  1. Services
                </h2>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    1.1 Services Provided
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Kriscel Tech Pvt. Ltd. provides the following services:
                  </p>
                  <BulletList items={services} />
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    1.2 Service Scope
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    The specific services, deliverables, timelines, and fees for each project
                    will be defined in a separate Service Agreement or Statement of Work
                    (SOW), which shall form part of these Terms.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="section-2" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  2. Client Responsibilities
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  To ensure smooth delivery of services, the Client agrees to:
                </p>
                <BulletList items={clientResponsibilities} />
              </section>

              {/* Section 3 */}
              <section id="section-3" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  3. Payment Terms
                </h2>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    3.1 Fees and Invoicing
                  </h3>
                  <BulletList items={paymentTerms} />
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    3.2 Late Payment
                  </h3>
                  <BulletList items={latePayment} />
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    3.3 Refund Policy
                  </h3>
                  <BulletList items={refundPolicy} />
                </div>
              </section>

              {/* Section 4 */}
              <section id="section-4" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  4. Intellectual Property
                </h2>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    4.1 Client&apos;s Intellectual Property
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Ownership of the Client&apos;s existing trademarks, logos, content, and
                    brand assets remains with the Client. The Client grants the Company a
                    licence to use these assets solely for the purpose of delivering the
                    agreed services.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    4.2 Developed Work
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Ownership of final deliverables, including websites, content, designs,
                    and campaigns, will be transferred to the Client only upon receipt of
                    full payment. Until then, all intellectual property rights remain with
                    the Company.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    4.3 Company&apos;s Intellectual Property
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    The Company&apos;s proprietary tools, frameworks, methodologies, and
                    processes are and shall remain the intellectual property of the Company.
                    The Client has no right to reproduce, distribute, or reverse engineer
                    these assets.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    4.4 Portfolio Rights
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    The Company reserves the right to showcase completed work in its
                    portfolio, case studies, and marketing materials, unless the Client has
                    objected in writing prior to publication.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="section-5" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  5. Confidentiality
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Both parties agree that:
                </p>
                <BulletList items={confidentiality} />
              </section>

              {/* Section 6 */}
              <section id="section-6" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  6. Term and Termination
                </h2>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    6.1 Agreement Term
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    This Agreement is effective for the period defined in the SOW, or until
                    terminated by either party.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    6.2 Termination by Client
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="leading-relaxed">The Client may terminate this Agreement by providing 30 days&apos; written notice.</li>
                    <li className="leading-relaxed">Payment for all work completed during the notice period remains due.</li>
                    <li className="leading-relaxed">Refunds for prepaid services will be issued after applicable administrative deductions.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    6.3 Termination by Company
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    The Company may terminate this Agreement under the following circumstances:
                  </p>
                  <BulletList items={companyTermination} />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    6.4 Effect of Termination
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Upon termination, the Client shall return all access credentials; the
                    Company shall hand over all paid deliverables; and confidentiality
                    obligations shall continue to apply.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section id="section-7" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  7. Limitation of Liability
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  To the maximum extent permitted by applicable law:
                </p>
                <BulletList items={liabilityLimits} />
              </section>

              {/* Section 8 */}
              <section id="section-8" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  8. Warranties and Disclaimers
                </h2>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    8.1 Company Warranties
                  </h3>
                  <BulletList items={companyWarranties} />
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    8.2 Disclaimers
                  </h3>
                  <BulletList items={disclaimers} />
                </div>
              </section>

              {/* Section 9 */}
              <section id="section-9" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  9. Dispute Resolution
                </h2>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    9.1 Amicable Resolution
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Both parties agree to attempt to resolve any dispute through good faith
                    negotiation for a period of 30 days before pursuing formal proceedings.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    9.2 Arbitration
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    If a dispute cannot be resolved through negotiation, it shall be referred
                    to arbitration in accordance with the Arbitration and Conciliation Act,
                    1996 (India).
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    9.3 Governing Law and Jurisdiction
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    These Terms are governed by the laws of India. The courts of Delhi shall
                    have exclusive jurisdiction over any disputes arising out of or in
                    connection with these Terms.
                  </p>
                </div>
              </section>

              {/* Section 10 */}
              <section id="section-10" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  10. Indemnification
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  The Client agrees to indemnify and hold harmless the Company against any
                  claims arising from:
                </p>
                <BulletList items={indemnification} />
              </section>

              {/* Section 11 */}
              <section id="section-11" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  11. Force Majeure
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  The Company shall not be held liable for any failure to perform its
                  obligations where such performance is prevented, restricted, or
                  interfered with by circumstances beyond its reasonable control, including
                  but not limited to natural disasters, war, government actions, cyber
                  attacks, pandemics, power failures, or internet outages.
                </p>
              </section>

              {/* Section 12 */}
              <section id="section-12" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  12. Modifications to Terms
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  The Company reserves the right to update these Terms at any time. For
                  material changes, 30 days&apos; advance notice will be provided. Continued
                  use of our services following such notice constitutes acceptance of the
                  updated Terms.
                </p>
              </section>

              {/* Section 13 */}
              <section id="section-13" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  13. Entire Agreement
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  These Terms, together with the Privacy Policy and any relevant SOW or
                  Service Agreements, constitute the entire agreement between the parties
                  and supersede all prior discussions, representations, or agreements.
                </p>
              </section>

              {/* Section 14 */}
              <section id="section-14" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  14. Severability
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  If any provision of these Terms is found to be invalid or unenforceable,
                  the remaining provisions shall continue in full force and effect.
                </p>
              </section>

              {/* Section 15 */}
              <section id="section-15" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                <div className="rounded-2xl border border-sky-100 dark:border-sky-950/40 bg-sky-50/50 dark:bg-sky-950/10 p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    15. Contact
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    For any questions regarding these Terms, please contact us:
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
