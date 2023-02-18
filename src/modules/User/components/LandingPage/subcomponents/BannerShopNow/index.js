import { Button, Col, Row } from 'antd'
import React from 'react'
import { CenterHeading } from '../../../../../../common/Text';
const img = "/assets/images/bannerShopnow.png";
function BannerShopNow() {
    return (
        <Row className='BannerShopNow SectionPadding' justify={"center"} align="center">
            <Col span={24}
                style={{ background: `url(${img})`, height: "100%" }}>
                <Row justify={"center"} align='center'>
                    <Col span={15}>
                        <CenterHeading
                            heading={`Get Leatest Update By Subscribe to our Newslater`} />
                    </Col>
                    <Col span={24} className="flex hfcenter">
                        <Button>Shop Now</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default BannerShopNow