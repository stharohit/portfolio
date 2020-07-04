import React from "react";
import { Layout } from "antd";

interface Props {
  children: JSX.Element | Element;
}

const MyContent = (props: Props) => {
  const { Content } = Layout;
  const { children } = props;
  return (
    <React.Fragment>
      <Content>{children}</Content>
    </React.Fragment>
  );
};

export default MyContent;
