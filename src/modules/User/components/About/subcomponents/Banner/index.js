import React from "react";
import { useNavigate } from "react-router-dom";
import { CenterHeading } from "../../../../../../common/Text";
function AboutBanner() {
  const navigate = useNavigate()
  return (
    <div className="about-banner">
      <div className="about-banner-item">
        <CenterHeading heading={"About Us"} />
        <div className="about-banner-items">
          <p onClick={() => navigate('/')}>Home</p>
          <span className="dot dotsmaller"></span>
          <p
            onClick={() => navigate('/about')}
            className="colorPink">About Us</p>
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;
