import React from "react";
import "./Categories.css";

const Categories = () => {
  return (
    <section className="categories">
      <h2>Categories</h2>
      <nav>
        <a href="#releases">Releases</a>
        <a href="#videos">Videos</a>
        <a href="#about">About</a>
        <a href="#features">Features</a>
      </nav>
    </section>
  );
};

export default Categories;