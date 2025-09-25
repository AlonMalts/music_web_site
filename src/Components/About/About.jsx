import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-me-section">
        <h2>Hey, I'm Alon.</h2>
        <p>
          I was born in Kfar Saba, Israel, and grew up in Russia, moving between Chelyabinsk, Moscow, and St. Petersburg. Music has been with me since childhood — first the piano, then guitar and singing, with endless lessons, bands, and experiments shaping who I am.<br />
          Over the years, I've explored many sides of sound: classical training, jazz studies, modern production, and songwriting. Each world gave me something new — discipline, creativity, and the drive to push boundaries.
          And of course, there's always rock and punk — the raw energy, chaos, and freedom that keep everything alive and real. Because music, for me, is about breaking walls as much as building them.
        </p>
      </div>

      <div className="education-instruments-container">
        <div className="education-section">
          <h2>Education</h2>
          <ul>
            <li>
              <strong>Children Music School</strong> - Studied classical guitar for 3 years
            </li>
            <li>
              <strong>University for Sound Engineering</strong> - Sound engineering for mass events,
              learning audio engineering, sound design, piano, music theory, and harmony
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
