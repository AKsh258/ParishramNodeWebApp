import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.loginData);
  console.log("isAuthenticated  ;-", isAuthenticated);
  //   const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
