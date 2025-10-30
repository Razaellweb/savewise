"use client";

import { TrendingUp, DollarSign, Users, Percent } from "lucide-react";

export default function AnalyticsWidget() {
  return (
    <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-white to-accent p-6 shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Analytics Dashboard</h3>
        <TrendingUp className="size-5 text-primary" />
      </div>

      {/* Stats Grid */}
      <div className="mb-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-white/80 p-3">
          <div className="mb-2 flex items-center gap-2">
            <DollarSign className="size-4 text-primary" />
            <span className="text-xs text-muted-foreground">Total Lent</span>
          </div>
          <p className="text-xl font-bold text-foreground">₦5.2M</p>
        </div>

        <div className="rounded-lg bg-white/80 p-3">
          <div className="mb-2 flex items-center gap-2">
            <Users className="size-4 text-primary" />
            <span className="text-xs text-muted-foreground">Active Loans</span>
          </div>
          <p className="text-xl font-bold text-foreground">12</p>
        </div>

        <div className="rounded-lg bg-white/80 p-3">
          <div className="mb-2 flex items-center gap-2">
            <Percent className="size-4 text-primary" />
            <span className="text-xs text-muted-foreground">Avg. Rate</span>
          </div>
          <p className="text-xl font-bold text-foreground">10.2%</p>
        </div>

        <div className="rounded-lg bg-white/80 p-3">
          <div className="mb-2 flex items-center gap-2">
            <TrendingUp className="size-4 text-primary" />
            <span className="text-xs text-muted-foreground">Returns</span>
          </div>
          <p className="text-xl font-bold text-foreground">₦520K</p>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="rounded-lg bg-white/80 p-4">
        <p className="mb-3 text-xs font-medium text-muted-foreground">30-DAY PERFORMANCE</p>
        <div className="flex h-24 items-end justify-between gap-1.5">
          {[40, 65, 45, 80, 55, 70, 60, 85, 75, 90, 70, 95].map((height, i) => (
            <div
              key={i}
              className="w-full rounded-t bg-primary/80 transition-all hover:bg-primary"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
