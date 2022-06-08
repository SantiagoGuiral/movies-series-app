import { Routes, Route } from "react-router-dom"
import Home from "../components/pages/Home"
import Movies from "../components/pages/Movies"
import Series from "../components/pages/Series"

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
              <Movies />
            }
          />
          <Route 
            path="/tvseries"
            element = {
              <Series/>
            }
          />
      </Routes>
  )
}

export default RouterComponent
