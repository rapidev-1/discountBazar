import React, { useState } from "react";
import Uppernavbar from "./Uppernavbar";
import Lowernavbar from "./Lowernavbar";
import { Col, Row, Grid } from "antd";
import UserDrawer from "./Drawer";
import Logo from "../../../Logo";
import DiscountBazarIcon from "../../../Icons";
function UserNav() {
  const breakpoints = Grid.useBreakpoint()
  const [open, setOpen] = useState(false)
  const onClose = () => setOpen(e => !e)
  return (
    breakpoints['lg'] ?
      <Row className="navbar">
        <Col span={24}>
          <Uppernavbar />
        </Col>
        <Col span={24} >
          <Lowernavbar />
        </Col>
      </Row> :
      <Row className="mobilenav">
        <UserDrawer open={open} onClose={onClose} />
        <Logo />
        <DiscountBazarIcon
          icon={"burger"}
          className="hamburger"
          onClick={onClose}
        />
      </Row>
  );
}

export default UserNav;
