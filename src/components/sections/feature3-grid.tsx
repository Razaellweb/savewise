import { BookOpen, Shield, MessageSquare, TrendingUp } from "lucide-react";
import OrderBookWidget from "@/components/dashboard/order-book-widget";
import CollateralWidget from "@/components/dashboard/collateral-widget";
import TransactionWidget from "@/components/dashboard/transaction-widget";
import AnalyticsWidget from "@/components/dashboard/analytics-widget";

const features = [
  {
    icon: BookOpen,
    title: "Loan Order Book",
    component: OrderBookWidget,
  },
  {
    icon: Shield,
    title: "Collateral Escrow",
    component: CollateralWidget,
  },
  {
    icon: MessageSquare,
    title: "Transaction History",
    component: TransactionWidget,
  },
  {
    icon: TrendingUp,
    title: "Analytics Dashboard",
    component: AnalyticsWidget,
  },
];

export default function Feature3Grid() {
  return (
    <section className="bg-background py-16 md:py-20 lg:py-32">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl lg:text-5xl">
            Complete lending infrastructure
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            From loan origination to repayment tracking, YouFi provides all the tools for successful P2P lending
          </p>
        </div>

        {/* Feature Grid with Custom Components */}
        <div className="mb-8 grid gap-5 sm:grid-cols-2">
          {features.map((feature, index) => {
            const Component = feature.component;
            return (
              <div key={index} className="flex items-stretch">
                <Component />
              </div>
            );
          })}
        </div>

        <p className="text-center text-lg text-muted-foreground">
          Mobile-first design optimized for emerging markets
        </p>
      </div>
    </section>
  );
}