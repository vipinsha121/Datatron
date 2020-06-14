import React, { useEffect } from "react";
import { IndustryHeader } from "../../components/reusable/Solutions";
import { CardImage } from "../../components/reusable/CardImage";
import { RequestDemo } from "../../components/reusable/RequestDemo";
import deploymentImage from "../../assets/images/wp-deployment.png";
import governanceImage from "../../assets/images/wp-governance.png";
import managementImage from "../../assets/images/wp-management.png";
import monitoringImage from "../../assets/images/wp-monitoring.png";
import "./ResourcesHome.scss";

const WHITE_PAPER_DATA = [
  {
    id: "1",
    image: monitoringImage,
    text: "Datatron's Monitoring Module for Machine Learning Models",
    url: "/resources/monitor"
  },
  {
    id: "2",
    image: deploymentImage,
    text: "Datatron's Deployment Module for Machine Learning Models",
    url: "/resources/deployment"
  },
  {
    id: "3",
    image: managementImage,
    text: "Datatron's Management Module for Machine Learning Models",
    url: "/resources/management"
  },
  {
    id: "4",
    image: governanceImage,
    text: "Model Governance and Datatron's Platform",
    url: "/resources/governance"
  }
];

const ResourcesHome = () => {
  useEffect(() => {
    // scroll.scrollToTop();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="resources-wrapper">
      <IndustryHeader
        headerName="RESOURCES"
        type="White Papers"
        description="Expand your knowledge of machine learning model governance and management white papers authored by our experts."
      />
      <div className="dt_resources-container">
        <div className="wrapper-container">
          {WHITE_PAPER_DATA.map(whitePaper => (
            <CardImage key={whitePaper.id} {...whitePaper} />
          ))}
        </div>
        <RequestDemo />
      </div>
    </div>
  );
};

export default ResourcesHome;
