import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Component/Main/Main';
import Cart from './Component/Cart/Cart';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>

  </>
}

export default App;
