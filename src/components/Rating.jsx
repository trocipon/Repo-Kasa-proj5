import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Rating({ rating }) {
  const totalStars = 5;
  const filledStars = Math.min(Math.max(parseInt(rating, 10) || 0, 0), totalStars);

  const stars = Array.from({ length: totalStars }, (_, i) => {
    const isFilled = i < filledStars;
    return (
      <span key={i} className={`star ${isFilled ? "filled" : "empty"}`}>
        <FontAwesomeIcon icon="fa-solid fa-star" />
      </span>
    );
  });

  return (
    <div className="rating-container">
      {stars}
    </div>
  );
}

