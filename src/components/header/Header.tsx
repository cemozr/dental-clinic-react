import Button from "../UI/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { FaTooth } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Navigation from "./Navigation";
import useAuth from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../states/store";
import { logout } from "../../states/authSlice";

export default function Header() {
  const location = useLocation();
  const { pathname } = location;
  const { userStatus } = useAuth();
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
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

  const handleSignOut = () => {
    dispatch(logout()).then(
      (res) => res.meta.requestStatus === "fulfilled" && navigate("/"),
    );
  };

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
          <ul className="flex lg:gap-5 xl:gap-10">
            <Navigation />
          </ul>
        </nav>
        <div className="hidden lg:flex">
          {userStatus === "signed in" ? (
            <Button el="button" onClick={handleSignOut}>
              Çıkış yap
            </Button>
          ) : (
            <Button el="colored-link-button" to="/appointment">
              Randevu Al
            </Button>
          )}
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
