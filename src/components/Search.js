import React from "react";

function Search() {
    return (
        <div>
        <div className="flex">
            <input
            type="text"
            placeholder="Search..."
            className="flex-grow px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 mr-2"
            />
            <button
            type="button"
            className="bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-700 ml-2"
            >
            Search
            </button>
        </div>
        </div>
    );
}

export default Search;
