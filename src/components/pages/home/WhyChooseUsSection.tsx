import Button from "../../UI/Button";
import dentistImage from "/assets/Rectangle631.png";
import { MdOutlineVerifiedUser } from "react-icons/md";

export default function WhyChooseUsSection() {
  return (
    <section className="mt-4 flex flex-col items-center justify-center bg-custom-light-blue md:flex-row lg:w-3/4 lg:gap-10 lg:rounded-tl-md lg:rounded-tr-md lg:p-10">
      <article className="flex flex-col gap-2 p-4 md:order-2 md:w-full">
        <h2 className="text-3xl font-bold">
          Tüm diş tedavileriniz için neden bizi seçmelisiniz?
        </h2>
        <p>
          Hastalarımıza en iyi ürünleri sunabilmek için piyasadaki en kaliteli
          malzemeleri kullanıyoruz. Bu yüzden hiçbir şey için endişelenmeyin ve
          kendinizi ayırtın.
        </p>
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-2">
            <MdOutlineVerifiedUser className="text-xl text-custom-mid-blue" />
            <p>En kaliteli diş ekibi</p>
          </li>
          <li className="flex items-center gap-2">
            <MdOutlineVerifiedUser className="text-xl text-custom-mid-blue" />
            <p>Son teknoloji diş hekimliği hizmetleri</p>
          </li>
          <li className="flex items-center gap-2">
            <MdOutlineVerifiedUser className="text-xl text-custom-mid-blue" />
            <p>Tüm diş tedavilerinde indirim</p>
          </li>
          <li className="flex items-center gap-2">
            <MdOutlineVerifiedUser className="text-xl text-custom-mid-blue" />
            <p>Kayıt işlemi hızlı ve kolaydır</p>
          </li>
        </ul>
        <div className="my-4 flex justify-start">
          <Button el="colored-link-button" to="/appointment">
            Randevu Al
          </Button>
        </div>
      </article>
      <div className="flex p-4 lg:order-1">
        <img
          src={dentistImage}
          alt="Dentist photo"
          className="lg-full rounded-lg"
        />
      </div>
    </section>
  );
}
