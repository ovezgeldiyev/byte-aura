import React, { useState } from "react";
import { checkSm, chevronBottom, listCheck } from "../../Base/SVG";

export default function Solution2({ setModal }) {
  const [error, setError] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    terms: false,
  });
  const updateForm = (data) => {
    setForm((form) => ({ ...form, ...data }));
  };
  const handleClick = () => {
    if (
      form.firstName === "" ||
      form.lastName === "" ||
      form.email === "" ||
      form?.terms === false
    ) {
      setError(true);
    } else {
      setError(false);
      setModal(true);
    }
  };
  return (
    <section className="solution big">
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
              <div className="check__outer">
                <label className="check">
                  <div className="check__box">
                    <input
                      type="checkbox"
                      checked={form?.terms}
                      onChange={(e) => {
                        updateForm({ terms: e.target.checked });
                      }}
                    />
                    <span>{checkSm}</span>
                  </div>
                  <p>
                    I Accept <a href="#">Privacy policy</a> &{" "}
                    <a href="#">Terms & Conditions</a>
                  </p>
                </label>
                {error && form?.terms === false && <p>Please accept terms.</p>}
              </div>
              <button type="button" className="button" onClick={handleClick}>
                <span>Submit</span>
              </button>
              <div className="solutionForm__text">
                <p className="md">
                  Together we can achieve YOUR financial independence -
                  <span>FOREVER!</span> <br />
                  <span>Digitalization</span>
                  is like building a house. If the foundations aren't right and
                  the walls are crooked, even putting up wallpaper won't help.{" "}
                  <br />
                  That's why we build your <span>digital business</span> from
                  the ground up and scale it to the sky!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
