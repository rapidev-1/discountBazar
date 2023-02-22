import { Col, Row } from 'antd'
import React from 'react'
import { CenterHeading } from "../../Text"

function Error404() {
    return (
        <Row className='ErrorPage SectionPadding' justify={"center"}>
            <Col lg={15} md={18} sm={24} xs={24}>
                <img src="/assets/images/404.svg" alt="" />
            </Col>
            <Col span={24}>
                <CenterHeading heading={"oops! The page you requested was not found!"} rows={2} small />
            </Col>
        </Row>
    )
}

export default Error404