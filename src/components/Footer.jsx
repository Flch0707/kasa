import logo from "../assets/kasa-logo-white.svg"
import "../styles/footer.css"

export function Footer () {

    const year = new Date().getFullYear()

    return <footer className="footer">
        <img src={logo} alt="logo Kasa" />
        <p>© {year} Kasa. All rights reserved</p>
    </footer>
}