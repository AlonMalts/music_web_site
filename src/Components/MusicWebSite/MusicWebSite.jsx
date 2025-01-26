import React, { useState } from "react";
import Header from "../Header/Header";
import Categories from "../Categories/Categories";
import WorkScreen from "../WorkScreen/WorkScreen";
import Footer from "../Footer/Footer";
import "./MusicWebSite.css";

const MusicWebSite = () => {
  const [selectedCategory, setSelectedCategory] = useState("Releases");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="music-website">
      <Header />
      <Categories onCategoryChange={handleCategoryChange} />
      <WorkScreen selectedCategory={selectedCategory} />
      <Footer />
    </div>
  );
};

export default MusicWebSite;