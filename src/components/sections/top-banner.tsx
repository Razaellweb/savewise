"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-primary text-primary-foreground">
      <div className="container mx-auto px-5 py-2.5">
        <div className="flex items-center justify-center gap-4">
          <p className="text-center text-sm">
            🎉 <strong>SaveWise Early Access</strong> — Now open in Nigeria and West Africa.
          </p>
          <Button variant="secondary" size="sm" className="h-7 px-3 text-xs font-semibold" asChild>
            <Link href="/signup" data-event-name="cta_top_banner_signup">Get started</Link>
          </Button>
        </div>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-sm p-1 hover:bg-primary-foreground/10"
        aria-label="Close banner"
        data-event-name="dismiss_top_banner"
      >
        <X className="size-4" />
      </button>
    </div>
  );
}
