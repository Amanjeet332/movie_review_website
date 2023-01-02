import React, { useContext } from "react";
import { AppContext } from "./context";
import './App.css'
import {NavLink} from 'react-router-dom'

const Review = () => {
  const { movie ,isLoading} = useContext(AppContext);
  if (isLoading) {

    return( 
      <div className="loading">Loading....</div>
   )
  }
  return (
    <>
      <section className="movie-page">
        <div className="grid grid-4-col" >
          {movie.map((x) => {
            const {Title,Poster,imdbID} =x;   // destructuring and fetching details out of single element of movie array
            return (                          //map function returning value by putting info in card 
            // while sending title we have used condition to add '...' if title lenght in more than 20
           <NavLink to={`/SingleMovie/${imdbID}`} >
              <div className="className card"  key={imdbID}>
                <div className="className card-info" key={imdbID}>
                  <h2>{Title.length >= 20 ? `${Title.substring(0,20)}...`:Title.substring(0,20)}</h2>           
                  
                  <img src={Poster} alt={Title}
                   />
                </div>
              </div>
             </NavLink> // above Navlink is linking each search result to /SingleMOvie cpmponent 
                        // and alongsdie sending imbdID to that component which is recieved in app.js with params to url
                        // we are using that recieved param using useParams from ract-router-Dom
            )
          })}
        </div>
      </section>
    </>
  );
};

export default Review;
