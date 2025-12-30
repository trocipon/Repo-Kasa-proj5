import data from "../data/data.json";
import Banner from "../components/Banner";
import banner from "../assets/Banner-picture.webp";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <Banner
        className="banner-section banner-home"
        picture={banner}
        text="Chez vous, partout et ailleurs"
      />
      <section className="rentals-section">
        {data.map(({ title, pictures, id }) => (
          <Card
            className="rental-card"
            key={id}
            title={title}
            pictures={pictures}
            id={id}
          />
        ))}
      </section>
    </>
  );
}
