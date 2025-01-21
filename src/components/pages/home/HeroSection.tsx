import { FaPhoneVolume } from "react-icons/fa6";
import Button from "../../UI/Button";
import bannerImage from "/assets/image11.png";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center bg-secondary md:flex-row lg:w-3/4">
      <article className="flex flex-col gap-4 p-4">
        <h1 className="text-4xl font-bold">
          Hayatınızın En İyi Diş Tedavisi Deneyimine Hazır Olun!
        </h1>
        <p>
          Hastalarımıza en iyi ürünleri sunabilmek için piyasadaki en kaliteli
          malzemeleri kullanıyoruz. Bu yüzden hiçbir şey için endişelenmeyin ve
          kendinizi ayırtın.
        </p>
        <div className="flex gap-4">
          <Button el="colored-link-button" to="/">
            Randevu Al
          </Button>
          <div className="flex items-center gap-4">
            <FaPhoneVolume className="text-custom-mid-blue" />
            <div>
              <h4 className="font-semibold text-custom-mid-blue">
                7/24 Acil Hizmeti
              </h4>
              <p className="font-semibold">0212 685 9487</p>
            </div>
          </div>
        </div>
      </article>
      <div className="mt-2 w-full place-items-end">
        <img src={bannerImage} alt="Dentist" />
      </div>
    </section>
  );
}
