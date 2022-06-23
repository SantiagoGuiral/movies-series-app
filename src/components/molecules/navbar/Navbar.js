import {Link} from "react-router-dom"
import STRINGS from "../../../constants/string-constants"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__ul">
        <li><Link to="/movies">{STRINGS.MOVIES}</Link></li>
        <li><Link to="/tvseries">{STRINGS.SERIES}</Link></li>
      </ul>  
    </nav>
  )
}

export default Navbar
