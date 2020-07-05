import React from "react";
import me from "assets/img/me.png";
import { Typography } from "antd";

interface Props {}

const HomeProfile = (props: Props) => {
  const { Title, Text } = Typography;
  return (
    <div className="content-wrapper">
      <div className="myImage ill">
        <img src={me} alt="created using adobe illustrator" />
      </div>
      <Title className="home-text title">Hi, I'm Rohit Man Shrestha</Title>
      <Text className="home-text content">
        I am a Front End Web Developer and Designer.
      </Text>
    </div>
  );
};

export default HomeProfile;
