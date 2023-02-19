import { Carousel } from "antd";
import React from "react";
import pictureSliderv from "../../../../../../common/Images/Groupabout.png";
import { CenterHeading } from "../../../../../../common/Text";
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
    img: pictureSliderv,
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
      <CenterHeading heading={"Our Client Say!"} />
      <Carousel className="about-sslider" autoplay={true}>
        {items.map((e, i) => {
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
        })}
      </Carousel>
    </div>
  );
}

export default index;

