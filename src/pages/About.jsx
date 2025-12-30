import Banner from "../components/Banner";
import banner from "../assets/About-picture.webp";
import Dropdowns from "../components/Dropdowns";
import data from "../data/aboutList.json";

export default function About() {
  return (
    <main className="page about-page">
      <Banner
        className="banner-section banner-about"
        picture={banner}
        text=""
      />
      <section className="dropdowns-section">
        {data.map(({ title, description }) => (
          <Dropdowns
            key={title}
            title={title}
            description={description}
            defaultOpen={false}
          />
        ))}
      </section>
    </main>
  );
}
