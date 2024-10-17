import "../styles/header.css"
import logo from "../assets/kasa-logo.svg"
import { MainMenu } from "./MainMenu"

export function Header () {
    
    const logoAlt = "Logo Kasa"

    return <header className="header">
        <img src={logo} alt={logoAlt} />
        <MainMenu />
    </header>
}