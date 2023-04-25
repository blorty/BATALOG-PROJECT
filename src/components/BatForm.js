import React, {useState} from "react";

function BatForm() {

    //set initial state for form
    const initialData = {
        title: "",
        image: "",
        director: "",
        year: "",
        rating: "",
        star: "",
    }

    //set state for movies
    const [moviesData, setMoviesData] = useState(initialData)

    //set state for movies
    const [movies, setMovies] = useState([])

    //handle create new movie form
    const handleCreateMovie = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(moviesData),
        })
        .then((r) => r.json())
        .then((newMovie) => {
            setMovies([...movies, newMovie])
            setMoviesData(initialData)
        });
    };

    //update form data based on user input
    const handleChange = (e) => {
        setMoviesData({...moviesData, [e.target.name]: e.target.value})
    };

    return (
    <div>
        <form className="flex pt-3.5">
    <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        className="flex-grow w-full sm:w-1/2 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 mr-2"
    />
    <input
        type="text"
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
        className="flex-grow w-full sm:w-1/2 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ml-2"
    />
    <input
        type="submit"
        name="submit"
        value="Add a new movie"
        onClick={handleCreateMovie}
        className="bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-700 ml-2"
    />
        </form>
    </div>
    );
}

export default BatForm
