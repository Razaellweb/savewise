import { Wallet, Lock, Zap, CreditCard, TrendingUp, ShieldCheck, Target } from "lucide-react";
import WalletOverview from "@/components/dashboard/wallet-overview";

export default function Feature2Resource() {
  const features = [
    {
      icon: Target,
      title: "Personalized plans",
      description: "Automate savings with AutoSave, set milestones with Target Savings, or lock funds with SafeLock",
    },
    {
      icon: CreditCard,
      title: "Trusted payments",
      description: "Secure deposits and withdrawals via Paystack or Flutterwave",
    },
    {
      icon: TrendingUp,
      title: "Tailored interest",
      description: "Competitive earnings based on plan type to match your goals",
    },
    {
      icon: Zap,
      title: "Automated scheduling",
      description: "Set recurring contributions weekly or monthly with reminders",
    },
    {
      icon: ShieldCheck,
      title: "Bank-grade security",
      description: "Encryption, device checks, and fraud monitoring on every transaction",
    },
    {
      icon: Wallet,
      title: "Unified dashboard",
      description: "View total savings, interest earned, and goal progress at a glance",
    },
  ];

  return (
    <section className="bg-card py-16 md:py-20 lg:py-32" id="features">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-semibold md:text-4xl lg:text-5xl">
          Everything you need to save with confidence
        </h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Custom Dashboard Component */}
          <div className="order-2 flex items-center justify-center lg:order-1">
            <div className="w-full max-w-md">
              <WalletOverview />
            </div>
          </div>

          {/* Features List */}
          <div className="order-1 flex flex-col justify-center gap-6 lg:order-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
