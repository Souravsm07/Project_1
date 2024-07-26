import React from 'react'

import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import { ImageProvider } from './context/ImageContext';
import NotFound from './components/NotFound';
import Search from './components/Search';
function App() {
  return (
   <Router>
    <ImageProvider>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='search' element={<Search/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </ImageProvider>
   </Router>
  )
}

export default App

