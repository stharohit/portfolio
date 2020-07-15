import React from "react";
import { Row, Col, Typography } from "antd";
import {ReactComponent as ResponsiveIcon} from "assets/img/responsive.svg";
import {ReactComponent as WebsiteIcon} from "assets/img/website.svg";
import {ReactComponent as WordpressIcon} from "assets/img/wordpress.svg";
import {ReactComponent as SeoIcon} from "assets/img/seo.svg";
import {ReactComponent as WebappIcon} from "assets/img/webapp.svg";
import Icon from "@ant-design/icons";


const MyServices = () => {
  const { Title, Text } = Typography;
  const services = [
    {
      key: "1",
      img: WebsiteIcon,
      title: "Website Development",
      text: () => (
        <Text>
          I can build a website using{" "}
          <Text strong>HTML, CSS &amp; JAVASCRIPT</Text>. I use{" "}
          <Text strong>Bootstrap &amp; Jquery</Text> for complete the design
          faster.
        </Text>
      ),
    },
    {
      key: "2",
      img: ResponsiveIcon,
      title: "Responsive UI",
      text: () => (
        <Text>
          I can build a responsive layout that can adjust the content smoothly
          to various screen sizes like mobile devices.
        </Text>
      ),
    },
    {
      key: "3",
      img: WordpressIcon,
      title: "Wordpress Website",
      text: () => (
        <Text>
          For cms website, I prefer <Text strong>Wordpress</Text>. Zero coding
          knowledge is required and easily managable content.
        </Text>
      ),
    },
    {
      key: "4",
      img: WebappIcon,
      title: "React Front End",
      text: () => (
        <Text>
          I can build a front end web application using{" "}
          <Text strong>React</Text>.
        </Text>
      ),
    },
    {
      key: "5",
      img: SeoIcon,
      title: "Seo Optimized",
      text: () => (
        <Text>
          On page seo optimization for better user experience and faster speed.
        </Text>
      ),
    },
  ];
  return (
    <React.Fragment>
      <Title className="inner_page_title">
        My <span className="highlight">Services</span>
      </Title>
      <Row className="myServices" justify="space-around">
        {services &&
          services.map((service) => (
            <Col
              key={service.key}
              xl={{ span: 6, offset: 1 }}
              lg={{ span: 11, offset: 1 }}
              md={{ span: 11, offset: 1 }}
            >
              {<Icon component={service.img} />}
              <Title level={4}>{service.title}</Title>
              {service.text()}
            </Col>
          ))}
      </Row>
    </React.Fragment>
  );
};

export default MyServices;
