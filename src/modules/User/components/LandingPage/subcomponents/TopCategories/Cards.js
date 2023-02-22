import { Button } from 'antd';
import React from 'react'
function Cards({ img, title, }) {
  return (
    <div className="cardFeature TopCategoriesCard">
      <div className="card">
        <img src={img} alt="loading...." className="card-image" />
        <Button className='shopbutton'>
          View Shop
        </Button> 
      </div>

      <div className="card-down">
        {title}
      </div>
    </div>
  );
}

export default Cards