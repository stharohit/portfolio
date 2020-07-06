import React from "react";
import { Typography } from "antd";
interface Props {}

const HomeProfileTexts = (props: Props) => {
  const { Title, Text } = Typography;

  return (
    <React.Fragment>
      <Title className="home-text title">Hi, I'm Rohit Man Shrestha</Title>
      <Text className="home-text content">
        I am a Front End Web Developer and Designer.
      </Text>
    </React.Fragment>
  );
};

export default HomeProfileTexts;
