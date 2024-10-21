import housing from "../data/housing.json"
import "../styles/house-card.css"

export function HouseCard () {

    return <div className="housing-wrapper">
        {housing.map( house => {
            return <article className="house-card">
                    <img src={house.pictures[0]} />
                    <div className="title-background">
                        <p className="house-title">{house.title}</p>
                    </div>
                </article>
        })}
    </div>
}