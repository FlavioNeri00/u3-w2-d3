import { useEffect, useState } from "react"
import { Alert, Button, Card, Col, Container, Row, Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"
import Gallery from "./Gallery"


const TvShow = () => {

    const [shows, setShows] = useState([])
    const[isLoading, setIsLoading] = useState(true)
    const[hasError, setHasError] = useState(false) 

    const fetchMovie = async () => {
        
        const URL= "http://www.omdbapi.com/?apikey=d6ef2c43&s=la-haine"
        try {
            const resp = await fetch(URL)
        if (resp.ok){
            console.log("Fetched")
            const data = await resp.json()
            setShows(data.Search)
            
            console.log(shows)
        }    else {
           setHasError(true)
        }} catch(err) {
            console.log(err);
        } finally {
            setIsLoading(false)
        }
        
    }
    

    useEffect(() => {
        fetchMovie()
    }, [])

    return(

        <div className="bg-dark pb-5">
        <Container>
            
       <Row>
        <h2>Some shows you may like:</h2>
          <Gallery arr={shows}/>
       </Row>
       {hasError && <Alert variant="danger">Riscontrato problema con la Fetch</Alert>}
                    {isLoading && <Spinner animation="border" variant="danger"  />}

    </Container>
        </div>
    )
}

export default TvShow