import React, { useState } from "react";
import "./Header.css";

const Header = ({ onCategoryChange, selectedCategory }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleLogoClick = () => {
    if (onCategoryChange) {
      onCategoryChange("Home");
    }
    setIsMobileMenuOpen(false);
  };

  const handleCategoryClick = (category) => {
    if (onCategoryChange) {
      onCategoryChange(category);
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const categories = ["Music library", "Music videos", "About me"];

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
      
      <button 
        className="mobile-menu-toggle"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        {categories.map((category) => (
          selectedCategory !== category && (
            <button
              key={category}
              className="header-category-button"
              onClick={() => handleCategoryClick(category)}
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