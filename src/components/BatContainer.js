import React from "react";
import BatCard from "./BatCard";

function BatContainer({ searchedMoviesData }) {
  // Render a list of ContainerCard components for each movie in the movies array
    const moviesList = searchedMoviesData.map((movie) => (
        <BatCard key={movie.id} movie={movie} />
    ));

    return (
        <div>
        <div className="flex flex-wrap">{moviesList}</div>
        </div>
    );
}

export default BatContainer;