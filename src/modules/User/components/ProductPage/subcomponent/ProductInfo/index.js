import React from "react";
import { Rate, Image, Button } from "antd";
import img1 from "../../../../../../common/Images/bag1.png";
import img2 from "../../../../../../common/Images/bag2.png";
import img3 from "../../../../../../common/Images/bag3.png";
import img4 from "../../../../../../common/Images/bag4.png";
import DiscountBazarIcon from "../../../../../../common/Icons";
import { useNavigate } from "react-router-dom";
function ProductInfo() {
  const navigate = useNavigate()
  return (
    <div className="product-container"> 
      <div className="product-left">
        <div className="product-left-up">
          <Image src={img1} className="imageBig" alt="Slow Internet :( " />
        </div>
        <div className="product-left-down">
        <Image.PreviewGroup>
          <Image src={img2} className="imageSmall" alt="Slow Internet :( " />
          <Image src={img3} className="imageSmall" alt="Slow Internet :( " />
          <Image src={img4} className="imageSmall" alt="Slow Internet :( " />
        </Image.PreviewGroup>
        </div>
      </div>
      <div className="product-right">
        <h1>Playwood arm chair</h1>
        <strong>Pkr 45000</strong>
        <div className="product-right-item">
          <strong>Color</strong>
        </div>
        <Rate />
        <p>
          <i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tellus porttitor purus, et volutpat sit.. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et
            volutpat sit. .Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Mauris tellus porttitor purus, etc
          </i>
        </p>
        <div className="product-right-item">
          <strong>Add to Cart</strong>
          <DiscountBazarIcon text={""} icon={"cart"} />
        </div>
        <div className="product-right-item">
          <strong>
            <i>Share </i>
          </strong>
        </div>
        <div>
          <Button className="btn" onClick={() => navigate('/productcompare')}>
            Compare Product
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
