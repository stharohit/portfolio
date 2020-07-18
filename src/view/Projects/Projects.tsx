import React, { lazy, Suspense } from "react";
import MyLayout from "components/Layout/MyLayout";
import Grid from "antd/lib/card/Grid";
import { Typography, Row, Col, Skeleton } from "antd";
import manakamana from "assets/img/portfolio/manakamana.jpg";
import tm from "assets/img/portfolio/trekking_mart.jpg";
const ProjectsImage = lazy(() => import("./ProjectsItem/ProjectsImage"));

const Projects = () => {
  const { Title } = Typography;
  const projects = [
    {
      img: manakamana,
      title: "Manakamana Agritech",
      link: "https://manakamanaagritech.com.np/",
    },
    {
      img: tm,
      title: "Trekking Mart",
      link: "http://tmn.easyaccesstechnology.com/",
    },
  ];
  return (
    <MyLayout>
      <Grid className="myGrid">
        <Title className="inner_page_title">
          My <span className="highlight">Projects</span>
        </Title>
        <Row className="projects" justify="space-around">
          {projects &&
            projects.map((project) => (
              <Col
                key={project.title}
                xs={24}
                sm={24}
                md={{ span: 11 }}
                lg={{ span: 7 }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Suspense fallback={<Skeleton.Image />}>
                    <ProjectsImage image={project.img} />
                  </Suspense>
                  <Title level={4}>{project.title}</Title>
                </a>
              </Col>
            ))}
        </Row>
      </Grid>
    </MyLayout>
  );
};

export default Projects;
