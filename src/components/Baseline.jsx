import image from "../assets/landscape.jpg"
import "../styles/baseline.css"

export function Baseline () {

    const baseline = "Chez vous, partout et ailleurs"

    return <div className="baseline-wrapper">
        <img src={image} alt={image} />
        <p>{baseline}</p>
    </div>
}