"use client";
import { useRouter, usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../states/store";
import { persistence } from "../services/user.services";
import { setUser } from "../states/user";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoutes: React.FC<ProtectedRouteProps> = ({ children }) => {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user.email);
  const allowedPathname = useMemo(() => {
    return ["/login", "/newpassword", "/recovery"];
  }, []);
  const pathname = usePathname();
  const { push } = useRouter();
  const checkUserSession = useCallback(async () => {
    try {
      if (pathname === "/") push("/home");
      if (user || allowedPathname.includes(pathname)) return;
      const userResponse = await persistence();
      dispatch(setUser(userResponse));
      if (pathname === "/") push("/home");
    } catch (error) {
      push("/login");
      console.error(error);
    }
  }, [dispatch, push, user, allowedPathname, pathname]);

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  if (allowedPathname.includes(pathname)) {
    return children;
  }

  if (!user && !allowedPathname.includes(pathname)) {
    return null;
  }
  return <>{children}</>;
};

export default ProtectedRoutes;
