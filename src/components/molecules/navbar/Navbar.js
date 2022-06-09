import STRINGS from "../../../constants/string-constants"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__ul">
        <li><a href="/movies">{STRINGS.MOVIES}</a></li>
        <li><a href="/tvseries">{STRINGS.SERIES}</a></li>
      </ul>  
    </nav>
  )
}

export default Navbar
