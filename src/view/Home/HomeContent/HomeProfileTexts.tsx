import React from "react";
import { Typography } from "antd";
interface Props {}

const HomeProfileTexts = (props: Props) => {
  const { Title, Text } = Typography;

  return (
    <React.Fragment>
      <Title className="home-text title">
        Hi, I'm <span className="highlight-light">Rohit Man Shrestha</span>
      </Title>
      <Text className="home-text content">
        I am a Full Stack Web Developer.
      </Text>
    </React.Fragment>
  );
};

export default HomeProfileTexts;
