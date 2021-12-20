import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='shop' element={<Shop></Shop>}></Route>
        <Route path='*' element={
          <div>
            <h1 style={{textAlign:'center',color:'red'}}>This route is not exist..!</h1>
          </div>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
