import { useState, useEffect } from "react"
import Card from "../../organisms/card/Card"
import Header from "../../organisms/header/Header"
import Spinner from "../../atoms/Spinner"
import API from "../../../constants/api-constants"
import axios from "axios"
import "./MediaTemplate.scss"


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
		fetchData(API.FEATURE + title + API.SORT + API.API_KEY + API.PAGE)
	}, [title])

	return (
		<>
			<Header />
			<main className="media-container">
				{
					data ? (
						data.map((media) => {
							return (<Card key={media.id} {...media} />)
						})
					) : <Spinner />
				}
			</main>
		</>
	)
}

export default MediaTemplate
