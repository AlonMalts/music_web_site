import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-me-section">
        <h2>About Me</h2>
        <p>
          I was born in Kfar Saba, Israel, and raised in Russia, moving between
          cities like Chelyabinsk, Moscow, and St. Petersburg. My love for music
          started early, with piano, choir, guitar, and singing lessons filling
          my childhood. I am a passionate musician and sound designer with a
          diverse background spanning classical training, modern production
          techniques, and jazz education.
        </p>
      </div>

      <div className="education-instruments-container">
        <div className="education-section">
          <h2>Education</h2>
          <ul>
            <li>
              <strong>Children Music School</strong> - Studied classical guitar for 3 years (ages 12-14)
            </li>
            <li>
              <strong>University for Sound Engeniering</strong> - Sound engineering for mass events, 
              learning audio engineering, sound design, piano, music theory, and harmony (ages 17-18)
            </li>
            <li>
              <strong>Rimon School of Jazz and Contemporary Music</strong> - Currently studying 
              jazz, blues, and rock guitar in Ramat Hasharon, with courses in songwriting, 
              music theory, and sound production
            </li>
          </ul>
        </div>

        <div className="instruments-section">
          <h2>Instruments</h2>
          <ul>
            <li><strong>Guitar</strong> - Classical and electric guitar with focus on jazz, blues, and funk</li>
            <li><strong>Piano</strong> - Classical piano training and contemporary playing</li>
            <li><strong>Ableton Push</strong> - Electronic music production and live performance</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default About;
