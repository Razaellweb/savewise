import Image from "next/image";

const testimonials = [
  {
    quote: "YouFi made it incredibly easy to get a loan secured by my crypto holdings. The process was smooth and funds arrived in my Nigerian account within hours.",
    name: "Adebayo Okonkwo",
    role: "Borrower",
    company: "Lagos, Nigeria",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9966263c-e42d-49b3-a09d-5067be7c7e76-streamline-nextjs-template-vercel-app/assets/images/1-9.webp",
  },
  {
    quote: "As a lender, I appreciate the transparency and security. The 135% LTV gives me confidence, and the returns are excellent compared to traditional options.",
    name: "Sarah Chen",
    role: "Lender",
    company: "Singapore",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9966263c-e42d-49b3-a09d-5067be7c7e76-streamline-nextjs-template-vercel-app/assets/images/amy-chase-10.webp",
  },
  {
    quote: "The real-time collateral monitoring gives me peace of mind. I always know exactly where my loan stands and when payments are due.",
    name: "Chioma Nwosu",
    role: "Borrower",
    company: "Abuja, Nigeria",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9966263c-e42d-49b3-a09d-5067be7c7e76-streamline-nextjs-template-vercel-app/assets/images/victoria-smith-11.webp",
  },
  {
    quote: "The platform's mobile-first approach is perfect for our market. Everything works seamlessly on my phone, from KYC to loan management.",
    name: "Ibrahim Mohammed",
    role: "Borrower",
    company: "Kano, Nigeria",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9966263c-e42d-49b3-a09d-5067be7c7e76-streamline-nextjs-template-vercel-app/assets/images/kevin-yam-12.webp",
  },
  {
    quote: "I've funded multiple loans through YouFi and the returns have been consistent. The risk management tools are sophisticated yet easy to use.",
    name: "Marcus Liu",
    role: "Lender",
    company: "Hong Kong",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9966263c-e42d-49b3-a09d-5067be7c7e76-streamline-nextjs-template-vercel-app/assets/images/kundo-marta-13.webp",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-card py-16 md:py-20 lg:py-32">
      <div className="container mx-auto">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Trusted by borrowers and lenders
          </h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            YouFi is building bridges between crypto holders and emerging markets, creating opportunities for financial inclusion and growth.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-xl border bg-background p-6 transition-shadow hover:shadow-lg"
            >
              <p className="flex-grow text-base leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="size-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}