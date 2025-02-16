import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import { AppDispatch, RootState } from "../../../states/store";
import { logout } from "../../../states/authSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../../UI/Loading";
import { useEffect } from "react";

export default function AdminPage() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { status, isLoading } = useSelector(
    (state: RootState) => state.authReducer,
  );
  const handleSignOut = () => {
    dispatch(logout());
  };
  useEffect(() => {
    status === "signed out" && navigate("/");
  }, [status]);
  return (
    <main className="flex-grow">
      {isLoading && <Loading />}
      <Button el="button" onClick={handleSignOut}>
        Çıkış Yap
      </Button>
    </main>
  );
}
