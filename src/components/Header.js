import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    
  return (
    <div className='header'>
        <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="logo" /></Link>
        <Link to="/movies/popular">Popular</Link>
        <Link to="/movies/top_rated">Top Rating</Link>
        <Link to="/movies/upcoming">Upcoming</Link>
    </div>
  )
}
