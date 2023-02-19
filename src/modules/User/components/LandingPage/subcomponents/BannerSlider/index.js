import React from 'react'
import { Button, Carousel } from "antd";
import PC from '../../../../../../common/Images/pngwing 4.png'
import TV from '../../../../../../common/Images/Apple-Watch-Series-6-Image-Background.png'
import Sports from '../../../../../../common/Images/Football-PNG-Image.png'
function Slider() {
  return (
    <div>
      <Carousel className="Banner">
        <div className="Banner-slider">
          <div className="Banner-left">
            <div className="Banner-items">
              <p>Best furniture for your castle.....</p>
              <h1>New PC Collection Trends in 2023</h1>
              <Button type="primary" className="btn">
                Shop Now
              </Button>
            </div>
          </div>
          <div className="Banner-right">
            <div className="banner-gradient-one"> 
              <div className="banner-gradient-two">
              </div>
              <div className="banner-gradient-three">
              </div>
            </div>
            <img src={PC} alt="loading.." />
          </div>
        </div>
        <div className="Banner-slider">
          <div className="Banner-left">
            <div className="Banner-items">
              <p>Best furniture for your castle.....</p>
              <h1>New Watch Collection Trends in 2023</h1>
              <Button type="primary" className="btn">
                Shop Now
              </Button>
            </div>
          </div>
          <div className="Banner-right">
            <img src={TV} alt="loading.." />
          </div>
        </div>
        <div className="Banner-slider">
          <div className="Banner-left">
            <div className="Banner-items">
              <p>Best furniture for your castle.....</p>
              <h1>New Football Collection Trends in 2023</h1>
              <Button type="primary" className="btn">
                Shop Now
              </Button>
            </div>
          </div>
          <div className="Banner-right">
            <img src={Sports} alt="loading.." />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider