import React from "react";
import { Typography, Timeline, Col, Row } from "antd";
import Icon, { CaretRightOutlined } from "@ant-design/icons";

interface WorkExp {
  time: string;
  content: Array<string>;
  position: string;
  from: string;
}

interface Props {
  mainTitle: string;
  Work: React.FunctionComponent;
  arryWork: Array<WorkExp>;
}

const BioTimeline = (props: Props) => {
  const { Title, Text } = Typography;
  const { Work, mainTitle, arryWork } = props;
  return (
    <React.Fragment>
      <Title level={3}>
        <Icon component={Work} /> {mainTitle}
      </Title>
      <Row>
        <Col
          sm={{ span: 24 }}
          md={{ span: 23, offset: 1 }}
          lg={{ span: 23, offset: 1 }}
          xl={{ span: 23, offset: 1 }}
        >
          <Timeline>
            {arryWork &&
              arryWork.map((work) => (
                <Timeline.Item color="red" key={work.time}>
                  <Row>
                    <Col
                      sm={{ span: 24 }}
                      md={{ span: 5 }}
                      lg={{ span: 5 }}
                      xl={{ span: 5 }}
                      className="timeline-time"
                    >
                      {work.time}
                    </Col>
                    <Col
                      sm={{ span: 24 }}
                      md={{ span: 17, offset: 1 }}
                      lg={{ span: 17, offset: 1 }}
                      xl={{ span: 17, offset: 1 }}
                      className="timeline-content"
                    >
                      <Text className="job">{work.position}</Text>
                      <Title level={2} className="company">
                        {work.from}
                      </Title>
                      {work.content.map((con) => (
                        <Text key={con} className="content">
                          <CaretRightOutlined /> {con}
                        </Text>
                      ))}
                    </Col>
                  </Row>
                </Timeline.Item>
              ))}
          </Timeline>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BioTimeline;
