import React from "react";

export default function About() {
  return (
    <section className="about">
      <div className="about__bg">
        <img src="/images/about/about-bg.svg" alt="" />
        <img className="mob" src="/images/about/bg-mob.svg" alt="" />
      </div>
      <div className="auto__container">
        <div className="about__inner">
          <div className="about__inner-title">
            <h3>The IT world is often very complex for non-IT people</h3>
            <p className="xlg">
              💡We explain it to you in simple language so that you always know
              exactly what needs to be done to scale your business digitally.
            </p>
          </div>
          <div className="about__inner-row">
            <div className="about__inner-image">
              <div className="about__inner-shape">
                <img src="/images/shape.svg" alt="" />
              </div>
              <img src="/images/about/about.svg" alt="" />
            </div>
            <div className="about__inner-content">
              <h3>What problems do people face in digitalization?</h3>
              <div className="about__inner-col">
                <div className="aboutItem">
                  <div className="aboutItem__icon">
                    <img src="/images/about/lamp.svg" alt="" />
                  </div>
                  <p className="lg">Will my idea work?</p>
                </div>
                <div className="aboutItem">
                  <div className="aboutItem__icon">
                    <img src="/images/about/cost.svg" alt="" />
                  </div>
                  <p className="lg">What costs need to be calculated?</p>
                </div>
                <div className="aboutItem">
                  <div className="aboutItem__icon">
                    <img src="/images/about/gear.svg" alt="" />
                  </div>
                  <p className="lg">
                    I don't have much technical knowledge and I'm not sure what
                    needs to be done.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
