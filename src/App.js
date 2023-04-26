import React, {useEffect, useState} from "react";
import BatContainer from "./components/BatContainer";
import BatForm from "./components/BatForm";
import Search from "./components/Search";
import './App.css';

function App() {
  //set state for movies
  const [moviesData, setMoviesData] = useState([]);

  const [searchBy, setSearchBy] = useState("title");

  const [input, setInput] = useState("");

  const searchedMoviesData = moviesData.filter((moviesItem) => {
    const searchTerm = input.toLowerCase();
    const searchProperty = searchBy.toLowerCase();

    if (moviesItem.hasOwnProperty(searchProperty)) {
      const itemValue = moviesItem[searchProperty].toLowerCase();
      return itemValue.includes(searchTerm);
    }
    return false;
});
  

  //fetch movies from API
  useEffect(() => {
    fetch("http://localhost:3000/movies")
    .then((r) => r.json())
    .then((moviesData) => {
      setMoviesData(moviesData);
    });
  }, []);

  return (
    <div 
      className="App min-h-screen animate-moveGradient"
      style={{ minHeight: "100vh" }}
    >
      <header className="App-header">
        <h1 className="text-yellow-500 pt-3.5 pb-3.5 text-9xl"
            style={{
            textShadow:'-1px -1px 0 #1f2937, 1px -1px 0 #1f2937, -1px 1px 0 #1f2937, 1px 1px 0 #1f2937',
          }}
        >THE BATALOG
        </h1>
          <Search searchBy={searchBy} setSearchBy={setSearchBy} input={input} setInput={setInput} />
          <BatForm />
          <BatContainer searchedMoviesData={searchedMoviesData} />
      </header>
    </div>
  );
}

export default App;
