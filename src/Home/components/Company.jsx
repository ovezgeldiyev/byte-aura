import React from "react";

export default function Company() {
  return (
    <section className="company">
      <div className="divider">
        <img src="/images/divider.svg" alt="" />
        <img className="mob" src="/images/divider-mob.svg" alt="" />
      </div>
      <div className="divider rev">
        <img src="/images/divider.svg" alt="" />
        <img className="mob" src="/images/divider-mob.svg" alt="" />
      </div>
      <div className="auto__container">
        <div className="company__inner">
          <div className="company__inner-row">
            <div className="company__inner-content">
              <h3>
                Many <span>companies</span> and <span>private persons</span>
                have difficulties with digitalization or building platforms.
              </h3>
              <p>
                There are many out there who claim they can code, design and
                implement marketing strategies. All they want is your money and
                in the end they don't care about the result.
                <br /> <br />
                They make excuses and you get frustrated.
              </p>
            </div>
            <div className="company__inner-image">
              <img src="/images/company/1.svg" alt="" />
            </div>
          </div>
          <div className="company__inner-row">
            <div className="company__inner-image big">
              <img src="/images/company/2.png" alt="" />
            </div>
            <div className="company__inner-content sm">
              <h3 className="sm">
                We bring <span>12 years</span> of experience! In this time we
                have seen and learned so much that we can now say with a broad
                chest:
              </h3>
              <p>
                YES, WE CAN CREATE AND SUPPORT YOUR BUSINESS FROM A TO Z AND
                GUIDE YOU TO FINANCIAL INDEPENDENCE!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
