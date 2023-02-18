import React from 'react'
import DiscountBazarIcon from "../../../../../../common/Icons";
function Cards({ img, title, desc }) {
  return (
    <div className="cardFeature">
      <div className="card">
        <div className="card-up">
          <div className="card-icons">
            <DiscountBazarIcon text={""} icon={"cart"} />
            <DiscountBazarIcon text={""} icon={"search"} />
            <DiscountBazarIcon text={""} icon={"wishlist"} />
          </div>
          <img src={img} alt="loading...." className="card-image" />
        </div>
        <div className="card-down">
          <strong>{title}</strong>
          <p>Rs {desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards