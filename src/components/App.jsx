import { useState } from "react"; // quelle fonctionnalité ? (template Vite)
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import "../styles/App.scss";

export default function App() {
  return (
    <>
      <Header />
      <Main>
        {/* Composants à adapter pour chaque page ? */}
      </Main>
      <Footer />
    </>
  );
}
