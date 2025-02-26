import React from "react";
import "./Lessons.css";

const Lessons = () => {
  return (
    <div className="lessons">
      <div className="intro-section">
        <h2>Private Music Lessons</h2>
        <p>
          Whether you're a beginner or an experienced musician looking to refine
          your skills, I offer personalized music lessons tailored to your goals
          and interests. With years of experience in classical, jazz, and
          contemporary music, I am here to help you grow as a musician.
        </p>
      </div>
      <div className="lessons-section">
        <h2>What I Offer</h2>
        <ul>
          <li>
            <strong>Guitar Lessons:</strong> Acoustic, Electric, Classical,
            Jazz, Blues, Funk
          </li>
          <li>
            <strong>Music Theory & Harmony:</strong> Learn the building blocks
            of music to enhance your playing
          </li>
          <li>
            <strong>Songwriting & Composition:</strong> Develop your creativity
            and write your own songs
          </li>
          <li>
            <strong>Improvisation:</strong> Master soloing and improvising over
            different styles
          </li>
          <li>
            <strong>Recording & Sound Production:</strong> Basics of recording,
            mixing, and producing your own music
          </li>
        </ul>
      </div>
      <div className="details-section">
        <h2>Lesson Details</h2>
        <ul>
          <li>
            <strong>Format:</strong> In-person (Ramat Hasharon) or Online (Zoom)
          </li>
          <li>
            <strong>Duration:</strong> 45 or 60 minutes per session
          </li>
          <li>
            <strong>Languages:</strong> English, Hebrew, Russian
          </li>
          <li>
            <strong>Pricing:</strong> Contact for details
          </li>
        </ul>
      </div>
      <div className="contact-section">
        <h2>Contact</h2>
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
              href="https://wa.me/yourwhatsapplink"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: Message me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Lessons;