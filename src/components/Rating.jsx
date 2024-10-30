import "../styles/house.css";
import starActive from "../assets/star-active.svg";
import starInactive from "../assets/star-inactive.svg";

export function Rating({ rating }) {
  const ratingNumber = Number(rating);
  const stars = [1, 2, 3, 4, 5];

  return stars.map((e, i) =>
    e <= ratingNumber ? (
      <img src={starActive} alt="active start" key={`${e}-${i}`} />
    ) : (
      <img src={starInactive} alt="disabled start" key={`${e}-${i}`} />
    )
  );
}
