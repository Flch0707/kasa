import { Baseline } from "./components/Baseline"
import { Header } from "./components/Header"
import { HouseCard } from "./components/HouseCard"
import "./styles/index.css"

function App() {
  return <div className="main-container">
      <div className="content-wrapper">
        <Header />
        <Baseline />
        <HouseCard />
    </div>
  </div>
}

export default App
