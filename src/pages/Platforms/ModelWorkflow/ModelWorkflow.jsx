import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import { animateScroll as scroll } from "react-scroll";
import ReactGA from "react-ga";
import preProcessing from "assets/images/pre-processing.png";
import postProcessing from "assets/images/post-processing.png";
import modelConsumption from "assets/images/model-consumption.png";
import path from "assets/images/path.png";
import codeIcon from "assets/images/Icon/Light/Code.svg";
import userFeedBackIcon from "assets/images/Icon/Light/User-Feedback.svg";
import workFlowIcon from "assets/images/Icon/Dark/Workflow.svg";
import { RequestDemo } from "../../../components/reusable/RequestDemo";
import "./ModelWorkflow.scss";

class ModelWorkflow extends Component {
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
        <div className="model-workflow-header-container">
          <h6 className="model-workflow-text">Platform</h6>
          <h3 className="model-workflow-header">Model Workflow</h3>
          <p className="model-workflow-paragraph">
            Replicate your internal business processes for model consumption
          </p>
          <div className="header-container__logo">
            <img
              src={workFlowIcon}
              alt="Work Flow"
              className="header-container__logo_1"
            />
            <img
              src={workFlowIcon}
              alt="Work Flow"
              className="header-container__logo_2"
            />
            <img
              src={workFlowIcon}
              alt="Work Flow"
              className="header-container__logo_3"
            />
          </div>
        </div>
        <div style={{ backgroundColor: "#FFF" }}>
          <Container>
            <Row className="mobile-column-reverse-row">
              <Col md="6">
                <h4
                  className="pre-processing"
                  style={{ marginTop: 100, marginBottom: 20 }}
                >
                  Pre-Processing
                </h4>
                <ul className="ul-style" style={{ marginLeft: 20 }}>
                  <li>
                    Get data from multiple, diverse data sources such as
                    Teradata, HIVE, Hadoop, and more
                  </li>
                  <li>
                    Bring your gathered data into the feature engineering
                    process and input them into your models
                  </li>
                </ul>
              </Col>
              <Col md="6" className="workflow__img-wrapper">
                <img
                  src={preProcessing}
                  alt="Pre Processing"
                  className="model_workflow-preprocessing__img"
                />
              </Col>
            </Row>
            <Row style={{ marginTop: 95 }}>
              <Col
                md="6"
                style={{ zIndex: 10 }}
                className="workflow__img-wrapper"
              >
                <img
                  src={postProcessing}
                  alt="Post Processing"
                  className="model_workflow-postprocessing__img"
                />
              </Col>
              <Col md="6">
                <h4
                  className="pre-processing"
                  style={{ marginTop: 50, marginLeft: 30 }}
                >
                  Post-Processing
                </h4>
                <ul
                  className="ul-style"
                  style={{ marginLeft: 52, marginTop: 15 }}
                >
                  <li>Apply business logic in your model results</li>
                  <li>
                    Support for language operators such as Scala, Python, Java
                    and PySpark
                  </li>
                </ul>
              </Col>
            </Row>
            <Row
              style={{ marginTop: 210 }}
              className="mobile-column-reverse-row"
            >
              <Col md="6">
                <h4 className="pre-processing" style={{ marginBottom: 20 }}>
                  Model Consumption
                </h4>
                <ul className="ul-style" style={{ marginLeft: 20 }}>
                  <li>
                    Store model results to be consumed directly to your business
                    applications
                  </li>
                  <li>
                    Support for Teradata, Salesforce, Postgres, MySQL, Hadoop,
                    and more
                  </li>
                </ul>
              </Col>
              <Col md="6" className="workflow__img-wrapper">
                <img
                  src={modelConsumption}
                  alt="Model Consumption"
                  className="workflow-modelconsumption__img"
                />
              </Col>
            </Row>
            <img src={path} alt="Path" className="path-image" />
          </Container>
          <div className="develop-models-container">
            <Row>
              <Col
                md={{ size: 4, offset: 1 }}
                className="develop-models-icon_wrapper"
              >
                <img
                  src={codeIcon}
                  alt="Code Icon"
                  className="develop-models-icon"
                />
                <h5 className="develop-models-headers">
                  Develop models faster
                </h5>
                <p className="develop-models-paragraph">
                  Cut the time it takes to bring a model from development to
                  production.
                </p>
              </Col>
              <Col
                md={{ size: 4, offset: 2 }}
                className="feedback-models-icon_wrapper"
              >
                <img
                  src={userFeedBackIcon}
                  alt="Code Icon"
                  className="develop-models-icon"
                />
                <h5 className="develop-models-headers">Faster feedback</h5>
                <p className="develop-models-paragraph">
                  Get quick feedback by easily testing your models in
                  production.
                </p>
              </Col>
            </Row>
          </div>
          <RequestDemo />
        </div>
      </div>
    );
  }
}

export default ModelWorkflow;
