import { Col, Row } from 'antd'
import React, { Fragment } from 'react'
import Banner from "../../../../common/Banner"
import ProfileMenu from './menu'
function UserProfile() {
    return (
        <Fragment>
            <Banner title={"profile"} />
            <Row
                justify={"space-between"}
                className={"section profileRow"}>
                <Col md={6} sm={24}>
                    <ProfileMenu />
                </Col>
                <Col md={17} sm={24}>
                    col2
                </Col>
            </Row>
        </Fragment>
    )
}

export default UserProfile