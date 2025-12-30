import { Link } from "react-router-dom";

export default function Card({ title, pictures, id }) {
  return (
    <>
      <div className="image-wrapper">
        <Link to={`/fiche-logement/${id}`} className="container">
          <img src={pictures[0]} className="responsive" />
          <div className="overlay-text">{title}</div>
        </Link>
      </div>
    </>
  );
}
