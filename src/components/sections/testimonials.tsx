import Image from "next/image";

const testimonials = [
  {
    quote:
      "SaveWise made it easy to stick to my Target Savings for school fees. Seeing progress in real time keeps me motivated.",
    name: "Adebayo Okonkwo",
    role: "Parent",
    company: "Lagos, Nigeria",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "AutoSave takes the stress out of saving. I set it once and now I earn interest every month without thinking about it.",
    name: "Sarah Johnson",
    role: "Entrepreneur",
    company: "Accra, Ghana",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "SafeLock helped me keep my emergency fund untouched. Withdrawals are smooth through Paystack when I need them.",
    name: "Chioma Nwosu",
    role: "Designer",
    company: "Abuja, Nigeria",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    quote:
      "The dashboard shows total savings and interest at a glance. It's simple and trustworthy.",
    name: "Ibrahim Mohammed",
    role: "Engineer",
    company: "Kano, Nigeria",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    quote:
      "I reached my travel goal faster with Target Savings and reminders. Highly recommend SaveWise.",
    name: "Ama K.",
    role: "Student",
    company: "Kumasi, Ghana",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-card py-16 md:py-20 lg:py-32">
      <div className="container mx-auto">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Loved by savers across West Africa
          </h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            Thousands trust SaveWise to automate their savings, earn interest, and stay on track toward their goals.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-xl border bg-background p-6 transition-shadow hover:shadow-lg"
            >
              <p className="flex-grow text-base leading-relaxed">“{testimonial.quote}”</p>
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
