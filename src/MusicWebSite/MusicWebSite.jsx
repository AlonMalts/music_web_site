import React from "react";
import Header from "../Header/Header";
import Categories from "../Categories/Categories";
import WorkScreen from "../WorkScreen/WorkScreen";
import Footer from "../Footer/Footer";
import "./MusicWebSite.css";

const MusicWebSite = () => {
  return (
    <div className="music-website">
      <Header />
      <Categories />
      <WorkScreen />
      <Footer />
    </div>
  );
};

export default MusicWebSite;