import React, { useState } from "react";

function BatCard({ movie, handleDeleteMovie }) {
    const [showDetails, setShowDetails] = useState(false);
    const [moviesSeen, setMoviesSeen] = useState(false);

    const handleMovieClick = () => {
        setShowDetails(!showDetails);
    };

    const handleMoviesSeen = () => {
        setMoviesSeen(!moviesSeen);
    };

    return (
        <div className="w-full px-2 mb-4">
        <div className="flex justify-center flex-col items-center">
            {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <img
            className="w-full h-auto mb-4 hover:shadow-lg hover:translate-y-1 hover:filter-glow transition duration-300 ease-in-out"
            src={movie.image}
            alt={movie.title}
            onClick={handleMovieClick}
            />
            <h3 className="text-1xl font-semibold mb-2 relative text-black">
            {movie.title.toUpperCase()}
            <span className="absolute -z-1 top-0 left-0 right-0 bottom-0 text-white outline-black outline-2">
                {movie.title.toUpperCase()}
            </span>
            </h3>
            <button
            onClick={handleMoviesSeen}
            className="bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-700 mt-2"
            >
            {moviesSeen ? "Seen" : "Not Seen"}
            </button>
            <a
            href={`/movies/${movie.id}`}
            className="bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-700 mt-2"
            >
            SEE MORE
            </a>
            {showDetails && (
            <div>
                <p className="text-white">Director: {movie.director}</p>
                <p className="text-white">Star: {movie.star}</p>
                <p className="text-white">Year of Release: {movie.year}</p>
                <p className="text-white">Rating: {movie.rating} ⭐</p>
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
    );
}

export default BatCard;
