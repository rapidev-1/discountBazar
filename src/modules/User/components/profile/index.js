import { Col, Row } from 'antd'
import React, { Fragment, useState } from 'react'
import Banner from "../../../../common/Banner"
import History from './History'
import ProfileMenu from './menu'
import Settings from './Settings'
import User from './User'
function UserProfile() {
    const [active, setactive] = useState('user')
    return (
        <Fragment>
            <Banner title={"profile"} />
            <Row
                justify={"space-between"}
                className={"section profileRow"}>
                <Col md={6} sm={24}>
                    <ProfileMenu setactive={setactive} active={active} />
                </Col>
                <Col md={17} sm={24}>
                    {active === "user" ? <User /> : null}
                    {active === "history" ? <History /> : null}
                    {active === "setting" ? <Settings /> : null}
                </Col>
            </Row>
        </Fragment>
    )
}

export default UserProfile