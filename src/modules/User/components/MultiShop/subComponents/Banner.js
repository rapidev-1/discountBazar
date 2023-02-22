import React from 'react'
import { CenterHeading } from '../../../../../common/Text';
import { useNavigate } from 'react-router-dom';
function Banner() {
    let navigate = useNavigate() 
  return (
    <div className="multi-shop-banner">
      <div className="multi-shop-banner-item">
        <CenterHeading heading={"Shop List"} />
        <div className="multi-shop-banner-items">
          <p onClick={() => navigate("/")}>Home</p>
          <span className="dot dotsmaller"></span>
          <p onClick={() => navigate("/")}>Pages</p>
          <span className="dot dotsmaller"></span>
          <p onClick={() => navigate("/multishop")} className="colorPink">
            Shop Grid Default
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner