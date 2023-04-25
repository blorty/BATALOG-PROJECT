import React from "react";
import BatCard from "./BatCard";

function BatContainer({ movies }) {
  // Render a list of ContainerCard components for each movie in the movies array
    const moviesList = movies.map((movie) => (
        <BatCard key={movie.id} movie={movie} />
    ));

    return (
        <div>
        {/* <h2 className="color text-black">Movies</h2> */}
        <div className="flex flex-wrap">{moviesList}</div>
        </div>
    );
}

export default BatContainer;
