import React from "react";
import Grid from "antd/lib/card/Grid";
import MyLayout from "components/Layout/MyLayout";
import { Typography, Row, Col } from "antd";
import MyForm from "./MyForm";
import ContactImage from "./ContactImage";

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
            <ContactImage />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={{ span: 10, offset: 1 }}
            lg={{ span: 10, offset: 1 }}
            xl={{ span: 10, offset: 1 }}
          >
            <MyForm />
          </Col>
        </Row>
      </Grid>
    </MyLayout>
  );
};

export default GetInTouch;
