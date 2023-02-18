import { Card } from 'antd'
import React from 'react'
import DiscountBazarIcon from '../../../../../../../../common/Icons'
function LatestProductCard({ data }) {
    return (
        <Card
            className='LatestProductCard'
            hoverable
            cover={<img alt="example" src={data?.url} />}>
            <Card.Meta className='LatestProductCardMeta' title={data?.name} description={data?.price} />

            <div className="card-icons">
                <DiscountBazarIcon text={""} icon={"cart"} />
                <DiscountBazarIcon text={""} icon={"search"} />
                <DiscountBazarIcon text={""} icon={"wishlist"} />
            </div>
        </Card>
    )
}

export default LatestProductCard