import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <img src="images/footer.png" alt="" />
      </div>
      <div className="auto__container">
        <div className="footer__inner">
          <p>
            <span>Byte Aura Ltd.</span> 2024 All Rights Reserved.
          </p>
          <div className="footer__inner-logo">
            <img src="images/logo.svg" alt="" />
          </div>
          <div className="footer__inner-links">
            <a href="#">Privacy Policy</a>
            <span></span>
            <a href="#">Terms of Service</a>
            <span></span>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
