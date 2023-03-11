import { Button, Col, Row } from 'antd'
import React, { Fragment } from 'react'
import { CenterHeading } from "../../Text"
import { useNavigate } from "react-router-dom"
import Banner from "../../Banner"

function ComingSoon({ noBanner }) {
    const navigate = useNavigate()
    const goback = () => navigate("/")
    return (
        <Fragment>
            {noBanner ? null : <Banner title={"404"} />}
            <Row className='ErrorPage SectionPadding' justify={"center"}>
                <Col span={24}>
                    <CenterHeading heading={"Coming Soon!"} rows={2} small />
                </Col>
                {/* <Col span={24} className=" flex hfcenter" style={{ marginTop: "20px" }}>
                    <Button className='btn' onClick={goback}>
                        Back to Home
                    </Button>
                </Col> */}
            </Row>
        </Fragment>
    )
}

export default ComingSoon