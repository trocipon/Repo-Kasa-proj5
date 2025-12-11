
import footer from "../assets/Footer-picture-desktop.svg";
import "./styles/Footer.scss";

export default function Footer() {
  return (
    <footer>
        <img src={footer} alt="Kasa" className="footer-picture" />
    </footer>
  );
}
