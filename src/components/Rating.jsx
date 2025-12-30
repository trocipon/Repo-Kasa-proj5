import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Rating({ rating }) {
  let filledStars = Number(rating) || 0;
  if (filledStars > 5) filledStars = 5;
  if (filledStars < 0) filledStars = 0;

  return (
    <div className="rating-container">
      {Array(5).fill().map((_, i) => (
        <span key={i} className={`star ${i < filledStars ? "filled" : "empty"}`}>
          <FontAwesomeIcon icon="fa-solid fa-star" />
        </span>
      ))}
    </div>
  );
}


