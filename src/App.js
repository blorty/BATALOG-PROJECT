import React, {useEffect, useState} from "react";
import MoviesContainer from "./components/MoviesContainer";
import Form from "./components/Form";
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
      console.log(moviesData);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 class="color text-yellow-500">BATBOOK</h1>
        <MoviesContainer class="color fill-black"/>
        <Form />
        <Search />
      </header>
    </div>
  );
}

export default App;
