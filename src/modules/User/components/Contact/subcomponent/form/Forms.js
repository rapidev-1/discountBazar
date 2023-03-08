import React from "react";

import { Button, Col, Row, Checkbox, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function Forms() {
  return (
    <div className="form-container">
      <h1>Get In Touch</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
        ultrices tristique amet erat vitae eget dolor los vitae lobortis quis
        bibendum quam.
      </p>
      <div className="form-container-inputs">
        <Row gutter={[16, 6]}>
          <Col span={12} xs={{ span: 24 }}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Your username",
                },
              ]}
            >
              <Input placeholder="Your Username" />
            </Form.Item>
          </Col>
          <Col span={12} xs={{ span: 24 }}>
            <Form.Item
              name="emails"
              rules={[
                {
                  required: true,
                  message: "Your Email",
                },
              ]}
            >
              <Input placeholder="Your Email" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 6]}>
          <Col span={24}>
            <Form.Item
              name="emails"
              rules={[
                {
                  required: true,
                  message: "Your Email",
                },
              ]}
            >
              <Input placeholder="Subject" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 6]}>
          <Col span={24}>
            <Form.Item>
              <TextArea rows={4} placeholder="Type Your Message" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" className="btn" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </div>
    </div>
  );
}

export default Forms;
        {/* <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 1900,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            wrapperCol={{
              offset: 1,
              span: 16,
            }}
            name="username"
            rules={[
              {
                required: true,
                message: "Username",
              },
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
          wrapperCol={{
              offset: 1,
              span: 16,
            }}
            name="email"
            rules={[
              {
                required: true,
                message: "Email",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 1,
              span: 16,
            }}
            name="subject"
            rules={[
              {
                required: true,
                message: "Subject",
              },
            ]}
            >
            <Input placeholder="Subject" />
            </Form.Item>
            <Form.Item
            wrapperCol={{
              offset: 1,
              span: 16,
            }}
            >
            <TextArea placeholder="Type your message" rows={4} />
            </Form.Item>
            <Form.Item
            wrapperCol={{
              offset: 1,
              span: 16,
            }}
            </Form.Item>
          </Form>
          > */}