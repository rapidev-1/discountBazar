import { Button } from 'antd';
import React from 'react'
import { useNavigate } from "react-router-dom"
function Cards({ img, title, }) {
  const navigate = useNavigate()
  const onclick = () => navigate('/vendorshop/1234')
  return (
    <div className="cardFeature TopCategoriesCard">
      <div className="card">
        <img src={img} alt="loading...." className="card-image" />
        <Button onClick={onclick} className='shopbutton'>
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