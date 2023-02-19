import { Button, Card } from 'antd'
import React from 'react'
import { HeadingCustom } from '../../../../../../../../../common/Text'

function Card2() {
    return (
        <Card className='TrendingCard2'>
            <HeadingCustom
                heading={"23% off in all products"}
                level={3}
            />
            <Button type="ghost">shop now</Button>
            <img src="/assets/images/clock.png" alt="123" />
        </Card>)
}

export default Card2