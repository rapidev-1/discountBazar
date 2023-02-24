import React from 'react'
import { CenterHeading } from '../../../../../../common/Text';
import { Card, Col, Row } from "antd";

const items = [
  {
    key: "1",
    label: `Free Delivery`,
    icon: "/assets/icons/shipping.png",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    key: "Premium",
    icon: "/assets/icons/cashback.png",
    label: `100% CashBack`,
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    key: "2",
    icon: "/assets/icons/premium.png",
    label: `Quality Products`,
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    key: "24/7",
    icon: "/assets/icons/support.png",
    label: `24/7 Support`,
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