import React from 'react'
import Home from './Home'
import {Routes, Route } from 'react-router-dom'
import { AppState } from './context'
import './App.css'
import SingleMovie from './SingleMovie'

const App = () => {
  return (
    <>
   <AppState>
      <Routes>
        <Route path='/SingleMovie/:imbdId' element={<SingleMovie/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
   
      </AppState>
    </>
  )
}

export default App