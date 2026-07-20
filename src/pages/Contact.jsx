import { CircleCheck, Calendar, Mail, MapPin, MessageCircle, Send, Loader2 } from "lucide-react";
import React, { useState } from "react";
import Button from "../components/ui/button.jsx";
import Input from "../components/ui/input.jsx";
import Textarea from "../components/ui/textarea.jsx";
import Label from "../components/ui/label.jsx";
import Card from "../components/ui/card.jsx";
import Badge from "../components/ui/badge.jsx";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../components/ui/select.jsx";
import { toast } from "../hooks/use-toast";
import mock from "../mock";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (k, v) => setForm(f => ({
    ...f,
    [k]: v
  }));

  const validateForm = () => {
    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const trimmedPhone = form.phone.trim();
    const trimmedMessage = form.message.trim();

    if (!trimmedName) {
      toast({ title: "Validation Error", description: "Name cannot be empty." });
      return null;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      toast({ title: "Validation Error", description: "Please enter a valid email address." });
      return null;
    }

    const phoneRegex = /^\+?[0-9\s\-()]{7,15}$/;
    if (trimmedPhone && !phoneRegex.test(trimmedPhone)) {
      toast({ title: "Validation Error", description: "Please enter a valid phone number (digits only)." });
      return null;
    }

    if (!trimmedMessage) {
      toast({ title: "Validation Error", description: "Message cannot be empty." });
      return null;
    }

    return {
      name: trimmedName,
      email: trimmedEmail,
      phone: trimmedPhone,
      company: form.company.trim(),
      interest: form.interest,
      message: trimmedMessage
    };
  };

  const submitToGoogleSheets = async (payload, isRetry = false) => {
    const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      toast({
        title: "Integration Error",
        description: "Google Sheets script URL is not configured. Please check your .env file."
      });
      return false;
    }

    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.status === "success";
    } catch (error) {
      if (!isRetry) {
        return await submitToGoogleSheets(payload, true);
      }
      return false;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    
    if (!navigator.onLine) {
      toast({ title: "Network Error", description: "Internet is disconnected. Please check your connection." });
      return;
    }

    const validatedData = validateForm();
    if (!validatedData) return;

    setSubmitting(true);

    const now = new Date();
    const payload = {
      ...validatedData,
      timestamp: now.toISOString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"
    };

    const success = await submitToGoogleSheets(payload);
    setSubmitting(false);

    if (success) {
      setSubmitted(true);
      toast({
        title: "Message sent!",
        description: "Thank you! Your message has been submitted successfully."
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        interest: "",
        message: ""
      });
      setTimeout(() => setSubmitted(false), 4000);
    } else {
      toast({
        title: "Submission Failed",
        description: "Google Sheets is currently unavailable. Please try again later."
      });
    }
  };

  return (
    <div>
      <section className="relative hero-bg overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-70" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24 text-center">
          <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100 border-0 rounded-full px-3 py-1 text-xs font-medium mb-5">Contact Us</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
            Let's start your <span className="gradient-text">AI journey</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Book a free consultation. We'll show you exactly how Kriscel Tech can transform your business.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-5 gap-8">
          <Card className="lg:col-span-3 p-8 md:p-10 rounded-3xl border border-slate-100 card-shadow bg-white">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Send us a message</h2>
            <p className="text-sm text-slate-600 mt-1">We respond within 24 business hours.</p>
            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-semibold text-slate-700">Full name *</Label>
                  <Input id="name" value={form.name} onChange={e => handleChange("name", e.target.value)} placeholder="John Doe" className="mt-1.5 h-11 rounded-lg border-slate-200 focus:border-sky-500" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-slate-700">Work email *</Label>
                  <Input id="email" type="email" value={form.email} onChange={e => handleChange("email", e.target.value)} placeholder="john@company.com" className="mt-1.5 h-11 rounded-lg border-slate-200 focus:border-sky-500" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone</Label>
                  <Input id="phone" value={form.phone} onChange={e => handleChange("phone", e.target.value)} placeholder="+91 98765 43210" className="mt-1.5 h-11 rounded-lg border-slate-200 focus:border-sky-500" />
                </div>
                <div>
                  <Label htmlFor="company" className="text-sm font-semibold text-slate-700">Company</Label>
                  <Input id="company" value={form.company} onChange={e => handleChange("company", e.target.value)} placeholder="Acme Inc." className="mt-1.5 h-11 rounded-lg border-slate-200 focus:border-sky-500" />
                </div>
              </div>
              <div>
                <Label className="text-sm font-semibold text-slate-700">I'm interested in</Label>
                <Select value={form.interest} onValueChange={v => handleChange("interest", v)}>
                  <SelectTrigger className="mt-1.5 h-11 rounded-lg border-slate-200">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consulting">AI Business Consulting</SelectItem>
                    <SelectItem value="erp">ERP Implementation</SelectItem>
                    <SelectItem value="automation">Workflow Automation</SelectItem>
                    <SelectItem value="analytics">Data & Analytics</SelectItem>
                    <SelectItem value="cloud">Cloud Migration</SelectItem>
                    <SelectItem value="training">AI Team Training</SelectItem>
                    <SelectItem value="other">Something else</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="message" className="text-sm font-semibold text-slate-700">Tell us more *</Label>
                <Textarea id="message" value={form.message} onChange={e => handleChange("message", e.target.value)} placeholder="Share your business challenge, current tools, team size..." rows={5} className="mt-1.5 rounded-lg border-slate-200 focus:border-sky-500" />
              </div>
              <Button type="submit" disabled={submitting || submitted} className={`w-full h-12 rounded-full font-semibold text-sm transition-colors ${submitted ? "bg-emerald-600 hover:bg-emerald-600 text-white" : "bg-slate-900 hover:bg-slate-800 text-white"}`}>
                {submitted ? (
                  <>
                    <CircleCheck className="mr-2 h-4 w-4" /> Message Sent
                  </>
                ) : submitting ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                  </span>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          <div className="lg:col-span-2 space-y-4">
            <Card className="p-6 rounded-2xl border border-slate-100 card-shadow bg-white">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center mb-4 shadow-md">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Email us</h3>
              <p className="text-sm text-slate-600 mt-1">We reply within 24 hours.</p>
              <a href={`mailto:${mock.companyInfo.email}`} className="text-sm font-semibold text-sky-600 mt-2 inline-block">{mock.companyInfo.email}</a>
            </Card>

            <Card className="p-6 rounded-2xl border border-slate-100 card-shadow bg-white">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 grid place-items-center mb-4 shadow-md">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">WhatsApp</h3>
              <p className="text-sm text-slate-600 mt-1">Chat with us instantly.</p>
              <a href={`https://wa.me/${mock.companyInfo.phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-emerald-600 mt-2 inline-block">{mock.companyInfo.phone}</a>
            </Card>

            <Card className="p-6 rounded-2xl border border-slate-100 card-shadow bg-white">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 grid place-items-center mb-4 shadow-md">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Visit us</h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">{mock.companyInfo.address}</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="rounded-3xl overflow-hidden border border-slate-100 h-80 bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100 grid-bg grid place-items-center">
            <div className="text-center">
              <div className="h-14 w-14 mx-auto rounded-2xl bg-gradient-to-br from-sky-505 to-blue-600 grid place-items-center shadow-lg mb-3 animate-float" style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)" }}>
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Kriscel Tech HQ</p>
              <p className="text-sm text-slate-500">Bharthal, Dwarka · New Delhi</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;