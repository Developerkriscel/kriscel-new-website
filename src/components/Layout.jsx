
import React, { useState, useEffect, useRef } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import WhatsAppButton from "./WhatsAppButton.jsx";



const Layout = ({
  children
}) => {
  return /*#__PURE__*/<div className="min-h-screen flex flex-col bg-white text-slate-900" style={{
    fontFamily: "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif"
  }}>{/*#__PURE__*/<Header />}{/*#__PURE__*/<main className="flex-1">{children}</main>}{/*#__PURE__*/<Footer />}{/*#__PURE__*/<WhatsAppButton />}</div>;
};

/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = Layout;

export default __WEBPACK_DEFAULT_EXPORT__;