import { Component } from "react";
import FetchingFirstSaga from "./fetchingFirstSaga";
import FetchingSecondSaga from "./fetchingSecondSaga";
import FetchingThirdSaga from "./fetchingThirdSaga";


class Main extends Component {
    
   

    render() {
        return(
           <div className="bg-dark pb-5">
                <div className=" mx-5">
            <div className="d-flex flex-row flex-wrap align-items-baseline justify-content-end justify-content-md-between ">
              <div className="d-flex align-items-baseline d-lg-flex align-items-lg-baseline gap-4 mt-3">
                <h1 className="ms-3 pt-5 text-white">TV Shows</h1>
                <div className="dropdown">
                  <button
                    className="btn bg-black dropdown-toggle mb-1 text-white mb-md-3 border rounded-0 pe-4"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Genres
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#a">Action</a></li>
                    <li><a className="dropdown-item" href="#a">Drama</a></li>
                    <li><a className="dropdown-item" href="#a">Teen</a></li>
                  </ul>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row align-content-center me-2">
                <button className="btn bg-black text-white border rounded-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-text-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </button>
                <button className="btn bg-black text-white border rounded-0 me-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bounding-box-circles"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2zm2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2.004 2.004 0 0 1 1.437-1.437V3.937A2.004 2.004 0 0 1 12.063 2.5H3.937A2.004 2.004 0 0 1 2.5 3.937zM14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <h2 className=" mt-3 ms-3 text-white">Lord Of The Rings mania:</h2>
            < FetchingFirstSaga />
            <h2 className=" mt-5 ms-3 text-white">May The Force Be With You:</h2>
            <FetchingSecondSaga />
            <h2 className=" mt-5 ms-3 text-white">If you need more Harrison Ford:</h2>
            <FetchingThirdSaga />
            </div>
           </div>
        )
    }
}

export default Main