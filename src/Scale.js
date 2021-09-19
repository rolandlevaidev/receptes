import React from "react";

const Scale = ({ rating = 0, max = 5, fullIcon, emptyIcon, title }) => {
  if (rating > max) {
    console.error("Rate cannot be higher than max");
    return null;
  }
  return (
    <div>
      {title && <span>{title}</span>}
      <div
        className="iconContainer recipeInfo"
        style={{ border: "2px solid red" }}
      >
        {[...Array(rating)].map(() => fullIcon())}
        {[...Array(max - rating)].map(() => emptyIcon())}
      </div>
    </div>
  );
};

export default Scale;
