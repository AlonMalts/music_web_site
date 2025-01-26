import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <p>Contact us: support@musicapp.com</p>
      <p>Follow us on social media:</p>
      <div className="social-links">
        <a href="#facebook">Facebook</a> | <a href="#twitter">Twitter</a>
      </div>
      <p>&copy; 2025 Music Web Site</p>
    </footer>
  );
};

export default Footer;