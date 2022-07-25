import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import AuthenticatedRoute from "./AuthenticatedRoute";
import Layout from "layouts";
import AuthLayout from "layouts/AuthLayout";
import Login from "pages/auth/Login";
import SignUp from "pages/auth/SignUp";
import Dashboard from "pages/dashboard";
import About from "pages/about";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route
            path="login"
            element={
              <AuthenticatedRoute>
                <Login />
              </AuthenticatedRoute>
            }
          ></Route>
          <Route
            path="signUp"
            element={
              <AuthenticatedRoute>
                <SignUp />
              </AuthenticatedRoute>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
