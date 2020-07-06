import React from "react";
import my from "assets/img/my_real_pic.jpg";

interface Props {}

const MenuImage = (props: Props) => {
  return (
    <div className="myImage">
      <img src={my} alt="Rohit Man Shrestha - Front End Developer " />
    </div>
  );
};

export default MenuImage;
