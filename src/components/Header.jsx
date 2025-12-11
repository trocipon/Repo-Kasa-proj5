
import logo from "../assets/Kasa.svg";
import "./styles/Header.scss";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Kasa" className="kasa-logo" />
        <nav>
          <ul>
            <li>Accueil</li>
            <li>À propos</li>
          </ul>
        </nav>
    </header>
  );
}

