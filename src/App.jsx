import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

//pages
import { Home } from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loguin from "./pages/Loguin";
import Register from "./pages/Register";

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/*60 de vh */}
      <div className="min-h-[60vh] mb-80 ">
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/sobre" element={<About />} />
          <Route path="/login" element={<Loguin />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
