import { Col, Row } from 'antd'
import React from 'react'
import DiscountBazarIcon from '../../../../../../common/Icons';
import Images from "../../../../../../common/Images/Dell-Ultrasharp-Monitor-Widescreen-Transparent-Image.png"
function Cards() {
  return (
    <div className="cart-card">
      <Row gutter={8} justify="space-around" align="middle">
        <Col>
          <img className="cart-card-image" src={Images} alt="loading.." />
          <DiscountBazarIcon
            className="cart-card-iconClose"
            text={""}
            icon={"close"}
          />
        </Col>
        <Col>
          <Row align="middle">
            <Col>
              <strong className="cart-card-textOne">Ut diam consequat</strong>
            </Col>
          </Row>
          <Row align="middle">
            <Col>
              <strong className="cart-card-textTwo">Color: Brown</strong>
            </Col>
          </Row>
          <Row align="middle">
            <Col>
              <strong className="cart-card-textTwo">Size: XL</strong>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Cards