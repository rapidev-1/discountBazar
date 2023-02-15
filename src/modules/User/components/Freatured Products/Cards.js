import React from 'react'
import DiscountBazarIcon from "../../../../common/Icons";
function Cards({img,title,desc}) {
  return (
    <div className="cardFeature">
      <div className="card">
        <div className="up">
        <div className='icons'>
          <DiscountBazarIcon text={""} icon={"cart"} />
          <DiscountBazarIcon text={""} icon={"search"} />
          <DiscountBazarIcon text={""} icon={"wishlist"} />
        </div>
          <img src={img} alt="loading...." className="image" />
        </div>
        <div className="down">
          <strong>{title}</strong>
          <p>Rs {desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards