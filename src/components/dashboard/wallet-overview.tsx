"use client";

import { Wallet, TrendingUp, ArrowUpRight, ArrowDownLeft } from "lucide-react";

export default function WalletOverview() {
  return (
    <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-white to-accent p-6 shadow-2xl">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Wallet Overview</h3>
        <Wallet className="size-5 text-primary" />
      </div>

      {/* Total Balance */}
      <div className="mb-6 rounded-xl bg-white/80 p-4">
        <p className="mb-1 text-sm text-muted-foreground">Total Balance</p>
        <p className="text-3xl font-bold text-foreground">₦2,458,000</p>
        <div className="mt-2 flex items-center gap-1 text-sm text-primary">
          <TrendingUp className="size-4" />
          <span>+12.5% this month</span>
        </div>
      </div>

      {/* Wallets */}
      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-lg bg-white/80 p-3">
          <div>
            <p className="text-sm font-medium text-foreground">NGN Wallet</p>
            <p className="text-xs text-muted-foreground">Providus Bank</p>
          </div>
          <p className="font-semibold text-foreground">₦1,250,000</p>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-white/80 p-3">
          <div>
            <p className="text-sm font-medium text-foreground">USDC Wallet</p>
            <p className="text-xs text-muted-foreground">Polygon Network</p>
          </div>
          <p className="font-semibold text-foreground">$845.32</p>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-white/80 p-3">
          <div>
            <p className="text-sm font-medium text-foreground">USDT Wallet</p>
            <p className="text-xs text-muted-foreground">Tron Network</p>
          </div>
          <p className="font-semibold text-foreground">$362.50</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          <ArrowDownLeft className="size-4" />
          Deposit
        </button>
        <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-primary/20 bg-white px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent">
          <ArrowUpRight className="size-4" />
          Withdraw
        </button>
      </div>
    </div>
  );
}
