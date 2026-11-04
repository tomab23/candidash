import { useAuth } from "@/context/AuthContext";
import WaitingPage from "@/pages/WaitingPage";
import { Navigate, Outlet } from "react-router-dom";

const GuestRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <WaitingPage />;
  }

  if (user) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
};

export default GuestRoute;