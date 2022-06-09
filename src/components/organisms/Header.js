import Navbar from "../molecules/Navbar"
import {ReactComponent as ICON} from "../../assets/icon/themoviedb-ver.svg"

const Header = () => {
  return (
    <header>
      <figure>
        <ICON />
      </figure>
			<Navbar />
		</header>
  )
}

export default Header
