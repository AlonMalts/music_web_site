import React from "react";
import "./Header.css";

const Header = ({ onCategoryChange }) => {
  const handleLogoClick = () => {
    if (onCategoryChange) {
      onCategoryChange("Home");
    }
  };

  return (
    <header className="header">
      <h1 className="logo" onClick={handleLogoClick}>
        Alon Malts Music
      </h1>
    </header>
  );
};

export default Header;