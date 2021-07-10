import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  // contains the number of start's we've for our rating
  const totalRating = [];

  // this is just to push how many start's we've in our rating
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      totalRating.push(
        <li className="star" ley={i}>
          <FaStar />
        </li>
      );
    } else {
      totalRating.push(
        <li className="star-o" key={i}>
          <FaStar />
        </li>
      );
    }
  }

  return (
    <div className="rating">
      <ul>{totalRating}</ul>
    </div>
  );
};

export default Rating;
