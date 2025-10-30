import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Tier 1 (Basic)",
    description: "For borrowers getting started",
    limits: "Up to ₦1,000,000 or $500",
    features: [
      "BVN verification",
      "Phone and email verification",
      "Selfie verification",
      "NGN virtual account (Providus)",
      "USDC/USDT wallets",
      "Borrow only (no lending)",
      "Real-time notifications",
      "Transaction history",
    ],
  },
  {
    name: "Tier 2 (Full)",
    description: "For lenders and higher limits",
    limits: "Up to ₦5,000,000 or $2,500",
    features: [
      "Everything in Tier 1",
      "ID document verification",
      "Proof of address",
      "Lender privileges",
      "Higher borrowing limits",
      "Priority support",
      "Advanced analytics",
      "Referral dashboard",
    ],
    highlighted: true,
  },
  {
    name: "Platform Fees",
    description: "Transparent pricing",
    limits: "Pay only when you transact",
    features: [
      "Borrowers: 1.25% loan fee",
      "Lenders: 27.5% performance fee",
      "Platform: ₦1,000 flat fee per loan",
      "Withdrawals: ₦60 (NGN) or 0.001% (USD)",
      "₦1M+ withdrawals: Admin 2FA required",
      "5% liquidation fee",
      "No hidden charges",
      "Real-time fee breakdown",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="bg-background py-16 md:py-20 lg:py-32">
      <div className="container mx-auto">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl lg:text-5xl">
            Tiers & Pricing
          </h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            Choose your verification tier based on your needs. All users start with Tier 1 and can upgrade to Tier 2 for lending access and higher limits.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-2xl border bg-card p-8 shadow-sm transition-all ${
                tier.highlighted
                  ? "scale-105 border-primary shadow-lg"
                  : "hover:shadow-md"
              }`}
            >
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-semibold">{tier.name}</h3>
                <p className="mb-1 text-sm text-muted-foreground">{tier.description}</p>
                <p className="text-lg font-bold">{tier.limits}</p>
              </div>

              <ul className="mb-8 flex-grow space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex gap-3">
                    <Check className="size-5 flex-shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.highlighted ? "default" : "outline"}
                size="lg"
                className="w-full"
              >
                {index === 0 ? "Start with Tier 1" : index === 1 ? "Upgrade to Tier 2" : "View Details"}
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          All fees are clearly displayed before confirmation. No surprises.
        </p>
      </div>
    </section>
  );
}