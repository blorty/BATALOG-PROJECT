import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
    const [movie, setMovie] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/movies/${id}`)
        .then((r) => r.json())
        .then((movie) => setMovie(movie));
    }, [id]);

    if (!movie) return <h2>Loading...</h2>;

    const { title, director, year, rating, image, about, cast } = movie;

    return (
        <section className="App min-h-screen animate-moveGradient">
        <div className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-center text-white mb-8 rounded-lg bg-gray-600 p-4 opacity-80">
        <h1 className="text-6xl font-bold mb-2">{title}</h1>
        <p className="text-xl font-bold mb-2">
            Directed by {director} ({year})
        </p>
        <p className="text-lg font-bold mb-2">{about}</p>
        <p className="text-lg font-bold mb-2">Cast: {cast}</p>
        <p className="text-lg font-bold mb-2">Rating: {rating} ⭐</p>
        </div>
            <img
            src={image}
            alt={title}
            className="w-90 h-81 rounded-lg shadow-xl"
            />
        </div>
        </section>
    );
}

export default MovieDetail;
