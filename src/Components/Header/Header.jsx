import React from "react";
import "./Header.css";

const Header = ({ onCategoryChange, selectedCategory }) => {
  const handleLogoClick = () => {
    if (onCategoryChange) {
      onCategoryChange("Home");
    }
  };

  const categories = ["Music library", "Music videos", "Music Lessons", "About me"];

  return (
    <header className="header">
      <h1 className="logo" onClick={handleLogoClick}>
        Alon Malts Music
      </h1>
      
      {selectedCategory !== "Home" && (
        <div className="selected-category-display">
          <span className="selected-category-text">
            {selectedCategory}
          </span>
        </div>
      )}
      
      <nav className="header-nav">
        {categories.map((category) => (
          selectedCategory !== category && (
            <button
              key={category}
              className="header-category-button"
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          )
        ))}
      </nav>
    </header>
  );
};

export default Header;