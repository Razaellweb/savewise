import { DollarSign, Users, ShieldCheck } from "lucide-react";

export default function Feature1Stats() {
  const stats = [
    {
      icon: DollarSign,
      stat: "135%",
      label: "Initial LTV ratio",
      description: "Over-collateralized loans for maximum security",
    },
    {
      icon: Users,
      stat: "200",
      label: "Beta users",
      description: "190 borrowers and 10 vetted lenders",
    },
    {
      icon: ShieldCheck,
      stat: "115%",
      label: "Liquidation threshold",
      description: "Real-time price monitoring with automatic triggers",
    },
  ];

  return (
    <section className="bg-card py-16 md:py-20 lg:py-32">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-8 md:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
            Built for secure peer-to-peer lending
          </h2>
          <p className="max-w-md self-end text-muted-foreground lg:text-right">
            YouFi combines crypto collateral with emerging market access, creating a transparent and efficient lending marketplace.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex aspect-[3.5/2.6] flex-col justify-between rounded-[24px] bg-gradient-to-b from-muted to-mint-gradient-end p-8 sm:aspect-[3.8/4]"
              >
                <Icon className="size-10 fill-primary text-primary" />
                <div>
                  <div className="mb-2 text-6xl font-semibold leading-none lg:text-[96px]">
                    {stat.stat}
                  </div>
                  <div className="mb-1 text-xl font-semibold">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}