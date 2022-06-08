import MediaInfo from "../molecules/MediaInfo"

const Movie = ({ title, poster_path, vote_average }) => {
  return (
    <main>
      <MediaInfo 
        title={title} 
        poster_path={poster_path} 
        vote_average={vote_average} />
    </main>
  )
}

export default Movie
