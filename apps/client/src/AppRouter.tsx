import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboard from "./pages/Onboard";
import OnboardUI from "./components/layout/login/OnboardUI";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import AppHome from "./pages/AppHome";
import { Home } from "./pages/Home";
import AdminHome from "./organisms/AdminHome";
import ProfileEditPage from "./pages/ProfileEditPage";
import Loading from "./components/layout/Loading";


export function AppRouter() {
  
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} errorElement={<NotFound />}>
          <Route
            path="/loading"
            element={<Loading className="h-screen w-screen" text={"loading"} />}
          />
        </Route>
        <Route path="/admin" element={<AdminHome />} />

        <Route path="/app/" element={<Onboard />} errorElement={<NotFound />}>
          <Route path="/app/" element={<OnboardUI />} />
          <Route path="/app/login" element={<Login />} />
          <Route path="/app/register" element={<Register />} />
        </Route>
        <Route path="app/home/*" element={<AppHome />}>
          <Route path="profile" element={<ProfileEditPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
