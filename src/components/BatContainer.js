import React from "react";
import BatCard from "./BatCard";

function BatContainer({ searchedMoviesData, handleDeleteMovie }) {
    return (
        <div className="container mx-auto mt-4">
        <div className="w-full flex flex-wrap justify-center mb-4">
            {searchedMoviesData.map((movie) => (
            <div key={movie.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 mb-4">
                <BatCard movie={movie} handleDeleteMovie={handleDeleteMovie} />
            </div>
            ))}
        </div>
        </div>
    );
}

export default BatContainer;
