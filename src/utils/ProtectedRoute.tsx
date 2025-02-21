import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/UI/Loading";
import useAuth from "../hooks/useAuth";

type ProtectedRouteProps = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  let location = useLocation();
  const { loading, userStatus } = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (userStatus === "signed out") {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }
  return children;
}
