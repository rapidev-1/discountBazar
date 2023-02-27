import React, { useState } from 'react'
import { Row, Col, Select, } from "antd"

function FilterBar() {
    const [value, setvalue] = useState()

    const handleChange = (value) => {
        setvalue(value)
    };


    return (
        <Row
            align={"top"}

            gutter={[10, 10]}
            justify={"space-between"}
            className="section filterBar">
            <Col md={24} lg={12} >
                <div className="HeadingDark">
                    Ecommerce Acceories & Fashion item
                </div>
                <p className='textLighter'>
                    About 9,620 results (0.62 seconds)
                </p>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12}>
                <Row style={{ width: "100%" }} gutter={[20, 10]} justify="end">
                    <Col lg={9} md={12} sm={24} xs={24} className={`filterSelectCol`}>
                        <label htmlFor="" className='colorHeading'>Sort By :</label>
                        <Select
                            className="filterBarSelect sort"
                            value={value}
                            onChange={handleChange}
                            options={[
                                {
                                    value: "jack",
                                    label: "Jack",
                                },
                                {
                                    value: "lucy",
                                    label: "Lucy",
                                },
                                {
                                    value: "Yiminghe",
                                    label: "yiminghe",
                                },
                                {
                                    value: "disabled",
                                    label: "Disabled",
                                    disabled: true,
                                },
                            ]}
                        />
                    </Col>
                    <Col lg={15} md={12} sm={24} xs={24} className={`filterSelectCol`}>
                        <label htmlFor="" className='colorHeading'>Per Page :</label>
                        <Select
                            className="filterBarSelect"
                            value={value}
                            onChange={handleChange}
                            options={[
                                {
                                    value: "jack",
                                    label: "Jack",
                                },
                                {
                                    value: "lucy",
                                    label: "Lucy",
                                },
                                {
                                    value: "Yiminghe",
                                    label: "yiminghe",
                                },
                                {
                                    value: "disabled",
                                    label: "Disabled",
                                    disabled: true,
                                },
                            ]}
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default FilterBar