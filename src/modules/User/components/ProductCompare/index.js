import { Col, Row } from 'antd'
import React, { Fragment } from 'react'
import Banner from '../../../../common/Banner'
import CompareItems from './CompareItems'
import ProductCompareHeading from './Heading'
import CompareSearchBar from './CompareSearchBar'
function ProductCompare() {

    return (
        <Fragment>
            <Banner title={"compare"} />
            <Row className='section'>
                <Col span={24}>
                    <ProductCompareHeading />
                    <CompareSearchBar />
                    <CompareItems />
                </Col>
            </Row>
        </Fragment>
    )
}

export default ProductCompare