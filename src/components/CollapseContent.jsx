import { forwardRef } from "react"

export const CollapseContent = forwardRef( function CollapseContent ({ content, title, style }, contentRef) {

    let isArray = false 
    Array.isArray(content) ? isArray = true : isArray = false

    return <div className="collapse-content" style={style} ref={contentRef} >
            {isArray ? 
            <ul className="content collapse-list" id={`${title}-content`}>
                {content.map( e => <li key={e}>{e}</li>)}
            </ul>
            : <p className="content" id={`${title}-content`}> {content} </p>}
        </div>

})