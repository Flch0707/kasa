export function CollapseContent ({content, title}) {

    let isArray = false // init variable to store array data if data in an array
    Array.isArray(content) ? isArray = true : isArray = false

    return isArray ? 

        <ul className="collapse-content collapse-list" id={`${title}-content`}>
            {content.map( e => <li key={e}>{e}</li>)}
        </ul> :

        <div className="collapse-content" id={`${title}-content`}> {content} </div>

}