import React, { useMemo, memo } from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  UserOutlined,
  FileDoneOutlined,
  MobileOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import ThemeSwitcher from "./ThemeSwitcher";
import my from "assets/img/my_real_pic.jpg";

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
          <img src={my} alt="Rohit Man Shrestha - Front End Developer " />
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
