import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../states/store";
import { setUser } from "../states/authSlice";

export default function useAuth() {
  const { userStatus } = useSelector((state: RootState) => state.authReducer);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(setUser("signed in"));
      } else {
        dispatch(setUser("signed out"));
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [dispatch]);

  return { userStatus, loading };
}
