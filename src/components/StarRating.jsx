import React from "react";
import { FaStar } from "react-icons/fa6";

const StarRating = ({rating}) => {
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const currentRate = i + 1;
        return (
          <FaStar
            className="inline"
            color={currentRate <= rating ? "yellow" : "gray"}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
