import React from "react";
import { Col, Row } from "antd";
import img1 from "../../../../../../common/Images/bag1.png";
import img2 from "../../../../../../common/Images/bag2.png";
import img3 from "../../../../../../common/Images/bag3.png";
import img4 from "../../../../../../common/Images/bag4.png";
import DiscountBazarIcon from "../../../../../../common/Icons";
function index() {
  return (
    <div className="product-container">
      <div className="product-left">
        <div className="product-left-up">
          <img src={img1} alt="Slow Internet :( " />
        </div>
        <div className="product-left-down">
          <img src={img2} alt="Slow Internet :( " />
          <img src={img3} alt="Slow Internet :( " />
          <img src={img4} alt="Slow Internet :( " />
        </div>
      </div>
      <div className="product-right">
        <h1>
          <i>Playwood arm chair</i>
        </h1>
        <strong>Pkr 45000</strong>
        <div className="product-right-item">
          <strong>Color</strong>
        </div>
        <p>
          <i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tellus porttitor purus, et volutpat sit.. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et
            volutpat sit. .Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Mauris tellus porttitor purus, etc
          </i>
        </p>
        <strong>
          <i>Categories</i>
        </strong>
        <div className="product-right-item">
          <strong>Add to Cart</strong>
          <DiscountBazarIcon text={""} icon={"cart"} />
        </div>
        <strong>
          <i>Tags</i>
        </strong>
        <div className="product-right-item">
          <strong>
            <i>Share </i>
          </strong>
        </div>
      </div>
    </div>
  );
}

export default index;
