import './App.css';
import { useState, useEffect } from 'react';
import buscadorIcono from './buscador.svg';
import TarjetaPeliculas from './componente/TarjetaPelicula';

const API_URL = 'http://www.omdbapi.com/?apikey=b4cc59ce';
/* const movie1 = { Title: "Bobby Loves Mangos", Year: "1998", imdbID: "tt0174511", Poster: "https://m.media-amazon.com/images/M/MV5BYmY5YmJiM2QtNjdhOC00NjRhLTgyNDEtYmM1NmJhNjc5NDE2XkEyXkFqcGdeQXVyMjQ4ODcxNTM@._V1_SX300.jpg" }*/
function App() {
  const [movies, setMovies] = useState([])
  const [busquedaParam, setBusquedaParam] = useState('')

  const buscadorCine = async (titulo) => {
    try {
      
    } catch (error) {
      
    }
    const response = await fetch(`${API_URL}&s=${titulo}`)
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      buscadorCine(busquedaParam);
    }
  }

  useEffect(() => {
    buscadorCine('cars')
  }, [])

  return (
    <div className="app">
      <header className="App-header">
        <h1>Cine colombia</h1>
        <div className='busqueda'>
          <input placeholder='Que va a buscar mi rey?'
            value={busquedaParam}
            onChange={(e) => setBusquedaParam(e.target.value)}
            onKeyPress = {handleKeyPress} />
          <img src={buscadorIcono} alt="No hay nada panita" onClick={() => buscadorCine(busquedaParam)} />
        </div>

        {movies?.length > 0 ? (
          <div className='contenedor'>{
            movies.map((movie) => (
              <TarjetaPeliculas  movie1 = {movie} />
            ))
          }
          </div>
        ) : (
          <div className='empty'>
            <h2>No se encontraron peliculas</h2>
          </div>
        )
        }

      </header>
    </div>
  );
}

export default App;
