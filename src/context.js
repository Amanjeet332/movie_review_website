import React, { createContext, useEffect, useState } from 'react'

const AppContext =createContext()
export const API_KEY=`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppState = ({children}) => {

//export const API_KEY=`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
 //http://www.omdbapi.com/?apikey=7761dbb7
const [movie, setMovie] = useState([])
const [isLoading, setisLoading] = useState(true)
const [isError, setisError] = useState({show:false,msg:''})
const [query, setQuery] = useState('titanic')

const getMovies=async(url)=>{
  setisLoading(true)
  try{
  let res= await fetch(url)
  let data= await res.json()
  console.log(data)
  if(data.Response==='True'){                  // data.Response is coming from api call result
    setisLoading(false)                        // setting loading is false as we get the result
    setisError({
      show:false})
     setMovie(data.Search)                     // data.search is the array we are getting after the search made.
  }
  else{
    setisLoading(false)  
    setisError({
      show:true,
      msg:data.Error
    })
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
      getMovies(`${API_KEY}&s=${query}`)
    }, 2000);
   
    return ()=>clearTimeout(Timer)
}, [query]) // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <AppContext.Provider value={{movie,isError,isLoading,query,setQuery,setisLoading,setMovie,setisError}}>
      {children}
    </AppContext.Provider>
  );
};


export  {AppState,AppContext} 