"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  Lock, 
  Smartphone, 
  ArrowRight,
  ChevronRight,
  BarChart3,
  Menu,
  X,
  Target,
  LucideIcon
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Utility for Tailwind classes */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Background System (Unfolding Layers) ---
const VaultBackground = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-background">
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute inset-0 vault-grid opacity-[0.15] dark:opacity-[0.05]" 
      />
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-background via-background/60 to-background" />
      
      {/* Dynamic Layering */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full" 
      />
      <motion.div 
        style={{ y: y1 }}
        className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full" 
      />
    </div>
  );
};

// --- Brand Signature Line (Growth Trajectory) ---
const SignatureLine = () => {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg className="w-full h-full opacity-20 dark:opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <motion.path
          d="M -100,800 Q 250,750 500,500 T 1100,200"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="1"
          style={{ pathLength }}
        />
        <motion.path
          d="M -100,850 Q 300,800 550,550 T 1100,250"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="0.5"
          style={{ pathLength }}
        />
      </svg>
    </div>
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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
      isScrolled ? "bg-background/80 backdrop-blur-xl border-border py-4" : "bg-transparent border-transparent py-6"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5 group cursor-pointer">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:rotate-12">S</div>
          <span className="text-2xl font-black tracking-tighter">SaveWise</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[13px] font-bold uppercase tracking-widest text-vault-gray">
          <a href="#savings" className="hover:text-primary transition-colors">Savings</a>
          <a href="#investments" className="hover:text-primary transition-colors">Investments</a>
          <a href="#security" className="hover:text-primary transition-colors">Security</a>
          <a href="#rates" className="hover:text-primary transition-colors">Rates</a>
        </div>

        <div className="flex items-center gap-5">
          <button className="hidden md:block text-sm font-bold hover:text-primary transition-colors">Login</button>
          <button className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all active:scale-95">
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
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em]"
          >
            <ShieldCheck size={14} />
            Institutional Grade Security
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.95]"
          >
            Grow wealth, <br />
            <span className="text-primary italic">precisely.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-vault-gray max-w-lg leading-relaxed font-medium"
          >
            Automated savings and smart mutual fund investments designed for Nigeria's ambitious professionals.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(5,150,105,0.3)] hover:shadow-[0_20px_50px_rgba(5,150,105,0.5)] transition-all hover:-translate-y-1">
              Start Saving <ArrowRight size={20} />
            </button>
            <button className="bg-white dark:bg-vault-black border-2 border-border px-10 py-5 rounded-2xl font-bold text-lg hover:bg-vault-light dark:hover:bg-slate-800 transition-all">
              Invest Now
            </button>
          </motion.div>

          <div className="flex items-center gap-10 pt-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i} 
                  src={`https://randomuser.me/api/portraits/women/${i + 20}.jpg`} 
                  className="w-12 h-12 rounded-full border-4 border-background object-cover" 
                  alt="User" 
                />
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-background bg-primary flex items-center justify-center text-[10px] font-black text-white">+20K</div>
            </div>
            <div>
              <p className="text-sm font-black text-foreground uppercase tracking-wider">20,000+ Users</p>
              <p className="text-xs text-vault-gray font-bold">Building futures in Nigeria</p>
            </div>
          </div>
        </div>

        {/* Primary Creativity Spike: Interactive Growth Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center"
        >
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-[40px] border border-border p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] relative z-10 overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03]">
              <TrendingUp size={240} className="text-primary" />
            </div>

            <div className="space-y-10 relative">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-vault-gray">Projected Portfolio</span>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-[10px] font-black">15% APY</span>
              </div>

              <div className="space-y-2">
                <motion.div 
                  key={projection}
                  initial={{ opacity: 0.5, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl font-black tabular-nums tracking-tighter"
                >
                  ₦{projection.toLocaleString()}
                </motion.div>
                <p className="text-xs text-vault-gray font-bold">Value after 12 months of consistent contribution</p>
              </div>

              <div className="space-y-6 pt-4">
                <div className="flex justify-between text-[11px] font-black uppercase tracking-widest">
                  <span>Monthly Contribution</span>
                  <span className="text-primary">₦{savingsValue.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="5000" 
                  max="1000000" 
                  step="5000"
                  value={savingsValue}
                  onChange={(e) => setSavingsValue(Number(e.target.value))}
                  className="w-full h-1.5 bg-vault-border rounded-full appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="pt-8 border-t border-border grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-vault-light dark:bg-slate-800/50 border border-border space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Zap size={16} />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest">Autosave</p>
                </div>
                <div className="p-4 rounded-2xl bg-vault-light dark:bg-slate-800/50 border border-border space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Target size={16} />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest">Goal Focus</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/5 rounded-full blur-[120px] -z-10" />
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
      desc: "Set your savings on autopilot. Daily, weekly, or monthly deductions via Paystack.",
      icon: Smartphone,
      color: "bg-primary/5",
      iconColor: "text-primary"
    },
    {
      title: "Mutual Funds",
      desc: "Access professionally managed portfolios and beat inflation with institutional precision.",
      icon: BarChart3,
      color: "bg-blue-500/5",
      iconColor: "text-blue-500"
    },
    {
      title: "Goal-Based Saving",
      desc: "Create dedicated vaults for rent, education, or travel. Track progress in real-time.",
      icon: Target,
      color: "bg-orange-500/5",
      iconColor: "text-orange-500"
    },
    {
      title: "Secure Wallet",
      desc: "Bank-grade encryption and PCIDSS compliance ensure your wealth is always protected.",
      icon: Lock,
      color: "bg-purple-500/5",
      iconColor: "text-purple-500"
    }
  ];

  return (
    <section id="savings" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20 space-y-4">
          <h2 className="text-5xl font-black tracking-tighter">Financial discipline, <br /><span className="text-primary italic">reimagined.</span></h2>
          <p className="text-xl text-vault-gray font-medium">Everything you need to master your wealth in one secure vault.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[40px] bg-white dark:bg-slate-900 border border-border group transition-all duration-500 hover:shadow-2xl hover:shadow-black/5"
              >
                <div className={cn("w-16 h-16 rounded-[20px] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500", f.color)}>
                  <Icon key={`icon-${i}`} className={f.iconColor} size={28} />
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-4">{f.title}</h3>
                <p className="text-vault-gray leading-relaxed font-medium">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- Trust Bar ---
const TrustBar = () => {
  return (
    <div className="py-16 border-y border-border bg-vault-light/30 dark:bg-slate-900/30">
      <div className="container mx-auto px-6">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-vault-gray mb-12">Institutional Partners & Regulation</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-32 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="font-black text-3xl tracking-tighter">PAYSTACK</div>
           <div className="font-black text-3xl tracking-tighter">SEC REGULATED</div>
           <div className="font-black text-3xl tracking-tighter">ARM TRUST</div>
           <div className="font-black text-3xl tracking-tighter">AXA MANSARD</div>
        </div>
      </div>
    </div>
  );
};

// --- Product Showcase (Mechanism) ---
const Mechanism = () => {
  return (
    <section id="investments" className="py-32 bg-white dark:bg-slate-900 border-b border-border relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="relative">
             <div className="bg-vault-light dark:bg-slate-800 rounded-[48px] p-2 border border-border rotate-2">
                <div className="bg-white dark:bg-slate-900 rounded-[42px] overflow-hidden border border-border shadow-2xl">
                  <div className="p-8 border-b border-border flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
                    <span className="font-black text-xs uppercase tracking-widest">Portfolio Matrix</span>
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                  </div>
                  <div className="p-10 space-y-10">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[10px] text-vault-gray font-black uppercase tracking-widest mb-2">Growth Alpha Fund</p>
                        <h4 className="text-4xl font-black tracking-tighter">18.4% YTD</h4>
                      </div>
                      <div className="h-20 w-40 flex items-end gap-1.5">
                        {[40, 60, 45, 80, 70, 95, 85].map((h, i) => (
                          <motion.div 
                            key={i} 
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            transition={{ delay: i * 0.1 }}
                            className="flex-1 bg-primary rounded-t-md" 
                          />
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-5 rounded-2xl border border-border flex justify-between items-center bg-vault-light/50 dark:bg-slate-800/50 group cursor-pointer hover:border-primary transition-colors">
                         <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                             <TrendingUp size={20} />
                           </div>
                           <span className="font-bold">Managed Equities</span>
                         </div>
                         <span className="text-xs font-black text-green-500">+12.5%</span>
                      </div>
                      <div className="p-5 rounded-2xl border border-border flex justify-between items-center group cursor-pointer hover:border-primary transition-colors">
                         <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                             <ShieldCheck size={20} />
                           </div>
                           <span className="font-bold">Bond Income</span>
                         </div>
                         <span className="text-xs font-black text-green-500">+8.2%</span>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
             
             <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="absolute -bottom-12 -right-12 bg-primary text-white p-8 rounded-[40px] shadow-[0_40px_80px_rgba(5,150,105,0.4)] space-y-3 max-w-[220px]"
             >
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <BarChart3 size={24} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Compounding</p>
                <p className="text-xl font-black leading-tight">Your wealth works while you sleep.</p>
             </motion.div>
          </div>
          
          <div className="space-y-10">
            <h2 className="text-5xl font-black tracking-tighter leading-[1.1]">Elite <span className="text-primary italic">mutual funds.</span> <br />For everyone.</h2>
            <p className="text-xl text-vault-gray font-medium leading-relaxed">We've democratized access to Nigeria's highest performing assets. Start building a diversified portfolio with institutional grade oversight.</p>
            
            <div className="grid gap-6">
              {[
                "Instant liquidity - withdraw anytime",
                "SEC-Regulated asset management",
                "Diversified across secure bonds & equities",
                "Real-time dividend tracking"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center transition-transform group-hover:scale-125">
                    <ChevronRight size={16} strokeWidth={3} />
                  </div>
                  <span className="font-bold text-lg">{text}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-foreground text-background px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 hover:opacity-90 transition-opacity">
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
    { entity: "Traditional Savings", rate: "1.5% - 3%", type: "Saving", risk: "LOW" },
    { entity: "SaveWise Lite", rate: "10% - 12%", type: "Saving", risk: "LOW" },
    { entity: "SaveWise Premium", rate: "14% - 15%", type: "Saving", risk: "LOW" },
    { entity: "Mutual Fund Alpha", rate: "18% - 22%", type: "Investment", risk: "MANAGED" },
  ];

  return (
    <section id="rates" className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2 className="text-5xl font-black tracking-tighter">Beat inflation. <br /><span className="text-primary italic">Stay ahead.</span></h2>
          <p className="text-xl text-vault-gray font-medium">Traditional accounts are losing value. Our platform is built for growth.</p>
        </div>
        
        <div className="max-w-5xl mx-auto overflow-hidden rounded-[48px] border border-border bg-white dark:bg-slate-900 shadow-2xl">
          <div className="grid grid-cols-3 p-8 border-b border-border text-[10px] font-black uppercase tracking-[0.3em] text-vault-gray bg-slate-50/50 dark:bg-slate-800/50">
            <span>Entity</span>
            <span className="text-center">Annual Return</span>
            <span className="text-right">Risk Profile</span>
          </div>
          {rates.map((r, i) => (
            <div key={i} className={cn(
              "grid grid-cols-3 p-10 border-b border-border items-center transition-all duration-500",
              i === 0 ? "opacity-40" : "hover:bg-primary/5 cursor-pointer"
            )}>
              <span className="text-2xl font-black tracking-tight">{r.entity}</span>
              <span className={cn(
                "text-center text-4xl font-black tracking-tighter tabular-nums",
                i !== 0 ? "text-primary" : ""
              )}>{r.rate}</span>
              <div className="flex justify-end">
                <span className={cn(
                  "px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest",
                  i === 0 ? "bg-slate-100 text-slate-500" : "bg-green-100 text-green-700"
                )}>
                  {r.risk}
                </span>
              </div>
            </div>
          ))}
          <div className="p-8 bg-slate-50 dark:bg-slate-800/50 flex justify-center border-t border-border">
             <p className="text-xs text-vault-gray font-bold uppercase tracking-widest text-center">Interest is calculated daily and paid monthly into your secure wallet.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Security ---
const Security = () => {
  return (
    <section id="security" className="py-32 bg-foreground text-background overflow-hidden relative">
      <div className="absolute top-0 right-0 p-20 opacity-[0.05] pointer-events-none">
        <ShieldCheck size={600} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-10">
            <div className="w-20 h-20 rounded-[30px] bg-primary flex items-center justify-center text-white shadow-[0_20px_50px_rgba(5,150,105,0.4)]">
              <Lock size={40} />
            </div>
            <h2 className="text-6xl font-black tracking-tighter leading-none">Your wealth, <br /><span className="text-primary italic">impenetrable.</span></h2>
            <p className="text-xl opacity-70 leading-relaxed font-medium">We deploy bank-grade AES-256 encryption and multi-factor authentication. PCIDSS Level 1 certification ensures your data never touches an unsecure server.</p>
            
            <div className="grid grid-cols-2 gap-12 pt-6">
              <div className="space-y-3">
                <p className="font-black text-2xl tracking-tight">PCIDSS L1</p>
                <p className="text-sm opacity-50 font-medium uppercase tracking-widest">Payment Security</p>
              </div>
              <div className="space-y-3">
                <p className="font-black text-2xl tracking-tight">SSL/TLS</p>
                <p className="text-sm opacity-50 font-medium uppercase tracking-widest">End-to-end Encryption</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
             <div className="relative w-full max-w-md aspect-square bg-white/5 rounded-[80px] border border-white/10 flex items-center justify-center group rotate-12">
                <div className="absolute inset-0 rounded-[80px] border border-primary/20 animate-ping opacity-20" />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 rounded-[60px] border border-dashed border-white/10" 
                />
                <div className="w-56 h-56 rounded-[50px] bg-primary flex items-center justify-center shadow-[0_40px_100px_rgba(5,150,105,0.6)] relative z-20 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-12">
                   <ShieldCheck size={100} strokeWidth={1} />
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
    <footer className="pt-32 pb-16 bg-white dark:bg-slate-900 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-2xl">S</div>
              <span className="text-3xl font-black tracking-tighter">SaveWise</span>
            </div>
            <p className="text-vault-gray leading-relaxed font-medium">The definitive financial platform for the modern African professional. Automated, secure, and growth-obsessed.</p>
            <div className="flex gap-4">
              <div className="px-5 py-3 border-2 border-border rounded-2xl flex items-center gap-3 hover:bg-vault-light transition-all cursor-pointer group">
                <Smartphone size={18} className="group-hover:text-primary transition-colors" />
                <div className="text-[10px] font-black uppercase tracking-widest">App Store</div>
              </div>
              <div className="px-5 py-3 border-2 border-border rounded-2xl flex items-center gap-3 hover:bg-vault-light transition-all cursor-pointer group">
                <Smartphone size={18} className="group-hover:text-primary transition-colors" />
                <div className="text-[10px] font-black uppercase tracking-widest">Play Store</div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] text-vault-gray mb-10">Ecosystem</h4>
            <ul className="space-y-5 text-lg font-bold">
              <li><a href="#" className="hover:text-primary transition-colors">Savings Plans</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mutual Funds</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Fixed Deposits</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Goal Stashing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] text-vault-gray mb-10">Network</h4>
            <ul className="space-y-5 text-lg font-bold">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] text-vault-gray mb-10">Governance</h4>
            <p className="text-sm text-vault-gray leading-relaxed mb-6 font-medium">SaveWise is a licensed wealth management platform. Investments are held in trust by ARM Trustees and managed by SEC-regulated fund managers.</p>
            <div className="flex items-center gap-3 p-4 bg-vault-light dark:bg-slate-800 rounded-2xl border border-border">
              <ShieldCheck className="text-primary" size={24} />
              <span className="text-[10px] font-black uppercase tracking-widest">NDPR Compliant</span>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-vault-gray">
          <p>© 2024 SaveWise Portfolio Management. All rights reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-primary">Twitter</a>
            <a href="#" className="hover:text-primary">LinkedIn</a>
            <a href="#" className="hover:text-primary">Instagram</a>
          </div>
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
    <main className="relative min-h-screen selection:bg-primary/20 bg-background overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-[70] origin-left" 
        style={{ scaleX }} 
      />
      
      <VaultBackground />
      <SignatureLine />
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <TrustBar />
        <Features />
        <Mechanism />
        <RatesSection />
        <Security />
        
        {/* Final Conversion CTA */}
        <section className="py-40 relative overflow-hidden bg-primary/5">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto space-y-12">
              <h2 className="text-7xl lg:text-9xl font-black tracking-tighter leading-[0.9]">Start building <br /><span className="text-primary italic">your legacy.</span></h2>
              <p className="text-2xl text-vault-gray font-medium">Join Nigeria's fastest growing community of wealth builders.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                <button className="bg-primary text-white px-12 py-6 rounded-[32px] font-black text-xl shadow-[0_30px_60px_rgba(5,150,105,0.4)] hover:scale-105 transition-all">
                  Download App
                </button>
                <button className="bg-white dark:bg-slate-900 border-2 border-border px-12 py-6 rounded-[32px] font-black text-xl hover:bg-vault-light transition-all">
                  Sign Up Free
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
