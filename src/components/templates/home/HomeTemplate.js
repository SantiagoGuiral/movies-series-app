import {ReactComponent as LOGO} from "../../../assets/icon/themoviedb-hor.svg"
import "./HomeTemplate.scss"

const HomeTemplate = ({title}) => {
  return (
    <main className="home">
      <figure className="home__logo">
        <LOGO />
      </figure>
      <h1 className="home__title">{title}</h1>
      <a href="/movies" className="home__button">
        Go to Dashboard
      </a>
    </main>
  )
}

export default HomeTemplate
