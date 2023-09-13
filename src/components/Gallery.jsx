import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Gallery = (props) => {
    return(
    <Container fluid="xs">
            
        <Row className="mt-3 mx-auto gy-1 ">
            {props.arr.slice(0, 4).map((saga) => (
                <Col  key={saga.imdbID}  sm={6} md={4} lg={3} >
                 <Link to={"/movie-details/" + saga.imdbID}>  
                 <img src={saga.Poster} alt="poster" className="img-fluid"  style={{width:"265px"}}/>
                 </Link> 
                </Col>
            ))}
        </Row>
            
    </Container>
    )
}

export default Gallery