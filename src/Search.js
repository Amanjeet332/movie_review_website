import React, { useContext } from 'react'
import { AppContext } from './context'

const Search = () => {
  const {query, setQuery, isError}= useContext(AppContext)


  return (<>
  <section className='search-section'>
    <h2>Search your fav below</h2>
    <form action='#' onSubmit={(e)=>e.preventDefault()}>
      <input
       type="text"
       placeholder='Search Here' 
       value={query} 
       onChange={(e)=>setQuery(e.target.value)}
       />
    </form>
    <div className="card-error">
      <p>{isError.show && isError.msg}</p>
    </div>

  </section>
  </>
  )
}

export default Search