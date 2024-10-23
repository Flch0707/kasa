import "../styles/house.css"

export function Host ({house}) {
    return <div className="host">
        <p>{house.host.name}</p>
        <img src={house.host.picture} alt={`${house.host.name} Portrait`}/>
    </div>
}