import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuthStore from "pages/auth/store";

function AuthenticatedRoute({ children }) {
  let authenticated = useAuthStore((state) => state?.authenticated);
  let location = useLocation();

  if (authenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export default AuthenticatedRoute;
