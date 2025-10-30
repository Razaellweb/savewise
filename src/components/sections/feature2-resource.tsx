import { Wallet, Lock, Zap, MessageSquare, TrendingUp } from "lucide-react";
import WalletOverview from "@/components/dashboard/wallet-overview";

export default function Feature2Resource() {
  const features = [
    {
      icon: Wallet,
      title: "Multi-currency wallets",
      description: "NGN virtual accounts (Providus Bank) and USDC/USDT wallets on Polygon, BNB, and Tron networks",
    },
    {
      icon: Lock,
      title: "Tiered KYC verification",
      description: "Tier 1 for borrowers (up to ₦1M/$500), Tier 2 for lenders and higher limits (up to ₦5M/$2,500)",
    },
    {
      icon: Zap,
      title: "Instant loan matching",
      description: "Smart order book automatically matches loan requests with available lender capital",
    },
    {
      icon: MessageSquare,
      title: "Real-time notifications",
      description: "Push, email, and SMS alerts for loan milestones, liquidation warnings, and due dates",
    },
    {
      icon: TrendingUp,
      title: "Live collateral monitoring",
      description: "Automated price feeds track LTV health 24/7 with liquidation at 115% threshold",
    },
  ];

  return (
    <section className="bg-card py-16 md:py-20 lg:py-32">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-semibold md:text-4xl lg:text-5xl">
          Everything you need to lend and borrow
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