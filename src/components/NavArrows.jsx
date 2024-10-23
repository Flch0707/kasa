

import arrowRight from "../assets/arrow-right.svg"
import arrowLeft from "../assets/arrow-left.svg"

export function NavArrows ({pictures, picture, setPicture}) {

    const nbMaxPictures = pictures.length

    function handleLeftClick() {
        picture === 1 ? setPicture(nbMaxPictures) : setPicture(picture - 1)
    }

    function handleRightClick() {
        setPicture(picture + 1)
        picture === nbMaxPictures ? setPicture(1) : setPicture(picture + 1)

    }

    return <div className="nav-carrousel">
        <img 
            src={arrowLeft} 
            className="nav-arrow arrow-left" 
            alt="arrow-left" 
            onClick={handleLeftClick}
        />
        <img 
            src={arrowRight} 
            className="nav-arrow arrow-right"
            alt="arrow-left" 
            onClick={handleRightClick}
        />
    </div>
}