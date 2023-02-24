import { Col, Row } from 'antd'
import React, { Fragment } from 'react'
import Banner from "../../../../common/Banner"
import SearchPageProductsCard from './subcomponents/ProductsCard'
function SearchPage() {
    return (
        <Fragment>
            <Banner title={"search"} />
            <Row
                gutter={[20, 15]}
                justify={"space-between"}
                className={"section"}>
                {
                    Array(10).fill(null).map((e, i) => {
                        return (
                            <Col span={24}>
                                <SearchPageProductsCard />
                            </Col>
                        )
                    })
                }

            </Row>
        </Fragment>
    )
}

export default SearchPage