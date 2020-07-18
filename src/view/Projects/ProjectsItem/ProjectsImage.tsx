import React from "react";

interface Props {
  image: string;
}

const ProjectsImage = (props: Props) => {
  const { image } = props;
  return <img src={image} alt="Manakamana Agritech" />;
};

export default ProjectsImage;
