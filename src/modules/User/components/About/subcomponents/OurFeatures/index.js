import React from 'react'
import freeDelivery from "../../../../../../common/Images/free-delivery 1.png"
import cashback from "../../../../../../common/Images/cashback 1.png"
import Quality from "../../../../../../common/Images/premium-quality 1.png"
import Support from "../../../../../../common/Images/24-hours-support 1.png"
import { CenterHeading } from '../../../../../../common/Text';
import { Card, Col, Row } from "antd";
import OfferCard from "./Cards/Cards";

const items = [
  {
    key: "1",
    label: `Free Delivery`,
    icon: "/assets/icons/shipping.png",
    children: <OfferCard value={"newarrival"} />,
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    key: "Premium",
    icon: "/assets/icons/cashback.png",
    label: `100% CashBack`,
    children: <OfferCard value={"bestseller"} />,
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    key: "2",
    icon: "/assets/icons/premium.png",
    label: `Quality Products`,
    children: <OfferCard value={"featured"} />,
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    key: "24/7",
    icon: "/assets/icons/support.png",
    label: `24/7 Support`,
    children: <OfferCard value={"specialoffer"} />,
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
];
function index() {
  return (
        <Row className="SectionPadding LandingOffers">
          <Col span={24}>
        <CenterHeading heading={"Our Features"} />
          </Col>
          <Col
            span={24}
            className="flex hfcenter"
            style={{ marginTop: "60px" }}
          >
            <Row justify={"center"} gutter={[20, 20]}>
              {items.map((e, i) => {
                return (
                  <Col lg={6} md={12} sm={24} xs={24} key={i}>
                    <Card
                      hoverable
                      className="offerCard"
                      cover={<img alt="example" src={e.icon} />}
                    >
                      <Card.Meta title={e.label} description={e.des} />
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
  );
}

export default index