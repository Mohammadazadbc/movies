
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/home/Home';

function App() {
  const [movies, setMovies] = useState();

  const getMovice = async () => {
    
    try{
      const response = await axios.get("http://localhost:8080/api/v1/movies");
       setMovies(response.data)
      }
      catch(err){
        console.log(err)
      }
  }
  
  useEffect(()=>{
      getMovice();
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout movies={movies} />} />    
      </Routes>
      
    </div>
  );
}

export default App;
