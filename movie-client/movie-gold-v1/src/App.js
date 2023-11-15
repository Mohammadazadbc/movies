import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState();

  const getMovice = async () => {
    
    try{
      const response = await axios.get("http://localhost:8080/api/v1/movies");
       console.log(response.data)
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
      
    </div>
  );
}

export default App;
