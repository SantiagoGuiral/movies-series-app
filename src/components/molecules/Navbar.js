import STRINGS from "../../constants/string-constants"

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><a href="/movies">{STRINGS.MOVIES}</a></li>
        <li><a href="/series">{STRINGS.SERIES}</a></li>
      </ul>
      
    </div>
  )
}

export default Navbar
