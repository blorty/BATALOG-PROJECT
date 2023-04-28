import React, { useEffect, useState } from "react";

function BatWatchlist() {
   const [filteredMovies, setFilteredMovies] = useState([]);

   useEffect(() => {
      fetch("http://localhost:3000/movies")
         .then((r) => r.json())
         .then((moviesData) => {
            const filteredMovies = moviesData.filter(
               (movie) => movie.added === true
            );
            setFilteredMovies(filteredMovies);
         });
   }, []); // Add an empty array as the second argument to run the effect only once on mount

   const filtereMovieCards = filteredMovies.map((movie) => {
      const { id, image, title, star, director, year, cast, faveSummary } =
         movie;

      return (
         <li
            key={id}
            className="App min-h-screen animate-moveGradient">
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
               }}>
               <img
                  src={image}
                  alt={title}
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
                  }}>
                  <h2>
                     {title} ❈ {star} ❈ {director} ❈ {year}
                  </h2>
                  <p>{cast}</p>
                  <p>{faveSummary}</p>
               </div>
            </div>
         </li>
      );
   });

   return (
      <div className="App min-h-screen animate-moveGradient">
         <h1
            className="text-yellow-500 pt-3.5 pb-3.5 text-9xl"
            style={{
               textShadow:
                  "-1px -1px 0 #1f2937, 1px -1px 0 #1f2937, -1px 1px 0 #1f2937, 1px 1px #1f2937",
            }}>
            WATCHLIST
         </h1>
         <div className="App min-h-screen animate-moveGradient">
            <ul>{filtereMovieCards}</ul>
         </div>
      </div>
   );
}

export default BatWatchlist;
