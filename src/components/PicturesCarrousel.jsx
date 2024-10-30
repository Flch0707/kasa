import { NavArrows } from "./NavArrows";
import { useState } from "react";
import "../styles/carrousel.css";

export function PicturesCarrousel({ house }) {
  const [picture, setPicture] = useState(1);

  return (
    <>
      <div className="carrousel-wrapper">
        <p>{`${picture}/${house.pictures.length}`}</p>
        {house.pictures.length > 0 ? (
          <NavArrows
            pictures={house.pictures}
            picture={picture}
            setPicture={setPicture}
          />
        ) : null}
        <img src={house.pictures[picture - 1]} alt={house.title} />
      </div>
    </>
  );
}
