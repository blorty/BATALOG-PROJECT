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
    <div className="searchbar">
      <h2 className="text-color border-l-amber-600"> </h2>
      <label htmlFor="search">BatSearch:</label>
      <input
        value={input}
        type="text"
        id="search"
        placeholder="Search"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <select value={searchBy} onChange={handleSelectChange}>
        <option value="title">Title</option>
        <option value="director">Director</option>
        <option value="actors">Actor</option>
      </select>
    </div>
  );
}

export default Search;

// function Search() {
//     return (
//         <div>
//         <div className="flex">
//             <input
//             type="text"
//             placeholder="Search..."
//             className="flex-grow px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 mr-2"
//             />
//             <button
//             type="button"
//             className="bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-700 ml-2"
//             >
//             Search
//             </button>
//         </div>
//         </div>
//     );
// }

// export default Search;
