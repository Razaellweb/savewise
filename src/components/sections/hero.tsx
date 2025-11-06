"use client";

import { useState, useEffect } from "react";
import { Shield, Target, Wallet, LineChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoanDashboard from "@/components/ui/loan-dashboard";
import OrderBook from "@/components/ui/order-book";
import WalletOverview from "@/components/dashboard/wallet-overview";
import Link from "next/link";

const carouselComponents = [
  { component: LoanDashboard, label: "Dashboard Overview" },
  { component: OrderBook, label: "Goal Planner" },
  { component: WalletOverview, label: "Wallets & Funding" },
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
      icon: Target,
      title: "Goal-based plans",
      description: "AutoSave, Target Savings, and SafeLock tailored to you",
    },
    {
      icon: Shield,
      title: "Secure & trusted",
      description: "Deposits and withdrawals via Paystack or Flutterwave",
    },
    {
      icon: LineChart,
      title: "Earn competitive interest",
      description: "Rates optimized by plan type to grow your savings",
    },
    {
      icon: Wallet,
      title: "Track progress in real time",
      description: "Clean dashboard with totals, interest, and goal status",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b bg-background" id="hero">
      <div className="container mx-auto pb-16 pt-16 md:pb-20 md:pt-24 lg:pb-32 lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-[1fr,0.68fr] lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h1 className="mb-6 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Achieve your financial goals with smart, secure savings
            </h1>
            <p className="mb-8 text-balance font-inter-tight text-2xl font-medium leading-relaxed text-muted-foreground md:text-3xl lg:text-4xl">
              SaveWise helps individuals and families in Nigeria and West Africa build wealth effortlessly with automated, goal-based plans.
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
              <Button size="lg" className="gap-2" asChild>
                <Link href="/signup" data-event-name="cta_signup_hero">
                  get started today
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link href="#how-it-works" data-event-name="cta_learn_how">
                  Learn how it works →
                </Link>
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
                    data-event-name={`carousel_jump_${index + 1}`}
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
