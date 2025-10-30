"use client";

import { useState, useEffect } from "react";
import { CircleDot, Shield, Zap, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoanDashboard from "@/components/ui/loan-dashboard";
import OrderBook from "@/components/ui/order-book";
import WalletManagement from "@/components/ui/wallet-management";

const carouselComponents = [
  { component: LoanDashboard, label: "Loan Dashboard" },
  { component: OrderBook, label: "Order Book" },
  { component: WalletManagement, label: "Wallet Management" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselComponents.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: CircleDot,
      title: "Instant Matching",
      description: "Smart order book matches borrowers with lenders in real-time",
    },
    {
      icon: Shield,
      title: "Secure Collateral",
      description: "135% LTV with USDC/USDT custodial escrow protection",
    },
    {
      icon: Zap,
      title: "Quick Disbursement",
      description: "Get funds in NGN or USDC within minutes of approval",
    },
    {
      icon: TrendingUp,
      title: "Competitive Rates",
      description: "Up to 12.5% monthly for borrowers, attractive returns for lenders",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b bg-background">
      <div className="container mx-auto pb-16 pt-16 md:pb-20 md:pt-24 lg:pb-32 lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-[1fr,0.68fr] lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h1 className="mb-6 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Crypto-backed loans for emerging markets
            </h1>
            <p className="mb-8 text-balance font-inter-tight text-2xl font-medium leading-relaxed text-muted-foreground md:text-3xl lg:text-4xl">
              YouFi connects fiat and crypto lenders with borrowers. Secure, fast, and mobile-first P2P lending.
            </p>

            {/* Feature Grid */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="gap-2">
                Get Started
                <ArrowRight className="size-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Request Early Access →
              </Button>
            </div>

            {/* Carousel Indicators */}
            <div className="mt-8 flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                {currentSlide + 1} of {carouselComponents.length} — {carouselComponents[currentSlide].label}
              </div>
              <div className="flex gap-2">
                {carouselComponents.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-0.5 w-6 rounded-full transition-all ${
                      index === currentSlide ? "bg-primary" : "bg-primary/20"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Carousel */}
          <div className="relative">
            <div className="relative min-h-[600px]">
              {carouselComponents.map((item, index) => {
                const Component = item.component;
                return (
                  <div
                    key={index}
                    className={`transition-opacity duration-500 ${
                      index === currentSlide ? "opacity-100" : "pointer-events-none absolute inset-0 opacity-0"
                    }`}
                  >
                    <Component />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/27 to-transparent" />
    </section>
  );
}