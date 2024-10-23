import { NavLink } from "react-router-dom"

import "../styles/main-menu.css"

export function MainMenu () {
    
    const menu = [
        {
            title: "Accueil",
            path: "/"
        }, 
        {
            title: "À propos",
            path: "/about"
        }
    ]

    return <nav className="menu-nav">
        { menu.map( el => <NavLink key={el.title} to={el.path} className="nav-link">{el.title}</NavLink> )}
    </nav>
}