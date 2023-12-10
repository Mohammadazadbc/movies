import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Container, Row,Col } from "react-bootstrap";
import ReviewFrom from "../component/reviewForm/ReviewFrom";


import React from 'react'
import axios from "axios";

const Review = ({getMovieData, movie, reviews,setReviews}) => {
    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    const addReview = async (e)=> {
        e.preventDefault();


        try{
            const rev = revText.current;
        const response = await axios.post("http://localhost:8080/api/v1/movies",{reviewBody:rev.value,imdbId:movieId})

        const updatedReviews = [...reviews,{body:rev.value}]
        rev.value="";
        
        setReviews(updatedReviews);
        }catch(err){
            console.log(err)
        }
        

    }

    useEffect(()=> {
        getMovieData(movieId);  
    },[]);

  return (
        <Container>
            <Row> 
            <Col><h3>Reviews</h3></Col>
             </Row>
            <Row className="mt-2"> 
                <Col>
                    <img src={movie?.poster} alt="" />
                </Col> 
                <Col>
                    {
                        <>
                        <Row>
                            <Col>
                                <ReviewFrom handleSubmit={addReview} revText={revText} labelText="Write a Review" />
                            </Col>
                        </Row>
                        </>
                    }
                    {
                        reviews?.map((r)=> {
                            return (
                                <>
                                    <Row>
                                        <Col> {r.body} </Col>
                                    </Row>
                                </>
                            )
                        })
                    }
                </Col>
            </Row>
        </Container>
  )
}

export default Review