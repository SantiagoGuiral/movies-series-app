import MediaInfo from "../molecules/MediaInfo"
import Overview from "../molecules/Overview"

const Card = ({ title, poster_path, vote_average, overview}) => {
  return (
    <main>
      <MediaInfo 
        title={title} 
        poster_path={poster_path} 
        vote_average={vote_average} />
      <Overview 
        overview={overview} />
    </main>
  )
}

export default Card
