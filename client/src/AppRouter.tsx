import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboard from "./pages/Onboard";
import OnboardUI from "./components/layout/login/OnboardUI";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AuthRoute from "./util/AuthRoute";
import StudentHome from "./pages/StudentHome";
import Home from "./pages/Home";

import NotFound from "./pages/NotFound";
import AppHome, { TeacherHome } from "./pages/AppHome";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import AdminHome from "./pages/AdminHome";

export function AppRouter() {
  const { user } = useContext(AuthContext) as any;
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} errorElement={<NotFound />}>
          {/* prettier-ignore */}
        </Route>
        <Route path="/app/" element={<Onboard />} errorElement={<NotFound />}>
          <Route path="/app/" element={<OnboardUI />} />
          <Route path="/app/login" element={<Login />} />
          <Route path="/app/register" element={<Register />} />
        </Route>
        <Route path="app/home/" element={<AppHome />}>
          <Route
            path="app/home/:id"
            element={
              user.privilegeLevel === "ADMIN" ? (
                <AdminHome />
              ) : user.privilegeLevel === "STUDENT" ? (
                <StudentHome />
              ) : (
                <TeacherHome />
              )
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

// Old Routes
