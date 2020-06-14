import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";
import { animateScroll as scroll } from "react-scroll";
import ReactGA from "react-ga";
import { RequestDemo } from "../../../components/reusable/RequestDemo";
import dataFlow from "assets/images/flow.png";
import modelCatalog from "assets/images/Icon/Light/Model Catalog.svg";
import modelIcon from "assets/images/Icon/Light/Model.svg";
import modelDeployment from "assets/images/Icon/Light/Deployment.svg";
import modelMonitoring from "assets/images/Icon/Light/Monitoring.svg";
import modelGovernanceIcon from "assets/images/Icon/Light/OverviewGovern.svg";
import manageIcon from "assets/images/Icon/Light/OverviewManage.svg";
import workFlowIcon from "assets/images/Icon/Light/OverviewWorkflow.svg";
import codeIcon from "assets/images/Icon/Light/Code.svg";
import infrastructureHybrid from "assets/images/Icon/Light/Infrastructure-Hybrid.svg";
import "./ModelOverView.scss";

class ModelOverview extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      ReactGA.set({ page: this.props.location.pathname });
      ReactGA.pageview(this.props.location.pathname);
    }
  }

  render() {
    return (
      <div>
        <div className="model-platform-header-wrapper">
          <h5 className="platform-overview-text">Platform</h5>
          <h3 className="platform-overview-header">{"Datatron’s Platform"}</h3>
          <p className="platform-overview-paragraph">
            Datatron offers tools and features built from scratch, specifically
            to make machine learning in production work for you.
          </p>
        </div>
        <div className="db_overview-content_wrapper">
          <div className="db_overview-content">
            <Row>
              <Col md="12">
                <h3 className="automating-h3">
                  Automating and accelerating the management of your ML
                  processes
                </h3>
                <p className="most-teams-paragraph">
                  Most teams discover that there’s more to just deploying
                  models, which is already a very manual and time-consuming
                  task. Datatron offers single model governance and management
                  platform for all of your ML, AI, and Data Science models in
                  production. We help you automate, optimize, and accelerate
                  your ML models to ensure they are running smoothly and
                  efficiently in production.
                </p>
              </Col>
            </Row>
            <Row className="dataflow_img-wrapper">
              <Col md="12">
                <img src={dataFlow} alt="Data Flow" className="dataflow_img" />
              </Col>
            </Row>
          </div>
          <div className="platform-overview-icons-container">
            <Row>
              <Col md="4" sm="4">
                <img
                  src={modelIcon}
                  alt="Model Icon"
                  className="platform-overview-icons"
                />
                <h4 className="platform-description">Use Any Framework</h4>
                <p className="platform-paragraph">
                  Data Scientists use a variety of frameworks to build the best
                  models. We support anything you’d build a model with ( e.g.
                  TensorFlow, H2O, Scikit-Learn, and SAS ) .
                </p>
              </Col>
              <Col md="4" sm="4">
                <img
                  src={codeIcon}
                  alt="Code Icon"
                  className="platform-overview-icons"
                />
                <h4 className="platform-description">
                  Write in Multiple Languages
                </h4>
                <p className="platform-paragraph">
                  Different teams use different languages. No worries. Datatron
                  supports models built using the languages you already use (
                  E.g. SAS, Python, R, Scala, etc. ).
                </p>
              </Col>
              <Col md="4">
                <img
                  src={infrastructureHybrid}
                  alt="Infrastructure Hybrid Icon"
                  className="platform-overview-icons"
                />
                <h4 className="platform-description">
                  On-Prem, In the Cloud, Hybrid, or Airgap
                </h4>
                <p className="platform-paragraph">
                  Whether your infrastructure is designed for on-prem,
                  multi-cloud, or both, Datatron works across AWS, Azure, Google
                  Cloud, as well as on-premises options.
                </p>
              </Col>
            </Row>
          </div>
          <Container>
            <Row className="row-container-class">
              <Col md="6" style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={modelCatalog}
                  alt="Model Catalog"
                  className="row-container-icon"
                />
              </Col>
              <Col md="6">
                <h4 className="platform-catalog-section-h4">Model Catalog</h4>
                <p className="platform-catalog-paragraph">
                  Explore models built and uploaded by your Data Science team,
                  all from one centralized repository.
                </p>
                <Link to="/platform/catalog">
                  <p className="learn-more-link">{"Learn More >"}</p>
                </Link>
              </Col>
            </Row>
            <Row className="row-container-class">
              <Col md="6" style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={modelDeployment}
                  alt="Model Deployment"
                  className="row-container-icon"
                />
              </Col>
              <Col md="6">
                <h4 className="platform-catalog-section-h4">
                  Model Deployment
                </h4>
                <p className="platform-catalog-paragraph">
                  Create a scalable model deployment in just a few clicks.
                  Deploy models built using any language or framework.
                </p>
                <Link to="/platform/deployment">
                  <p className="learn-more-link">{"Learn More >"}</p>
                </Link>
              </Col>
            </Row>
            <Row className="row-container-class">
              <Col md="6" style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={modelMonitoring}
                  alt="Model Monitoring"
                  className="row-container-icon"
                />
              </Col>
              <Col md="6">
                <h4 className="platform-catalog-section-h4">
                  Model Monitoring
                </h4>
                <p className="platform-catalog-paragraph">
                  Make better decisions based on your model performance. Monitor
                  models and get alerted for model decay and anomalies.
                </p>
                <Link to="/platform/monitoring">
                  <p className="learn-more-link">{"Learn More >"}</p>
                </Link>
              </Col>
            </Row>
            <Row className="row-container-class">
              <Col md="6" style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={modelGovernanceIcon}
                  alt="Model Governance"
                  className="row-container-icon"
                />
              </Col>
              <Col md="6">
                <h4 className="platform-catalog-section-h4">
                  Model Governance
                </h4>
                <p className="platform-catalog-paragraph">
                  Spend less time on model validation, bias detection, and
                  internal audit processes. Go from model development to
                  internal auditing to production faster than ever.
                </p>
                <Link to="/platform/model-governance">
                  <p className="learn-more-link">{"Learn More >"}</p>
                </Link>
              </Col>
            </Row>
            <Row className="row-container-class">
              <Col md="6" style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={manageIcon}
                  alt="Model Management"
                  className="row-container-icon"
                />
              </Col>
              <Col md="6">
                <h4 className="platform-catalog-section-h4">
                  Model Management
                </h4>
                <p className="platform-catalog-paragraph">
                  Manage multiple models running in production easily.
                  Dynamically select the best model at runtime based on your
                  configuration.
                </p>
                <Link to="/platform/model-management">
                  <p className="learn-more-link">{"Learn More >"}</p>
                </Link>
              </Col>
            </Row>
            <Row className="row-container-class">
              <Col md="6" style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={workFlowIcon}
                  alt="Model Workflow"
                  className="row-container-icon"
                />
              </Col>
              <Col md="6">
                <h4 className="platform-catalog-section-h4">Model Workflow</h4>
                <p className="platform-catalog-paragraph">
                  Apply business logic to your model prediction results. Create
                  unique workflows using multiple sources and languages.
                </p>
                <Link to="/platform/workflow">
                  <p className="learn-more-link">{"Learn More >"}</p>
                </Link>
              </Col>
            </Row>
          </Container>
          <RequestDemo />
        </div>
      </div>
    );
  }
}

export default ModelOverview;
