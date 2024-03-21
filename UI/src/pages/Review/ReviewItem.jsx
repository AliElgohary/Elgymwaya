// ReviewItem.js

import React from 'react';

const ReviewItem = ({ name, comment, rating }) => {
  return (
    <div className="review-item">
      <h3>{name}</h3>
      <p>{comment}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}

export default ReviewItem;
