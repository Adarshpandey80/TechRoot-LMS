import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Auth = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const toastId = "auth-toast";

  useEffect(() => {
    if (!user) {
      toast.info("Please login to access Course", {
        position: "top-center",
        toastId: "auth-toast",
      });
    }
  }, [user]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Auth;
