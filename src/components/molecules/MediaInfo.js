import NOT_FOUND from "../../assets/images/not-found.png"

const POSTER = "https://image.tmdb.org/t/p/w1280";

const MediaInfo = ({title, poster_path, vote_averaga}) => {
	return (
		<main>
			<img src={poster_path ? (POSTER+poster_path): NOT_FOUND}  alt={"media"}/>
			<div>
				<h2>{title}</h2>
				<span>{vote_averaga}</span>
			</div>

			</main>
	)
}

export default MediaInfo
