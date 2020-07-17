import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import connection from "utils/mailjet";

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const MyForm = () => {
  const [formField, setFormField] = useState<FormFields>({
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
    setFormField((prevField) => ({ ...prevField, [inputName]: val }));
  };

  const submitMessage = async () => {
    const err = await form.getFieldsError();
    const validation = await form.validateFields();
    if (err.length === 0) {
      console.log(err);
      console.log(formField);
      console.log(validation);

      return err;
    }
    console.log("working on sending email");

    connection
      .post("send", { version: "v3.1" })
      .request({
        Messages: [
          {
            From: {
              Email: formField.email,
              Name: formField.name,
            },
            To: [
              {
                Email: "stha.rht028@gmail.com",
                Name: "Rohit Man Shrestha",
              },
            ],
            Subject: formField.subject,
            TextPart: formField.message,
            HTMLPart: `${formField.message}`,
          },
        ],
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
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
