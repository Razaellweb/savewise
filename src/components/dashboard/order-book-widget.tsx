"use client";

import { BookOpen, ArrowUpRight, ArrowDownLeft } from "lucide-react";

export default function OrderBookWidget() {
  return (
    <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-white to-accent p-6 shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Loan Order Book</h3>
        <BookOpen className="size-5 text-primary" />
      </div>

      {/* Borrow Orders */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <ArrowUpRight className="size-3" />
          <span>BORROW ORDERS</span>
        </div>
        <div className="space-y-2">
          {[
            { amount: "₦500,000", rate: "10.5%", tenor: "15 days" },
            { amount: "₦350,000", rate: "11.2%", tenor: "30 days" },
            { amount: "₦250,000", rate: "9.8%", tenor: "10 days" },
          ].map((order, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg bg-white/80 p-2.5 text-sm">
              <span className="font-medium text-foreground">{order.amount}</span>
              <span className="text-primary">{order.rate}</span>
              <span className="text-muted-foreground">{order.tenor}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lend Orders */}
      <div>
        <div className="mb-2 flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <ArrowDownLeft className="size-3" />
          <span>LEND ORDERS</span>
        </div>
        <div className="space-y-2">
          {[
            { amount: "₦1,000,000", rate: "8.5%", tenor: "30 days" },
            { amount: "₦750,000", rate: "9.0%", tenor: "20 days" },
          ].map((order, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg bg-white/80 p-2.5 text-sm">
              <span className="font-medium text-foreground">{order.amount}</span>
              <span className="text-primary">{order.rate}</span>
              <span className="text-muted-foreground">{order.tenor}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
