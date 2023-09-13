import { useEffect, useState } from "react"

import { Badge, Card, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"

const MovieDetails = () => {
  
    const [movieDetail, setMovieDetails] = useState([])
    const [comments, setComments] = useState([])
   const params = useParams()
    console.log(params);
   const fetchMovie = async () => {
        

    try {
        const resp = await fetch("http://www.omdbapi.com/?i="+params.movieId+"&apikey=d6ef2c43&")
    if (resp.ok){
        console.log("Fetched")
        const data = await resp.json()
        
        setMovieDetails(data)
        
        console.log("oh",movieDetail)
    
      
    }} catch(err) {
        console.log(err);
    } 
    
}

const FetchComments = async () => {
    try{
        const resp = await fetch("https://striveschool-api.herokuapp.com/api/movies/"+params.movieId+"/comments/", {
            headers:{
            "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTAxYjg2NDgxNjRmMjAwMTRhNzJjZTMiLCJpYXQiOjE2OTQ2MTE1NTcsImV4cCI6MTY5NTgyMTE1N30.ZDXQZbh_LPl7hlueIe5p6pvqbWSn04pFDYTn7xj8jYA"}
        })
        
     if (resp.ok){
                console.log("Fetched")
                const comm = await resp.json()
               
                setComments(comm)
                console.log(comments);
          
            
              
            }} catch(err) {
                console.log(err);
            } 
        }


useEffect(() => {
    fetchMovie()
}, [])       

useEffect(() => {
    
    FetchComments()
    
}, [])


console.log(movieDetail);
console.log(comments);
        return(
           
            <div className="bg-dark ">
                <Container>
                  
            
             <img src={movieDetail.Poster} alt="Poster" />
                <h1 className="display-4">{movieDetail.Title}</h1>
                <p>{movieDetail.movie}</p>
                <Badge bg="danger" className="me-1">
                  {movieDetail.Rated}
                </Badge>
               
              
                    
              <Row className="justify-content-center">
             {comments.map( comment => (
             <Col md={10} key={comment._id}>
                <Card body>
                    {comment.author}<p className="d-inline ms-3 fw-bold">{comment.comment}</p>
                    <Badge bg="danger" className="ms-5">
                  {comment.rate}
                </Badge>
                </Card>
                </Col>))}

            </Row>
          
        </Container>
            </div>
        )
        
    } 

export default MovieDetails