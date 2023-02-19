import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../../../../common/BreadCrumbs';
const App = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <Row>
            <Col span={24} className="breadcrumbParent">
                <BreadCrumbs value={"signup"} />
            </Col>
            <Col span={24}>
                <Row className={`SectionPadding LoginPage`}>
                    <Col span={24}>
                        <Row justify={"center"}>
                            <Col span={24}>
                                <h1 className='texcenter'>
                                    Signup
                                </h1>
                                <p className='texcenter textLighter'>
                                    Please Enter your account detail bellow.
                                </p>
                            </Col>
                        </Row>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Email!',
                                    },
                                ]}
                            >
                                <Input
                                    type='email'
                                    prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>


                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button btn">
                                    Signup in
                                </Button>

                            </Form.Item>
                            <Form.Item>
                                <p className='texcenter'>
                                    Already have an Account?
                                    <Link to={"/login"}> Login!</Link>
                                </p>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};
export default App;