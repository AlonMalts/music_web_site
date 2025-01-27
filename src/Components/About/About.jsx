import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="bio-section">
        <h2>Biography</h2>
        <p>
          I was born in Kfar Saba, Israel, and raised in Russia, moving between
          cities like Chelyabinsk, Moscow, and St. Petersburg. My love for music
          started early, with piano, choir, guitar, and singing lessons filling
          my childhood.
        </p>
        <p>
          At the age of twelve, my passion for guitar led me to enroll in a
          music school for children, where I dedicated three years to classical
          guitar.
        </p>
        <p>
          Then, I went to university to study sound engineering for mass events,
          learning audio engineering, sound design, piano, music theory,
          harmony, and more.
        </p>
        <p>
          Now, I am studying at the Rimon School of Jazz and Contemporary Music
          in Ramat Hasharon, focusing on jazz, blues, and funk guitar.
        </p>
      </div>
      <div className="summary-section">
        <h2>Summary</h2>
        <ul>
          <li>
            <strong>Early Musical Journey (ages 8-12):</strong> Piano (2 years),
            Choir (3 years), Guitar (2 years), Vocal (2 years)
          </li>
          <li>
            <strong>Music School (ages 12-14):</strong> Studied classical guitar
            for 3 years
          </li>
          <li>
            <strong>University (ages 17-18):</strong> Explored sound engineering
            for mass events for 1 year
          </li>
          <li>
            <strong>Current (Age 27):</strong> Studying guitar at Rimon School
            of Jazz and Contemporary Music
          </li>
        </ul>
      </div>
      <div className="links-section">
        <h2>Links</h2>
        <ul>
          <li>
            <a
              href="mailto:alonmaltsev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email: alonmaltsev@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/drive/folders/1-bLnG8gBNFG7sIjPEkDBpNZgV257w2ej?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo Songs
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/drive/folders/1db8Z3EjcQ2ZLipL0Szmb93hFo10CyECP?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Videos
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
