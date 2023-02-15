import React from "react";
import Uppernavbar from "./Uppernavbar";
import Lowernavbar from "./Lowernavbar";
import { Col, Row } from "antd";
function UserNav() {
  return (
    <Row className="navbar">
      <Col span={24}>
        <Uppernavbar />
      </Col>
      <Col span={24}>
        <Lowernavbar />
      </Col>
    </Row>
  );
}

export default UserNav;
