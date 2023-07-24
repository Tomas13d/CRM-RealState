import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../states/store";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const userType = useSelector((state: RootState) => state.user.type);

  useEffect(() => {
    if (userType !== "admin") {
      alert("No tienes acceso a esta funcionalidad. Debes ser administrador.");
      router.push("/");
    }
  }, [userType, router]);

  return userType === "admin" ? <>{children}</> : null;
};

export default ProtectedRoute;
