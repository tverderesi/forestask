import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { Header } from "./Components";
import Navbar from "./Navbar";
function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url("./media/4.png")`,
        height: "100vh",
        margin: "0",
        overflow: "hidden",
        backgroundSize: "cover",
        backgroundPosition: "0 100vh",
      }}
    >
      <Header />
      <Navbar />
    </div>
  );
}

export default App;
