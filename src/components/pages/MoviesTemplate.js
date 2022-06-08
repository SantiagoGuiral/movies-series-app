import Movie from "../organisms/Movie"

const MoviesTemplate = ({data}) => {
	
  return (
		<>
		{
			data ? (
				data.map((media) => {
					return (<Movie {...media}/>)
			}) 
			): console.log("error")
		}
		
		</>
  )
}

export default MoviesTemplate
