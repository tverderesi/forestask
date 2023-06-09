import "./style/App.css";
import { AppProvider } from "./context/AppContext";
import { AuthProvider } from "./context/AuthContext";
import { AppRouter } from "./AppRouter";
import { RegisterProvider } from "./context/RegisterContext";

export default function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <RegisterProvider>
          <AppRouter />
        </RegisterProvider>
      </AppProvider>
    </AuthProvider>
  );
}
