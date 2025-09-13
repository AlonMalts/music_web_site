import React from "react";
import "./Header.css";

const Header = ({ onCategoryChange }) => {
  const handleLogoClick = () => {
    if (onCategoryChange) {
      onCategoryChange("Home");
    }
  };

  const categories = ["Music library", "Music videos", "Music Lessons", "About"];

  return (
    <header className="header">
      <h1 className="logo" onClick={handleLogoClick}>
        Alon Malts Music
      </h1>
      <nav className="header-nav">
        {categories.map((category) => (
          <button
            key={category}
            className="header-category-button"
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;