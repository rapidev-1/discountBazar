import React from 'react'
import { Button , Carousel } from "antd";
import PC from '../../../../common/Images/pngwing 4.png'
import TV from '../../../../common/Images/Apple-Watch-Series-6-Image-Background.png'
import Sports from '../../../../common/Images/Football-PNG-Image.png'
function Slider() {
  return (
    <div>
      <Carousel autoplay className="Banner">
        <div className="slider">
          <div className="left"> 
            <div className="items">
              <p>Best furniture for your castle.....</p>
              <h1>New PC Collection Trends in 2023</h1>
              <Button type="primary" className="btn">
                Shop Now
              </Button>
            </div>
          </div>
          <div className="right">
            <img src={PC} alt="loading.." />
          </div>
        </div>
        <div className="slider">
          <div className="left">
            <div className="items">
              <p>Best furniture for your castle.....</p>
              <h1>New Watch Collection Trends in 2023</h1>
              <Button type="primary" className="btn">
                Shop Now
              </Button>
            </div>
          </div>
          <div className="right">
            <img src={TV} alt="loading.." />
          </div>
        </div>
        <div className="slider">
          <div className="left">
            <div className="items">
              <p>Best furniture for your castle.....</p>
              <h1>New Football Collection Trends in 2023</h1>
              <Button type="primary" className="btn">
                Shop Now
              </Button>
            </div>
          </div>
          <div className="right">
            <img className='img3' src={Sports} alt="loading.." />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider