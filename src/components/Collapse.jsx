import { useState, useEffect, useRef } from "react"
import arrow from "../assets/arrow-right.svg"
import "../styles/collapse.css"
import { CollapseContent } from "./CollapseContent"

export function Collapse ({ title, content }) {
      
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [contentHeight, setContentHeight] = useState(250)

  const arrowRef = useRef(null)
  const contentRef = useRef(null)

  const style = {
    marginTop: `calc(-${contentHeight}px - 50px)`
  }

  function handleClick() {        
    if (isCollapsed) {

      arrowRef.current.classList.remove("arrow-down")

      if (contentRef.current) {
        contentRef.current.classList.add("slide-out")
        contentRef.current && setContentHeight(contentRef.current.offsetHeight)
      }

      setTimeout( () => { setIsCollapsed(false) }, 300)

    } else {

      arrowRef.current.classList.add("arrow-down")

      setIsCollapsed(true)
      
      contentRef.current && setContentHeight(contentRef.current.offsetHeight)
    }
  }
    
  useEffect(() => {
    if (isCollapsed && contentRef.current) {
      contentRef.current.classList.add('slide-in')
      contentRef.current && setContentHeight(0)
      const delayCollapse = setTimeout(() => {
        contentRef.current.classList.remove('slide-in')
      }, 300);
      return () => clearTimeout(delayCollapse)
    }
  }, [isCollapsed])
  
  return <>
      <div className="collapse-wrapper">
          <div className="collapse">
              <p className="collapse-title">{title}</p>
              <img
                src={arrow}
                id={`${title}-arrow`}
                className="collapse-arrow"
                ref={arrowRef}
                onClick={handleClick}
                alt="collapse arrow" />
          </div>
          { isCollapsed && <CollapseContent content={content} title={title} style={style} ref={contentRef} /> }
      </div>
  </>
}