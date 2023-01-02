import React, { useEffect ,useState}  from "react";
import { useParams,NavLink} from "react-router-dom";
import { API_KEY} from "./context";


const SingleMovie = () => {
const {imbdId} =useParams()
  const [movie, setMovie] = useState('')
const [isLoading, setisLoading] = useState(true)
// const {movie,setMovie,isLoading,setisLoading}= useContext(AppContext)

const getMovies=async(url)=>{
  setisLoading(true)
  try{
  let res= await fetch(url)
  let data= await res.json()
  console.log(data)
  if(data.Response==='True'){                  // data.Response is coming from api call result
    setisLoading(false)                        // setting loading is false as we get the result
    // setisError({
    //   show:false})
     setMovie(data)                     // data.search is the array we are getting after the search made.
  }
  else{
    setisLoading(false)  
    // setisError({
    //   show:true,
    //   msg:data.Error
    // })
  }
  }
  catch(err){
    console.log(err)
  }
}

useEffect(() => {
  let Timer
 
//if(Timer) clearTimeout(Timer)
    Timer=setTimeout(() => {
      getMovies(`${API_KEY}&i=${imbdId}`)
    }, 500);
   
    return ()=>clearTimeout(Timer)
}, [imbdId]) // eslint-disable-line react-hooks/exhaustive-deps


if (isLoading) {

  return( 
    <div className="movie-section"> 
    <div className="loading">Loading....</div>
    </div>
   
 )
}
  return (
    <>
      <div className="movie-section">
        <div className="movie-card">
          <figure>
            <img src={movie.Poster} alt="" />
          </figure>
          <div className="card-content">
            <p className="title">{movie.Title}</p>
            <p className="card-text">{movie.Released}</p>
            <p className="card-text">{movie.Genre}</p>
            <p className="card-text">{movie.imdbRating}</p>
            <p className="card-text">{movie.Country}</p>
            <NavLink to='/home' className='back-btn'>Go Back</NavLink>
          </div>

        </div>
      </div>
      
      
    </>
  )
}

export default SingleMovie