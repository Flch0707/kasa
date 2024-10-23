import { useState } from "react"
import arrow from "../assets/arrow-right.svg"
import "../styles/collapse.css"
import { CollapseContent } from "./CollapseContent"

export function Collapse ({ title, content }) {
      
    const [isCollapsed, setIsCollapsed] = useState(false)

    function handleClick(id) {
        isCollapsed ? setIsCollapsed(false) : setIsCollapsed(true)
        
        const arrow = document.querySelector(`#${id}-arrow`)
        arrow.classList.toggle("arrow-down")
        
        const content = document.querySelector(`#${id}-content`)
        content.classList.toggle("content-down")
    }

    return <>
            <div className="collapse-wrapper">
                <div className="collapse">
                    <p className="collapse-title" onClick={handleClick}>{title}</p>
                    <img src={arrow} id={`${title}-arrow`} className="collapse-arrow" onClick={() => {handleClick(title)}} alt="collapse arrow" />
                </div>
                <CollapseContent content={content} title={title} />
            </div>
        </>
    }

    