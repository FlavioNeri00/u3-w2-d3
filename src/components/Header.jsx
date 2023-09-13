import { Nav, Navbar } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"

const Header = () => {


  const location = useLocation()


  return(
  <div>
    
  <Navbar expand="lg" className="bg-dark">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" alt="logo" className="img-fluid ms-5 me-5 mt-1" style={{maxWidth:"80px"}}/>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-danger" />
    <Navbar.Collapse id="basic-navbar-nav" >
      <Nav >
        <Link to="/home" className="text-white nav-link">Home</Link>
        <Link to="/tv-shows" className="text-white fw-bold nav-link">Tv Shows</Link>
       <Link to="/movies" className="text-white nav-link">Movies</Link>
       <Link to="/recently-added" className="text-white nav-link">Recently added</Link>
       <Link to="/my-list" className="text-white nav-link">My List</Link>
      </Nav>
    </Navbar.Collapse>
 
 
 <div
        className="d-flex justify-content-end align-content-start align-items-center d-lg-flex align-items-lg-center justify-content-lg-end me-lg-5"
      >
        <svg
          className="text-white mx-2 bi bi-search"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
         
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
       
        <svg
          className="text-white mx-2 bi bi-bell"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          
          viewBox="0 0 16 16"
        >
          <path
            d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
          />
        </svg>
     
      </div>
      </Navbar>
 </div>
)}

export default Header