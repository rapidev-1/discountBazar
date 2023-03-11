import { Col, Row } from 'antd'
import React from 'react'
import ComingSoon from '../../../../../common/Errors/ComingSoon'

function Settings() {
    return (
        <Row justify={"center"} align="middle" style={{ width: "100%", height: "100%" }}>
            <Col span={24}>
                <ComingSoon noBanner />
            </Col>
        </Row>
    )
}

export default Settings