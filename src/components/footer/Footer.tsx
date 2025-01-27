import ContactSection from "./ContactSection";
import InfoSection from "./InfoSection";
import WorkHoursSection from "./WorkHoursSection";

export default function Footer() {
  return (
    <footer className="grid items-center justify-center gap-4 bg-custom-dark-blue px-2 py-5 text-secondary lg:grid-cols-3">
      <ContactSection />
      <InfoSection />
      <WorkHoursSection />
    </footer>
  );
}
