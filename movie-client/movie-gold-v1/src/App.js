
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Header from './component/header/Header';
import Trailler from './component/trailer/Trailler';
import Review from './reviwes/Review';
import { setRef } from '@mui/material';


function App() {
  const [movies, setMovies] = useState();
  const [movie,setMovie] = useState();
  const [reviews,setReviews] = useState();

  const getMovies = async () => {
    
    try{
      const response = await axios.get("http://localhost:8080/api/v1/movies");
       setMovies(response.data)
      }
      catch(err){
        console.log(err)
      }
  }


  const getMovieData = async (movieId) => {
     
    try 
    {
        const response = await axios.get(`http://localhost:8080/api/v1/movies/${movieId}`);

        const singleMovie = response.data;

        setMovie(singleMovie);

        setReviews(singleMovie.reviews);
        

    } 
    catch (error) 
    {
      console.error(error);
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
        <Route  path="/Reviews/:movieId" element ={<Review getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />} />    
      </Routes>
      
    </div>
  );
}

export default App;
