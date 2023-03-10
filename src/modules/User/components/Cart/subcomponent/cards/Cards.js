import { Col, Row } from "antd";
import React from "react";
import DiscountBazarIcon from "../../../../../../common/Icons";
import Images from "../../../../../../common/Images/Dell-Ultrasharp-Monitor-Widescreen-Transparent-Image.png";
function Cards({ priceTag }) {
  return (
    <div className="cart-card">
      <Row justify="center" align="middle">
        <Col xxl={12} xl={12} lg={24} md={18} sm={24} xs={24}>
          <img className="cart-card-image" src={Images} alt="loading.." />
          <DiscountBazarIcon
            className="cart-card-iconClose"
            text={""}
            icon={"close"}
          />
        </Col>
        <Col
          className="cart-cards-info"
          xxl={12}
          xl={12}
          lg={24}
          md={18}
          sm={24}
          xs={24}
        >
          <Row align="middle" gutter={[4, 12]}>
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
          {priceTag&&(
          <Row align="middle">
            <Col>
              <strong className="cart-card-textTwo">Price: 4300 PKR</strong>
            </Col>
          </Row>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Cards;
