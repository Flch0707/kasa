import { NavLink, useRouteError } from "react-router-dom"

import "../styles/page-error.css"

export function PageError () {

    const error = useRouteError()

    return <>
            <div className="page-error-wrapper">
                <h1 className="title-404" >404</h1>
                <p className="message-404" >Oups! La page que vous demandez n'existe pas.</p>
                <p>{error?.error?.toString() ?? error?.toString()}</p>
                <NavLink className="home-link"  to="/" >Retourner à la page d'accueil</NavLink>
            </div>
        </>
}