import { useParams } from "react-router-dom";
import data from "../data/data.json";
import Carrousel from "../components/Carrousel";
import Rating from "../components/Rating";
import Tag from "../components/Tag.jsx";
import Host from "../components/Host";
import Notfound from "./Notfound";
import Dropdowns from "../components/Dropdowns";

export default function Rental() {
  const { id } = useParams();
  const rental = data.find((logement) => logement.id === id);

  if (!rental) {
    return <Notfound />;
  }

  return (
    <>
      <section className="rental-section rental-page">
        <Carrousel pictures={rental.pictures} />
        <div className="rental-header">
          <div className="rental-info">
            <h1 className="rental-title">{rental.title}</h1>
            <p className="rental-location">{rental.location}</p>
            <Tag tags={rental.tags} />
          </div>
          <Host host={rental.host} />
          <Rating rating={rental.rating} />
        </div>

        <div className="rental-main">
          <Dropdowns
            title="Description"
            description={rental.description}
            className="rental-description"
          />
          <Dropdowns
            title="Équipements"
            description={
              <ul className="equipments-list">
                {rental.equipments.map((equipment) => (
                  <li key={equipment}>{equipment}</li>
                ))}
              </ul>
            }
            className="rental-equipments"
          />
        </div>
      </section>
    </>
  );
}
