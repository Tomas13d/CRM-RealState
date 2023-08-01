import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../states/store";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoutes: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const userEmail = useSelector((state: RootState) => state.user.email);

  useEffect(() => {
    if (!userEmail) {
      alert("Debes estar logeado para acceder a esta caracteristica.");
      router.push("/login");
    }
  }, [userEmail, router]);

  return userEmail ? <>{children}</> : null;
};

export default ProtectedRoutes;
