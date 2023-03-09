import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboard from "./pages/app/onboard/Onboard";
import OnboardUI from "./components/layout/login/OnboardUI";
import Register from "./pages/app/onboard/Register";
import Login from "./pages/app/onboard/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AppHome from "./pages/app/home/AppHome";

export function AppRouter() {
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
        <Route path="app/home/*" element={<AppHome />}>
          <Route path="profile" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
