import { Col, Row } from 'antd'
import React, { Fragment } from 'react'
import Banner from '../../../../common/Banner'
import ProductCompareHeading from './Heading'
import CompareSearchBar from './Heading/CompareSearchBar'

function ProductCompare() {
    return (
        <Fragment>
            <Banner title={"compare"} />
            <Row className='section'>
                <Col span={24}>
                    <ProductCompareHeading />
                    <CompareSearchBar />
                </Col>
            </Row>
        </Fragment>
    )
}

export default ProductCompare