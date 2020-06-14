import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import { animateScroll as scroll } from "react-scroll";
import ReactGA from "react-ga";
import { Link } from "react-router-dom";
import alert from "assets/images/alert.png";
import KPI from "assets/images/KPI.png";
import monitoring from "assets/images/platform_monitoring_book.png";
import anomalies from "assets/images/anomalies.png";
import modelIcon from "assets/images/Icon/Light/Model.svg";
import revenueIcon from "assets/images/Icon/Light/Money.svg";
import monitoringIcon from "assets/images/Icon/Dark/Monitoring.svg";
import { RequestDemo } from "../../../components/reusable/RequestDemo";
import WhitePaperCard from "../../../components/reusable/WhitePaperCard";
import "./ModelMonitoring.scss";

class ModelMonitoring extends Component {
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
        <div className="model-monitoring-header-wrapper">
          <h5 className="model-platform-text">Platform</h5>
          <h3 className="model-monitoring-header">Model Monitoring</h3>
          <p className="monitoring-paragraph">
            Comprehensive model performance monitoring and alerting
          </p>
          <div className="MonitoringImg">
            <img
              src={monitoringIcon}
              alt="Monitoring"
              className="monitoring_header__logo firstImg"
            />
            <img
              src={monitoringIcon}
              alt="Monitoring"
              className="monitoring_header__logo secondtImg"
            />
            <img
              src={monitoringIcon}
              alt="Monitoring"
              className="monitoring_header__logo thirdImg"
              c
            />{" "}
          </div>
        </div>
        <div className="model_monitoring__content">
          <div className="model_monitoring__wrapper">
            <Row className="model_monitoring_row__wrapper">
              <Col md="6">
                <img src={alert} alt="Alert" className="alert-image" />
              </Col>
              <Col md="6">
                <h5
                  className="monitoring-side-header"
                  style={{ marginLeft: 50, marginTop: 100 }}
                >
                  Monitor model performance with metrics and alerts
                </h5>
                <ul className="ul-list" style={{ marginLeft: 70 }}>
                  <li>
                    Understand how your model performs with production data
                  </li>
                  <li>Compare model predictions with actual outcomes</li>
                  <li>
                    Model metrics dashboards (e.g. Accuracy, Precision, F1, and
                    more)
                  </li>
                  <li>Conditional alerts</li>
                  <li>
                    Deviation alerts between training and production datasets
                  </li>
                  <li>Drift alerts using a trusted canary model</li>
                </ul>
              </Col>
            </Row>
            <Row className="mobile-view_col-reverse">
              <Col md="6">
                <p className="monitoring-side-header">
                  Preemptive decision-making for business stakeholders
                </p>
                <ul className="ul-list" style={{ marginLeft: 20 }}>
                  <li>Connect your production models to your KPIs</li>
                  <li>Gain visibility into your ML performance</li>
                  <li>KPI-driven alerts</li>
                  <li>Understand and track production model ROI</li>
                  <li>Access pre-deployment sandbox outcomes</li>
                  <li>
                    Embed your line of business perspective into your ML
                    initiative
                  </li>
                </ul>
              </Col>
              <Col md="6">
                <img src={KPI} alt="KPI" className="alert-image" />
              </Col>
            </Row>
            <Row className="model_monitoring_row__wrapper">
              <Col md="6">
                <img src={anomalies} alt="Anomalies" className="alert-image" />
              </Col>
              <Col md="6">
                <h5
                  className="monitoring-side-header"
                  style={{ marginLeft: 50, marginTop: 100 }}
                >
                  Identify anomalies and model decay with ease
                </h5>
                <ul className="ul-list" style={{ marginLeft: 70 }}>
                  <li>Automatic alerts for model decay and anomalies</li>
                  <li>
                    Automatically detect production model traffic when it
                    diverges from expectations
                  </li>
                  <li>Identify suspicious activity on your models</li>
                </ul>
              </Col>
            </Row>
          </div>
          <div className="icons-container">
            <Row>
              <Col md="4" sm="4" className="column-style">
                <img
                  src={modelIcon}
                  alt="Model"
                  className="model-monitoring-icon"
                />
                <h5 className="icons-container-headers">
                  Deploy models faster
                </h5>
                <p className="icons-container-paragraph">
                  Replace your post-mortem approach with a preemptive solution.
                </p>
              </Col>
              <Col
                md="4"
                sm="4"
                className="column-style model-monitoring-icon__wrapper"
              >
                <img
                  src={revenueIcon}
                  alt="Revenue"
                  className="model-monitoring-icon"
                />
                <h5 className="icons-container-headers">
                  Maximize your revenue
                </h5>
                <p className="icons-container-paragraph">
                  Get key business insight that can help you make more
                  profitable decisions.
                </p>
              </Col>
              <Col
                md="4"
                className="column-style model-monitoring-icon__wrapper"
              >
                <img
                  src={revenueIcon}
                  alt="Revenue"
                  className="model-monitoring-icon"
                />
                <h5 className="icons-container-headers">
                  Minimize business losses
                </h5>
                <p className="icons-container-paragraph">
                  Avoid costly mistakes by quickly identifying model performance
                  issues.
                </p>
              </Col>
            </Row>
          </div>
          <div className="white-paper-wrapper-div">
            <WhitePaperCard
              title="Datatron’s Monitoring Module for Machine Learning Models"
              description="Read more about Datatron and Model Monitoring by checking out our white paper."
              link="/resources/monitor"
              img={monitoring}
            />
          </div>
          <RequestDemo />
        </div>
      </div>
    );
  }
}

export default ModelMonitoring;
