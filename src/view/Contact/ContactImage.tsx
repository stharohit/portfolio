import React from "react";
import contact from "assets/img/contact.png";

const ContactImage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${contact})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        width: "100%",
        minHeight: "450px",
      }}
    ></div>
  );
};

export default ContactImage;
