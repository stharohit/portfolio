import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const MyForm = () => {

  const [formField, setFormField] = useState();
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 20 },
  };
  const submitMessage = () => {
    console.log(form.getFieldsValue());
  };

  return (
    <Form {...formItemLayout} className="myForm">
      <Form.Item labelAlign="left" label="Your Name" required>
        <Input type="text" placeholder="Jack Reacher" />
      </Form.Item>
      <Form.Item labelAlign="left" label="Your Email" required>
        <Input type="email" placeholder="abc@example.com" />
      </Form.Item>
      <Form.Item labelAlign="left" label="Subject" required>
        <Input type="text" placeholder="Website Development" />
      </Form.Item>
      <Form.Item labelAlign="left" label="Message" required>
        <Input.TextArea placeholder="Enter your message" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={submitMessage}>
          Submit Message
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MyForm;
