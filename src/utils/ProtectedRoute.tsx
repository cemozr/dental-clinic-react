import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../states/store";
import { Navigate, useLocation } from "react-router-dom";

type ProtectedRouteProps = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { status } = useSelector((state: RootState) => state.authReducer);
  let location = useLocation();

  if (status !== "signed in") {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return children;
}
