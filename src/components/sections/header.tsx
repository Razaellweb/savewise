"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import YouFiLogo from "@/components/ui/youfi-logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto">
        <nav className="flex h-16 items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <YouFiLogo className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            <div className="relative">
              <button
                onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                className="flex items-center gap-1 rounded-sm px-3 py-2 text-sm transition-colors hover:bg-accent"
              >
                Product
                <ChevronDown className="size-4" />
              </button>
              {productDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-64 rounded-lg border bg-card p-4 shadow-lg">
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-accent">
                    <div className="font-medium">Loan Order Book</div>
                    <div className="text-xs text-muted-foreground">P2P lending marketplace</div>
                  </Link>
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-accent">
                    <div className="font-medium">Collateral Escrow</div>
                    <div className="text-xs text-muted-foreground">Secure crypto custody</div>
                  </Link>
                  <Link href="#" className="block rounded-sm px-3 py-2 text-sm hover:bg-accent">
                    <div className="font-medium">Multi-Currency Wallets</div>
                    <div className="text-xs text-muted-foreground">NGN, USDC, USDT support</div>
                  </Link>
                </div>
              )}
            </div>
            <Link href="#" className="rounded-sm px-3 py-2 text-sm transition-colors hover:bg-accent">
              How It Works
            </Link>
            <Link href="#" className="rounded-sm px-3 py-2 text-sm transition-colors hover:bg-accent">
              Tiers
            </Link>
            <Link href="#" className="rounded-sm px-3 py-2 text-sm transition-colors hover:bg-accent">
              FAQ
            </Link>
            <Link href="#" className="rounded-sm px-3 py-2 text-sm transition-colors hover:bg-accent">
              Contact
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="ghost" size="sm">
              Sign up
            </Button>
            <Button variant="outline" size="sm">
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex size-9 items-center justify-center rounded-sm border lg:hidden"
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t py-4 lg:hidden">
            <div className="flex flex-col gap-2">
              <Link href="#" className="rounded-sm px-3 py-2 text-sm hover:bg-accent">
                Product
              </Link>
              <Link href="#" className="rounded-sm px-3 py-2 text-sm hover:bg-accent">
                How It Works
              </Link>
              <Link href="#" className="rounded-sm px-3 py-2 text-sm hover:bg-accent">
                Tiers
              </Link>
              <Link href="#" className="rounded-sm px-3 py-2 text-sm hover:bg-accent">
                FAQ
              </Link>
              <Link href="#" className="rounded-sm px-3 py-2 text-sm hover:bg-accent">
                Contact
              </Link>
              <div className="mt-4 flex flex-col gap-2">
                <Button variant="ghost" size="sm" className="w-full">
                  Sign up
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}