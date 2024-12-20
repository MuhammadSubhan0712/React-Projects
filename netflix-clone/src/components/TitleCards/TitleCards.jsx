import React, { useEffect, useRef, useState } from 'react'
import "./TitleCards.css"
import { Link } from 'react-router-dom'


const TitleCards = ({title , category}) => {
  const [apiData , setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NThmMzdkMDM3MzE0MmUzZjA5ZDMwNzkxYjJlNmRjZCIsIm5iZiI6MTczMzMxOTM1Mi43NDcsInN1YiI6IjY3NTA1YWI4OWJlZTY0NjljMTQ1N2QyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V7fxZPrAkAbr7LYvnzJDx7pq_r-C8WLY3z2vhkmo8Mo'
    }
  };
  
  const handleWheel = (event) =>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
  }
  useEffect(()=>{
  
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel' , handleWheel);
  },[])


  return (
    <div className='title-cards' ref={cardsRef}>
    <h2>{title ? title : "Popular on Netflix"}</h2>
    <div className="card-list">
      {apiData.map((card, index)=>{
        return <Link to={`/player/${card.id}`} className="card" key={index}>
         <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="cards" />
         <p>{card.original_title}</p>
        </Link>
      })}
    </div>
    </div>
  )
}

export default TitleCards