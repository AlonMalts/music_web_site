import React, { useState, useEffect } from "react";
import "./WorkScreen.css";
import Releases from "../Releases/Releases";
import About from "../About/About";
import Lessons from "../Lessons/Lessons";

const WorkScreen = ({ selectedCategory }) => {
  const renderContent = () => {
    switch (selectedCategory) {
      case "Releases":
        return <Releases />;
      case "Videos":
        return <p>Watch your music videos here.</p>;
      case "About":
        return <About />;
      case "Lessons":
        return <Lessons />;
      case "Features":
        return <p>Explore user library management features.</p>;
      default:
        return <p>Select a category to see the content.</p>;
    }
  };

  return (
    <main className="workscreen">
      <div>{renderContent()}</div>
    </main>
  );
};

export default WorkScreen;
