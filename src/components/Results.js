import MovieCard from './MovieCard'

const Results = () => {
    const IMAGES = [
        'https://as.com/meristation/imagenes/2021/01/20/noticias/1611162270_013847_1611162672_noticia_normal.jpg',
        'https://as.com/meristation/imagenes/2019/06/25/noticias/1561492062_370288_1561492142_noticia_normal.jpg',
        'https://i0.wp.com/hipersonica.com/wp-content/uploads/2019/07/Img_Blog_Netflix_Umbrella.jpg?fit=1182%2C600&ssl=1'
    ]

    return (
      <article>
        <section>
        {
            IMAGES.map((url, index) => <MovieCard key={`movie-card-${index}`} imageSource={url}/>)
        }
        </section>
      </article>
    )
  }

export default Results;