import React from "react";
import { Row, Col, Typography, List } from "antd";

interface Props {}

const AboutMe = (props: Props) => {
  const { Title, Text, Paragraph } = Typography;
  const lists = [
    {
      title: "Name",
      description: "Rohit Man Shrestha",
    },
    {
      title: "Age",
      description: "25 years",
    },
    {
      title: "Nationality",
      description: "Nepalese",
    },
    {
      title: "Email",
      description: "stha.rht028@gmail.com",
    },
    {
      title: "Address",
      description: "Siddharthanagar-09, Bhairahawa, Nepal",
    },
    {
      title: "Freelance",
      description: "Available",
    },
  ];

  return (
    <React.Fragment>
      <Title className="inner_page_title">
        About <span className="highlight">Me</span>
      </Title>
      <Row>
        <Col span={24} xl={11} offset={1}>
          <Title level={3}>Personal Information</Title>
          <List
            bordered={false}
            dataSource={lists}
            renderItem={(item) => (
              <List.Item style={{ border: "none" }}>
                <Text>{item.title} : </Text>{" "}
                <Text strong>{item.description}</Text>
              </List.Item>
            )}
          />
        </Col>
        <Col span={24} xl={11} offset={1}>
          <Title level={3}>UI/UX Designer &amp; Developer</Title>
          <Paragraph>
            I am a <Text strong>Full Stack Web developer</Text> with 2 years of
            experience in designing and developing clean front end code using
            html, css, javascript and react. I also have experience in
            developing back end programming using database like{" "}
            <Text strong>Mongodb</Text>, <Text strong>GraphQl</Text> and orm
            like <Text strong>Sequelize</Text>. I am also a wordpress developer.
            I can build a highly specialized CMS Website where clients do not
            have to touch a single code or understand it.
          </Paragraph>
          <Paragraph>I even do freelancing projects.</Paragraph>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AboutMe;
