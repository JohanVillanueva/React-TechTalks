const MovieCard = ({ imageSource }) => {
    return (
      <div>
        <img src={imageSource} alt='movie' width='200' height='150'></img>
      </div>
    )
  }

export default MovieCard;