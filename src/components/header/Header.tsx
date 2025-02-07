import Button from "../UI/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { FaTooth } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Navigation from "./Navigation";

export default function Header() {
  const location = useLocation();
  const { pathname } = location;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header
        className={`${pathname === "/" ? "bg-secondary lg:bg-custom-light-blue" : "bg-custom-light-blue lg:bg-secondary"} mx-4 mt-5 flex h-12 items-center justify-between rounded-md p-4 lg:mx-20 lg:h-24 lg:px-7`}
      >
        <div className="flex items-center gap-3 text-custom-dark-blue">
          <div className="rounded-full border-b-2 border-l-2 border-custom-mid-blue p-3">
            <FaTooth className="text-3xl text-custom-mid-blue" />
          </div>
          <h1 className="text-xl font-bold">Ece Dental</h1>
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
        <div className="hidden lg:flex">
          <Button el="colored-link-button" to="/appointment">
            Randevu Al
          </Button>
        </div>
      </header>
      {isOpen && (
        <nav
          className="mt-2 flex flex-col items-center justify-center"
          id="nav-links"
          ref={navRef}
        >
          <ul className="flex flex-col gap-2 text-center">
            <Navigation />
          </ul>
        </nav>
      )}
    </>
  );
}
