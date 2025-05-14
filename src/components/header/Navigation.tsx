import { useDispatch } from "react-redux";
import useAuth from "../../hooks/useAuth";
import Button from "../UI/Button";
import { AppDispatch } from "../../states/store";
import { logout } from "../../states/authSlice";
import { useNavigate } from "react-router-dom";
import { GiExitDoor } from "react-icons/gi";

export default function Navigation() {
  const { userStatus } = useAuth();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const menus: { name: string; to: string }[] = [
    { name: "Ana Sayfa", to: "/" },
    { name: "Hizmetler", to: "/services" },
    { name: "Hakkında", to: "/about" },
    { name: "İletişim", to: "/contact" },
    userStatus === "signed in"
      ? { name: "Yönetim", to: "/admin" }
      : { name: "Yönetim", to: "/auth" },
  ];

  const handleSignOut = () => {
    dispatch(logout()).then(
      (res) => res.meta.requestStatus === "fulfilled" && navigate("/"),
    );
  };

  return (
    <>
      {menus.map((menu, i) => {
        return (
          <li key={i}>
            <Button el="link" to={menu.to}>
              {menu.name}
            </Button>
          </li>
        );
      })}
      <li className="flex flex-col items-center gap-1 lg:hidden">
        <Button el="colored-link" to="/appointment">
          Randevu Al
        </Button>
        {userStatus === "signed in" && (
          <Button el="icon-button" onClick={handleSignOut}>
            <GiExitDoor />
          </Button>
        )}
      </li>
    </>
  );
}
