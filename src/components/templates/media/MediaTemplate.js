import { useState, useEffect } from "react"
import Card from "../../organisms/card/Card"
import Header from "../../organisms/header/Header"
import Spinner from "../../atoms/Spinner"
import API from "../../../constants/api-constants"
import axios from "axios"
import "./MediaTemplate.scss"


const MediaTemplate = ({ title }) => {

	const [data, setData] = useState()
	const [searchTerm, setSearchTerm] = useState()

	const fetchData = ((URL) => {
		axios.get(URL)
			.then((res) => {
				setData(res.data.results)
			})
			.catch((e) => {
				console.error(e)
			})
	})

	useEffect(() => {
		fetchData(API.FEATURE + title + API.SORT + API.API_KEY + API.PAGE)
	}, [title])

	const handleOnSubmit = (e) => {
		e.preventDefault()
		if (searchTerm) {
			fetchData(API.SEARCH + title + "?" + API.API_KEY + API.QUERY + searchTerm)
			searchTerm('')
		}
	}

	const handleOnChange = (e) => {
		setSearchTerm(e.target.value)
	}

	return (
		<>
			<header className="media-header">
				<Header />
				<div className="media-header__search">
					<form onSubmit={handleOnSubmit}>
						<input
							className="media-header__input"
							type="search"
							value={searchTerm}
							onChange={handleOnChange}
							placeholder="search..."/>
					</form>
				</div>
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
