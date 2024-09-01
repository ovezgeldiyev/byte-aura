import React, { useState } from "react";
import { motion } from "framer-motion";
import { checkIcon } from "../../Base/SVG";

export default function Projects() {
  const [tab, setTab] = useState("mobileApp");
  return (
    <section className="projects">
      <div className="divider">
        <img src="/images/divider.svg" alt="" />
        <img className="mob" src="/images/divider-mob.svg" alt="" />
      </div>
      <div className="divider rev">
        <img src="/images/divider.svg" alt="" />
        <img className="mob" src="/images/divider-mob.svg" alt="" />
      </div>
      <div className="auto__container">
        <div className="projects__inner">
          <div className="projects__inner-title">
            <h2>
              <span>Our</span>
              <b>Projects</b>
            </h2>
            <div className="tab__wrapper">
              <div className="tab">
                <button
                  type="button"
                  className={tab === "mobileApp" ? "active" : ""}
                  onClick={() => setTab("mobileApp")}
                >
                  Mobile Apps
                </button>
                <button
                  type="button"
                  className={tab === "webApp" ? "active" : ""}
                  onClick={() => setTab("webApp")}
                >
                  Web Apps
                </button>
              </div>
            </div>
          </div>
          {tab === "mobileApp" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              exit={{ opacity: 0 }}
              className="projectsTab"
            >
              <div className="projects__inner-row">
                <div className="projects__inner-content">
                  <h3>Dating App</h3>
                  <h6 className="sm">Technologies we used</h6>
                  <div className="projects__inner-tech">
                    <div className="projectsItem">
                      <img src="/images/projects/flutter.svg" alt="" />
                    </div>
                    <div className="projectsItem">
                      <img src="/images/projects/aws.svg" alt="" />
                    </div>
                    <div className="projectsItem">
                      <img src="/images/projects/laravel.svg" alt="" />
                    </div>
                  </div>
                  <h6 className="sm">Project Status</h6>
                  <div className="progress__wrapper">
                    <div className="progress full">
                      <div className="progress__inner">
                        <div className="progress__bar">
                          <span>{checkIcon}</span>
                        </div>
                      </div>
                    </div>
                    <p>100%</p>
                  </div>
                </div>
                <div className="projects__inner-image">
                  <img src="/images/projects/1.png" alt="" />
                </div>
              </div>
              <div className="projects__inner-row">
                <div className="projects__inner-image rev">
                  <img className="desc" src="/images/projects/2.png" alt="" />
                  <img
                    className="mob"
                    src="/images/projects/2-mob.png"
                    alt=""
                  />
                </div>
                <div className="projects__inner-content sm">
                  <h3>Ecommerce</h3>
                  <h6 className="sm">Technologies we used</h6>
                  <div className="projects__inner-tech">
                    <div className="projectsItem">
                      <img src="/images/projects/flutter.svg" alt="" />
                    </div>
                    <div className="projectsItem">
                      <img src="/images/projects/aws.svg" alt="" />
                    </div>
                    <div className="projectsItem">
                      <img src="/images/projects/kubernetes.svg" alt="" />
                    </div>
                    <div className="projectsItem">
                      <img src="/images/projects/dotnet.svg" alt="" />
                    </div>
                  </div>
                  <h6 className="sm">Project Status</h6>
                  <div className="progress__wrapper">
                    <div className="progress">
                      <div className="progress__inner">
                        <div
                          className="progress__bar"
                          style={{ maxWidth: "70%" }}
                        >
                          <span>{checkIcon}</span>
                        </div>
                      </div>
                    </div>
                    <p>70%</p>
                  </div>
                </div>
              </div>
              <div className="projects__inner-row">
                <div className="projects__inner-content">
                  <h3>Messenger Revolution</h3>
                  <h6 className="sm">Technologies we used</h6>
                  <div className="projects__inner-tech">
                    <div className="projectsItem">
                      <img src="/images/projects/dotnet.svg" alt="" />
                    </div>
                    <div className="projectsItem">
                      <img src="/images/projects/flutter.svg" alt="" />
                    </div>
                    <div className="projectsItem">
                      <img src="/images/projects/kubernetes.svg" alt="" />
                    </div>
                    <div className="projectsItem">
                      <img src="/images/projects/aws.svg" alt="" />
                    </div>
                    <div className="projectsItem">
                      <img src="/images/projects/swift.svg" alt="" />
                    </div>
                    <div className="projectsItem">
                      <img src="/images/projects/kotlin.svg" alt="" />
                    </div>
                    <div className="projectsItem">
                      <img src="/images/projects/c++.svg" alt="" />
                    </div>
                    <div className="projectsItem">
                      <img src="/images/projects/go.svg" alt="" />
                    </div>
                  </div>
                  <h6 className="sm">Project Status</h6>
                  <div className="progress__wrapper">
                    <div className="progress">
                      <div className="progress__inner">
                        <div
                          className="progress__bar"
                          style={{ maxWidth: "85%" }}
                        >
                          <span>{checkIcon}</span>
                        </div>
                      </div>
                    </div>
                    <p>85%</p>
                  </div>
                </div>
                <div className="projects__inner-image">
                  <img src="/images/projects/3.png" alt="" />
                </div>
              </div>
            </motion.div>
          )}
          {tab === "webApp" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              exit={{ opacity: 0 }}
              className="projectsTab"
            >
              <div className="projectsWeb__wrapper">
                <div className="projectsWeb__bg">
                  <img src="/images/projects/bg.png" alt="" />
                </div>
                <div className="projectsWeb">
                  <div className="projectsWeb__inner">
                    <div className="projectsWeb__title">
                      <h3>Learning Management System</h3>
                    </div>
                    <div className="projectsWeb__item">
                      <h6 className="sm">Technologies we used</h6>
                      <div className="projectsWeb__tech">
                        <span>
                          <img src="/images/projects/react.svg" alt="" />
                        </span>
                        <span>
                          <img src="/images/projects/php.svg" alt="" />
                        </span>
                        <span>
                          <img src="/images/projects/simfony.svg" alt="" />
                        </span>
                        <span>
                          <img src="/images/projects/js.svg" alt="" />
                        </span>
                        <span>
                          <img src="/images/projects/laravel.svg" alt="" />
                        </span>
                      </div>
                    </div>
                    <div className="projectsWeb__item">
                      <h6 className="sm">Project Status</h6>
                      <div className="progress__wrapper">
                        <div className="progress">
                          <div className="progress__inner">
                            <div
                              className="progress__bar"
                              style={{ maxWidth: "70%" }}
                            >
                              <span>{checkIcon}</span>
                            </div>
                          </div>
                        </div>
                        <p>70%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
