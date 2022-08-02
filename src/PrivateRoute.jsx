import useAuthStore from "pages/auth/store";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function isPassPermission() {
  return true;
}

function useMerchantPermissions() {
  return [];
}

function PrivateRoute({ children, permissions = [] }) {
  let authenticated = useAuthStore((state) => state?.authenticated);
  const merchantPermissions = useMerchantPermissions();
  let location = useLocation();

  if (!authenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  if (!permissions?.length) return children;

  const isValid = isPassPermission({ permissions, merchantPermissions });

  if (isValid) return children;

  return <Navigate to="/auth/login" state={{ from: location }} replace />;
}

export default PrivateRoute;
