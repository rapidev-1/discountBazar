import { Col, Row } from 'antd'
import React, { Fragment } from 'react'
import Banner from "../../../../common/Banner"
function UserProfile() {
    return (
        <Fragment>
            <Banner title={"profile"} />
            <Row
                gutter={[20, 15]}
                justify={"space-between"}
                className={"section"}>
                <Col>
                    profile Page
                </Col>
            </Row>
        </Fragment>
    )
}

export default UserProfile