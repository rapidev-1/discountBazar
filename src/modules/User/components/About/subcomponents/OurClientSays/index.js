import { Carousel } from "antd";
import React from "react";
import pictureSliderv from "../../../../../../common/Images/Groupabout.png";
const items = [
  {
    key: "1",
    label: `Sellina Gomex`,
    img: pictureSliderv,
    info: "CEO at Discount Bazar",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },

  {
    key: "2",
    label: `Sellina Gomex`,
    img: pictureSliderv,
    info: "CEO at Discount Bazar",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },

  {
    key: "3",
    label: `Sellina Gomex`,
    img: { pictureSliderv },
    info: "CEO at Discount Bazar",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },

  {
    key: "4",
    label: `Sellina Gomex`,
    img: pictureSliderv,
    info: "CEO at Discount Bazar",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
];
function index() {
  return (
    <div className="about-slider">
      <h1>Our Client Say!</h1>
      <Carousel className="about-sslider">
        <div className="about-slider-container" >
          <div className="about-slider-up">
            <img src={pictureSliderv} alt="loading..." />
          </div>
          <div className="about-slider-down">
            <h2>helos</h2>
            <span>safsa</span>
            <p>safdasbfsajdfbsadfas</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default index;

{/* {items.map((e, i) => {
  return (
    <div className="about-slider-container" key={i}>
      <div className="about-slider-up">
        <img src={e.img} alt="loading..." />
      </div>
      <div className="about-slider-down">
        <h2>{e.label}</h2>
        <span>{e.info}</span>
        <p>{e.des}</p>
      </div>
    </div>
  );
})} */}