
import React, { useState, useEffect, useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";



const SITE_URL = "https://kriscel.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-cover.jpg`;
const SEO = ({
  title,
  description,
  keywords,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  schema = null
}) => {
  const fullTitle = title ? `${title} | Kriscel Tech` : "Kriscel Tech — Business Automation & Digital Growth Partner in Delhi NCR";
  const desc = description || "Kriscel Tech helps growing businesses move from spreadsheets and WhatsApp chaos to fully automated operations. Custom ERP, digital marketing, SEO, PPC and recruitment — built by operators in Delhi NCR.";
  const url = `${SITE_URL}${path}`;
  return /*#__PURE__*/<Helmet>{/*#__PURE__*/<title>{fullTitle}</title>}{/*#__PURE__*/<meta name="description" content={desc} />}{keywords && /*#__PURE__*/<meta name="keywords" content={keywords} />}{/*#__PURE__*/<link rel="canonical" href={url} />}{/*#__PURE__*/<meta property="og:type" content={type} />}{/*#__PURE__*/<meta property="og:title" content={fullTitle} />}{/*#__PURE__*/<meta property="og:description" content={desc} />}{/*#__PURE__*/<meta property="og:url" content={url} />}{/*#__PURE__*/<meta property="og:image" content={image} />}{/*#__PURE__*/<meta property="og:site_name" content="Kriscel Tech" />}{/*#__PURE__*/<meta property="og:locale" content="en_IN" />}{/*#__PURE__*/<meta name="twitter:card" content="summary_large_image" />}{/*#__PURE__*/<meta name="twitter:title" content={fullTitle} />}{/*#__PURE__*/<meta name="twitter:description" content={desc} />}{/*#__PURE__*/<meta name="twitter:image" content={image} />}{/*#__PURE__*/<meta name="robots" content="index, follow, max-image-preview:large" />}{/*#__PURE__*/<meta name="language" content="English" />}{/*#__PURE__*/<meta name="geo.region" content="IN-DL" />}{/*#__PURE__*/<meta name="geo.placename" content="New Delhi" />}{/*#__PURE__*/<meta name="geo.position" content="28.6139;77.2090" />}{schema && /*#__PURE__*/<script type="application/ld+json">{JSON.stringify(schema)}</script>}</Helmet>;
};

// Common Organization schema

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kriscel Tech",
  legalName: "Kriscel Tech Pvt. Ltd.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: "Business automation, digital marketing and recruitment solutions for growing Indian enterprises.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "229, Bharthal, Sector 26, Dwarka",
    addressLocality: "South West Delhi",
    addressRegion: "Delhi",
    postalCode: "110077",
    addressCountry: "IN"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-89854-19420",
    contactType: "customer service",
    email: "Info@kriscel.com",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"]
  },
  sameAs: ["https://in.linkedin.com/company/kriscel-tech-pvt-ltd", "https://www.instagram.com/krisceltech/", "https://www.facebook.com/KriscelTech/", "https://www.youtube.com/@krisceltech/"]
};
/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = SEO;

export default __WEBPACK_DEFAULT_EXPORT__;