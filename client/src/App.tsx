/** @format */

import "./App.css";
import { AppProvider } from "./context/AppContext";

import { AuthProvider } from "./context/AuthContext";
import { AppRouter } from "./AppRouter";

export default function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </AuthProvider>
  );
}
