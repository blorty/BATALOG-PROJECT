import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function MovieDetail() {
    const [movie, setMovie] = useState(null);
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/movies/${id}`)
            .then(r => r.json())
            .then(movie => setMovie(movie))
    }, [id])

    if (!movie) return <h2>Loading...</h2>

    const { title, director, year, rating, image, about, cast } = movie;

    return (
        <section className="App min-h-screen animate-moveGradient"
        style={{ minHeight: "100vh" }}>
            <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
                <div className="movie-item" style={{ display: "flex" }}>
                    <img className="w-full h-auto mb-4 hover:shadow-lg hover:translate-y-1 hover:filter-glow transition duration-300 ease-in-out" src={image} alt={title} style={{ height: "800px", width: "auto" }}/>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: "2rem" }}>
                        <h1>{title}</h1>
                        <p>{director}</p>
                        <p>{year}</p>
                        <p>{rating}</p>
                        <p>{cast}</p>
                        <p>{about}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MovieDetail;