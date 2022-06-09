import NOT_FOUND from "../../../assets/images/not-found.png"
import "./MediaInfo.scss"

const POSTER = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = vote =>{
	if (vote>=8) {
		return "green"
	} else if (vote>=6) {
		return "orange"
	} else {
		return "red"
	}
}


const MediaInfo = ({ title, poster_path, vote_average }) => {
	return (
		<main className="info">
			<img className="info__img" src={poster_path ? (POSTER + poster_path) : NOT_FOUND} alt={"media"} />
			<div className="info__data">
				<h4 className="info__data__title">{title}</h4>
				<span className={`info__data__vote ${setVoteClass(vote_average)}`}>
					{vote_average}
				</span>
			</div>
		</main>
	)
}

export default MediaInfo
