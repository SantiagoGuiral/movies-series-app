import { useState, useEffect } from "react"
import axios from "axios"
import MediaTemplate from "../templates/MediaTemplate"
import Spinner from "../atoms/Spinner"

const FEATURE = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key='
const API_KEY = '0a35055f1bc3f2f0fff299fc83a00175'

const Movies = () => {
  const [movies, setMovies] = useState()

  useEffect(() => {
    axios.get(FEATURE+API_KEY+'&page=1')
      .then((res) => {
        setMovies(res.data.results)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  return (
    movies ? <MediaTemplate data={movies} /> : <Spinner />
  )
}

export default Movies
