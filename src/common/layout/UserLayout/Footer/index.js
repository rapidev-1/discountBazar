/* eslint-disable jsx-a11y/anchor-is-valid */
import { Input, Button, Row, Col } from 'antd';
import DiscountBazarIcon from "../../../Icons"

const UserFooter = () => (
    <Row gutter={[0, 20]} className="userFooter">
        <Col span={24} className="footerUpper">
            <Row gutter={[20, 20]}>
                <Col md={8} sm={24} xs={24}>
                    <h3 style={{ fontWeight: 'bold' }}>Column 1</h3>
                    <img src="logo.png" alt="logo" style={{ height: '50px', marginBlock: "20px" }} />
                    <div style={{ display: 'flex', alignItems: 'center' }}>

                        <Input placeholder="Enter your email" />
                        <Button type="primary">Subscribe</Button>
                    </div>
                </Col>
                <Col md={5} sm={24} xs={24}>
                    <h3 style={{ fontWeight: 'bold' }}>Column 2</h3>
                    <ul>
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                    </ul>
                </Col>
                <Col md={5} sm={24} xs={24}>
                    <h3 style={{ fontWeight: 'bold' }}>Column 3</h3>
                    <ul>
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                    </ul>
                </Col>
                <Col md={6} sm={24} xs={24}>
                    <h3 style={{ fontWeight: 'bold' }}>Column 4</h3>
                    <ul>
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                    </ul>
                </Col>
            </Row>
        </Col>
        <Col span={24} className="footerLower">
            <Row justify={"space-between"}>
                <Col md={12} sm={24} xs={24}>
                    ©Webecy - All Rights Reserved
                </Col>
                <Col md={12} sm={24} xs={24}>
                    <Row
                        justify={"end"}
                        style={{ width: "100%", gap: "20px" }}>
                        <DiscountBazarIcon
                            icon="facebook"
                            className={"footerIcon"} />
                        <DiscountBazarIcon
                            icon="twitter"
                            className={"footerIcon"} />
                        <DiscountBazarIcon
                            icon="instagram"
                            className={"footerIcon"} />
                    </Row>
                </Col>
            </Row>
        </Col>
    </Row>
);

export default UserFooter