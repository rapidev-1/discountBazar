import React from "react";
import { CenterHeading } from "../../../../../../common/Text";
function index() {
  return (
    <div className="about-banner">
      <div className="about-banner-item">
        <CenterHeading heading={"About Us"} />
        <div className="about-banner-items">
          <p>Home</p>
          <span>.</span>
          <p>Pages.</p>
          <span>.</span>
          <p>About Us</p>
        </div>
      </div>
    </div>
  );
}

export default index;
