import React, { useState } from "react";

function BatReview({ onSubmit, id }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewData = {
      name,
      comment,
    };
    onSubmit(reviewData);
    setName("");
    setComment("");
    
    // Send a PATCH request to the server
    fetch('http://localhost:3000/movies/{movieId}', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update review');
        }
        setSuccessMessage('Review updated successfully');
        setErrorMessage(null);
      })
      .catch(error => {
        console.error(error);
        setErrorMessage('Failed to update review');
        setSuccessMessage(null);
      });
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "right" }}>
      <label>
        Name:
        <input className="flex-grow w-full sm:w-1/2 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 mr-2" type="text" value={name} onChange={handleNameChange} style={{ padding: '8px' }} style={{ width: "80%", outline: "2px solid blue" }}/>
      </label>
      <br />
      <label>
        Review:
        <textarea className="flex-grow w-full sm:w-1/2 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 mr-2" value={comment} onChange={handleCommentChange} style={{ width: "80%", outline: "2px solid blue" }}/>
      </label>
      <br />
      <button className="bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-700 ml-2" type="submit">Submit</button>
    </form>
  );
}

export default BatReview;