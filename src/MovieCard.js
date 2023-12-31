import React from 'react'

const MovieCard = (props) => {

const IMG_API = "https://image.tmdb.org/t/p/w220_and_h330_face"

  return (
    <div className='card'>
        <div className='poster'>

            <img src= {IMG_API + props.poster_path}/>
        </div> 
    <div className='info'>
    <p className='title'>{props.title}</p>
    <p className='vote'>{props.vote_average}</p>
    <p className='desc'>{props.overview}</p>
    </div>

    </div>
  )
}

export default MovieCard