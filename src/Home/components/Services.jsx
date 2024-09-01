import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
const servicesList = [
  {
    id: "1",
    image: "/images/services/1.png",
    title: "Custom Software Solutions",
  },
  {
    id: "2",
    image: "/images/services/2.png",
    title: "Mobile Apps development",
  },
  {
    id: "3",
    image: "/images/services/3.png",
    title: "Cloud Infrastructure",
  },
  {
    id: "4",
    image: "/images/services/4.png",
    title: "Cyber Security",
  },
  {
    id: "5",
    image: "/images/services/5.png",
    title: "AI",
  },
  {
    id: "6",
    image: "/images/services/6.png",
    title: "Websites",
  },
];
const servicesList2 = [
  {
    id: "1",
    image: "/images/services/7.png",
    title: "Landing Pages",
  },
  {
    id: "2",
    image: "/images/services/8.png",
    title: "Digital Sales Processes",
  },
  {
    id: "3",
    image: "/images/services/9.png",
    title: "Marking Strategies",
  },
  {
    id: "4",
    image: "/images/services/10.png",
    title: "Video Editing",
  },
  {
    id: "5",
    image: "/images/services/11.png",
    title: "Collecting & Analyzing Data",
  },
  {
    id: "6",
    image: "/images/services/12.png",
    title: "Social Media Management",
  },
];
export default function Services() {
  const [tab, setTab] = useState("development");
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 651) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 651) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
  }, []);
  const settings = {
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1.17,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="services">
      <div className="auto__container">
        <div className="services__inner">
          <div className="services__inner-title">
            <div className="services__inner-shape">
              <img src="/images/services/shape.svg" alt="" />
            </div>
            <h3>
              What <span>services</span> we offer
            </h3>
          </div>
          <div className="tab__wrapper">
            <div className="tab">
              <button
                type="button"
                className={tab === "development" ? "active" : ""}
                onClick={() => setTab("development")}
              >
                Development section
              </button>
              <button
                type="button"
                className={tab === "marketing" ? "active" : ""}
                onClick={() => setTab("marketing")}
              >
                Marketing Section
              </button>
            </div>
          </div>
          {tab === "development" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              exit={{ opacity: 0 }}
              className="servicesTab"
            >
              {mobile ? (
                <Slider className="services__inner-slider" {...settings}>
                  {servicesList.map((item, index) => {
                    return <ServicesItem {...item} key={index} />;
                  })}
                </Slider>
              ) : (
                <div className="services__inner-row">
                  {servicesList.map((item, index) => {
                    return <ServicesItem {...item} key={index} />;
                  })}
                </div>
              )}
            </motion.div>
          )}
          {tab === "marketing" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              exit={{ opacity: 0 }}
              className="servicesTab"
            >
              {mobile ? (
                <Slider className="services__inner-slider" {...settings}>
                  {servicesList2.map((item, index) => {
                    return <ServicesItem {...item} key={index} />;
                  })}
                </Slider>
              ) : (
                <div className="services__inner-row">
                  {servicesList2.map((item, index) => {
                    return <ServicesItem {...item} key={index} />;
                  })}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
const ServicesItem = (props) => {
  return (
    <div className="servicesItem">
      <div className="servicesItem__image">
        <img src={props.image} alt="" />
      </div>
      <h6>{props.title}</h6>
    </div>
  );
};
