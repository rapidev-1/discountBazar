import { Button, Col, Row } from "antd";
import React from "react";
import ProductCart from "../productCart/ProductCart";
function Main() {
  return (
    <div className="section cart-container">
      <div align="middle" className="cart-container-left">
        <Row align="middle" className="border" gutter={8}>
          <Col xxl={12} xl={12} lg={8} md={8} sm={8} xs={8}>
            <h1>Product</h1>
          </Col>
          <Col  xxl={4} xl={4} lg={5} md={5} sm={5} xs={5}>
            <h1>Price</h1>
          </Col>
          <Col xxl={4} xl={4} lg={6} md={6} sm={6} xs={6}>
            <h1>Quantity</h1>
          </Col>
          <Col
            className="border"
            xxl={4}
            xl={4}
            lg={5}
            md={5}
            sm={5}
            xs={5}
          >
            <h1>Total</h1>
          </Col>
        </Row>
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
      <div className="cart-container-right">
        <div className="SectionPadding cart-right-up">
          <h3>Cart Totals</h3>
          <div className="cart-right-up-itemOne">
            <div className="cart-right-up-items">
              <strong>Subtotals:</strong>
              <p>Rs 320</p>
            </div>
            <div className="cart-right-up-items">
              <strong>Totals:</strong>
              <p>Rs 320</p>
            </div>
            <Button className="cart-right-up-items-btn">
              Proceed to CheckOut
            </Button>
          </div>
        </div>
        <div className="SectionPadding cart-right-down">
          <h3>Shipping Details</h3>
          <div className="cart-right-down-itemTwo">
            <div className="cart-right-down-items">
              <strong>Pakistan</strong>
            </div>
            <div className="cart-right-down-items">
              <strong>Rawalpindi</strong>
            </div>
            <div className="cart-right-down-items">
              <strong>Postal Code</strong>
            </div>
            <Button className="btn">Calculate Shipping</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

