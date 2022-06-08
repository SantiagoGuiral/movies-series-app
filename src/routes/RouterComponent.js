import { Routes, Route } from "react-router-dom"
import Home from "../components/pages/Home"
import Movies from "../components/pages/Movies"

const RouterComponent = () => {
  return (
      <Routes>
          <Route 
            path="/"
            element = {
                <Home />
            }
          />
          <Route 
            path="/movies"
            element = {
              <Movies />}/>
      </Routes>
  )
}

export default RouterComponent
