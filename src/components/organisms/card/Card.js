import MediaInfo from "../../molecules/info/MediaInfo"
import "./Card.scss"

const Card = ({ title, poster_path, vote_average, overview}) => {
  return (
    <section className="card">
      <MediaInfo 
        title={title} 
        poster_path={poster_path} 
        vote_average={vote_average}
        overview={overview} />
    </section>
  )
}

export default Card
