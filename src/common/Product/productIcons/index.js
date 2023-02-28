import React from 'react'
import { useNavigate } from 'react-router-dom'
import DiscountBazarIcon from '../../Icons'

function ProductIcons({ show }) {
    const navigate = useNavigate()
    return (
        <div className={`cardGallery-card-icons ${show ? 'showicons' : ""}`}>
            <DiscountBazarIcon text={""} icon={"cart"} />
            <DiscountBazarIcon text={""} icon={"search"} onClick={() => navigate(`/product/123`)} />
            <DiscountBazarIcon text={""} icon={"wishlist"} />
        </div>
    )
}

export default ProductIcons