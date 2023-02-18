import { CenterHeading } from '../../../../../../common/Text'
import { Card, Col, Row } from 'antd'
import OfferCard from './card'
import React from 'react'

const items = [
    {
        key: '1',
        label: `Fast Shipping`,
        icon: "/assets/icons/shipping.png",
        children: <OfferCard value={"newarrival"} />,
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
    },
    {
        key: 'Premium',
        icon: "/assets/icons/cashback.png",
        label: `CashBack`,
        children: <OfferCard value={"bestseller"} />,
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
    },
    {
        key: '2',
        icon: "/assets/icons/premium.png",
        label: `Premium Quality`,
        children: <OfferCard value={"featured"} />,
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
    },
    {
        key: '24/7',
        icon: "/assets/icons/support.png",
        label: `24/7 Support`,
        children: <OfferCard value={"specialoffer"} />,
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
    },
];

function LandingOffers() {
    return (
        <Row className='SectionPadding LandingOffers'>
            <Col span={24}>
                <CenterHeading heading={"What Discount Bazar Offer!"} />
            </Col>
            <Col span={24} className="flex hfcenter">
                <Row justify={"center"} gutter={[20, 20]}>
                    {
                        items.map((e, i) => {
                            return (
                                <Col lg={6} md={12} sm={24} xs={24} key={i}>
                                    <Card
                                        hoverable
                                        className='offerCard'
                                        cover={<img alt="example" src={e.icon} />}
                                    >
                                        <Card.Meta title={e.label} description={e.des} />
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Col>
        </Row>
    )
}

export default LandingOffers