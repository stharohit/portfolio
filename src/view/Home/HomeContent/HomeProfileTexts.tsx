import React from "react";
import { Typography } from "antd";
interface Props {}

const HomeProfileTexts = (props: Props) => {
  const { Title } = Typography;

  return (
    <React.Fragment>
      <Title className="home-text title">
        Hi, I am a <span className="highlight-light">Full Stack Web Developer.</span>
      </Title>
    </React.Fragment>
  );
};

export default HomeProfileTexts;
