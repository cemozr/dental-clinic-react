import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Button from "../UI/Button";

export default function InfoSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">Ece Dental</h2>
      <p className="text-center">
        Hastalarımıza en iyi hizmeti sunabilmek için piyasadaki en kaliteli
        malzemeleri kullanıyoruz. Bu yüzden hiçbir şey için endişelenmeyin ve
        bize güvenin. 🦷🪥👩‍⚕️
      </p>
      <div className="flex gap-4">
        <Button el="link" to="/">
          <FaFacebook
            color="white"
            size="2em"
            className="hover:shadow-lg hover:shadow-custom-mid-blue"
          />
        </Button>
        <Button el="link" to="/">
          <AiFillInstagram
            color="white"
            size="2em"
            className="hover:shadow-lg hover:shadow-purple-700"
          />
        </Button>
        <Button el="link" to="/">
          <FaSquareXTwitter
            color="white"
            size="2em"
            className="hover:shadow-lg hover:shadow-secondary"
          />
        </Button>
        <Button el="link" to="/">
          <FaLinkedin
            color="white"
            size="2em"
            className="hover:shadow-lg hover:shadow-custom-sky-blue"
          />
        </Button>
      </div>
    </section>
  );
}
