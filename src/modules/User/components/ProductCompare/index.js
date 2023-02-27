import { Col, Row } from 'antd'
import React, { Fragment } from 'react'
import Banner from '../../../../common/Banner'

function ProductCompare() {
    return (
        <Fragment>
            <Banner title={"compare"} />
            <Row className='section'>
                <Col span={24}></Col>
            </Row>
        </Fragment>
    )
}

export default ProductCompare