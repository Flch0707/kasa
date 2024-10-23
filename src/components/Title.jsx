import "../styles/house.css"

export function Title ({house}) {
    return <div>
    <h1 className="title">{house.title}</h1>
    <p className="location">{house.location}</p>
</div>
}