import Movie from "../organisms/Movie"

const MediaTemplate = ({ data }) => {

	return (
		<>
			{
				data ? (
					data.map((media) => {
						console.log(media)
						return (<Movie key={media.id} {...media} />)
					})
				) : console.log("error")
			}

		</>
	)
}

export default MediaTemplate
