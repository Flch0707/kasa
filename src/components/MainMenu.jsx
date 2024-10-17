import "../styles/main-menu.css"

export function MainMenu () {
    
    const menu = ["Accueil", "À propos"]

    return <ul className="menu-nav">
        { menu.map( el => <li key={el}>{el}</li> )}
    </ul>
}