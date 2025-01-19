import { FaTooth } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2">
      <section className="flex justify-center gap-1">
        <FaTooth className="text-2xl" />
        <h1 className="font-bold">Lorem Dental</h1>
      </section>
      <section className="px-4 lg:text-center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          quos?
        </p>
      </section>
      <section className="px-4">
        <h3 className="mb-2 w-1/2 border-b-2 pb-2 font-semibold lg:text-xl">
          Bizi Takip Edin
        </h3>
        <div className="flex gap-4 text-xl md:text-2xl">
          <FaFacebook />
          <AiFillInstagram />
          <FaSquareXTwitter />
          <FaLinkedin />
        </div>
      </section>
      <section className="bg-custom-dark-blue text-secondary w-full text-center">
        <p>Tüm Hakları Saklıdır. 2025</p>
      </section>
    </footer>
  );
}
