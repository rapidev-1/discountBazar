/* eslint-disable jsx-a11y/anchor-is-valid */
import { Input, Button, Row, Col } from 'antd';
import {
    TwitterOutlined,
    FacebookOutlined,
    InstagramOutlined,
} from '@ant-design/icons';

const UserFooter = () => (
    <Row gutter={[0, 20]}>
        <Col span={24}>
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
        <Col span={24}>
            <Row style={{ textAlign: 'center' }}>
                <Col md={12} sm={24} xs={24}>
                    ©Webecy - All Rights Reserved
                </Col>
                <Col md={12} sm={24} xs={24}>
                    <a href="#" style={{ background: '#000', color: '#fff', padding: '10px', borderRadius: '50%', marginRight: '10px' }}>
                        <FacebookOutlined />
                    </a>
                    <a href="#" style={{ background: '#000', color: '#fff', padding: '10px', borderRadius: '50%', marginRight: '10px' }}>
                        <InstagramOutlined />
                    </a>
                    <a href='#' style={{ background: '#000', color: '#fff', padding: '10px', borderRadius: '50%' }}>
                        <TwitterOutlined />
                    </a>
                </Col>
            </Row>
        </Col>
    </Row>
);

export default UserFooter