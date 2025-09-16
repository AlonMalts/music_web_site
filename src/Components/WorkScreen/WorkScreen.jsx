import React from "react";
import "./WorkScreen.css";
import Home from "../Home/Home";
import Releases from "../Releases/Releases";
import About from "../About/About";
import Lessons from "../Lessons/Lessons";
import MusicVideos from "../MusicVideos/MusicVideos";
import Collaborations from "../Collaborations/Collaborations";

const WorkScreen = ({ selectedCategory, onCategoryChange }) => {
  const renderContent = () => {
    switch (selectedCategory) {
      case "Home":
        return <Home onCategoryChange={onCategoryChange} />;
      case "Music library":
        return <Releases />;
      case "Music videos":
        return <MusicVideos />;
      case "Music Lessons":
        return <Lessons />;
      case "Collaborations":
        return <Collaborations />;
      case "About me":
        return <About />;
      default:
        return <Home onCategoryChange={onCategoryChange} />;
    }
  };

  return (
    <main className="workscreen">
      <div>{renderContent()}</div>
    </main>
  );
};

export default WorkScreen;