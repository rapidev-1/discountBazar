import React from 'react'
import DiscountBazarIcon from "../../../common/Icons/index";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { useNavigate } from 'react-router-dom';
function Index({ img, title, vendor, price, vendorValue }) {
  let navigate = useNavigate();
  return (
    <div className="cardGallery">
      <div className="cardGallery-card" >
        <div className="cardGallery-card-up">
          <div className="cardGallery-card-icons">
            <DiscountBazarIcon text={""} icon={"cart"} />
            <DiscountBazarIcon text={""} icon={"search"} />
            <DiscountBazarIcon text={""} icon={"wishlist"} />
          </div>
          <div className="cardGallery-card-vendorBox">
            {vendorValue && (
              <div
                className="cardGallery-card-vendor"
                onClick={() => navigate(`/vendorshop/${vendor}`)}
              >
                <Avatar shape="square" icon={<UserOutlined />} />
                <strong>{vendor}</strong>
              </div>
            )}
          </div>
          <img src={img} alt="loading...." className="card-image" />
        </div>
        <div className="cardGallery-card-down">
          <strong>{title}</strong>
          <p>Rs {price}</p>
        </div>
      </div>
    </div>
  );
}

export default Index 