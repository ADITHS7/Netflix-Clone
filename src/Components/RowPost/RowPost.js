import React,{useEffect,useState} from 'react'
import './RowPost.css'
import { imageUrl } from '../../Constants/Constants'
import axios from '../../axios'

function RowPost(props) {
  const [movies, setmovies] = useState([])
 useEffect(() => {
   axios.get(props.url).then(response=>{
    console.log(response.data)
    setmovies(response.data.results)
  }).catch(err=>{
    //alert('Network error')
  })
 
   
 }, [])
 
  
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
         <img className={props.isSmall ? 'smallPoster':'poster'} alt='poster' src={`${imageUrl + obj.backdrop_path}`} />
        )}
      
      
      </div>
    </div>
  )
}

export default RowPost