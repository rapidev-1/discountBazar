import React from 'react'
import { Row, Col } from "antd"
import DiscountBazarIcon from '../../../Icons'
function Uppernavbar() {
  return (
    <Row className='uppernav' justify={"space-between"}>
      <Col md={12} sm={24} xs={24}>
        <Row style={{ width: "100%" }}>
          <Col lg={8} md={10} sm={12} xs={12}>
            <DiscountBazarIcon
              text={'test@test.com'}
              icon={"email"} />
          </Col>
          <Col lg={8} md={10} sm={12} xs={12}>
            <DiscountBazarIcon
              text={'090078601'}
              icon={"call"} />
          </Col>
        </Row>
      </Col>
      <Col md={12} sm={24} xs={24}>
        <Col xl={3} lg={4}>
          <DiscountBazarIcon
            dir={"rtl"}
            text={'login'}
            icon={"user"} />
        </Col>
        <Col xl={4} lg={5}>
          <DiscountBazarIcon
            dir={"rtl"}
            text={'wishlist'}
            icon={"wishlist"} />
        </Col>
        <Col xl={1} lg={1}>
          <DiscountBazarIcon
            dir={"rtl"}
            icon={"cart"}
          />
        </Col>
      </Col>
    </Row>
  )
}

export default Uppernavbar