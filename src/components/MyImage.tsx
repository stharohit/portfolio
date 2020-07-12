import React from "react";
import my from "assets/img/my_real_pic.jpg";

interface Props {}

const MyImage = (props: Props) => {
  return <img src={my} alt="Rohit Man Shrestha - Front End Developer " />;
};

export default MyImage;
