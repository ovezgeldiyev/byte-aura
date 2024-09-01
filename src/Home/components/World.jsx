import React, { useEffect, useState } from "react";
import Slider from "react-slick";
const worldList = [
  {
    id: "1",
    avatar: "/images/world/1.png",
    text: "I was pretty frustrated because my app kept having bugs, but I found the right people at Byte Aura and now I have a working app!",
    name: "Konrad Müller",
  },
  {
    id: "2",
    avatar: "/images/world/2.png",
    text: "Not only did I receive exceptional software, but I also received monthly technical support, and I'm no longer worried if it will work properly!",
    name: "Elena Radew",
  },
  {
    id: "3",
    avatar: "/images/world/3.png",
    text: "After years of technical problems, I finally found partners who integrated digital processes and reduced my costs by 24.7%.",
    name: "Intexo Ltd.",
  },
];
export default function World() {
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
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="world">
      <div className="world__bg">
        <div className="world__bg-circle">
          <img src="/images/world/circle.svg" alt="" />
        </div>
      </div>
      <div className="auto__container">
        <div className="world__inner">
          <div className="world__inner-content">
            <h2>
              <span>The</span> <br />
              <span>World on</span> <br />
              <b>Byte Aura</b>
            </h2>
            <p className="xxlg">Here are some of our customer testimonials.</p>
          </div>
          {mobile ? (
            <Slider className="world__inner-slider" {...settings}>
              {worldList.map((item, index) => {
                return <WorldItem {...item} key={index} />;
              })}
            </Slider>
          ) : (
            <div className="world__inner-col">
              {worldList.map((item, index) => {
                return <WorldItem {...item} key={index} />;
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
const WorldItem = (props) => {
  return (
    <div className="worldItem">
      <div className="worldItem__avatar">
        <img src={props.avatar} alt="" />
      </div>
      <div className="worldItem__content">
        <span className="top">
          <img src="/images/world/quote.svg" alt="" />
        </span>
        <p>{props.text}</p>
        <h6>{props.name}</h6>
        <span>
          <img src="/images/world/quote.svg" alt="" />
        </span>
      </div>
    </div>
  );
};
