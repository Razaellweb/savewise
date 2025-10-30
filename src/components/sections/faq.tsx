"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is YouFi?",
    answer: "YouFi is a peer-to-peer lending marketplace that connects crypto and fiat lenders with borrowers in emerging markets. Loans are secured by crypto collateral (USDC/USDT) and disbursed in local currency or stablecoins.",
  },
  {
    question: "How does the collateral system work?",
    answer: "All loans require 135% initial LTV (Loan-to-Value) in USDC or USDT collateral. If the collateral value drops to 115% LTV, the loan is automatically liquidated. Your collateral is held in secure custodial escrow throughout the loan period.",
  },
  {
    question: "What are the KYC requirements?",
    answer: "Tier 1 (Basic) requires BVN, phone, email, and selfie verification for borrowing up to ₦1M/$500. Tier 2 (Full) adds ID and proof of address for lending privileges and limits up to ₦5M/$2,500.",
  },
  {
    question: "How long can I borrow for?",
    answer: "In V1, loan tenors are limited to 30 days maximum. There's a 5-day grace period after the due date before liquidation. Loan extensions will be available in V1.1.",
  },
  {
    question: "What currencies are supported?",
    answer: "You can borrow in Nigerian Naira (NGN) or USDC. Collateral must be in USDC or USDT on Polygon, BNB Chain, or Tron networks. NGN is disbursed via Providus Bank virtual accounts.",
  },
  {
    question: "What fees do I pay?",
    answer: "Borrowers pay 1.25% loan origination fee. Lenders pay 27.5% performance fee on interest earned. Platform collects ₦1,000 flat fee per loan. Withdrawals cost ₦60 (NGN) or 0.001% (USD).",
  },
  {
    question: "Can I top up my collateral?",
    answer: "No, collateral top-ups are not available in V1. Make sure to provide sufficient collateral at origination to avoid liquidation if prices move against you.",
  },
  {
    question: "How do I become a lender?",
    answer: "Lenders must complete Tier 2 KYC verification and fill out an application form. Currently, lenders are management-selected for the closed beta with 10 spots available.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-card py-16 md:py-20 lg:py-32">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-semibold md:text-4xl lg:mb-16">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b pb-6 transition-colors hover:bg-accent/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-start justify-between gap-4 text-left"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDown
                  className={`size-5 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-3 text-muted-foreground">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}