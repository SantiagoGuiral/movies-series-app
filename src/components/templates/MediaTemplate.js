import { useState, useEffect } from "react"
import Movie from "../organisms/Movie"
import Header from "../organisms/Header"
import Spinner from "../atoms/Spinner"
import axios from "axios"

const FEATURE = 'https://api.themoviedb.org/3/discover/'
const SORT = '?sort_by=popularity.desc&api_key='
const API_KEY = '0a35055f1bc3f2f0fff299fc83a00175'

const MediaTemplate = ({ title }) => {

	const [data, setdata] = useState()

	const fetchData = ((URL) => {
		axios.get(URL)
      .then((res) => {
        setdata(res.data.results)
      })
      .catch((e) => {
        console.log(e)
      })
	})

  useEffect(() => {
    fetchData(FEATURE+title+SORT+API_KEY+'&page=1')
  }, [title])

	return (
		<>
			<Header />
			{
				data ? (
					data.map((media) => {
						return (<Movie key={media.id} {...media} />)
					})
				) : <Spinner />
			}
		</>
	)
}

export default MediaTemplate
