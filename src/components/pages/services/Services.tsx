import TreatmentCard from "../../UI/TreatmentCard";
import servicesData from "../../../data/services.json";
import { useEffect, useState } from "react";
import Carousel from "../../UI/Carousel";

export default function Services() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <article className="mt-10 flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">Hizmetler</h1>
        <p>
          Hastalarımıza en iyi ürünleri sunabilmek için sadece piyasadaki en
          kaliteli malzemeleri kullanıyoruz.
        </p>
      </article>
      {isMobile ? (
        <Carousel type="treatment-carousel" data={servicesData.services} />
      ) : (
        <ul className="grid grid-cols-3 gap-4">
          {servicesData.services.map((service, i) => {
            return (
              <li key={i}>
                <TreatmentCard
                  imgsrc={service.imgsrc}
                  header={service.header}
                  description={service.description}
                />
              </li>
            );
          })}
        </ul>
      )}{" "}
    </>
  );
}
