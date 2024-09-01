import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const infoList = [
  {
    id: "1",
    image: "/images/info/1.png",
    title: "Execution is everything!",
    text: "It all starts with the idea. We find out what your unique selling point is, create a game plan and bring your idea to life so that you stand out from the competition!",
  },
  {
    id: "2",
    image: "/images/info/2.png",
    title: "You get the solutions you need!",
    text: "As already mentioned - in these 12 years we have seen many fail and that hurts! That's why we are honest and offer effective solutions instead of just saying okay.",
  },
  {
    id: "3",
    image: "/images/info/3.png",
    title: "For your safety!",
    text: "Don't worry! We're behind you every step of the journey so you know exactly what's being done, or you can leave it all to us and enjoy your life!",
  },
  {
    id: "4",
    image: "/images/info/4.png",
    title: "Time is Money!",
    text: "You know the saying time is money. Speed of execution is the key 🔑 . Your digital business becomes a rocket, you save time and money when we implement the plan!",
  },
  {
    id: "5",
    image: "/images/info/5.png",
    title: "Clean & Creative Design",
    text: "The user must get oriented immediately. If there are unnecessary steps and it takes too long to get what they want, the user will leave the platform or app. ",
  },
  {
    id: "6",
    image: "/images/info/6.png",
    title: "Latest tech and tool for the job",
    text: "The tech used is one of the most important things in the development, as it determines the speed, scalability and the cost of maintenance of a platform, software or mobile app.",
  },
  {
    id: "7",
    image: "/images/info/7.png",
    title: "We support already completed projects",
    text: "If you have already developed a project but are not satisfied with the technical support or have other complaints - we take over and develop projects that we think have potential.",
  },
];
export default function Info() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 931) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 931) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
  }, []);
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 600,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="info">
      <div className="info__bg">
        <img src="/images/info/bg.png" alt="" />
      </div>
      <div className="auto__container">
        <div className="info__inner">
          <div className="info__inner-title">
            <h3>
              How do <span>we do</span> that?
            </h3>
            <p>Here are your competitive advantages when you work with us:</p>
          </div>
          <div className="info__inner-image">
            <img src="/images/info/info.svg" alt="" />
          </div>
          {mobile ? (
            <Slider className="info__inner-slider" {...settings}>
              {infoList.map((item, index) => {
                return <InfoItem {...item} key={index} />;
              })}
            </Slider>
          ) : (
            <div className="info__inner-row">
              {infoList.map((item, index) => {
                return <InfoItem {...item} key={index} />;
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
const InfoItem = (props) => {
  return (
    <div className="infoItem">
      <div className="infoItem__bg">
        <div className="infoItem__circle top"></div>
        <div className="infoItem__circle"></div>
      </div>
      <div className="infoItem__image">
        <img src={props.image} alt="" />
        <div className="infoItem__image-inner">
          <img src={props.image} alt="" />
        </div>
      </div>
      <div className="infoItem__content">
        <h5>{props.title}</h5>
        <p>{props.text}</p>
      </div>
    </div>
  );
};
