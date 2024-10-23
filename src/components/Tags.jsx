import "../styles/house.css"

export function Tags ({house}) {
    return <ul className="tags">
            {house.tags.map( tag => <li key={`${tag}-${house.id}`} className="tag">{tag}</li>)}
        </ul>
}