"use client";

import Image from "next/image";

const logos = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9966263c-e42d-49b3-a09d-5067be7c7e76-streamline-nextjs-template-vercel-app/assets/svgs/mercury-2.svg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9966263c-e42d-49b3-a09d-5067be7c7e76-streamline-nextjs-template-vercel-app/assets/svgs/watershed-3.svg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9966263c-e42d-49b3-a09d-5067be7c7e76-streamline-nextjs-template-vercel-app/assets/svgs/retool-4.svg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9966263c-e42d-49b3-a09d-5067be7c7e76-streamline-nextjs-template-vercel-app/assets/svgs/descript-5.svg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9966263c-e42d-49b3-a09d-5067be7c7e76-streamline-nextjs-template-vercel-app/assets/svgs/perplexity-6.svg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9966263c-e42d-49b3-a09d-5067be7c7e76-streamline-nextjs-template-vercel-app/assets/svgs/monzo-7.svg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9966263c-e42d-49b3-a09d-5067be7c7e76-streamline-nextjs-template-vercel-app/assets/svgs/ramp-8.svg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9966263c-e42d-49b3-a09d-5067be7c7e76-streamline-nextjs-template-vercel-app/assets/svgs/raycast-9.svg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9966263c-e42d-49b3-a09d-5067be7c7e76-streamline-nextjs-template-vercel-app/assets/svgs/arc-10.svg",
];

export default function LogoCarousel() {
  return (
    <section className="bg-background py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-semibold md:text-4xl">
            Trusted infrastructure partners
          </h2>
          <p className="text-muted-foreground">
            Built on enterprise-grade security and compliance standards
          </p>
        </div>

        {/* Infinite Scroll Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-12">
            {/* First set */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 p-6 grayscale transition-all hover:grayscale-0"
              >
                <Image
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain opacity-70 hover:opacity-100"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 p-6 grayscale transition-all hover:grayscale-0"
              >
                <Image
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}