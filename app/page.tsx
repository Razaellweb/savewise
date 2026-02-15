"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Shield, 
  TrendingUp, 
  Lock, 
  Layers, 
  ChevronRight, 
  BarChart3, 
  Target, 
  RefreshCcw,
  CheckCircle2,
  PieChart,
  ArrowUpRight,
  Globe,
  Fingerprint
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const SavewiseMark = ({ className, progress = 1 }: { className?: string; progress?: any }) => {
  return (
    <motion.svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={cn("w-16 h-16", className)}
    >
      <motion.rect 
        x="35" y="35" width="30" height="30" 
        rx="2" 
        stroke="currentColor" 
        strokeWidth="2"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "circOut" }}
      />
      <motion.rect 
        x="20" y="20" width="60" height="60" 
        rx="4" 
        stroke="currentColor" 
        strokeWidth="1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
      <motion.path 
        d="M50 25V75M25 50H75" 
        stroke="currentColor" 
        strokeWidth="1" 
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: progress }}
        transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
      />
    </motion.svg>
  );
};

const InteractiveGrowthProjection = () => {
  const [savings, setSavings] = useState(1000);
  const [years, setYears] = useState(10);
  const rate = 0.12; // 12% annual return assumption for portfolios

  const calculateGrowth = (s: number, y: number) => {
    // A simplified monthly compounding formula
    const monthlyRate = rate / 12;
    const months = y * 12;
    return Math.round(s * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate));
  };

  const total = calculateGrowth(savings, years);
  const principal = savings * 12 * years;
  const earnings = total - principal;

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative p-1 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 rounded-[2rem] shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-white/40 dark:bg-slate-950/40 backdrop-blur-3xl" />
        <div className="relative bg-white/90 dark:bg-slate-950/90 rounded-[1.9rem] p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Controls */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Monthly Contribution</h4>
                  <span className="text-3xl font-semibold tabular-nums text-brand-emerald">${savings.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="100" max="10000" step="100" value={savings} 
                  onChange={(e) => setSavings(Number(e.target.value))}
                  className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full appearance-none cursor-pointer accent-brand-emerald"
                />
                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span>$100</span>
                  <span>$10,000</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Time Horizon</h4>
                  <span className="text-3xl font-semibold tabular-nums text-slate-900 dark:text-white">{years} Years</span>
                </div>
                <input 
                  type="range" min="1" max="40" value={years} 
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full appearance-none cursor-pointer accent-slate-900 dark:accent-white"
                />
                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span>1 Year</span>
                  <span>40 Years</span>
                </div>
              </div>

              <div className="pt-8 grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <p className="text-[10px] font-bold uppercase text-slate-400 mb-2 tracking-widest">Total Savings</p>
                  <p className="text-xl font-semibold tabular-nums">${principal.toLocaleString()}</p>
                </div>
                <div className="p-6 rounded-2xl bg-brand-emerald/5 border border-brand-emerald/10">
                  <p className="text-[10px] font-bold uppercase text-brand-emerald mb-2 tracking-widest">Growth Earnings</p>
                  <p className="text-xl font-semibold text-brand-emerald tabular-nums">${earnings.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Visualization */}
            <div className="lg:col-span-7 h-full flex flex-col justify-end">
              <div className="mb-12">
                <p className="text-xs font-bold uppercase text-slate-400 mb-2 tracking-[0.2em]">Future Net Worth</p>
                <motion.h3 
                  key={total}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-6xl md:text-8xl font-semibold tracking-tighter text-slate-900 dark:text-white tabular-nums"
                >
                  ${total.toLocaleString()}
                </motion.h3>
              </div>
              
              <div className="relative h-64 md:h-80 w-full flex items-end gap-1.5 overflow-hidden">
                <div className="absolute inset-0 border-b border-slate-200 dark:border-slate-800" />
                {[...Array(years)].map((_, i) => {
                  const val = calculateGrowth(savings, i + 1);
                  const height = (val / total) * 100;
                  return (
                    <motion.div 
                      key={i}
                      layout
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      className={cn(
                        "flex-1 min-w-[4px] rounded-t-[4px] transition-colors duration-500",
                        i === years - 1 ? "bg-brand-emerald" : "bg-slate-200 dark:bg-slate-800"
                      )}
                    />
                  );
                })}
              </div>
              
              <div className="mt-6 flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-800" />
                  <span>Annual Progression</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-emerald" />
                  <span>Maturity Target</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-slate-400 font-medium max-w-2xl mx-auto">
        Calculations assume a balanced 12% annual return through our Smart Portfolio engine. Past performance is not indicative of future results.
      </p>
    </div>
  );
};

