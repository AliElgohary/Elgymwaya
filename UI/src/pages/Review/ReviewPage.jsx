// ReviewPage.js

import React from 'react';
import ReviewItem from './ReviewItem';

const reviews = [
  { id: 1, name: 'Ahmed', comment: 'Great product, highly recommend!', rating: 5 },
  { id: 2, name: 'Ramy', comment: 'Average product, could be better.', rating: 3 },
  { id: 3, name: 'Mohamed', comment: 'Not satisfied with the quality.', rating: 2 },
];

const ReviewPage = () => {
  return (
    <div className="review-page">
      <h2>Customer Reviews</h2>
      <div className="review-list">
        {reviews.map(review => (
          <ReviewItem key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
}

export default ReviewPage;
