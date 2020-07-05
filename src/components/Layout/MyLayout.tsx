import React, { lazy, Suspense } from "react";
import { Layout, Spin } from "antd";
import { MyLayoutProps } from "./interface";
import me from "assets/img/my_real_pic.jpg";
// import MyContent from "./MyContent";
import MyMenu from "./MyMenu";

const MyContent = lazy(() => import("./MyContent"));

const MyLayout = (props: MyLayoutProps) => {
  const { Sider } = Layout;
  const { children } = props;

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        width="280"
        zeroWidthTriggerStyle={{
          position: "fixed",
          top: "5px",
          right: "5px",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="myImage">
          <img src={me} alt="Rohit Man Shrestha - Front End Developer " />
        </div>
        <MyMenu />
      </Sider>
      <Suspense fallback={<Spin />}>
        <MyContent children={children} />
      </Suspense>
    </Layout>
  );
};

export default MyLayout;
