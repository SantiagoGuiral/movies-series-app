import MediaInfo from "../../molecules/info/MediaInfo"
import "./Card.scss"

const Card = ({ title, name, poster_path, vote_average, overview}) => {
  return (
    <section className="card">
      <MediaInfo 
        title={title?title:name} 
        poster_path={poster_path} 
        vote_average={vote_average}
        overview={overview?overview:"Not Available"} />
    </section>
  )
}

export default Card
