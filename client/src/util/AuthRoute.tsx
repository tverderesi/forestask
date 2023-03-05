/** @format */

import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

function AuthRoute({ children }) {
  const { user } = useContext(AuthContext) as any;

  if (user) {
    return <Navigate to="/app/home" replace />;
  } else {
    return children;
  }
}

export default AuthRoute;
