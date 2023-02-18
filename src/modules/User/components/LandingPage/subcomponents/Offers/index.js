import { Col, Row } from 'antd'
import React from 'react'
import { CenterHeading } from '../../../../../../common/Text'
import OfferCard from './card'

const items = [
    {
        key: '24/7',
        label: `24/7 Support`,
        children: <OfferCard value={"newarrival"} />,
    },
    {
        key: 'Best Seller',
        label: `Best Return Policy`,
        children: <OfferCard value={"bestseller"} />,
    },
    {
        key: '2',
        label: `Customer Satisfaction`,
        children: <OfferCard value={"featured"} />,
    },
    {
        key: '24/7',
        label: `24/7 Support`,
        children: <OfferCard value={"specialoffer"} />,
    },
];

function LandingOffers() {
    return (
        <Row className='SectionPadding'>
            <Col span={24}>
                <CenterHeading heading={"Latest Products"} />
            </Col>
            <Col span={24} className="flex hfcenter">
                <Row justify={"center"}>
                    {

                    }
                </Row>
            </Col>
        </Row>
    )
}

export default LandingOffers