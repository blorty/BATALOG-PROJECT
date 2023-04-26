import React from "react";

function Search({ input, setInput, searchBy, setSearchBy }) {
    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSelectChange = (e) => {
        setSearchBy(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
        setInput("");
        }
    };

    return (
        <div className="opacity-80 bg-gray-100 border-2 border-gray-300 rounded-lg p-4 max-w-xl mx-auto mt-8">
        <h2 className="text-center text-3xl mb-4 font-bold text-white-600">BatSearch</h2>
        <div className="flex items-center space-x-4">
            <label htmlFor="search" className="text-gray-600 font-semibold">
            Search:
            </label>
            <input
            value={input}
            type="text"
            id="search"
            placeholder="Search"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            />
            <select
            value={searchBy}
            onChange={handleSelectChange}
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal"
            >
            <option value="title">Title</option>
            <option value="director">Director</option>
            <option value="star">Star</option>
            </select>
        </div>
        </div>
    );
}

export default Search;
