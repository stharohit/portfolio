import React from "react";
import MyLayout from "components/Layout/MyLayout";
import homeBg from "assets/img/home_bg.jpg";
import me from "assets/img/me.png";
import { Typography } from "antd";

interface Props {}

const Home = (props: Props) => {
  const { Title, Text } = Typography;

  return (
    <MyLayout>
      <div style={{ backgroundImage: `url(${homeBg})` }} className="homeBG">
        <div className="content-wrapper">
          <div className="myImage ill">
            <img src={me} alt="created using adobe illustrator" />
          </div>
          <Title className="home-text title">Hi, I'm Rohit Man Shrestha</Title>
          <Text className="home-text content">
            I am a Front End Web Developer and Designer.
          </Text>
        </div>
      </div>
    </MyLayout>
  );
};

export default Home;
