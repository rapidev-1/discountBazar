import { Button, Col, Row } from 'antd'
import React, { Fragment } from 'react'
import { CenterHeading } from "../../Text"
import { useNavigate } from "react-router-dom"
import Banner from "../../Banner"

function Error404() {
    const navigate = useNavigate()
    const goback = () => navigate("/")
    return (
        <Fragment>
            <Banner title={"404"} />
            <Row className='ErrorPage SectionPadding' justify={"center"}>
                <Col lg={15} md={18} sm={24} xs={24}>
                    <img src="/assets/images/404.svg" alt="" />
                </Col>
                <Col span={24}>
                    <CenterHeading heading={"oops! The page you requested was not found!"} rows={2} small />
                </Col>
                <Col span={24} className=" flex hfcenter" style={{ marginTop: "20px" }}>
                    <Button className='btn' onClick={goback}>
                        Back to Home
                    </Button>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Error404