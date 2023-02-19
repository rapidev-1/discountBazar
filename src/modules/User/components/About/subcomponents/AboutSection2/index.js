import { Button } from 'antd';
import aboutPic from "../../../../../../common/Images/about.png"
import React from 'react'
import { CenterHeading } from '../../../../../../common/Text';

function index() {
  return (
    <div className="about-section2">
      <div className="about-section2-left">
        <img src={aboutPic} alt="loading..." />
      </div>
      <div className="about-section2-right"> 
        <div className="about-section2-right-item">
          <CenterHeading heading={"Know About Our Ecommerce"} />
          <CenterHeading heading={"Business, History"} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <Button type="primary" className="btn">
          Contact Us
        </Button>
      </div>
    </div>
  );
}

export default index