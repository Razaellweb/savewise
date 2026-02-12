"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  Lock, 
  Smartphone, 
  ArrowRight,
  ChevronRight,
  BarChart3,
  Wallet,
  Menu,
  X,
  CreditCard,
  Target
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Utility for Tailwind classes */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Background System ---
const VaultBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 vault-grid opacity-[0.15] dark:opacity-[0.05]" />
    <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-background via-background/80 to-background" />
    <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
    <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
  </div>
);

// --- Brand Signature Line ---
const SignatureLine = ({ progress }: { progress: number }) => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" preserveAspectRatio="none">
      <motion.path
        d={`M 0,200 Q ${progress * 500},${200 - progress * 100} 1000,50`}
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="text-primary/30"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </svg>
  );
};

// --- Navbar ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      isScrolled ? "bg-background/80 backdrop-blur-md border-border py-3" : "bg-transparent border-transparent py-5"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">S</div>
          <span className="text-xl font-bold tracking-tight">SaveWise</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#savings" className="hover:text-primary transition-colors">Savings</a>
          <a href="#investments" className="hover:text-primary transition-colors">Investments</a>
          <a href="#security" className="hover:text-primary transition-colors">Security</a>
          <a href="#rates" className="hover:text-primary transition-colors">Rates</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm font-semibold hover:text-primary transition-colors">Login</button>
          <button className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95">
            Get Started
          </button>
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

// --- Hero Section ---
const Hero = () => {
  const [savingsValue, setSavingsValue] = useState(50000);
  const monthlyInterest = 0.0125; // 15% annually
  const projection = useMemo(() => {
    return Math.round(savingsValue * Math.pow(1 + monthlyInterest, 12));
  }, [savingsValue]);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider"
          >
            <ShieldCheck size={14} />
            SEC-Regulated & Secure
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
          >
            Grow your wealth, <br />
            <span className="text-primary">one naira</span> at a time.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-vault-gray max-w-lg leading-relaxed"
          >
            Automated savings & smart investments for the modern Nigerian professional. Build a secure financial future with bank-grade security.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-primary/30 hover:shadow-primary/40 transition-all hover:-translate-y-1">
              Start Saving Now <ArrowRight size={20} />
            </button>
            <button className="bg-white dark:bg-vault-black border border-border px-8 py-4 rounded-xl font-bold text-lg hover:bg-vault-light dark:hover:bg-slate-800 transition-all">
              View Mutual Funds
            </button>
          </motion.div>

          <div className="flex items-center gap-8 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i} 
                  src={`https://randomuser.me/api/portraits/women/${i + 10}.jpg`} 
                  className="w-10 h-10 rounded-full border-2 border-background" 
                  alt="User" 
                />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-background bg-vault-border flex items-center justify-center text-[10px] font-bold">+20k</div>
            </div>
            <p className="text-sm font-medium text-vault-gray">Trusted by <span className="text-foreground font-bold">20,000+</span> Nigerians</p>
          </div>
        </div>

        {/* Primary Creativity Spike: Interactive Growth Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          <div className="w-full max-w-md bg-white dark:bg-vault-black rounded-[32px] border border-border p-8 shadow-2xl relative z-10 overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <TrendingUp size={120} className="text-primary" />
            </div>

            <div className="space-y-8 relative">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-vault-gray">Projected Growth</span>
                <span className="px-2 py-1 rounded bg-green-500/10 text-green-500 text-[10px] font-bold">15% P.A.</span>
              </div>

              <div className="space-y-1">
                <div className="text-4xl font-bold tabular-nums tracking-tight">
                  ₦{projection.toLocaleString()}
                </div>
                <p className="text-xs text-vault-gray">Value after 12 months of consistent saving</p>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex justify-between text-sm font-bold">
                  <span>Monthly Contribution</span>
                  <span className="text-primary">₦{savingsValue.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="5000" 
                  max="500000" 
                  step="5000"
                  value={savingsValue}
                  onChange={(e) => setSavingsValue(Number(e.target.value))}
                  className="w-full h-2 bg-vault-border rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[10px] text-vault-gray font-bold uppercase tracking-widest">
                  <span>₦5K</span>
                  <span>₦500K</span>
                </div>
              </div>

              <div className="pt-6 border-t border-border space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Zap size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Autosave Enabled</p>
                    <p className="text-xs text-vault-gray">Set it and forget it.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Target size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Goal: New Home</p>
                    <p className="text-xs text-vault-gray">12% towards ₦12M target</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative floating elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[100px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

// --- Features ---
const Features = () => {
  const features = [
    {
      title: "Automated Savings",
      desc: "Set your savings on autopilot with daily, weekly, or monthly deductions via Paystack.",
      icon: <Smartphone className="text-primary" />,
      color: "bg-primary/10"
    },
    {
      title: "Mutual Funds",
      desc: "Access professionally managed portfolios and beat inflation with ease.",
      icon: <BarChart3 className="text-blue-500" />,
      color: "bg-blue-500/10"
    },
    {
      title: "Goal-Based Saving",
      desc: "Create dedicated vaults for rent, education, or travel and track your progress.",
      icon: <Target className="text-orange-500" />,
      color: "bg-orange-500/10"
    },
    {
      title: "Secure Wallet",
      desc: "Bank-grade encryption ensures your funds and data are always protected.",
      icon: <Lock className="text-purple-500" />,
      color: "bg-purple-500/10"
    }
  ];

  return (
    <section id="savings" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Financial discipline, <span className="text-primary">simplified.</span></h2>
          <p className="text-lg text-vault-gray">Everything you need to manage your personal finances in one secure place.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[24px] bg-white dark:bg-vault-black border border-border group transition-all"
            >
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform", f.color)}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-sm text-vault-gray leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Trust Bar ---
const TrustBar = () => {
  return (
    <div className="py-12 border-y border-border bg-vault-light/50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-vault-gray mb-8">Regulated & Integrated with Leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Placeholder for Paystack/SEC/Managers */}
           <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">PAYSTACK</div>
           <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">SEC REGULATED</div>
           <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">ARM TRUST</div>
           <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">AXA MANSARD</div>
        </div>
      </div>
    </div>
  );
};

