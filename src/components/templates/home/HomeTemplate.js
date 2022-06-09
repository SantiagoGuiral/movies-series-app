import {ReactComponent as LOGO} from "../../../assets/icon/themoviedb-hor.svg"

const HomeTemplate = ({title}) => {
  return (
    <main>
      <h1>{title}</h1>
      <figure>
        <LOGO />
      </figure>
      <a href="/movies">
        Go to Dashboard
      </a>
    </main>
  )
}

export default HomeTemplate
