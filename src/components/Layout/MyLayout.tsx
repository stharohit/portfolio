import React, { lazy, Suspense, useState } from "react";
import { Layout, Spin, Drawer, Button } from "antd";
import { MyLayoutProps } from "./interface";
// import MyContent from "./MyContent";
import MyMenu from "./MyMenu";
import { MobileView, BrowserView } from "react-device-detect";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const MyContent = lazy(() => import("./MyContent"));

const MyLayout = (props: MyLayoutProps) => {
  const { Sider } = Layout;
  const { children } = props;
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <Layout>
      <MobileView>
        <Button
          style={{
            position: "fixed",
            top: "10px",
            left: "10px",
            zIndex: 9999,
            width: "40px",
            height: "40px",
            borderRadius: '50%',
          }}
          color='primary'
          icon={drawerVisible ? <CloseOutlined /> : <MenuOutlined />}
          onClick={() => setDrawerVisible(!drawerVisible)}
        ></Button>
        <Drawer visible={drawerVisible} closable={false}>
          <MyMenu />
        </Drawer>
      </MobileView>
      <BrowserView>
        <Sider
          width="280"
          breakpoint="lg"
          trigger="null"
          // zeroWidthTriggerStyle={{
          //   position: "fixed",
          //   top: "5px",
          //   right: "5px",
          //   borderRadius: "50%",
          //   width: "50px",
          //   height: "50px",
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   zIndex: 999999,
          // }}
        >
          <MyMenu />
        </Sider>
      </BrowserView>
      <Suspense fallback={<Spin />}>
        <MyContent children={children} />
      </Suspense>
    </Layout>
  );
};

export default MyLayout;
