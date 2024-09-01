import React from "react";

export default function Grant() {
  return (
    <section className="grant">
      <div className="auto__container">
        <div className="grant__inner">
          <div className="grant__inner-content">
            <div className="grant__inner-shape">
              <img src="/images/shape.svg" alt="" />
            </div>
            <h3>
              You also receive a <br /> MONEY-BACK <span> GUARANTEE</span>
            </h3>
            <p>
              What does a partnership look like? Here are the steps of how we
              work:
            </p>
            <ul>
              <li>
                <span>1.</span>
                <p>We talk on the phone and discuss the plan, free of charge</p>
              </li>
              <li>
                <span>2.</span>
                <p>We create a game plan and present it to you</p>
              </li>
              <li>
                <span>3.</span>
                <p>We sign a contract</p>
              </li>
              <li>
                <span>4.</span>
                <p>Start working on the described stages</p>
              </li>
              <li>
                <span>5.</span>
                <p>Each stage is documented and presented to you</p>
              </li>
            </ul>
            <p>
              If your digital business does not work as described, you get your
              money back!
            </p>
          </div>
          <div className="grant__inner-image">
            <img src="/images/grant.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
