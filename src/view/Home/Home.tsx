import React, { Suspense, lazy } from "react";
import MyLayout from "components/Layout/MyLayout";
import homeBg from "assets/img/home_bg.jpg";
import { Spin } from "antd";

const HomeProfile = lazy(() => import("./HomeContent/HomeProfile"));

interface Props {}

const Home = (props: Props) => {
  return (
    <MyLayout>
      <Suspense fallback={<Spin />}>
        <div style={{ backgroundImage: `url(${homeBg})` }} className="homeBG">
          <HomeProfile />
        </div>
      </Suspense>
    </MyLayout>
  );
};

export default Home;
