import { Col, Row } from 'antd'
import React from 'react'
import images from "../../../../../../common/Images/Football-PNG-Image.png"
function Card() {
  return (
    <Row justify="center" align="middle" className="payment-product-card">
      <Col
        className="payment-card-imageDiv"
        span={10}
        xxl={10}
        xl={10}
        lg={10}
        md={6}
        sm={6}
        xs={10}
      >
        <img className="payment-card-images" src={images} alt="loading..." />
      </Col>
      <Col className="" span={14}>
        <Row className="payment-card-info" justify="center" align="middle">
          <Col>
            <strong className="cart-card-textOne">Ut diam consequat</strong>
          </Col>
          <Col>
            <strong className="cart-card-textTwo">Color: Brown</strong>
          </Col>
          <Col>
            <strong className="cart-card-textTwo">Size: XL</strong>
          </Col>
          <Col>
            <strong className="cart-card-textTwo">Price: 45000 PKR</strong>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Card