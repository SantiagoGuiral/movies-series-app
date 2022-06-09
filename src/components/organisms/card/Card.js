import MediaInfo from "../../molecules/info/MediaInfo"
import Overview from "../../molecules/overview/Overview"
import "./Card.scss"

const Card = ({ title, poster_path, vote_average, overview}) => {
  return (
    <section className="card">
      <MediaInfo 
        title={title} 
        poster_path={poster_path} 
        vote_average={vote_average} />

    </section>
  )
}

export default Card
