import { Card } from 'antd'
import React from 'react'

function LatestProductCard({ data }) {
    return (
        <Card
            className='LatestProductCard'
            hoverable
            cover={<img alt="example" src={data?.url} />}>
            <Card.Meta className='LatestProductCardMeta' title={data?.name} description={data?.price} />
        </Card>
    )
}

export default LatestProductCard