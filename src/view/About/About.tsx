import React, { lazy, Suspense } from "react";
import MyLayout from "components/Layout/MyLayout";
import { Skeleton } from "antd";
import Grid from "antd/lib/card/Grid";
const AboutMe = lazy(() => import("./AboutBrief/AboutMe"));
const MyServices = lazy(() => import("./AboutBrief/MyServices"));

interface Props {}

const About = (props: Props) => {
  return (
    <MyLayout>
      <React.Fragment>
        <Grid className="myGrid">
          <Suspense fallback={<Skeleton />}>
            <AboutMe />
          </Suspense>
          <Suspense fallback={<Skeleton />}>
            <MyServices />
          </Suspense>
        </Grid>
      </React.Fragment>
    </MyLayout>
  );
};

export default About;
