import { Button, Col, Divider, Row } from 'antd';
import React from 'react'
import Cards from '../../../Cart/subcomponent/cards/Cards';

function CartProduct() {
  return (
    <div className="CartProduct">
      <div className="CartProduct-up">
        <Row md={{justify:"center"}} align="middle" className="border" gutter={8}>
          <Col className="border" xxl={18} xl={18} lg={18} md={12} sm={8} xs={8}>
            <Cards />
          </Col>
          <Col className="border" xxl={6} xl={6} lg={6} md={8} sm={5} xs={5}>
            <p className="productInfo-text">Rs 45000</p>
          </Col>
        </Row>
        <Divider></Divider>
      </div>
      <div className="CartProduct-down">
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
    </div>
  );
}

export default CartProduct