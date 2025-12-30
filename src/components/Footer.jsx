import logo from "../assets/Kasa-footer.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <img src={logo} alt="Kasa" className="footer-logo" />
        <p className="footer-text">© 2025 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
