import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Carrousel({ pictures = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPictures = pictures.length;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPictures - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPictures - 1 ? 0 : prevIndex + 1
    );
  };

  if (totalPictures === 0) {
    return <div className="carrousel-container">Aucune image</div>;
  }

  return (
    <section className="carrousel-section">
      <div className="carrousel-container">
        <img src={pictures[currentIndex]} className="carrousel-image" />
        {totalPictures > 1 && (
          <>
            <button
              className="carrousel-button carrousel-button-left"
              onClick={goToPrevious}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-chevron-left"
                className="icon-left"
              />
            </button>
            <button
              className="carrousel-button carrousel-button-right"
              onClick={goToNext}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-chevron-right"
                className="icone-right"
              />
            </button>
            <div className="carrousel-counter">
              {currentIndex + 1} / {totalPictures}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
