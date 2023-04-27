import React, { useState } from "react";
import { Link } from "react-router-dom";

function BatCard({ movie }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleMovieClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="w-full md:w-1/3 px-2 mb-4">
      <div className="flex justify-center">
        <div className="container-card w-full p-4">
          <img
            className="w-full h-auto mb-4 hover:shadow-lg hover:translate-y-1 hover:filter-glow transition duration-300 ease-in-out"
            src={movie.image}
            alt={movie.title}
          />
          <h3 className="text-1xl font-semibold mb-2 relative text-black">
            {movie.title.toUpperCase()}
            <span className="absolute -z-1 top-0 left-0 right-0 bottom-0 text-white outline-black outline-2">
              {movie.title.toUpperCase()}
            </span>
          </h3>
          <Link to={`/movies/${movie.id}`}>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-700 ml-2">
              SEE MORE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BatCard;
