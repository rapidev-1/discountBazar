import React from 'react';
import noAvatar from "../../../../../common/Images/noAvatar.png"
import star from "../../../../../common/Images/star.png"
function Banner() {
  return (
    <div className="single-shop-banner">
      <div className="single-shop-banner-container">
        <div className="single-shop-banner-left">
          <img src={noAvatar} alt="loading......" />
        </div>
        <div className="single-shop-banner-right">
          <h1>Shop Name</h1>
          <p>North Pakistan, Punjab</p>
          <div className="single-shop-banner-right-item">
            <div className="single-shop-banner-right-item-left">
              <div className="single-shop-banner-right-item-left-item">
                <img src={star} alt='loading...'/>
                <strong>4.0</strong>
              </div>
              <strong>100+ ratings</strong>
            </div>
            <div className="single-shop-banner-right-item-right">
              <strong>Best</strong>
              <strong>Delivery Time</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner