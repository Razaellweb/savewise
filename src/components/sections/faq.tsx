"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is SaveWise?",
    answer:
      "SaveWise is a goal-based savings platform for individuals and families in Nigeria and West Africa. Create AutoSave, Target Savings, or SafeLock plans, fund securely, and earn competitive interest.",
  },
  {
    question: "How do I deposit and withdraw?",
    answer:
      "You can deposit and withdraw securely via trusted Nigerian payment gateways like Paystack or Flutterwave. Funds settle quickly and securely to your linked accounts.",
  },
  {
    question: "What are the savings plans?",
    answer:
      "AutoSave automates periodic contributions, Target Savings helps you reach a specific amount by a deadline, and SafeLock locks funds for a period to earn higher interest.",
  },
  {
    question: "How is interest calculated?",
    answer:
      "Interest rates are tailored by plan type. AutoSave and Target Savings offer flexible competitive rates, while SafeLock offers higher fixed rates for locked periods.",
  },
  {
    question: "Is SaveWise secure?",
    answer:
      "Yes. We use encryption, device checks, and fraud monitoring. Payments run through Paystack and Flutterwave, which are compliant and widely trusted in Nigeria and West Africa.",
  },
  {
    question: "Can I pause or change my plan?",
    answer:
      "You can adjust AutoSave and Target Savings contributions anytime. SafeLock funds are fixed until maturity, after which you can withdraw or reinvest.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-card py-16 md:py-20 lg:py-32" id="faq">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-semibold md:text-4xl lg:mb-16">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-6 transition-colors hover:bg-accent/50">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-start justify-between gap-4 text-left"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDown
                  className={`size-5 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
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
