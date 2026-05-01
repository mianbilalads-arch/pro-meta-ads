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
            <span className="text-cyan-400">Pro</span>MetaAds
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-slate-300 hover:text-cyan-400 transition-colors">Services</a>
            <a href="#process" className="text-slate-300 hover:text-cyan-400 transition-colors">Process</a>
            <a href="#results" className="text-slate-300 hover:text-cyan-400 transition-colors">Results</a>
            <a href="#contact" className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 rounded-lg font-semibold transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-slate-900 to-purple-950/30" />
        <div className="absolute top-32 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Meta Certified Partner Agency
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Stop Wasting Ad Spend.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Start Scaling Revenue.
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            We manage Meta ad campaigns for e-commerce brands and SaaS companies that are ready to scale. Get more conversions at lower costs — or we don't get paid.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
              Get Your Free Audit
            </a>
            <a href="#results" className="px-8 py-4 border border-slate-700 hover:border-slate-500 rounded-xl font-semibold transition-colors">
              See Our Results
            </a>
          </div>
          
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              No Long-term Contract
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              Cancel Anytime
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              14-Day Free Trial
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              End-to-end Meta advertising management that delivers real business results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Campaign Management",
                desc: "Full setup, monitoring, and optimization of your Facebook & Instagram ad campaigns. We handle everything from audience research to ad creative.",
                icon: "🎯",
                features: ["A/B Testing", "Daily Optimization", "Budget Scaling"]
              },
              {
                title: "Audience Targeting",
                desc: "We build hyper-targeted audiences using lookalike audiences, custom audiences, and advanced demographic targeting to reach your ideal customers.",
                icon: "👥",
                features: ["Lookalike Audiences", "Custom Audiences", "Retargeting"]
              },
              {
                title: "Ad Creative Strategy",
                desc: "Compelling ad creatives that stop the scroll and drive action. We test multiple angles to find what converts for your specific audience.",
                icon: "✨",
                features: ["Copy & Creative", "Video Ads", "Carousel Ads"]
              },
              {
                title: "Analytics & Reporting",
                desc: "Detailed performance reports with actionable insights. Know exactly where every dollar is going and what returns you're getting.",
                icon: "📊",
                features: ["Weekly Reports", "ROI Tracking", "Custom Dashboards"]
              },
              {
                title: "Conversion Optimization",
                desc: "We don't just drive traffic — we optimize for actual conversions. Landing pages, retargeting, and funnel optimization included.",
                icon: "🎪",
                features: ["Landing Pages", "A/B Testing", "Funnel Setup"]
              },
              {
                title: "Scaling Strategy",
                desc: "When campaigns perform, we scale systematically to maximize your ROI without burning out your audience or budget.",
                icon: "🚀",
                features: ["Vertical Scaling", "Horizontal Scaling", "Budget Management"]
              },
            ].map((service, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-colors group">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                <p className="text-slate-400 mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A proven 4-step process to scale your Meta ad campaigns
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "We analyze your current ads, website, and competitors to identify opportunities." },
              { step: "02", title: "Strategy", desc: "We build a custom campaign strategy tailored to your business goals and audience." },
              { step: "03", title: "Launch", desc: "We set up campaigns, creatives, and tracking — usually within 5-7 business days." },
              { step: "04", title: "Optimize", desc: "We continuously test, tweak, and scale what works to maximize your ROAS." },
            ].map((process, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-cyan-500/20 mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-slate-400 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-24 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Proven Results</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Real numbers from real campaigns we've managed
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { metric: "$2.4M", label: "Ad Spend Managed" },
              { metric: "3.2x", label: "Average ROAS" },
              { metric: "47%", label: "Reduction in CPA" },
              { metric: "150+", label: "Clients Scaled" },
            ].map((result, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{result.metric}</div>
                <div className="text-slate-400">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Scale?</h2>
            <p className="text-slate-400 text-lg">
              Get a free audit and campaign strategy. No commitment required.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Website URL</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="https://yourwebsite.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Monthly Ad Budget</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-500 focus:outline-none transition-colors"
                >
                  <option value="">Select budget range</option>
                  <option value="under-1k">Under $1,000</option>
                  <option value="1k-5k">$1,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="over-50k">Over $50,000</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Tell Us About Your Goals</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                placeholder="What are you currently spending on ads? What results are you hoping to achieve?"
              />
            </div>
            
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-500/50 text-slate-900 font-semibold rounded-xl transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25"
            >
              {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : status === "error" ? "Try Again" : "Get Your Free Audit"}
            </button>
            
            {status === "success" && (
              <p className="text-green-400 text-center text-sm">Thanks! We'll be in touch within 24 hours.</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-center text-sm">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xl font-bold">
            <span className="text-cyan-400">Pro</span>MetaAds
          </div>
          <div className="text-slate-500 text-sm">
            © 2026 Pro Meta Ads. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
} 
                placeholder="What's your current ad spend? What are your goals?" 
                rows={4} 
                className="w-full px-6 py-4 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-blue-500 outline-none transition-colors resize-none text-white placeholder-zinc-600" 
                required 
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full py-5 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold text-lg transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25"
            >
              Request Free Audit
            </button>
            
            <p className="text-center text-zinc-500 text-sm">
              We typically respond within 24 hours. No commitment required.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-xl font-bold mb-2">Pro Meta Ads</div>
            <div className="text-zinc-500 text-sm">Meta Certified Partner Agency</div>
          </div>
          <div className="text-zinc-500 text-sm">&copy; 2026 Pro Meta Ads. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
