import React from "react";
import { Layout, Button, Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";

interface Props {
  children: JSX.Element | Element;
  setDrawerVisible: Function;
  drawerVisible: boolean;
  switchDrawer: boolean;
}

const MyContent = (props: Props) => {
  const { Content, Header } = Layout;
  const { children, drawerVisible, setDrawerVisible, switchDrawer } = props;
  const { Text } = Typography;

  return (
    <React.Fragment>
      <Content>
        {switchDrawer && (
          <Header className="custom-header">
            <Text>Rohit Man Shrestha</Text>
            <Button onClick={() => setDrawerVisible(!drawerVisible)}>
              <MenuOutlined />
            </Button>
          </Header>
        )}
        {children}
      </Content>
    </React.Fragment>
  );
};

export default MyContent;
