import { Component, useEffect, useState } from "react";
import Gallery from "./Gallery";
import { Spinner, Alert } from "react-bootstrap";

const FetchingSecondSaga = () => {

    // state = {
    //     movies: [],
    //     isLoading: true,
    //     hasError: false
    // }

    const [secondMovie, setSecondMovie] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    const fetchSecondSaga = async () => {
        
        const URL= "http://www.omdbapi.com/?s=star-wars&type=movie&apikey=d6ef2c43"
        try {
            const resp = await fetch(URL)
        if (resp.ok){
            console.log("Fetched")
            const data = await resp.json()
            setSecondMovie(data.Search)
            
            console.log(secondMovie)
        }    else {
           setHasError(true)
        }} catch(err) {
            console.log(err);
        } finally {
            setIsLoading(false)
        }
        
    }
   
    useEffect(() =>{
        fetchSecondSaga()
    }, [])



        return(
           
            <div>
                 {hasError && <Alert variant="danger">Riscontrato problema con la</Alert>}
                {isLoading && <Spinner animation="border" variant="danger"  />}
                    <Gallery arr={secondMovie}/>
            </div>
        )
        
    }

export default FetchingSecondSaga