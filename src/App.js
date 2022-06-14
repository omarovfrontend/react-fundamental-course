import React from "react";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";
import "./styles/App.css";

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  )
}

export default App;
