"use client";

import { useState } from "react";
import { Menu, X, ChevronDown, Lock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto">
        <nav className="flex h-16 items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" data-event-name="logo_click">
            <span className="inline-flex items-center gap-2">
              <Lock className="size-5 text-primary" aria-hidden="true" />
              <span className="text-base font-semibold tracking-tight">SaveWise</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            <div className="relative">
              <button
                onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                className="flex items-center gap-1 rounded-sm px-3 py-2 text-sm transition-colors hover:bg-accent"
                aria-expanded={productDropdownOpen}
                data-event-name="nav_product_toggle"
              >
                Product
                <ChevronDown className="size-4" />
              </button>
              {productDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-64 rounded-lg border bg-card p-4 shadow-lg">
                  <Link href="#features" className="block rounded-sm px-3 py-2 text-sm hover:bg-accent" data-event-name="nav_dropdown_savings_plans">
                    <div className="font-medium">Savings Plans</div>
                    <div className="text-xs text-muted-foreground">AutoSave, Target, SafeLock</div>
                  </Link>
                  <Link href="#security" className="block rounded-sm px-3 py-2 text-sm hover:bg-accent" data-event-name="nav_dropdown_security">
                    <div className="font-medium">Security</div>
                    <div className="text-xs text-muted-foreground">Protected and compliant</div>
                  </Link>
                  <Link href="#dashboard" className="block rounded-sm px-3 py-2 text-sm hover:bg-accent" data-event-name="nav_dropdown_dashboard">
                    <div className="font-medium">Dashboard</div>
                    <div className="text-xs text-muted-foreground">Track goals in real-time</div>
                  </Link>
                </div>
              )}
            </div>
            <Link href="#features" className="rounded-sm px-3 py-2 text-sm transition-colors hover:bg-accent" data-event-name="nav_features">
              Features
            </Link>
            <Link href="#how-it-works" className="rounded-sm px-3 py-2 text-sm transition-colors hover:bg-accent" data-event-name="nav_how_it_works">
              How it works
            </Link>
            <Link href="#security" className="rounded-sm px-3 py-2 text-sm transition-colors hover:bg-accent" data-event-name="nav_security">
              Security
            </Link>
            <Link href="#faq" className="rounded-sm px-3 py-2 text-sm transition-colors hover:bg-accent" data-event-name="nav_faq">
              FAQ
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/signup" data-event-name="cta_signup_header">Get started</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/login" data-event-name="cta_login_header">Login</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex size-9 items-center justify-center rounded-sm border lg:hidden"
            aria-label="Toggle menu"
            data-event-name="nav_mobile_toggle"
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t py-4 lg:hidden">
            <div className="flex flex-col gap-2">
              <Link href="#features" className="rounded-sm px-3 py-2 text-sm hover:bg-accent" data-event-name="nav_mobile_features">
                Features
              </Link>
              <Link href="#how-it-works" className="rounded-sm px-3 py-2 text-sm hover:bg-accent" data-event-name="nav_mobile_how_it_works">
                How it works
              </Link>
              <Link href="#security" className="rounded-sm px-3 py-2 text-sm hover:bg-accent" data-event-name="nav_mobile_security">
                Security
              </Link>
              <Link href="#faq" className="rounded-sm px-3 py-2 text-sm hover:bg-accent" data-event-name="nav_mobile_faq">
                FAQ
              </Link>
              <div className="mt-4 flex flex-col gap-2">
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link href="/signup" data-event-name="cta_signup_header_mobile">Get started</Link>
                </Button>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/login" data-event-name="cta_login_header_mobile">Login</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
