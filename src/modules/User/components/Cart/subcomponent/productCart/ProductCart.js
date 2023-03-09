import { Col, Divider, Row } from 'antd'
import React from 'react'
import Cards from '../cards/Cards';
import Quantity from '../quantity/Quantity'
function ProductCart() {
  return (
    <div className="productInfo">
      <Row align="middle" gutter={8}>
        <Col xxl={12} xl={12} lg={8} md={8} sm={8} xs={8}>
          <Cards />
        </Col>
        <Col xxl={4} xl={4} lg={5} md={5} sm={5} xs={5}>
          <p className="productInfo-text">Rs 45000</p>
        </Col>
        <Col xxl={4} xl={4} lg={6} md={6} sm={6} xs={6}>
          <Quantity />
        </Col>
        <Col xxl={4} xl={4} lg={5} md={5} sm={5} xs={5}>
          <p className="productInfo-text">Rs 45000</p>
        </Col>
      </Row>
      <Divider></Divider>
    </div>
  );
}

export default ProductCart