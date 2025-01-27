import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function ContactSection() {
  return (
    <section className="flex flex-col items-center gap-2">
      <h2 className="text-center text-2xl font-bold">İletişim</h2>

      <div className="flex items-center gap-2">
        <LuPhone size="1.5em" /> <p>+90 242 699 9898</p>
      </div>
      <div className="flex items-center gap-2">
        <FaWhatsapp size="1.5em" /> <p>+90 590 990 9090</p>
      </div>
      <div className="flex items-center gap-2">
        <MdOutlineMailOutline size="1.5em" /> <p>smile00@gmail.com</p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <IoLocationOutline size="1.8em" />
        <p className="w-1/2">
          Beştelsiz, 124. Sk. No:9, 34020 Zeytinburnu/İstanbul
        </p>
      </div>
    </section>
  );
}
