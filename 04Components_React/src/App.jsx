import React from "react";
import { Header, Footer } from "./Components/Header";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <h1 className="text-3xl font-extrabold m-4 p-4 bg-slate-400 w-full center">
        App
      </h1>
      <Footer />
    </>
  );
}

export default App;
