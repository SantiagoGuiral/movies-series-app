import { useState, useEffect } from "react"
import Card from "../../organisms/card/Card"
import Header from "../../organisms/header/Header"
import Spinner from "../../atoms/Spinner"
import API from "../../../constants/api-constants"
import axios from "axios"
import "./MediaTemplate.scss"


const MediaTemplate = ({ title }) => {

	const [data, setData] = useState()
	const [search, setSearchTerm] = useState()

	const fetchData = ((URL) => {
		axios.get(URL)
			.then((res) => {
				setData(res.data.results)
			})
			.catch((e) => {
				console.log(e)
			})
	})

	useEffect(() => {
		fetchData(API.FEATURE + title + API.SORT + API.API_KEY + API.PAGE)
	}, [title])

	const handleOnSubmit = (e) => {
		e.preventDefault()
		if (searchTerm) {
			fetchData()
			searchTerm('')
		}
	}

	const handleOnChange = (e) => {
		setSearchTerm(e.target.value)
	}

	return (
		<>
			<Header />
			<header className="search-header">
				<form onSubmit={handleOnSubmit}>
					<input
						className="search-input"
						type="search"
						value={searchTerm}
						onChange={handleOnChange}
						placeholder="search..."/>
				</form>
			</header>
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
