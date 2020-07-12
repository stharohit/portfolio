import React, { useState } from "react";
import { Layout, Drawer } from "antd";
import { MyLayoutProps } from "./interface";
import MyContent from "./MyContent";
import MyMenu from "./MyMenu";

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
      >
        {!switchDrawer && <MyMenu />}
      </Sider>
      {switchDrawer && (
        <>
          <Drawer
            visible={drawerVisible}
            closable={false}
            destroyOnClose={true}
          >
            <MyMenu />
          </Drawer>
        </>
      )}
      <MyContent
        children={children}
        drawerVisible={drawerVisible}
        setDrawerVisible={setDrawerVisible}
      />
    </Layout>
  );
};

export default MyLayout;
