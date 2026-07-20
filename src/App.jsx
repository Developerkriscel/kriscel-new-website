import React, { useEffect, Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Toaster from "./components/ui/toaster";
import ErrorBoundary from "./components/ErrorBoundary";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Products = lazy(() => import("./pages/Products"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const DetailPage = lazy(() => import("./pages/DetailPage"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <ErrorBoundary>
              <Suspense fallback={
                <div className="flex items-center justify-center min-h-[60vh]">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-sky-500 border-t-transparent" />
                </div>
              }>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<DetailPage type="service" />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:slug" element={<DetailPage type="product" />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
            </ErrorBoundary>
          </Layout>
          <Toaster />
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;