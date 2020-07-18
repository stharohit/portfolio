import React from "react";
import MyLayout from "components/Layout/MyLayout";
import homeBg from "assets/img/home_bg.jpg";
import HomeProfile from "./HomeContent/HomeProfile";

interface Props {}

const Home = (props: Props) => {
  return (
    <MyLayout>
      <div style={{ backgroundImage: `url(${homeBg})` }} className="homeBG">
        <HomeProfile />
      </div>
    </MyLayout>
  );
};

export default Home;
