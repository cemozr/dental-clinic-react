import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import { AppDispatch, RootState } from "../../../states/store";
import { logout } from "../../../states/authSlice";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../UI/Loading";
import bannerImage from "/assets/image4.png";
import bannerImage2 from "/assets/Rectangle662_1.png";

export default function AdminPage() {
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state: RootState) => state.authReducer);

  const handleSignOut = () => {
    dispatch(logout()).then(
      (res) => res.meta.requestStatus === "fulfilled" && navigate("/auth"),
    );
  };

  return (
    <main className="flex-grow lg:mx-20">
      {isLoading && <Loading />}

      {pathname === "/admin" ? (
        <div className="my-10 grid w-full grid-cols-1 justify-center md:grid-cols-2 md:gap-8">
          <div
            className="relative flex items-center justify-center hover:cursor-pointer"
            onClick={() => navigate("appointment-management")}
          >
            <img
              className="h-[516px] w-full object-cover md:rounded-tr-lg"
              src={bannerImage}
              alt=""
            />
            <div className="absolute left-0 top-0 h-full w-full bg-custom-dark-blue bg-opacity-25 hover:bg-opacity-50 md:rounded-tr-lg"></div>
            <h1 className="absolute text-4xl font-bold text-secondary">
              Randevuları Yönet 🦷
            </h1>
          </div>

          <div
            className="relative flex items-center justify-center hover:cursor-pointer"
            onClick={() => navigate("employee-management")}
          >
            <img
              className="h-[516px] w-full object-cover md:rounded-tl-lg"
              src={bannerImage2}
              alt=""
            />
            <div className="absolute left-0 top-0 h-full w-full bg-custom-dark-blue bg-opacity-25 hover:bg-opacity-50 md:rounded-tl-lg"></div>
            <h1 className="absolute text-4xl font-bold text-secondary">
              Çalışanları Yönet 👩‍⚕️
            </h1>
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </main>
  );
}
