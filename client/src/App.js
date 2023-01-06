
import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import AddUser from './components/AddUser'
import CodeWithNarayan from './components/CodeWithNarayan'
import AllUser from './components/AllUser'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  
  return (
    <BrowserRouter >
    <NavBar/>
    <Routes>
      <Route path='/' element= {<CodeWithNarayan/>}/>
      <Route path='/all' element= {<AllUser/>}/>
      <Route path='/add' element= {<AddUser/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
