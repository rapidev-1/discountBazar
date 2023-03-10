import { Button, Col, Divider, Row } from 'antd';
import React from 'react'
import Card from '../Card/Card';

function CartProduct() {
  return (
    <div className="CartProduct">
      <div className="CartProduct-up">
        <Row  justify="center" align="middle" className="" gutter={8}>
          <Col
            xxl={24}
            xl={24}
            lg={24}
            md={24}
            sm={24}
            xs={24}
          >
        <Card/>
          </Col>
        <Divider></Divider>
        </Row>
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