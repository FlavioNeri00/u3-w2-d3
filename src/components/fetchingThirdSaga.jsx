

import { useEffect, useState } from "react";
import Gallery from "./Gallery";
import { Spinner, Alert } from "react-bootstrap";

const FetchingThirdSaga = () => {

    // state = {
    //     movies: [],
    //     isLoading: true,
    //     hasError: false
    // }

    const [Thirdmovie, setThirdMovie] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    const fetchThirdSaga = async () => {
        
        const URL= "http://www.omdbapi.com/?s=indiana-jones&type=movie&apikey=d6ef2c43"
        try {
            const resp = await fetch(URL)
        if (resp.ok){
            console.log("Fetched")
            const data = await resp.json()
            setThirdMovie(data.Search)
            
            console.log(Thirdmovie)
        }    else {
           setHasError(true)
        }} catch(err) {
            console.log(err);
        } finally {
            setIsLoading(false)
        }
        
    }
   
    useEffect(() =>{
        fetchThirdSaga()
    }, [])



        return(
           
            <div>
                 {hasError && <Alert variant="danger">Riscontrato problema con la</Alert>}
                {isLoading && <Spinner animation="border" variant="danger"  />}
                    <Gallery arr={Thirdmovie}/>
            </div>
        )
        
    



} 
export default FetchingThirdSaga