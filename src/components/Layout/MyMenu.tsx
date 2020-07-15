import React, { useMemo, memo, Suspense, lazy } from "react";
import { Menu, Skeleton } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  UserOutlined,
  FileDoneOutlined,
  MobileOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import ThemeSwitcher from "./ThemeSwitcher";
const MyImage = lazy(() => import("../MyImage"));

interface Props {}

const MyMenu = (props: Props) => {
  const { pathname } = useLocation();

  const navMenu = [
    {
      to: "/",
      text: "Welcome",
      icon: HomeOutlined,
    },
    {
      to: "/about",
      text: "About Me",
      icon: UserOutlined,
    },
    {
      to: "/biography",
      text: "My Biography",
      icon: BarsOutlined,
    },
    {
      to: "/my-projects",
      text: "My Projects",
      icon: FileDoneOutlined,
    },
    {
      to: "/contact-me",
      text: "Get In Touch",
      icon: MobileOutlined,
    },
  ];

  const MenuItems = useMemo(() => navMenu, [navMenu]);

  return (
    <React.Fragment>
      <Menu
        defaultSelectedKeys={["1"]}
        selectedKeys={[pathname]}
        style={{ border: "none" }}
      >
        <div className="myImage">
          <Suspense
            fallback={
              <Skeleton.Image style={{ width: "100%", height: "100%" }} />
            }
          >
            <MyImage />
          </Suspense>
        </div>

        {MenuItems.map((menuField) => (
          <Menu.Item key={menuField.to} icon={<menuField.icon />}>
            <Link to={menuField.to} />
            {menuField.text}
          </Menu.Item>
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "35px",
            fontSize: "20px",
          }}
        >
          <ThemeSwitcher key="switcher" />
        </div>
      </Menu>
    </React.Fragment>
  );
};

export default memo(MyMenu);
