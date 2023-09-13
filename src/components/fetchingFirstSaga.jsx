import { Component, useEffect, useState } from "react";
import Gallery from "./Gallery";
import { Spinner, Alert } from "react-bootstrap";

const FetchingFirstSaga = () => {

    // state = {
    //     movies: [],
    //     isLoading: true,
    //     hasError: false
    // }

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    const fetchFirstSaga = async () => {
        
        const URL= "http://www.omdbapi.com/?s=lord-of-the-rings&type=movie&apikey=d6ef2c43"
        try {
            const resp = await fetch(URL)
        if (resp.ok){
            console.log("Fetched")
            const data = await resp.json()
            setMovies(data.Search)
            
            console.log(movies)
        }    else {
           setHasError(true)
        }} catch(err) {
            console.log(err);
        } finally {
            setIsLoading(false)
        }
        
    }
   
    useEffect(() =>{
        fetchFirstSaga()
    }, [])



        return(
           
            <div>
                 {hasError && <Alert variant="danger">Riscontrato problema con la</Alert>}
                {isLoading && <Spinner animation="border" variant="danger"  />}
                    <Gallery arr={movies}/>
            </div>
        )
        
    }

export default FetchingFirstSaga