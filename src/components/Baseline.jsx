import "../styles/baseline.css"

export function Baseline ({baseline, image}) {


    return <div className="baseline-wrapper">
        <img src={image} alt={image} />
        <p>{baseline}</p>
    </div>
}