import Services from "./Services";
import Specialists from "./Specialists";

export default function ServicesPage() {
  return (
    <main className="mx-5 my-10 flex flex-grow flex-col gap-10 bg-custom-light-blue text-custom-dark-blue lg:mx-20">
      <Services />
      <Specialists />
    </main>
  );
}
