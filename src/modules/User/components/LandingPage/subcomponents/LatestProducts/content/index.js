import React, { useEffect, useState } from 'react'
import { Row, Col } from "antd"
import LatestProductCard from './card'
import { arr } from './List'


function LatestProductContent({ value }) {
    const [products, setproducts] = useState([])
    useEffect(() => {
        if (value) setproducts(arr)
    }, [value])
    return (
        <div className='LatestProductContent'>
            <Row gutter={[20, 60]} justify="space-between">
                {
                    products?.map((e, i) => {
                        return (
                            <Col lg={8} md={12} sm={24} xs={24} key={i}>
                                <LatestProductCard data={e} />
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default LatestProductContent