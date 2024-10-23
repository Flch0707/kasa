import { useLoaderData, useParams } from "react-router-dom"

import { PicturesCarrousel } from "../components/PicturesCarrousel"
import { Collapse } from "../components/Collapse";
import { Title } from "../components/Title";

import { Host } from "../components/Host";
import { Tags } from "../components/Tags";
import { Rating } from "../components/Rating";

import "../styles/house.css"

export function House () {
    
    const {id} = useParams()

    const housing = useLoaderData()
    const house = housing.find( e => e.id === id)

    return <div className="house-details">
        <div className="house-carrousel">
            <PicturesCarrousel house={house}/>
        </div>
        <div className="house-title">
            <Title house={house} />
        </div>
        <div className="house-host">
            <Host house={house} />
        </div>
        <div className="house-tags">
            <Tags house={house} />
        </div>
        <div className="house-rating">
            <Rating rating={house.rating} />
        </div>
        <div className="house-description">
            { house.description && <Collapse title="description" content={house.description} /> }
        </div>
        <div className="house-equipments">
            { house.equipments && <Collapse title="equipments" content={house.equipments} /> }
        </div>
    </div>
}