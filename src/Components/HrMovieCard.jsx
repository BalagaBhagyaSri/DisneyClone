import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const HrMovieCard = ({movie}) => {
  return (
    <section>
        <img src={IMAGE_BASE_URL+movie.backdrop_path}
        className='w-[110px] md:w-[200px] rounded-lg
        hover:border-[4px] border-gray-300 cursor-pointer
        hover:scale-110 transition-all duration-150 ease-in'/>
        <h2>{movie.title}</h2>
    </section>
  )
}

export default HrMovieCard