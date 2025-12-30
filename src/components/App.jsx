import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "../pages/Home";
import Rental from "../pages/Rental";
import About from "../pages/About";
import NotFound from "../pages/Notfound";
import Footer from "./footer";

export default function App() {
  return (
    <Router>
      <div className="mainContainer">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiche-logement/:id" element={<Rental />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
