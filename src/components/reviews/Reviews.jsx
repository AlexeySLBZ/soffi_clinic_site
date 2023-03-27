import React, { useState } from 'react';
import "./reiews.css"
function Reviews() {

  const [reviews, setReviews] = useState([
    {
      type: 'text',
      content: 'I had a great experience at this clinic. The staff was friendly and professional, and I was very happy with the results.'
    },
    {
      type: 'photo',
      content: 'https://example.com/review-photo.jpg'
    },
    {
      type: 'audio',
      content: 'https://example.com/review-audio.mp3'
    },
    {
      type: 'video',
      content: 'https://youtu.be/XRFrXNJCviQ'
    }
  ]);

  return (
    <div className="reviews">
      {reviews.map((review, index) => (
        <div key={index} className={`review review--${review.type}`}>
          {review.type === 'text' && <p>{review.content}</p>}
          {review.type === 'photo' && <img src={review.content} alt="review photo"/>}
          {review.type === 'audio' && <audio src={review.content} controls />}
          {review.type === 'video' && <video src={review.content} controls />}
        </div>
      ))}
    </div>
  );
}

export default Reviews;
