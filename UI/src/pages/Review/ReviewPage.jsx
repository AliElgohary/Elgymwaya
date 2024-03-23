// ReviewPage.js

import React from 'react';
import ReviewItem from './ReviewItem';
import myPhoto from '../../assets/trainersImages/fitness1.png'


const reviews = [
  { id: 1, name: 'Ahmed', comment: 'Great product, highly recommend!', rating: 5 },
  { id: 2, name: 'Ramy', comment: 'Average product, could be better.', rating: 3 },
  { id: 3, name: 'Mohamed', comment: 'Not satisfied with the quality.', rating: 2 },
];

const ReviewPage = () => {
  return (
    <div className="review-page">
      <h2>Customer Reviews</h2>
      <div>
    </div>
      <div className="review-list">
        {reviews.map(review => (<div>
          <ReviewItem key={review.id} {...review} />
          <img width={300} src={myPhoto} alt="coach photo" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewPage;

