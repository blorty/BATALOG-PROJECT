import React, { useState, useEffect } from "react";

function BatFavorites() {
   const [moviesData, setMoviesData] = useState([]);

   useEffect(() => {
      fetch("http://localhost:3000/movies")
         .then((r) => r.json())
         .then((moviesData) => {
            setMoviesData(moviesData);
         });
   }, []);

   const filteredMoviesData = moviesData
      .filter((movie) => movie.favorited)
      .map((movie) => (
         <li key={movie.id} className="App min-h-screen animate-moveGradient">
            <div
               className="App min-h-screen animate-moveGradient"
               style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "90%",
                  height: "240px",
                  border: "solid black 4px",
                  borderRadius: "16px",
                  boxShadow: "4px 4px 6px yellow",
               }}
            >
               <img
                  src={movie.image}
                  alt={movie.title}
                  style={{
                     height: "96%",
                     width: "auto",
                     borderRadius: "8px",
                     boxShadow: "2px 2px 3px yellow",
                  }}
               />
               <div
                  className="App min-h-screen animate-moveGradient"
                  style={{
                     display: "flex",
                     flexDirection: "column",
                     width: "auto",
                     height: "96%",
                     padding: "4px",
                     margin: "4px",
                  }}
               >
                  <h2>
                     {movie.title} ❈ {movie.star} ❈ {movie.director} ❈ {movie.year}
                  </h2>
                  <p>{movie.cast}</p>
                  <p>{movie.faveSummary}</p>
               </div>
            </div>
         </li>
      ));

   return (
      <div className="App min-h-screen animate-moveGradient">
         <h1
            className="text-yellow-500 pt-3.5 pb-3.5 text-9xl"
            style={{
               textShadow:
                  "-1px -1px 0 #1f2937, 1px -1px 0 #1f2937, -1px 1px 0 #1f2937, 1px 1px 0 #1f2937",
            }}
         >
            FAVORITES
         </h1>
         <div className="App min-h-screen animate-moveGradient">
            <ul>{filteredMoviesData}</ul>
         </div>
      </div>
   );
}

export default Bat
Favorites;