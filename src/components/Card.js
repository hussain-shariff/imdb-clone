import React from 'react'
import { Link } from 'react-router-dom';

export default function Card(props) {
    const [isLoading, setIsLoading] = React.useState(true);
    let cardElements = props.cardData.map((movie)=>{
        return (
            <Link to={`/movie/${movie.id}`}>
                <div className='card'>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}` } alt="poster image" />
                    <div className="movie-details">
                        <h4>{ movie.title}</h4>
                        <div>
                            <p>{ movie.release_date}</p>
                            <p>{ movie.vote_average}<i className="fas fa-star" /></p>
                        </div>
                        <p>{ movie.overview }</p>
                    </div>
                    
                </div>
            </Link>
        )
    })

    React.useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        }, 1500)
    }, [])

  return (
    isLoading?
    <h1>data is loading...</h1>
    :

    <div>
        <h1 className='popular-tiltle'>{ props.type ?  props.type  : "POPULAR" }</h1>
        <div className='card-container'>
            { cardElements }
        </div>
    </div>
    
  )
}
