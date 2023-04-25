import React from "react";

function BatForm() {
    return (
        <div>
        <form className="flex pt-3.5">
            <input
            type="text"
            name="Title"
            placeholder="Title"
            className="flex-grow w-full sm:w-1/2 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 mr-2"
            />
            <input
            type="text"
            name="name"
            placeholder="Image URL"
            className="flex-grow w-full sm:w-1/2 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ml-2"
            />
            <input
            type="submit"
            name="submit"
            value="Add a new movie"
            className="bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-700 ml-2"
            />
        </form>
        </div>
    );
}

export default BatForm;
