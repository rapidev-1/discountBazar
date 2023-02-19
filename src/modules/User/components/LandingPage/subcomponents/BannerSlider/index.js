import React from 'react'
import { Button, Carousel } from "antd";
import PC from '../../../../../../common/Images/pngwing 4.png'
import TV from '../../../../../../common/Images/Apple-Watch-Series-6-Image-Background.png'
import Sports from '../../../../../../common/Images/Football-PNG-Image.png'
const item = [
  {
    title: "New PC Collection Trends in 2023",
    desc: "Best PC for your castle.....",
    img: PC,
  },
  {
    title: "New PC Watch Trends in 2023",
    desc: "Best watch for your castle.....",
    img: TV,
  },
  {
    title: "New Football Collection Trends in 2023",
    desc: "Best Football for your castle.....",
    img: Sports,
  },
];
function Slider() {
  return (
    <div>
      <Carousel className="Banner" autoplay={true}>
        {
          item.map((e, i) => {
            return (
              <div className="Banner-slider" key={i}>
                <div className="Banner-left">
                  <div className="Banner-items">
                    <p>{e.desc}</p>
                    <h1>{e.title}</h1>
                    <Button type="primary" className="btn">
                      Shop Now
                    </Button>
                  </div>
                </div>
                <div className="Banner-right">
                  <div className="banner-gradient-one">
                    <div className="banner-gradient-two"></div>
                    <div className="banner-gradient-three"></div>
                  </div>
                  <img src={e.img} alt="loading.." />
                </div>
              </div>
            );
          })
        }
      </Carousel>
    </div>
  );
}

export default Slider
