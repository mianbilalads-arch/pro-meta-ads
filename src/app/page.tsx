"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {
    const [formData, setFormData] = useState({
          name: "",
          email: "",
          website: "",
          budget: "",
          message: "",
    });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
                await emailjs.send(
                          "service_pro_meta_ads",
                          "template_lead_form",
                  {
                              from_name: formData.name,
                              from_email: formData.email,
                              website: formData.website,
                              budget: formData.budget,
                              message: formData.message,
                              to_email: "sultanofmultan786@gmail.com",
                  },
                          "YOUR_PUBLIC_KEY"
                        );
                setStatus("success");
                setFormData({ name: "", email: "", website: "", budget: "", message: "" });
                window.location.href = "/success";
        } catch (error) {
                console.error("EmailJS error:", error);
                setStatus("error");
        }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
        <div className="min-h-screen bg-slate-900 text-white">
          {/* Navigation */}
              <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-xl border-b border-slate-800">
                      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                                <div className="text-2xl font-bold tracking-tight">
                                            <span className="text-cyan-400">Pro</span>span>MetaAds
                                </div>div>
                                <div className="hidden md:flex gap-8 items-center">
                                            <a href="#services" className="text-slate-300 hover:text-cyan-400 transition-colors">Services</a>a>
                                            <a href="#process" className="text-slate-300 hover:text-cyan-400 transition-colors">Process</a>a>
                                            <a href="#results" className="text-slate-300 hover:text-cyan-400 transition-colors">Results</a>a>
                                            <a href="#contact" className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 rounded-lg font-semibold transition-colors">
                                                          Get Started
                                            </a>a>
                                </div>div>
                      </div>div>
              </nav>nav>
        
          {/* Hero Section */}
              <section className="relative pt-32 pb-24 px-6 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-slate-900 to-purple-950/30" />
                      <div className="absolute top-32 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
                      <div className="absolute bottom-32 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                      
                      <div className="max-w-4xl mx-auto relative text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-8">
                                            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                                            Meta Certified Partner Agency
                                </div>div>
                                
                                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                            Stop Wasting Ad Spend.
                                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                                                          Start Scaling Revenue.
                                            </span>span>
                                </h1>h1>
                                
                                <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                                            We manage Meta ad campaigns for e-commerce brands and SaaS companies that are ready to scale. Get more conversions at lower costs — or we don't get paid.
                                </p>p>
                                
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <a href="#contact" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                                                          Get Your Free Audit
                                            </a>a>
                                            <a href="#results" className="px-8 py-4 border border-slate-700 hover:border-slate-500 rounded-xl font-semibold transition-colors">
                                                          See Our Results
                                            </a>a>
                                </div>div>
                                
                                <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-500 text-sm">
                                            <div className="flex items-center gap-2">
                                                          <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>svg>
                                                          No Long-term Contract
                                            </div>div>
                                            <div className="flex items-center gap-2">
                                                          <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>svg>
                                                          Cancel Anytime
                                            </div>div>
                                            <div className="flex items-center gap-2">
                                                          <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>svg>
                                                          14-Day Free Trial
                                            </div>div>
                                </div>div>
                      </div>div>
              </section>section>
        
          {/* Services Section */}
              <section id="services" className="py-24 px-6 bg-slate-800/30">
                      <div className="max-w-6xl mx-auto">
                                <div className="text-center mb-16">
                                            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>h2>
                                            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                                                          End-to-end Meta advertising management that delivers real business results
                                            </p>p>
                                </div>div>
                                
                                <div className="</div>
