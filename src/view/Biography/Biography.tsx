import React, { lazy, Suspense } from "react";
import MyLayout from "components/Layout/MyLayout";
import Grid from "antd/lib/card/Grid";
import { Typography, Skeleton } from "antd";
import { ReactComponent as Work } from "assets/img/work.svg";
import { ReactComponent as Education } from "assets/img/education.svg";
const BioTimeline = lazy(() => import("./BioTimeline"));

interface Props {}

const Biography = (props: Props) => {
  const { Title } = Typography;
  const work = [
    {
      time: "2019 FEB - 2020 JUN",
      from: "Full Stack Developer",
      position: "React/Wordpress developer",
      content: [
        "Build Progressive Web application that is user interactive using Reactjs, Typescript and Es6.",
        "Developed a dashboard UI for scheduling and managing cron job.",
        "Debugging wordpress website and working with wordpress theme to build a new website.",
        "React native training to build mobile app.",
      ],
    },
    {
      time: "2017 JUL – 2019 DEC",
      from: "ABGS Group",
      position: "Full Stack Developer",
      content: [
        "Designing webpage mockup using Adobe Photoshop and implementing those layouts to a webpage.",
        "Designing webpage layout using html5, css3 along with jQuery and adding dynamic functionality.",
        "Developing CMS and E-commerce website using wordpress.",
        "Design and develop dynamic and browser compatible pages to E-commerce website using jQuery and AJAX.",
        "Developing SEO friendly website.",
        "On page SEO optimization.",
      ],
    },
  ];
  const education = [
    {
      time: "July 2017 - VTU",
      from: "Rajiv Gandhi Institute of Technology, Bangalore, India",
      position: "Bachelor of Engineering",
      content: [
        "Course : B.E. in Information Science and Engineering",
        "Percentage : 51%",
      ],
    },
    {
      time: "April 2010",
      from: "Caribbean Higher Secondary School, Kathmandu, Nepal",
      position: "Intermediate Education",
      content: ["Board: HSEB ", "Percentage: 56.4%"],
    },
    {
      time: "June 2012 - HSEB",
      from: "Caribbean Higher Secondary School, Kathmandu, Nepal",
      position: "Secondary Education",
      content: ["Board: SLC ", "Percentage: 77%"],
    },
  ];
  return (
    <MyLayout>
      <Grid className="myGrid">
        <Title className="inner_page_title">
          My <span className="highlight">Biography</span>
        </Title>
        <div className="biography-timeline">
          <Suspense fallback={<Skeleton />}>
            <BioTimeline
              mainTitle="Work Experience"
              Work={Work}
              arryWork={work}
            />
          </Suspense>
          <Suspense fallback={<Skeleton />}>
            <BioTimeline
              mainTitle="Educational Qualifications"
              Work={Education}
              arryWork={education}
            />
          </Suspense>
        </div>
      </Grid>
    </MyLayout>
  );
};

export default Biography;
