import React, {useEffect, useState} from "react";
import BatContainer from "./BatContainer";
import BatForm from "./BatForm";
import Search from "./Search";
import '../App.css';

function Home() {
    //set state for movies
    const [moviesData, setMoviesData] = useState([]);

    //set state for search
    const [searchBy, setSearchBy] = useState("title");

    //set state for input
    const [input, setInput] = useState("");

    //filter movies based on search
    const searchedMoviesData = moviesData.filter((moviesItem) => {
        const searchTerm = input.toLowerCase();
        const searchProperty = searchBy.toLowerCase();

        //if the movie has the search property, return the movie
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

    //handle addNewMovie function
    const handleAddNewMovie = (newMovie) => {
        const updatedMoviesData = [...moviesData, newMovie];
        setMoviesData(updatedMoviesData);
    };

    //handleDeleteMovie function
    const handleDeleteMovie = (id) => {
        const updatedMoviesData = moviesData.filter((movie) => movie.id !== id);
        setMoviesData(updatedMoviesData);
        console.log(updatedMoviesData);
    };

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
            <BatForm handleAddNewMovie={handleAddNewMovie}/>
            <BatContainer searchedMoviesData={searchedMoviesData} handleDeleteMovie={handleDeleteMovie}/>
        </header>
        </div>
    );
}

export default Home;