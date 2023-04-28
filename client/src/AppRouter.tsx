import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboard from "./pages/app/onboard/Onboard";
import OnboardUI from "./components/layout/login/OnboardUI";
import Register from "./pages/app/onboard/Register";
import Login from "./pages/app/onboard/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AppHome from "./pages/app/home/AppHome";

import { NavLink } from "react-router-dom";
import Features from "./pages/Features";
import Florestarefa from "./pages/Florestarefa";
import Navbar from "./atoms/interface/Navbar";
export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} errorElement={<NotFound />}></Route>
        <Route
          path="/crazy"
          element={
            <>
              <Navbar>
                <>
                  <li>
                    <NavLink to="/#a">History</NavLink>
                  </li>
                  <li>
                    <NavLink to="/#about">About</NavLink>
                  </li>
                </>
              </Navbar>
              <Features />
              <Florestarefa />
            </>
          }
        />
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
