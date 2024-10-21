import { Baseline } from "./components/Baseline"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { HouseCard } from "./components/HouseCard"
import "./styles/index.css"

function App() {
  return <div className="main-container">
      <Header />
      <div className="content-wrapper">
        <Baseline />
        <HouseCard />
      </div>
      <Footer />
  </div>
}

export default App
