import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";
import YouFiLogo from "@/components/ui/youfi-logo";

export default function Footer() {
  const footerLinks = {
    product: [
      { name: "How It Works", href: "#" },
      { name: "For Borrowers", href: "#" },
      { name: "For Lenders", href: "#" },
      { name: "Tiers", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Roadmap", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Security", href: "#" },
      { name: "Support", href: "#" },
    ],
    legal: [
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Risk Disclosure", href: "#" },
      { name: "KYC Policy", href: "#" },
    ],
  };

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-5 py-16 md:px-8 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div>
            <YouFiLogo className="mb-4 h-8 w-auto" />
            <p className="text-sm text-muted-foreground">
              P2P lending marketplace connecting crypto and fiat lenders with borrowers in emerging markets.
            </p>
            <div className="mt-6 flex gap-4">
              <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Twitter className="size-5" />
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Linkedin className="size-5" />
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Github className="size-5" />
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} YouFi. All rights reserved. V1 Closed Beta.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Terms
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}