// --- Product Showcase (Mechanism) ---
const Mechanism = () => {
  return (
    <section id="investments" className="py-24 bg-white dark:bg-vault-black border-b border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="bg-vault-light dark:bg-slate-800 rounded-[32px] p-2 border border-border">
                <div className="bg-white dark:bg-vault-black rounded-[28px] overflow-hidden border border-border shadow-xl">
                  <div className="p-6 border-b border-border flex justify-between items-center">
                    <span className="font-bold">Investments</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                  </div>
                  <div className="p-8 space-y-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs text-vault-gray font-bold uppercase mb-1">Mutual Fund Alpha</p>
                        <h4 className="text-2xl font-bold">18.4% YTD</h4>
                      </div>
                      <div className="h-16 w-32 flex items-end gap-1">
                        {[40, 60, 45, 80, 70, 95].map((h, i) => (
                          <motion.div 
                            key={i} 
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            className="flex-1 bg-primary rounded-t-sm" 
                          />
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="p-4 rounded-xl border border-border flex justify-between items-center bg-vault-light/50 dark:bg-slate-900/50">
                         <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center">
                             <TrendingUp size={16} />
                           </div>
                           <span className="text-sm font-semibold">Standard Growth Fund</span>
                         </div>
                         <span className="text-xs font-bold text-green-500">+12.5%</span>
                      </div>
                      <div className="p-4 rounded-xl border border-border flex justify-between items-center">
                         <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-500 flex items-center justify-center">
                             <ShieldCheck size={16} />
                           </div>
                           <span className="text-sm font-semibold">Conservative Income</span>
                         </div>
                         <span className="text-xs font-bold text-green-500">+8.2%</span>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
             {/* Floating Badge */}
             <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute -bottom-10 -right-6 bg-primary text-white p-6 rounded-3xl shadow-2xl space-y-2 max-w-[180px]"
             >
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <BarChart3 size={20} />
                </div>
                <p className="text-xs font-medium opacity-80">Compound Interest</p>
                <p className="text-lg font-bold leading-tight">Your money works while you sleep.</p>
             </motion.div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">Access premium <br /><span className="text-primary">mutual funds</span> effortlessly.</h2>
            <p className="text-lg text-vault-gray">We've partnered with Nigeria's top-performing fund managers to bring you high-yield investment options previously reserved for the elite. Start with as little as ₦5,000.</p>
            
            <ul className="space-y-4">
              {[
                "Instant liquidity - withdraw anytime",
                "Diversified across secure assets",
                "Zero hidden management fees",
                "Real-time performance tracking"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 font-semibold">
                  <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                    <ChevronRight size={14} />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
            
            <button className="bg-foreground text-background px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
              Explore Funds <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Rates Comparison ---
const RatesSection = () => {
  const rates = [
    { entity: "Traditional Banks", rate: "1.5% - 3%", type: "Saving" },
    { entity: "SaveWise Lite", rate: "10% - 12%", type: "Saving" },
    { entity: "SaveWise Premium", rate: "14% - 15%", type: "Saving" },
    { entity: "Mutual Fund Alpha", rate: "18% - 22%", type: "Investment" },
  ];

  return (
    <section id="rates" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Beating inflation <span className="text-primary">is the goal.</span></h2>
          <p className="text-vault-gray">Traditional savings accounts lose value every day. Switch to a platform built for growth.</p>
        </div>
        
        <div className="max-w-4xl mx-auto overflow-hidden rounded-[32px] border border-border bg-white dark:bg-vault-black shadow-xl">
          <div className="grid grid-cols-3 p-6 border-b border-border text-xs font-bold uppercase tracking-widest text-vault-gray">
            <span>Provider</span>
            <span className="text-center">Annual Interest</span>
            <span className="text-right">Risk Level</span>
          </div>
          {rates.map((r, i) => (
            <div key={i} className={cn(
              "grid grid-cols-3 p-8 border-b border-border items-center transition-colors",
              i === 0 ? "opacity-50" : "hover:bg-primary/5"
            )}>
              <span className="font-bold">{r.entity}</span>
              <span className={cn(
                "text-center text-xl font-black",
                i !== 0 ? "text-primary" : ""
              )}>{r.rate}</span>
              <div className="flex justify-end">
                <span className={cn(
                  "px-3 py-1 rounded-full text-[10px] font-bold uppercase",
                  i === 0 ? "bg-gray-100 text-gray-500" : "bg-green-100 text-green-700"
                )}>
                  {i === 0 ? "LOW" : i < 3 ? "MODERATE" : "MANAGED"}
                </span>
              </div>
            </div>
          ))}
          <div className="p-6 bg-vault-light dark:bg-slate-900 flex justify-center">
             <p className="text-xs text-vault-gray font-medium">Interest rates are calculated annually and paid monthly into your SaveWise wallet.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Security ---
const Security = () => {
  return (
    <section id="security" className="py-24 bg-foreground text-background overflow-hidden relative">
      <div className="absolute top-0 right-0 p-20 opacity-10">
        <ShieldCheck size={400} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
              <Lock size={32} />
            </div>
            <h2 className="text-4xl font-bold tracking-tight">Your security is our <br /><span className="text-primary">highest priority.</span></h2>
            <p className="text-lg opacity-80 leading-relaxed">We use bank-grade encryption and multi-factor authentication to ensure your funds and data are protected from unauthorized access. Your trust is our most valuable asset.</p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <p className="font-bold text-xl">PCIDSS Level 1</p>
                <p className="text-sm opacity-60">Highest level of payment security certification.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-xl">256-bit SSL</p>
                <p className="text-sm opacity-60">End-to-end encryption for all data transfers.</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
             <div className="relative w-full max-w-sm aspect-square bg-white/5 rounded-full border border-white/10 flex items-center justify-center group">
                <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping opacity-20" />
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 rounded-full border border-dashed border-white/20" 
                />
                <div className="w-48 h-48 rounded-[40px] bg-primary flex items-center justify-center shadow-2xl shadow-primary/40 relative z-20 transition-transform group-hover:scale-110">
                   <ShieldCheck size={80} strokeWidth={1.5} />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => {
  return (
    <footer className="pt-24 pb-12 bg-white dark:bg-vault-black border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">S</div>
              <span className="text-xl font-bold tracking-tight">SaveWise</span>
            </div>
            <p className="text-sm text-vault-gray leading-relaxed">The smartest way for young African professionals to grow wealth through automated savings and diversified mutual funds.</p>
            <div className="flex gap-4">
              {/* App buttons */}
              <div className="px-4 py-2 border border-border rounded-lg flex items-center gap-2 hover:bg-vault-light transition-colors cursor-pointer">
                <Smartphone size={16} />
                <div className="text-[10px] font-bold">App Store</div>
              </div>
              <div className="px-4 py-2 border border-border rounded-lg flex items-center gap-2 hover:bg-vault-light transition-colors cursor-pointer">
                <Smartphone size={16} />
                <div className="text-[10px] font-bold">Play Store</div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-vault-gray">
              <li><a href="#" className="hover:text-primary transition-colors">Savings Plans</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mutual Funds</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Fixed Deposits</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Goal Stashing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-vault-gray">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Compliance</h4>
            <p className="text-xs text-vault-gray leading-relaxed mb-4">SaveWise is a product of SaveWise Wealth Management Limited. Investments are managed by SEC-regulated fund managers.</p>
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-primary" size={20} />
              <span className="text-[10px] font-bold uppercase tracking-widest">NDPR Compliant</span>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-vault-gray">
          <p>© 2024 SaveWise. All rights reserved.</p>
          <p>Built for the modern Nigerian professional.</p>
        </div>
      </div>
    </footer>
  );
};

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative min-h-screen selection:bg-primary/20">
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left" 
        style={{ scaleX }} 
      />
      
      <VaultBackground />
      <Navbar />
      
      <div className="relative">
        <Hero />
        <TrustBar />
        <Features />
        <Mechanism />
        <RatesSection />
        <Security />
        
        {/* Final Conversion CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-5xl font-bold tracking-tight">Ready to build your <span className="text-primary">financial future?</span></h2>
              <p className="text-xl text-vault-gray">Join 20,000+ Nigerians making smart financial decisions with SaveWise.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-primary/30 hover:scale-105 transition-all">
                  Download the App
                </button>
                <button className="bg-white dark:bg-vault-black border border-border px-10 py-5 rounded-2xl font-bold text-lg hover:bg-vault-light transition-all">
                  Create Free Account
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </main>
  );
}
