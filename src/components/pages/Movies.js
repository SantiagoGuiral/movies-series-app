import { useEffect } from "react"
import axios from "axios"
import API_KEY from "../../credentials/ApiMovies"

const FEATURE = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&'

const Movies = () => {
  //const [movies, setMovies] = useState()

  useEffect(() => {
    axios.get(FEATURE+API_KEY)
      .then((res) => {
        console.log(res.data)
      })
      .catch((e) => {
        console.log(e)
      })
  })

  return (
    <div>
      Movies page
    </div>
  )
}

export default Movies
