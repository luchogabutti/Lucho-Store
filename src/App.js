import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import  Products from './components/Products'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/products' element={<Products />}></Route>
    </Routes>
  );
}

export default App;
