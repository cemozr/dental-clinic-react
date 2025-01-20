import HeroSection from "./HeroSection";
import SmileSection from "./SmileSection";
import WhyChooseUsSection from "./WhyChooseUsSection";

export default function HomePage() {
  return (
    <main className="my-10 flex flex-grow flex-col items-center gap-5 text-custom-dark-blue">
      <HeroSection />
      <WhyChooseUsSection />
      <SmileSection />
    </main>
  );
}
