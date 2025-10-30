import TopBanner from "@/components/sections/top-banner";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import LogoCarousel from "@/components/sections/logo-carousel";
import Feature1Stats from "@/components/sections/feature1-stats";
import Feature2Resource from "@/components/sections/feature2-resource";
import Feature3Grid from "@/components/sections/feature3-grid";
import Testimonials from "@/components/sections/testimonials";
import Faq from "@/components/sections/faq";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Header />
      <main>
        <Hero />
        // <LogoCarousel />
        <Feature1Stats />
        <Feature2Resource />
        <Feature3Grid />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}