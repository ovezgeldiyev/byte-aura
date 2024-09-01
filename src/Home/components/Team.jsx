import React from "react";

export default function Team() {
  return (
    <section className="team">
      <div className="team__bg">
        <img src="images/team/team-bg.png" alt="" />
      </div>
      <div className="auto__container">
        <div className="team__inner">
          <div className="team__inner-title">
            <h2 className="sm">
              <span>This is our </span>
              <b>Dream Team!</b>
            </h2>
            <p className="xxlg">Well adjusted in every position!</p>
          </div>
          <div className="team__inner-row">
            <div className="teamItem">
              <div className="teamItem__image">
                <div className="teamItem__shape">
                  <img src="images/shape.svg" alt="" />
                </div>
                <div className="teamItem__bg">
                  <img src="images/team/bg-1.png" alt="" />
                </div>
                <img src="images/team/petyo.png" alt="" />
              </div>
              <div className="teamItem__content">
                <h4>Petyo Tsonev</h4>
                <p className="md">Co-Founder</p>
              </div>
            </div>
            <div className="teamItem rev">
              <div className="teamItem__image">
                <div className="teamItem__shape">
                  <img src="images/shape.svg" alt="" />
                </div>
                <div className="teamItem__bg">
                  <img src="images/team/bg-2.png" alt="" />
                </div>
                <img src="images/team/georgi.png" alt="" />
              </div>
              <div className="teamItem__content">
                <h4>Georgi Pandurov</h4>
                <p className="md">Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
