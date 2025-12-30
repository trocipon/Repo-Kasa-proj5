import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <>
      <section className="notfound-section">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-content">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="redirection-home">
          Retourner sur la page d'accueil
        </Link>
      </section>
    </>
  );
}
