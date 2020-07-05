import React, { lazy, Suspense, useState } from "react";
import { Layout, Spin, Drawer, Button } from "antd";
import { MyLayoutProps } from "./interface";
// import MyContent from "./MyContent";
import MyMenu from "./MyMenu";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const MyContent = lazy(() => import("./MyContent"));

const MyLayout = (props: MyLayoutProps) => {
  const { Sider } = Layout;
  const { children } = props;
  const [switchDrawer, setSwitchDrawer] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleBreakPoint = (b: boolean) => {
    if (b) {
      setSwitchDrawer(b);
    }
    setSwitchDrawer(b);
  };

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        onBreakpoint={(b) => handleBreakPoint(b)}
        width="280"
        collapsedWidth="0"
        trigger={null}
        // zeroWidthTriggerStyle={{
        //   position: "fixed",
        //   top: "10px",
        //   right: "10px",
        //   borderRadius: "50%",
        //   width: "50px",
        //   height: "50px",
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   zIndex: 999999,
        // }}
      >
        {switchDrawer ? (
          <Button
            onClick={() => setDrawerVisible(!drawerVisible)}
            style={{
              position: "fixed",
              left: "10px",
              top: "10px",
              zIndex: 9999,
              background: "none",
              border: "none",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              fontSize: "60px",
            }}
          >
            {drawerVisible ? <CloseOutlined /> : <MenuOutlined />}
          </Button>
        ) : (
          <MyMenu />
        )}
      </Sider>
      {switchDrawer ? (
        <>
          <Drawer
            visible={drawerVisible}
            closable={false}
            destroyOnClose={true}
          >
            <MyMenu />
          </Drawer>
        </>
      ) : (
        ""
      )}
      <Suspense fallback={<Spin />}>
        <MyContent children={children} />
      </Suspense>
    </Layout>
  );
};

export default MyLayout;
