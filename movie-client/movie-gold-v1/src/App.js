
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Header from './component/header/Header';
import Trailler from './component/trailer/Trailler';


function App() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    
    try{
      const response = await axios.get("http://localhost:8080/api/v1/movies");
       setMovies(response.data)
      }
      catch(err){
        console.log(err)
      }
  }
  
  useEffect(()=>{
    getMovies();
  },[])
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Layout movies={movies} />} />    
        <Route path='/trailer/:ytKeyId' element={<Trailler />} />    
      </Routes>
      
    </div>
  );
}

export default App;
