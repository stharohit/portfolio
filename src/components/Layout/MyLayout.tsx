import React, { useState } from "react";
import { Layout, Drawer } from "antd";
import { MyLayoutProps } from "./interface";
import MyContent from "./MyContent";
import MyMenu from "./MyMenu";
import { CloseOutlined } from "@ant-design/icons";

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
            destroyOnClose={true}
            closeIcon={
              <CloseOutlined
                onClick={() => setDrawerVisible(!drawerVisible)}
                style={{ fontSize: "20px" }}
              />
            }
          >
            <MyMenu />
          </Drawer>
        </>
      )}
      <MyContent
        children={children}
        switchDrawer={switchDrawer}
        drawerVisible={drawerVisible}
        setDrawerVisible={setDrawerVisible}
      />
    </Layout>
  );
};

export default MyLayout;
