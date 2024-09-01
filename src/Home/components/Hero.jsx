import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img src="/images/hero.png" alt="" />
      </div>
      <div className="auto__container">
        <div className="hero__inner">
          <div className="hero__inner-content">
            <div className="hero__inner-shape">
              <img src="/images/shape.svg" alt="" />
            </div>
            <h1>
              Digitalize your <span>business</span> <br />
              and think only for the cocktail by the sea!
            </h1>
            <p className="md">
              Here's what you need to do to scale your business digitally
            </p>
            <a href="#" className="button">
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
