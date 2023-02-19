import React from 'react'
import { Button } from "antd";
import TV from '../../../../../../common/Images/TV.png'
function BannerProduct() {
  return (
    <div className="Banner BannerProduct ">
      <div className="Banner-slider">
        <div className="Banner-left">
          <div className="Banner-items">
            <h1>Unique Features Of leatest & Trending Poducts</h1>
            <ul>
              <li>
                All frames constructed with hardwood solids and laminates
              </li>
              <li>
                Reinforced with double wood dowels, glue, screw - nails corner
                blocks and machine nails
              </li>
              <li>
                Arms, backs and seats are structurally reinforced
              </li>
            </ul>
            <Button type="primary" className="btn">
              Add To Cart
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
          <img src={TV} alt="loading.." />
        </div>
      </div>
    </div>
  );
}

export default BannerProduct