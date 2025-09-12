import React from "react";
import "./WorkScreen.css";
import Home from "../Home/Home";
import Releases from "../Releases/Releases";
import About from "../About/About";
import Lessons from "../Lessons/Lessons";

const WorkScreen = ({ selectedCategory }) => {
  const renderContent = () => {
    switch (selectedCategory) {
      case "Home":
        return <Home />;
      case "Music library":
        return <Releases />;
      case "Music videos":
        return <p>Watch your music videos here.</p>;
      case "Music Lessons":
        return <Lessons />;
      case "About":
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <main className="workscreen">
      <div>{renderContent()}</div>
    </main>
  );
};

export default WorkScreen;