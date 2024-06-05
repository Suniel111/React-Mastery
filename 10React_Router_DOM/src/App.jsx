import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Header,
  Footer,
  About,
  Contact,
  Errorpage,
  User,
} from "./Components/index";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
