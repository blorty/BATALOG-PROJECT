import React from "react";

function Form () {
    return (
        <div>
        <h2>Form component</h2>
        <form class="shadow-inner">
            <input
                type="text"
                name="name"
                placeholder="Enter a movie title..."
                className="input-text"
                value={"title"} //"PLACEHOLDER"
                onChange={"PLACEHOLDER"} //"PLACEHOLDER"
            />
                <input
                type="text"
                name="name"
                placeholder="Enter a toy's name..."
                className="input-text"
                value={"name"} //"PLACEHOLDER"
                onChange={"PLACEHOLDER"} //"PLACEHOLDER"
            />
            <input
                type="submit"
                name="submit"
                value="Add a new movie"
                className="submit"
            />
        </form>
        </div>
    );
};

export default Form;
