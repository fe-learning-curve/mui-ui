import React from "react";
import { useIsAuthenticated } from "hooks/auth";
import { Navigate, useLocation } from "react-router-dom";

function AuthenticatedRoute({ children }) {
  let isAuthenticated = useIsAuthenticated();
  let location = useLocation();

  if (isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export default AuthenticatedRoute;
