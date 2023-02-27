import { Col, Row } from 'antd'
import React, { Fragment } from 'react'
import Banner from "../../../../common/Banner"
import FilterBar from '../../../../common/FilterBar'
import ProductsCard2 from '../../../../common/Product/card2'
function SearchPage() {
    return (
        <Fragment>
            <Banner title={"search"} />
            <FilterBar />
            <Row
                gutter={[20, 15]}
                justify={"space-between"}
                className={"section"}>
                {
                    Array(10).fill(null).map((e, i) => {
                        return (
                            <Col span={24}>
                                <ProductsCard2 />
                            </Col>
                        )
                    })
                }

            </Row>
        </Fragment>
    )
}

export default SearchPage