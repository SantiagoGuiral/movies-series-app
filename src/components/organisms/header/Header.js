import Navbar from "../../molecules/navbar/Navbar"
import {ReactComponent as ICON} from "../../../assets/icon/themoviedb-ver.svg"
import "./Header.scss"

const Header = () => {
  return (
    <header className="header">
      <figure className="header__logo">
        <ICON className="header__icon"/>
      </figure>
			<Navbar />
		</header>
  )
}

export default Header
