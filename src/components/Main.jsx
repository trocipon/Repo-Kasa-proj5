
import banner from "../assets/Banner-picture.webp";
import "./styles/Main.scss";

export default function Main() {
  return (
    <main>
        <img src={banner} alt="Landscape" className="banner-picture" />
        {/* Composants à adapter pour chaque page ? */}
    </main>
  );
}

