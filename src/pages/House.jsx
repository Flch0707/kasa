import { useLoaderData, useParams } from "react-router-dom";

import { PicturesCarrousel } from "../components/PicturesCarrousel";
import { Collapse } from "../components/Collapse";
import { Title } from "../components/Title";
import { Wrapper } from "../components/Wrapper";

import { Host } from "../components/Host";
import { Tags } from "../components/Tags";
import { Rating } from "../components/Rating";

import "../styles/house.css";

export function House() {
  const { id } = useParams();

  const housing = useLoaderData();
  const house = housing.find((e) => e.id === id);

  return (
    <div className="house-details">
      <Wrapper className="house-carrousel">
        <PicturesCarrousel house={house} />
      </Wrapper>
      <Wrapper className="house-title">
        <Title house={house} />
      </Wrapper>
      <Wrapper className="house-host">
        <Host house={house} />
      </Wrapper>
      <Wrapper className="house-tags">
        <Tags house={house} />
      </Wrapper>
      <Wrapper className="house-rating">
        <Rating rating={house.rating} />
      </Wrapper>
      <Wrapper className="house-description">
        {house.description && (
          <Collapse title="description" content={house.description} />
        )}
      </Wrapper>
      <Wrapper className="house-equipments">
        {house.equipments && (
          <Collapse title="equipments" content={house.equipments} />
        )}
      </Wrapper>
    </div>
  );
}
