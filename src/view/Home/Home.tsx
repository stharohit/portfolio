import React, { useEffect, useState } from "react";
import MyLayout from "components/Layout/MyLayout";
import homeBg from "assets/img/home_bg.jpg";
import me from "assets/img/me.png";
import { Typography, Spin, Skeleton } from "antd";

interface Props {}

interface imageProps {
  imageBG: string;
  myPic: string;
  loading: boolean;
}

const Home = (props: Props) => {
  const { Title, Text } = Typography;
  const [image, setImage] = useState<imageProps | null>({
    imageBG: "",
    myPic: "",
    loading: true,
  });

  useEffect(() => {
    const lazyLoadImage = async () => {
      const imageLoader = new Image();
      imageLoader.src = await me;
      imageLoader.src = await homeBg;

      imageLoader.onload = () => {
        setImage({ imageBG: homeBg, myPic: me, loading: false });
      };
    };
    lazyLoadImage();
  }, []);

  if (image?.loading) return <Spin />;
  return (
    <MyLayout>
      <div style={{ background: `url(${image?.imageBG})` }} className="homeBG"> 
        <div className="content-wrapper">
          <div className="myImage ill">
            {image?.myPic ? (
              <img src={image?.myPic} alt="created using adobe illustrator" />
            ) : (
              <Skeleton.Image />
            )}
          </div>
          <Title className="home-text">Hi, I'm Rohit Man Shrestha</Title>
          <Text className="home-text">
            I am a Front End Web Developer and Designer.
          </Text>
        </div>
      </div>
    </MyLayout>
  );
};

export default Home;
