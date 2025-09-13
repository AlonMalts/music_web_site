import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Contact us: alon@music.com</p>
        <p>This website powered by Sammie Homeless</p>
      </div>
      
      <div className="footer-center">
        <p>&copy; 2025 Alon Malts Music</p>
      </div>
      
      <div className="footer-right">
        <p>Follow us on social media:</p>
        <div className="social-links">
          <a href="#facebook">Facebook</a> | <a href="#twitter">Twitter</a> | <a href="#instagram">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;