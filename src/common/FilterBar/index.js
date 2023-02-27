import React from 'react'
import { Row, Col } from "antd"

function FilterBar() {
    return (
        <Row align={"center"} className="section filterBar" justify={"space-between"}>
            <Col sm={24} md={10}>
                <div className="HeadingDark">
                    Ecommerce Acceories & Fashion item
                </div>
                <p className='textLighter'>
                    About 9,620 results (0.62 seconds)
                </p>
            </Col>
            <Col sm={24} md={12}>
                <Row style={{ width: "100%" }}>
                    <Col md={4}>
                        Per Page
                    </Col>
                    <Col md={4}>ok</Col>
                    <Col md={4}>ok</Col>
                </Row>
            </Col>
        </Row>
    )
}

export default FilterBar