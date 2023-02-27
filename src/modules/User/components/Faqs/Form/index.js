import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import { Link } from 'react-router-dom';
const FaqForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <Row className={`SectionPadding LoginPage FAQFORM`}>
            <Col span={24}>
                <Col span={24}>
                    <h1 className='colorHeading'>
                        Ask a Question
                    </h1>
                </Col>
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
                                message: 'Please input your Name!',
                            },
                        ]}
                    >
                        <Input
                            type='text'
                            placeholder="Name" />
                    </Form.Item>
                    <Form.Item
                        name="subject"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Subject!',
                            },
                        ]}
                    >
                        <Input
                            // prefix={<LockOutlined className="site-form-item-icon" />}
                            type="text"
                            placeholder="Subject"
                        />
                    </Form.Item>
                    <Form.Item
                        name="message"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Message!',
                            },
                        ]}>
                        <Input.TextArea rows={4} placeholder="Messagge" maxLength={6} />

                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button btn">
                            Submit
                        </Button>

                    </Form.Item>

                </Form>
            </Col>
        </Row>
    );
};
export default FaqForm;