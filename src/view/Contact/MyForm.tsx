import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import sendEmail from "utils/mailjet";

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const MyForm = () => {
  const [formFields, setFormFields] = useState<FormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 20 },
  };

  const handleInput = (inputName: string, val: string) => {
    setFormFields((prevField) => ({ ...prevField, [inputName]: val }));
  };

  const submitMessage = async () => {
    const err = await form.getFieldsError();
    if (err.length === 0) {
      return err;
    }
    console.log("working on sending email");
    sendEmail(
      formFields.name,
      formFields.email,
      formFields.subject,
      formFields.message
    );
  };

  return (
    <Form
      form={form}
      {...formItemLayout}
      className="myForm"
      onFinish={submitMessage}
    >
      <Form.Item
        labelAlign="left"
        label="Your Name"
        name="name"
        rules={[{ required: true, message: "Name is required!" }]}
      >
        <Input
          type="text"
          placeholder="Jack Reacher"
          onChange={(e) => handleInput("name", e.target.value)}
        />
      </Form.Item>
      <Form.Item
        labelAlign="left"
        label="Your Email"
        name="email"
        rules={[{ required: true, message: "Email is required!" }]}
      >
        <Input
          type="email"
          placeholder="abc@example.com"
          onChange={(e) => handleInput("email", e.target.value)}
        />
      </Form.Item>
      <Form.Item
        labelAlign="left"
        label="Subject"
        name="subject"
        rules={[{ required: true, message: "Subject is required!" }]}
      >
        <Input
          type="text"
          placeholder="Website Development"
          onChange={(e) => handleInput("subject", e.target.value)}
        />
      </Form.Item>
      <Form.Item
        labelAlign="left"
        label="Message"
        name="message"
        rules={[{ required: true, message: "Message is required!" }]}
      >
        <Input.TextArea
          placeholder="Enter your message"
          onChange={(e) => handleInput("message", e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit Message
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MyForm;
