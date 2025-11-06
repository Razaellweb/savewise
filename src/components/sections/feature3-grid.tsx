import { BookOpen, Shield, MessageSquare, TrendingUp } from "lucide-react";
import OrderBookWidget from "@/components/dashboard/order-book-widget";
import CollateralWidget from "@/components/dashboard/collateral-widget";
import TransactionWidget from "@/components/dashboard/transaction-widget";
import AnalyticsWidget from "@/components/dashboard/analytics-widget";

const features = [
  {
    icon: BookOpen,
    title: "Goal Planner",
    component: OrderBookWidget,
  },
  {
    icon: Shield,
    title: "SafeLock",
    component: CollateralWidget,
  },
  {
    icon: MessageSquare,
    title: "Transactions",
    component: TransactionWidget,
  },
  {
    icon: TrendingUp,
    title: "Insights",
    component: AnalyticsWidget,
  },
];

export default function Feature3Grid() {
  return (
    <section className="bg-background py-16 md:py-20 lg:py-32" id="dashboard">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl lg:text-5xl">
            Dashboard preview & security
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Visualize your savings goals, monitor SafeLock balances, and review transactions — all secured with bank-grade protections.
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

        <p className="text-center text-lg text-muted-foreground" id="security">
          Secure transactions powered by Paystack and Flutterwave
        </p>
      </div>
    </section>
  );
}
