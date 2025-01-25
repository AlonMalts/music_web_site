import React from "react";
import "./WorkScreen.css";

const WorkScreen = () => {
  return (
    <main className="workscreen">
      <h2>Work Screen</h2>
      <div id="releases">
        <h3>My Releases</h3>
        <p>List of releases will go here...</p>
      </div>
      <div id="videos">
        <h3>My Videos</h3>
        <p>List of videos will go here...</p>
      </div>
      <div id="features">
        <h3>Features</h3>
        <p>User library management app will go here...</p>
      </div>
    </main>
  );
};

export default WorkScreen;