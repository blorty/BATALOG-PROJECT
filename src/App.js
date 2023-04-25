import React, {useEffect, useState} from "react";
import BatContainer from "./components/BatContainer";
import BatForm from "./components/BatForm";
import Search from "./components/Search";
import './App.css';

function App() {
  //set state for movies
  const [movies, setMovies] = useState([]);

  //fetch movies from API
  useEffect(() => {
    fetch("http://localhost:3000/movies")
    .then((r) => r.json())
    .then((moviesData) => {
      setMovies(moviesData);
    });
  }, []);

  return (
    <div 
      className="App min-h-screen animate-moveGradient"
      style={{ minHeight: "100vh" }}
    >
      <header className="App-header">
        <h1 class="text-yellow-500 pt-3.5 pb-3.5 text-9xl"
            style={{
            textShadow:'-1px -1px 0 #1f2937, 1px -1px 0 #1f2937, -1px 1px 0 #1f2937, 1px 1px 0 #1f2937',
          }}
        >THE BATALOG
        </h1>
          <Search />
          <BatForm />
          <BatContainer movies={movies}/>
      </header>
    </div>
  );
}

export default App;
