import React, { Fragment, useEffect, useState } from 'react'
import { Row, Col } from "antd"
import LatestProductCard from './card'
import { arr } from './List'
import Card2 from './card/card2'
import Card3 from './card/card3'


function LatestProductContent({ value }) {
    const [products, setproducts] = useState([])
    useEffect(() => {
        setproducts(arr)
    }, [value])
    return (
        <Fragment>
            <div className='LatestProductContent'>
                <Row gutter={[20, 60]} justify="center">
                    {
                        products?.map((e, i) => {
                            return (
                                <Col lg={6} md={12} sm={24} xs={24} key={i}>
                                    <LatestProductCard data={e} />
                                </Col>
                            )
                        })
                    }
                </Row>
                <Row justify={"space-between"} gutter={[20, 60]} style={{ marginTop: "30px" }}>
                    <Col lg={8} md={12} sm={24} xs={24}>
                        <Card2 />
                    </Col>
                    <Col lg={8} md={12} sm={24} xs={24}>
                        <Card2 />
                    </Col>
                    <Col lg={8} md={24} sm={24} xs={24}>
                        <Card3 />
                    </Col>
                </Row>
            </div>

        </Fragment>
    )
}

export default LatestProductContent