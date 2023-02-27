import { Button, Col, Result, Row } from 'antd'
import React, { Fragment } from 'react'
import Banner from '../../../../common/Banner'
import { CenterHeading } from '../../../../common/Text'

function OrderComplete() {
    const subtitle =
        <p className='textLighter'>
            Thank you for your order! Your order is being processed and will be completed within 3-6 hours.
            <br /> You will receive an email confirmation when your order is completed.
        </p>
    return (
        <Fragment>
            <Banner title={"Order Completed"} />
            <Row className="section">
                <Col span={24} className="ordercompleteresultWrapper">
                    <img src="/assets/icons/clock.svg" id='clock' alt="" />
                    <Result
                        className='ordercompleteresult'
                        status="success"
                        icon={<img src='/assets/icons/ordercomplete.svg' alt='' />}
                        title={<CenterHeading heading={"Your Order Is Completed!"} />}
                        subTitle={subtitle}
                        extra={[
                            <Button className='btn' key="buy">Continue Shopping</Button>,
                        ]}
                    />
                    <img src="/assets/icons/checklist.svg" id='checklist' alt="" />
                </Col>
            </Row>
        </Fragment>
    )
}

export default OrderComplete