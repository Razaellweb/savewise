"use client";

import { Shield, Lock } from "lucide-react";

export default function CollateralWidget() {
  return (
    <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-white to-accent p-6 shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Collateral Escrow</h3>
        <Shield className="size-5 text-primary" />
      </div>

      {/* LTV Health */}
      <div className="mb-4 rounded-xl bg-white/80 p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">LTV Ratio</span>
          <span className="text-sm font-semibold text-primary">128%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full w-[85%] rounded-full bg-primary"></div>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">Liquidation at 115%</p>
      </div>

      {/* Locked Collateral */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <Lock className="size-3" />
          <span>LOCKED COLLATERAL</span>
        </div>

        <div className="rounded-lg bg-white/80 p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">USDC</span>
            <span className="text-sm font-semibold text-foreground">$450.00</span>
          </div>
          <p className="text-xs text-muted-foreground">Polygon Network</p>
        </div>

        <div className="rounded-lg bg-white/80 p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">USDT</span>
            <span className="text-sm font-semibold text-foreground">$225.00</span>
          </div>
          <p className="text-xs text-muted-foreground">Tron Network</p>
        </div>
      </div>

      {/* Status */}
      <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-3 text-center">
        <p className="text-xs font-medium text-primary">Collateral Status: Healthy</p>
      </div>
    </div>
  );
}
