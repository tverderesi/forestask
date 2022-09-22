import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";


function App() {
  const style = {
    backgroundImage: `url("./media/4.png")`,
    height: "90vh",
    margin: "0",
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "0 90%",
  }
  return (
<>
<div
      className="App"
      style={style}>
      <Header />
    </div>
    <Navbar/></>
  );
}

export default App;
