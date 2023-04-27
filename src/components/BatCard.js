import React, { useState } from "react";

function BatCard({ movie, handleDeleteMovie }) {
  // Set state for movies seen and show details
    const [moviesSeen, setMoviesSeen] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    // Toggle movies seen status
    const handleMoviesSeen = () => {
        setMoviesSeen(!moviesSeen);
    };

    // Toggle show details status
    const handleMovieClick = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="w-full md:w-1/3 px-2 mb-4">
        <div className="flex justify-center">
            <div className="container-card w-full p-4">
            {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <img
                className="w-full h-auto mb-4 hover:shadow-lg hover:translate-y-1 hover:filter-glow transition duration-300 ease-in-out"
                src={movie.image}
                alt={movie.title}
                onClick={handleMovieClick} // Move the onClick event to the image tag
            />
            <h3 className="text-1xl font-semibold mb-2 relative text-black">
                {movie.title.toUpperCase()}
                <span className="absolute -z-1 top-0 left-0 right-0 bottom-0 text-white outline-black outline-2">
                {movie.title.toUpperCase()}
                </span>
            </h3>
            <p className="text-white">{movie.description}</p>
            {showDetails && (
                <div>
                <p className="text-white">Star: {movie.star}</p>
                <p className="text-white">Rating: {movie.rating}</p>
                <p className="text-white">Year: {movie.year}</p>
                <p className="text-white">Director: {movie.director}</p>
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDeleteMovie(movie.id)}
                >
                    Delete
                </button>
                </div>
            )}
            </div>
        </div>
        <button
            onClick={handleMoviesSeen}
            className="bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-700 ml-2"
        >
            {moviesSeen ? "Seen" : "Not Seen"}
        </button>
        </div>
    );
}

export default BatCard;
