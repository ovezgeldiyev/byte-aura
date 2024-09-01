import React, { useState } from "react";
import { chevronBottom, listCheck } from "../../Base/SVG";

export default function Solution({ setModal }) {
  const [error, setError] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const updateForm = (data) => {
    setForm((form) => ({ ...form, ...data }));
  };
  const handleClick = () => {
    if (form.firstName === "" || form.lastName === "" || form.email === "") {
      setError(true);
    } else {
      setError(false);
      setModal(true);
    }
  };
  return (
    <section className="solution">
      <div className="auto__container">
        <div className="solution__inner">
          <div className="solution__inner-top">
            <img src="/images/solution/top.png" alt="" />
            <img className="mob" src="/images/solution/top-mob.png" alt="" />
          </div>
          <div className="solution__inner-title">
            <h3>
              Let us find out what the <span>best solution</span> is for you!
            </h3>
            <p className="md">
              Secure a free consultation and you will receive instructions in
              pdf format on what exactly you need to consider when digitizing
              your business - <span>100.00% FREE!</span> !
            </p>
          </div>
          <div className="solutionForm">
            <div className="solutionForm__row">
              <div className="input__outer">
                <div className="input">
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={(e) => {
                      updateForm({ firstName: e.target.value });
                    }}
                    placeholder="First Name"
                  />
                </div>
                {error && form.firstName === "" && (
                  <p>Please enter first name.</p>
                )}
              </div>
              <div className="input__outer">
                <div className="input">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={(e) => {
                      updateForm({ lastName: e.target.value });
                    }}
                  />
                </div>
                {error && form?.lastName === "" && (
                  <p>Please enter last name.</p>
                )}
              </div>
              <div className="input__outer">
                <div className="input">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => {
                      updateForm({ email: e.target.value });
                    }}
                  />
                </div>
                {error && form?.email === "" && <p>Please enter email.</p>}
              </div>
              <div className="input__outer">
                <div className="input">
                  <div className="input__select">
                    <input type="text" placeholder="+1" />
                    {chevronBottom}
                  </div>
                  <input type="tel" placeholder="Phone Number" />
                </div>
              </div>
            </div>
            <div className="solutionForm__foot">
              <button type="button" className="button" onClick={handleClick}>
                <span>Submit</span>
              </button>
            </div>
          </div>
          <div className="solution__inner-row">
            <div className="solution__inner-content">
              <h5>
                That’s why you should digitize your <span>BUSINESS:</span>{" "}
              </h5>
              <ul>
                <li>
                  {listCheck}
                  <p>Improved Efficiency</p>
                </li>
                <li>
                  {listCheck}
                  <p>Cost Savings</p>
                </li>
                <li>
                  {listCheck}
                  <p>Enhanced Customer Experiences</p>
                </li>
                <li>
                  {listCheck}
                  <p>Scalability</p>
                </li>
                <li>
                  {listCheck}
                  <p>Access to Data Insights</p>
                </li>
                <li>
                  {listCheck}
                  <p>Competitive Advantage</p>
                </li>
                <li>
                  {listCheck}
                  <p>Flexibility and Adaptability</p>
                </li>
                <li>
                  {listCheck}
                  <p>Innovation Opportunities</p>
                </li>
              </ul>
            </div>
            <div className="solution__inner-image">
              <img src="/images/solution/solution.png" alt="" />
              <img
                className="mob"
                src="/images/solution/solution-mob.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
