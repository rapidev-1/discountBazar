import { Col, Row, Typography } from 'antd'
import React, { Fragment } from 'react'
import Banner from '../../../../common/Banner'
import FaqForm from './Form'
import { questions } from './list'

function FAQS() {
    return (
        <Fragment>
            <Banner title={"faq"} />
            <Row className='section' gutter={[20, 20]}>
                <Col lg={12} md={24} sm={24} xs={24}>
                    <Typography>
                        <Typography.Text className='HeadingDark'>
                            Generel Information
                        </Typography.Text>
                    </Typography>
                    <Row gutter={[30, 30]} className="FaqsQuestions">
                        {
                            questions.map((e, i) => {
                                return (
                                    <Col span={24}>
                                        <Row gutter={[10, 10]}>
                                            <Col span={24} className="colorHeading">
                                                {e.q}
                                            </Col>
                                            <Col className='textLighter'>
                                                {e.a}
                                            </Col>
                                        </Row>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Col>
                <Col lg={12} md={24} sm={24} xs={24}>
                    <FaqForm />
                </Col>
            </Row>
        </Fragment>
    )
}

export default FAQS