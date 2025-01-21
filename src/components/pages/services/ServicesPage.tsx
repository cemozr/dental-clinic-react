import Services from "./Services";
import Specialists from "./Specialists";

export default function ServicesPage() {
  return (
    <main className="my-10 flex flex-grow flex-col gap-10 bg-custom-light-blue px-10 text-custom-dark-blue">
      <Services />
      <Specialists />
    </main>
  );
}
