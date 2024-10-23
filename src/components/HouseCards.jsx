import { NavLink } from "react-router-dom"

import "../styles/house-card.css"

export function HouseCards ({housing}) {

    return <div className="housing-wrapper">
        {housing.map( house => {
            return <article className="house-card" key={house.id}>
                    <NavLink to={house.id}>
                        <img src={house.cover} alt={house.title}/>
                        <div className="title-background">
                            <p className="house-title">{house.title}</p>
                        </div>
                    </NavLink>
                </article>
        })}
    </div>
}