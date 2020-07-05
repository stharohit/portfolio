import React, { Suspense, lazy } from "react";
import MyLayout from "components/Layout/MyLayout";
import homeBg from "assets/img/home_bg.jpg";
import { Spin } from "antd";

const HomeProfile = lazy(() => import("./HomeProfile"));

interface Props {}

const Home = (props: Props) => {
  return (
    <MyLayout>
      <div style={{ backgroundImage: `url(${homeBg})` }} className="homeBG">
        <Suspense fallback={<Spin />}>
          <HomeProfile />
        </Suspense>
      </div>
    </MyLayout>
  );
};

export default Home;
