import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BatMovieDetail({ handleAdd, handleFavorite }) {
    const [isToFavorite, setIsToFavorite] = useState(true);
    const [isToAdd, setIsToAdd] = useState(true);
    const [movie, setMovie] = useState({});
    const { id } = useParams();

    function handleFaveClick(id) {
        setIsToFavorite(!isToFavorite);

        fetch(`http://localhost:3000/movies/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                favorited: `${!isToFavorite}`,
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                handleFavorite(data);
            })
            .catch((error) => console.log(error));
    }

    function handleWatchClick(id) {
        setIsToAdd(!isToAdd);

        fetch(`http://localhost:3000/movies/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                added: `${!isToAdd}`,
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                handleAdd(data);
            })
            .catch((error) => console.log(error));
    }


    useEffect(() => {
        fetch(`http://localhost:3000/movies/${id}`)
            .then((r) => r.json())
            .then((movie) => setMovie(movie));
    }, [id]);

    if (!movie) return <h2>Loading...</h2>;

    const { title, director, year, rating, image, about, cast } = movie;

    return (
        <section
            className="App min-h-screen animate-moveGradient"
            style={{ minHeight: "100vh" }}>
            <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
                <div
                    className="movie-item"
                    style={{ display: "flex" }}>
                    <img
                        className="w-full h-auto mb-4 hover:shadow-lg hover:translate-y-1 hover:filter-glow transition duration-300 ease-in-out"
                        src={image}
                        alt={title}
                        style={{ height: "800px", width: "auto" }}
                    />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            marginLeft: "2rem",
                        }}>
                        <h1
                            className="text-black-500 pt-3.5 pb-3.5 text-6xl"
                            style={{ padding: "20px" }}>
                            {title}
                        </h1>
                        <p className="text-black-500 pt-3.5 pb-3.5 text-3xl">
                            {director}
                        </p>
                        <p className="text-black-500 pt-3.5 pb-3.5 text-3xl">
                            {year}
                        </p>
                        <p className="text-black-500 pt-3.5 pb-3.5 text-xl">
                            {rating}
                        </p>
                        <p className="text-black-500 pt-3.5 pb-3.5 text-2xl">
                            {cast}
                        </p>
                        <p style={{ padding: "40px " }}>{about}</p>
                        <span>
                            <button
                                onClick={() => handleFaveClick(id)}
                                className="bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-700 ml-2">
                                {isToFavorite
                                    ? "ADDED TO FAVORITES"
                                    : "ADD TO FAVORITES"}
                            </button>
                            <button
                                onClick={() => handleWatchClick(id)}
                                className="bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-700 ml-2">
                                {isToAdd ? "ADDED TO WATCHLIST" : "ADD TO WATCHLIST"}
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BatMovieDetail;
