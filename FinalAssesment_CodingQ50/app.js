import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to="/check-your-magic-number">Magic number</Link></li>
        </ul>
        
        
      </nav>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path = "/check-your-magic-number" element={<magicgenerator/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

  return (
    <div>
      <button onClick={handleClick}>Magic number</button>
    </div>

  );






export default App;

function Home(){
  return <div>Home</div>
}
