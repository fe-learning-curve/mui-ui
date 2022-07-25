import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useIsAuthenticated } from "hooks/auth";

function isPassPermission() {
  return true;
}

function useMerchantPermissions() {
  return [];
}

function PrivateRoute({ children, permissions = [] }) {
  let isAuthenticated = useIsAuthenticated();
  const merchantPermissions = useMerchantPermissions();
  let location = useLocation();

  console.log("isAuthenticated", isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  if (!permissions?.length) return children;

  const isValid = isPassPermission({ permissions, merchantPermissions });

  if (isValid) return children;

  return <Navigate to="/auth/login" state={{ from: location }} replace />;
}

export default PrivateRoute;
