import { Routes, Route } from "react-router-dom"
import Home from "../components/pages/Home"

const RouterComponent = () => {
  return (
      <Routes>
          <Route 
            path="/"
            element={
                <Home />
            }
          />
      </Routes>
  )
}

export default RouterComponent
