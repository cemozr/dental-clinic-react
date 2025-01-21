import Button from "../UI/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { FaTooth } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Navigation from "./Navigation";

export default function Header() {
  const location = useLocation();
  const { pathname } = location;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <header
        className={`${pathname === "/" ? "bg-secondary lg:bg-custom-light-blue" : "bg-custom-light-blue lg:bg-secondary"} mx-4 mt-5 flex h-12 items-center justify-between rounded-md p-4 lg:mx-20 lg:h-24 lg:px-7`}
      >
        <div className="flex gap-2">
          <FaTooth className="text-3xl" />
          <h1 className="text-xl font-bold">Lorem Dental</h1>
        </div>
        <div className="lg:hidden">
          {isOpen ? (
            <ImCross className="text-xl" onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <RxHamburgerMenu
              className="text-xl"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>

        <nav className="hidden lg:block">
          <ul className="flex gap-10">
            <Navigation />
          </ul>
        </nav>
        <Button el="header-button">Randevu Al</Button>
      </header>
      {isOpen && (
        <nav className="mt-2 flex flex-col items-center justify-center">
          <ul className="flex flex-col gap-2 text-center">
            <Navigation />
          </ul>
        </nav>
      )}
    </>
  );
}