const GridFeature = ({ icon: Icon, title, desc, delay = 0 }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    className="group relative p-8 md:p-12 rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-950 transition-all duration-700 overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
       <Icon size={120} />
    </div>
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-2xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-brand-emerald group-hover:text-white transition-all duration-500">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-2xl font-semibold mb-4 tracking-tight">{title}</h3>
      <p className="text-slate-500 leading-relaxed text-lg">{desc}</p>
    </div>
  </motion.div>
);

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500 py-4 px-6",
      scrolled ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <SavewiseMark className="w-7 h-7 text-brand-emerald" progress={1} />
          <span className="text-sm font-bold tracking-[0.3em] uppercase text-slate-900 dark:text-white">Savewise</span>
        </div>
        <div className="hidden lg:flex items-center gap-10">
          {["Savings", "Investments", "Security", "Institutional"].map((item) => (
            <a key={item} href="#" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-brand-emerald transition-colors">
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white px-6">Login</button>
          <button className="px-6 py-3 rounded-full bg-brand-emerald text-white text-[10px] font-bold uppercase tracking-widest shadow-xl shadow-brand-emerald/20 hover:scale-105 active:scale-95 transition-all">
            Open Account
          </button>
        </div>
      </div>
    </nav>
  );
};

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const markOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const markScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.2]);

  return (
    <div className="relative min-h-screen selection:bg-brand-emerald/20 selection:text-brand-emerald">
      <Nav />

      {/* Hero */}
      <section className="relative pt-48 pb-32 px-6 flex flex-col items-center justify-center text-center">
        <motion.div 
          style={{ opacity: markOpacity, scale: markScale }}
          className="mb-12 pointer-events-none"
        >
          <SavewiseMark className="w-24 h-24 text-brand-emerald" progress={1} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-6xl md:text-[5.5rem] font-semibold tracking-tighter leading-[0.95] mb-8 max-w-5xl mx-auto">
            Build institutional wealth <br />
            <span className="text-brand-emerald italic">on autopilot.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
            A precision-engineered platform to automate your savings and access globally diversified investment portfolios.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-32">
            <button className="group relative px-10 py-5 rounded-2xl bg-brand-black text-white dark:bg-white dark:text-brand-black font-bold text-sm uppercase tracking-widest overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-2">Start Building Now <ArrowUpRight className="w-4 h-4" /></span>
              <div className="absolute inset-0 bg-brand-emerald translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            <button className="px-10 py-5 rounded-2xl border border-slate-200 dark:border-slate-800 font-bold text-sm uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
              View Portfolios
            </button>
          </div>
        </motion.div>

        {/* Primary Spike: The Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="w-full relative z-10"
        >
          <InteractiveGrowthProjection />
        </motion.div>
      </section>

      {/* Institutional Proof / Logos */}
      <section className="py-20 border-y border-slate-100 dark:border-slate-900 bg-white/30 dark:bg-slate-950/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale contrast-125">
             <div className="flex items-center gap-3 font-bold text-2xl tracking-tighter">
                <Globe className="w-6 h-6" /> FLUTTERWAVE
             </div>
             <div className="flex items-center gap-3 font-bold text-2xl tracking-tighter">
                <Shield className="w-6 h-6" /> NDIC SECURED
             </div>
             <div className="flex items-center gap-3 font-bold text-2xl tracking-tighter">
                <Fingerprint className="w-6 h-6" /> AUTH0 PROT
             </div>
             <div className="flex items-center gap-3 font-bold text-2xl tracking-tighter">
                <CheckCircle2 className="w-6 h-6" /> ISO 27001
             </div>
          </div>
        </div>
      </section>

      {/* Compounding Grid Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
            <div className="max-w-2xl space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-emerald">The Architecture of Growth</span>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">The compounding engine <br />for the modern professional.</h2>
            </div>
            <p className="max-w-md text-lg text-slate-500 font-medium">
              We've abstracted the complexity of traditional wealth management into a seamless, automated interface that works while you sleep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GridFeature 
              icon={RefreshCcw}
              title="Automated Savings"
              desc="Set your frequency—daily, weekly, or monthly. Our engine processes contributions from any bank account with zero friction."
              delay={0}
            />
            <GridFeature 
              icon={Target}
              title="Goal-Based Buckets"
              desc="Segregate your capital based on life milestones. Each bucket follows a unique tracking trajectory for total clarity."
              delay={0.1}
            />
            <GridFeature 
              icon={PieChart}
              title="Smart Portfolios"
              desc="Access diversified, institutional-grade assets. We optimize your risk-adjusted returns through automated rebalancing."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Visual Narrative Section */}
      <section className="py-32 px-6 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-brand-emerald/10 blur-[100px] rounded-full animate-pulse" />
            <div className="relative h-full w-full border border-slate-200 dark:border-slate-800 rounded-[3rem] bg-white dark:bg-slate-950 p-12 shadow-2xl flex flex-col justify-between overflow-hidden">
               <div className="flex justify-between items-start relative z-10">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Current Yield</p>
                    <p className="text-5xl font-semibold tracking-tight">14.8<span className="text-brand-emerald">%</span></p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <TrendingUp className="text-brand-emerald w-6 h-6" />
                  </div>
               </div>
               
               <div className="space-y-8 relative z-10">
                  <div className="space-y-4">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                      <span>Equities</span>
                      <span>65%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: "65%" }} className="h-full bg-brand-emerald rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                      <span>Fixed Income</span>
                      <span>25%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: "25%" }} className="h-full bg-slate-400 rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                      <span>Commodities</span>
                      <span>10%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: "10%" }} className="h-full bg-slate-200 dark:bg-slate-700 rounded-full" />
                    </div>
                  </div>
               </div>

               <div className="pt-12 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between relative z-10">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-950 bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <img src={`https://randomuser.me/api/portraits/women/${i + 10}.jpg`} alt="user" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-slate-500">Trusted by 50,000+ professionals</p>
               </div>
            </div>
          </div>

          <div className="space-y-12">
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">Security is not a feature. <br />It's our foundation.</h2>
            <div className="space-y-10">
              {[
                { title: "Bank-Grade Encryption", desc: "Your data and funds are protected by 256-bit AES encryption at every layer.", icon: Shield },
                { title: "Global Compliance", desc: "Regulated by central authorities ensuring your wealth is safe and legally protected.", icon: Lock },
                { title: "Multi-Factor Protection", desc: "Every transaction requires high-fidelity biometric or token-based authorization.", icon: Fingerprint }
              ].map((item, i) => (
                <div key={i} className="flex gap-8">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-brand-emerald shadow-sm">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto relative group">
          <div className="absolute inset-0 bg-brand-emerald rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity" />
          <div className="relative bg-brand-emerald rounded-[3rem] p-12 md:p-24 text-center text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-[120px] -ml-48 -mb-48" />
            
            <div className="relative z-10 space-y-10">
              <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-none">The best time to <br />start was yesterday.</h2>
              <p className="text-xl text-brand-emerald-50/70 max-w-xl mx-auto leading-relaxed">
                Open your account in 3 minutes and experience the precision of modern wealth management.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-12 py-6 rounded-2xl bg-white text-brand-emerald font-bold text-sm uppercase tracking-[0.2em] shadow-2xl hover:scale-105 transition-all">
                  Get Started for Free
                </button>
                <button className="px-12 py-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold text-sm uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
                  Contact Advisor
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <SavewiseMark className="w-8 h-8 text-brand-emerald" progress={1} />
                <span className="text-lg font-bold tracking-[0.3em] uppercase">Savewise</span>
              </div>
              <p className="text-slate-500 leading-relaxed font-medium">
                The institutional standard for automated personal wealth management in emerging markets.
              </p>
            </div>
            
            {[
              { title: "Products", links: ["Automated Savings", "Smart Portfolios", "Goal Buckets", "Corporate Plans"] },
              { title: "Company", links: ["About Us", "Security Infrastructure", "Legal & Compliance", "Risk Management"] },
              { title: "Connect", links: ["Help Center", "Support API", "Twitter / X", "LinkedIn"] }
            ].map((col) => (
              <div key={col.title} className="space-y-8">
                <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">{col.title}</h5>
                <ul className="space-y-4">
                  {col.links.map(link => (
                    <li key={link}><a href="#" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-brand-emerald transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="pt-12 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">© 2024 Savewise Technologies Inc. All rights reserved.</p>
            <div className="flex items-center gap-10">
               <span className="text-xs font-bold uppercase tracking-widest text-slate-400 cursor-pointer hover:text-brand-emerald">Privacy</span>
               <span className="text-xs font-bold uppercase tracking-widest text-slate-400 cursor-pointer hover:text-brand-emerald">Terms</span>
               <span className="text-xs font-bold uppercase tracking-widest text-slate-400 cursor-pointer hover:text-brand-emerald">Cookies</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
