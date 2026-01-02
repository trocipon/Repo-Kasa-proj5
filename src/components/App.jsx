import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "../pages/Home";
import Footer from "./footer";
import React, { Suspense } from "react";

const Rental = React.lazy(() => import("../pages/Rental"));
const About = React.lazy(() => import("../pages/About"));
const NotFound = React.lazy(() => import("../pages/Notfound"));

export default function App() {
  return (
    <Router>
      <div className="mainContainer">
        <Header />
        <Suspense fallback={<div>Chargement...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fiche-logement/:id" element={<Rental />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </Router>
  );
}
