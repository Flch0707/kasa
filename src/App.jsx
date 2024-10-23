import { createBrowserRouter, Outlet, RouterProvider, useNavigation } from "react-router-dom"

import housing from "./data/housing.json"

import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

import { Home } from "./pages/Home"
import { PageError } from "./pages/PageError"
import { House } from "./pages/House"
import { About } from "./pages/about"

import "./styles/index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        path: "",
        children: [
          {
            path: "",
            element: <Home />,
            loader: () => housing
          },
          {
            path: ":id",
            element: <House />,
            loader: () => housing
          }]
        
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
])

function Root() {
  const {state} = useNavigation()

  return <div className="main-container">
      <Header />
      <div className="content-wrapper">
        {state === 'loading' && <div>En cours de chargement</div>}
        <Outlet />
      </div>
      <Footer />
  </div>
}

function App() {
  return <RouterProvider router={router} />
}

export default App
