import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import IdentitySection from "@/sections/IdentitySection";
import Journey from "@/sections/Journey";
import Reality from "@/sections/Reality";
import Transformation from "@/sections/Transformation";
import Programs from "@/sections/Programs";
import Impact from "@/sections/Impact";
import Method from "@/sections/Method";
import WorldMap from "@/sections/WorldMap";
import Testimonials from "@/sections/Testimonials";
import Founder from "@/sections/Founder";
import CTA from "@/sections/CTA";
import Footer from "@/sections/Footer";
import VisionMission from "@/sections/VisionMission";
import CoreValues from "@/sections/CoreValues";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <IdentitySection />
      <Journey />
      <Reality />
      <Transformation />
      <Programs />
      <Impact />
      <Method />
      <VisionMission />
      <CoreValues />
      <WorldMap />
      <Testimonials />
      <Founder />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
