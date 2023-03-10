import { Button, Col, Input, Row } from 'antd';
import React from 'react'

function PaymentInfo() {
  return (
    <div className="paymentInfo">
      <h1>Payment Info</h1>
      <div className="paymentInfo-container">
        <div className="paymentInfo-container-up">
          <Row gutter={[6, 24]}>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <h1 className="paymentInfo-container-up-heading">
                Contact Information
              </h1>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <strong className="payment-strongText">
                Already have an account? Log in
              </strong>
            </Col>
          </Row>
          <Row gutter={[8, 24]}>
            <Col span={24}>
              <Input
                className="paymentInfo-container-input"
                placeholder="Your Email"
              />
            </Col>
          </Row>
        </div>
        <div className="paymentInfo-container-down">
          <Row>
            <Col>
              <h1 className="paymentInfo-container-up-heading">
                Shipping Address
              </h1>
            </Col>
          </Row>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Input
                className="paymentInfo-container-input"
                placeholder="First Name"
              />
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Input
                placeholder="Last Name"
                className="paymentInfo-container-input"
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Input
                className="paymentInfo-container-input"
                placeholder="Address"
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Input
                className="paymentInfo-container-input"
                placeholder="Appaetment"
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Input
                className="paymentInfo-container-input"
                placeholder="City"
              />
            </Col>
          </Row>
          <Row gutter={24}>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Input
                className="paymentInfo-container-input"
                placeholder="Pakistan"
              />
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Input
                placeholder="Postal Code"
                className="paymentInfo-container-input"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button className="btn">Continue Shipping</Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default PaymentInfo