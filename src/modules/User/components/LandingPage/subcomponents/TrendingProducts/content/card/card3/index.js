import { Col, Row } from 'antd'
import React from 'react'
import { HeadingCustom } from '../../../../../../../../../common/Text'

function Card3() {
    return (
        <Row className='TrendingCard3' gutter={[15, 15]}>
            <Col span={24}>
                <img src="/assets/images/chair.png" alt="" />
                <div>
                    <HeadingCustom heading={"Executive Seat chair"} />
                    <HeadingCustom heading={"$32.00"} />
                </div>
            </Col>
            <Col span={24}>
                <img src="/assets/images/chair.png" alt="" />
                <div>
                    <HeadingCustom heading={"Executive Seat chair"} />
                    <HeadingCustom heading={"$32.00"} />
                </div>
            </Col>
            <Col span={24}>
                <img src="/assets/images/chair.png" alt="" />
                <div>
                    <HeadingCustom heading={"Executive Seat chair"} />
                    <HeadingCustom heading={"$32.00"} />
                </div>
            </Col>
        </Row>
    )
}

export default Card3