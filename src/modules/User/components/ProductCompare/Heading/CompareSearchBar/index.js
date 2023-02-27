import { Col, Input, Row, Select } from 'antd'
import React from 'react'

function CompareSearchBar() {
    return (
        <Row className='SectionPadding CompareSearchBar'>
            <Col className='CompareSearchBarCol' span={24}>
                <Row gutter={[20, 10]} align="middle" justify={"space-between"}>
                    <Col md={10} sm={24} xs={24}>
                        <Row
                            align={"middle"}
                            gutter={[
                                { lg: 20, md: 10, sm: 10, xs: 10 },
                                { lg: 20, md: 10, sm: 10, xs: 10 }]}>
                            <Col sm={12} xs={24}>
                                <Input
                                    placeholder='search product...'
                                    type='text' />
                            </Col>
                            <Col sm={12} xs={24}>
                                <Input
                                    placeholder='search product...'
                                    type='text' />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={8} md={10} sm={24} xs={24}>
                        <Row align={"middle"} gutter={[10, 10]}>
                            <Col sm={8} xs={24}>
                                <Select
                                    style={{ width: "100%" }}
                                    options={
                                        Array(20).fill(null).map((e, i) => {
                                            return {
                                                label: 'less than ' + (i + 1) * 100,
                                                value: (i + 1) * 100
                                            }
                                        })

                                    }
                                    placeholder='Price'
                                    type='text' />
                            </Col>
                            <Col sm={8} xs={24}>
                                <Select
                                    style={{ width: "100%" }}
                                    options={[
                                        { label: "Online", value: "online" },
                                        { label: "Local", value: "local" }]}
                                    placeholder='Vendor Type'
                                    type='text' />
                            </Col>
                            <Col sm={8} xs={24}>
                                <Input
                                    placeholder='Region'
                                    type='text' />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default CompareSearchBar