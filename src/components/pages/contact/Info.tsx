import { FaWhatsapp } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";

import InfoCard from "./InfoCard";

export default function Info() {
  return (
    <div className="flex flex-col gap-4 lg:col-span-1">
      <InfoCard
        icon={FaRegClock}
        header="Mesai Saatleri"
        text="Pazartesi - Cumartesi (09:00 - 17:00)"
      />
      <InfoCard
        icon={MdOutlineMailOutline}
        header="E-posta"
        text="smile00@gmail.com"
      />
      <InfoCard icon={LuPhone} header="Telefon" text="+90 242 699 9898" />
      <InfoCard icon={FaWhatsapp} header="Whatsapp" text="+90 590 990 9090" />
    </div>
  );
}
