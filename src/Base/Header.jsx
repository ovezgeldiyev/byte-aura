import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { chevronBottom } from "./SVG";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  function scrollFunc() {
    if (window.scrollY >= 60) {
      setIsSticky(true);
    } else setIsSticky(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
  }, []);
  useEffect(() => {
    if (menu) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [menu]);
  useEffect(() => {
    window.scrollTo(0, 0);
    setMenu(false);
    document.body.classList.remove("active");
  }, [location]);
  const close = (e) => {
    if (e.target === e.currentTarget) setMenu(false);
  };
  return (
    <header
      className={
        "header " + (menu ? "active" : "") + (isSticky ? " sticky" : "")
      }
      id="header"
    >
      <div className="auto__container">
        <div className="header__inner">
          <a href="#" className="header__inner-logo">
            <img src="/images/logo.svg" alt="" />
          </a>
          <div className="header__inner-main">
            <nav className={"nav " + (menu ? "active" : "")} onClick={close}>
              <ul className="nav__inner">
                <li>
                  <a href="#">What we do?</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">How we Work?</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
            <div className="lang">
              <div className="langHead">
                <div className="langHead__icon">
                  <img src="/images/icons/flags/gb.svg" alt="" />
                </div>
                <p>EN</p>
                {chevronBottom}
              </div>
              {/* <div className="langDrop">
                <p>
                  <span>
                    <img src="/images/icons/flags/gb.svg" alt="" />
                  </span>
                  EN
                </p>
                <p>
                  <span>
                    <img src="/images/icons/flags/gb.svg" alt="" />
                  </span>
                  FR
                </p>
              </div> */}
            </div>
            <div
              className={"burger " + (menu ? "active" : "")}
              onClick={() => {
                setMenu(!menu);
              }}
            >
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
