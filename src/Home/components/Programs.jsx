import React from "react";

export default function Programs() {
  return (
    <section className="programs">
      <div className="programs__bg">
        <img src="/images/programs/bg.svg" alt="" />
      </div>
      <div className="divider">
        <img src="/images/divider.svg" alt="" />
        <img className="mob" src="/images/divider-mob.svg" alt="" />
      </div>
      <div className="divider rev">
        <img src="/images/divider.svg" alt="" />
        <img className="mob" src="/images/divider-mob.svg" alt="" />
      </div>
      <div className="auto__container">
        <div className="programs__inner">
          <div className="programs__inner-title">
            <h3>
              What we are using <span>mostly</span> but not limited to
            </h3>
          </div>
          <div className="programs__inner-image">
            <img src="/images/programs/programs.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
