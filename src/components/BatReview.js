import React, { useState } from "react";

function BatReview() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

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
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Review:
        <textarea value={comment} onChange={handleCommentChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BatReview;