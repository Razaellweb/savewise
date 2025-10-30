"use client";

import { MessageSquare, ArrowUpRight, ArrowDownLeft, Clock } from "lucide-react";

export default function TransactionWidget() {
  const transactions = [
    { type: "deposit", amount: "₦100,000", time: "2 hours ago", status: "completed" },
    { type: "loan", amount: "₦500,000", time: "5 hours ago", status: "active" },
    { type: "withdrawal", amount: "₦50,000", time: "1 day ago", status: "completed" },
    { type: "repayment", amount: "₦250,000", time: "2 days ago", status: "completed" },
    { type: "deposit", amount: "$200.00", time: "3 days ago", status: "completed" },
  ];

  return (
    <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-white to-accent p-6 shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Transaction History</h3>
        <MessageSquare className="size-5 text-primary" />
      </div>

      <div className="space-y-2.5">
        {transactions.map((tx, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg bg-white/80 p-3">
            <div className={`rounded-full p-2 ${
              tx.type === "deposit" || tx.type === "loan" ? "bg-primary/10" : "bg-gray-100"
            }`}>
              {tx.type === "deposit" || tx.type === "loan" ? (
                <ArrowDownLeft className="size-4 text-primary" />
              ) : (
                <ArrowUpRight className="size-4 text-muted-foreground" />
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium capitalize text-foreground">{tx.type}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="size-3" />
                <span>{tx.time}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-foreground">{tx.amount}</p>
              <p className={`text-xs ${
                tx.status === "completed" ? "text-primary" : "text-muted-foreground"
              }`}>
                {tx.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
