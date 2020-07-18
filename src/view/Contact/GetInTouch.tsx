import React, { lazy, Suspense } from "react";
import Grid from "antd/lib/card/Grid";
import MyLayout from "components/Layout/MyLayout";
import { Typography, Row, Col, Skeleton } from "antd";
const MyForm = lazy(() => import("./MyForm"));
const ContactImage = lazy(() => import("./ContactImage"));

interface Props {}

const GetInTouch = (props: Props) => {
  const { Title } = Typography;
  return (
    <MyLayout>
      <Grid className="myGrid">
        <Title className="inner_page_title">
          Contact <span className="highlight">me</span>
        </Title>
        <Row>
          <Col
            xs={24}
            sm={24}
            md={{ span: 11, offset: 1 }}
            lg={{ span: 11, offset: 1 }}
            xl={{ span: 11, offset: 1 }}
          >
            <Suspense fallback={<Skeleton.Image />}>
              <ContactImage />
            </Suspense>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={{ span: 10, offset: 1 }}
            lg={{ span: 10, offset: 1 }}
            xl={{ span: 10, offset: 1 }}
          >
            <Suspense fallback={<Skeleton />}>
              <MyForm />
            </Suspense>
          </Col>
        </Row>
      </Grid>
    </MyLayout>
  );
};

export default GetInTouch;
