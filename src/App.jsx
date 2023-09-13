import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';

import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TvShow from './components/TvShows';
import MovieDetails from './components/MovieDetaild';



function App() {
  return (
    <div>
      
     <BrowserRouter>
      <Header />
     
     <Routes>
      <Route path='/home' element={<Main />} />
      <Route path='/tv-shows' element={<TvShow />}/>
      <Route path='/movie-details/:movieId' element={<MovieDetails />} />
     </Routes>
     <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
