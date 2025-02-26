import React from "react";
import "./Categories.css";

const Categories = ({ onCategoryChange }) => {
  const categories = ["Releases", "Videos", "About", "Features","Lessons"];

  return (
    <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            className="category-button"
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
    </div>
  );
};

export default Categories;