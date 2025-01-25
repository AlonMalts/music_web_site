import React from "react";
import "./WorkScreen.css";

const WorkScreen = ({ selectedCategory }) => {
  const renderContent = () => {
    switch (selectedCategory) {
      case "Releases":
        return <p>Here are your music releases.</p>;
      case "Videos":
        return <p>Watch your music videos here.</p>;
      case "About":
        return <p>Learn more about the artist here.</p>;
      case "Features":
        return <p>Explore user library management features.</p>;
      default:
        return <p>Select a category to see the content.</p>;
    }
  };

  return (
    <main className="workscreen">
      <h2>{selectedCategory}</h2>
      <div>{renderContent()}</div>
    </main>
  );
};

export default WorkScreen;