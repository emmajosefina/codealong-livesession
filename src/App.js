import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import NotFound from 'components/NotFound'

import List from 'components/List'
import Details from 'components/Details'
import { BASE_URL } from 'utils/urls'
import Header from 'components/Header'

export const App = () => {

  const [list, setList] = useState([])

  useEffect(()=> {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => { 
      setList(data.results)
    })
  }, [])

  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<List pokemons={list}/>}/>
    <Route path="/details/:pokemonName" element={<Details/>}/>
    <Route path="/404" element={<NotFound /> }/>
    <Route path='*' element={<Navigate to="/404" replace/>}/> 
    {/* //Ovan unkar inte än */}

    </Routes>
    </BrowserRouter>
  )
}
