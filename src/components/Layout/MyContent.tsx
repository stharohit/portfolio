import React from "react";
import { Layout, Button } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

interface Props {
  children: JSX.Element | Element;
  setDrawerVisible: Function;
  drawerVisible: boolean;
}

const MyContent = (props: Props) => {
  const { Content } = Layout;
  const { children, drawerVisible, setDrawerVisible } = props;

  return (
    <React.Fragment>
      <Content>
        {drawerVisible && (
          <Button
            onClick={() => setDrawerVisible(!drawerVisible)}
            style={{
              position: "relative",
              left: "10px",
              top: "10px",
              zIndex: 9999,
              background: "none",
              border: "none",
              fontSize: "40px",
            }}
          >
            {drawerVisible ? <CloseOutlined /> : <MenuOutlined />}
          </Button>
        )}
        {children}
      </Content>
    </React.Fragment>
  );
};

export default MyContent;
