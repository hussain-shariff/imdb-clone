import React from 'react'
import Card from './Card'
import { useParams } from "react-router-dom"

export default function MoviesList() {
    const [moviesList, setMoviesList] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true);
    const {type} = useParams();

    React.useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        }, 1500)
    }, [])

    React.useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type? type : 'popular'}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1`)
            .then(res=>res.json())
            .then(data=> setMoviesList(data.results))
    }, [type])

  return (
    isLoading?
    <h1>data is loading</h1>
    :

    <div className='MoviesList-container'>
        <Card
        cardData = { moviesList }
        type = { type }/>
    </div>
  )
}
