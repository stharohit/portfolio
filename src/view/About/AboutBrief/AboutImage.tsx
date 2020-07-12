import React from "react";
import farewell from "assets/img/farewell.png";

const AboutImage = () => {
  return <div style={{ backgroundImage: `url(${farewell})`, width: '100%', height: '100%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>;
};

export default AboutImage;
