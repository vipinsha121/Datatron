import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";
import ReactGA from "react-ga";
import { Row, Col, Container } from "reactstrap";
import tensorFlowImage from "assets/images/tensorflow.svg";
import dockerImage from "assets/images/docker_icon.svg";
import h2OImage from "assets/images/h2o.svg";
import modelUpload from "assets/images/model upload.png";
import SAS from "assets/images/sas.svg";
import sciKitLearn from "assets/images/scikit-learn.svg";
import RImage from "assets/images/r.svg";
import pythonIcon from "assets/images/python_icon.svg";
import { RequestDemo } from "components/reusable/RequestDemo";
import modelVersion from "assets/images/model versions.png";
import modelCatalogIcon from "assets/images/Icon/Dark/Model Catalog.svg";
import "./ModelCatalog.scss";

class ModelCatalog extends Component {
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
        <div className="header-container">
          <h6 className="platform-text">Platform</h6>
          <h3 className="model-catalog-header">Model Catalog</h3>
          <p className="centralize-paragraph">
            A centralized repository for all your models.
          </p>
          <img
            src={modelCatalogIcon}
            alt="Model Catalog"
            className="header-container__logo_1"
          />
          <img
            src={modelCatalogIcon}
            alt="Model Catalog"
            className="header-container__logo_2"
          />
          <img
            src={modelCatalogIcon}
            alt="Model Catalog"
            className="header-container__logo_3"
          />
        </div>
        <div className="content-wrapper">
          <div className="content-wrapper__body">
            <Row>
              <Col lg="6" md="12" className="content-wrapper__body__image">
                <Row className="image-container__row-wrapper">
                  <div className="model-image-container">
                    <Col className="model-image-wrapper">
                      <img
                        src={tensorFlowImage}
                        className="model-image"
                        alt="tensor flow"
                      />
                    </Col>
                    <p className="model-text">Tensor Flow</p>
                  </div>
                  <div className="model-image-container">
                    <Col className="model-image-wrapper">
                      <img
                        src={sciKitLearn}
                        className="model-image"
                        alt="tensor flow"
                      />
                    </Col>
                    <p className="model-text">Scikit Learn</p>
                  </div>
                  <div className="model-image-container">
                    <Col className="model-image-wrapper">
                      <img
                        src={SAS}
                        className="model-image"
                        alt="tensor flow"
                      />
                    </Col>
                    <p className="model-text">SAS</p>
                  </div>
                  <div className="model-image-container">
                    <Col className="model-image-wrapper">
                      <img
                        src={pythonIcon}
                        className="model-image"
                        alt="tensor flow"
                      />
                    </Col>
                    <p className="model-text">Python</p>
                  </div>
                </Row>
                <Row className="image-container__row-wrapper">
                  <div className="model-image-container">
                    <Col className="model-image-wrapper">
                      <img
                        src={RImage}
                        className="model-image"
                        alt="tensor flow"
                      />
                    </Col>
                    <p className="model-text">R</p>
                  </div>
                  <div className="model-image-container">
                    <Col className="model-image-wrapper">
                      <img
                        src={h2OImage}
                        className="model-image"
                        alt="tensor flow"
                      />
                    </Col>
                    <p className="model-text">H2O</p>
                  </div>
                  <div className="model-image-container">
                    <Col className="model-image-wrapper">
                      <img
                        src={dockerImage}
                        className="model-image"
                        alt="tensor flow"
                      />
                    </Col>
                    <p className="model-text">Docker</p>
                  </div>
                  <div className="model-image-container">
                    <Col className="model-image-wrapper">
                      <p className="model-and-more">AND MORE</p>
                    </Col>
                  </div>
                </Row>
              </Col>
              <Col lg="6" md="12">
                <div className="uploadNew">
                  <p className="upload-models-text">Upload your models</p>
                  <ul className="bullet-point-ul">
                    <li>
                      Support for model upload in both Binary and Docker formats
                    </li>
                    <li>Standardized templates provided for Docker models</li>
                    <li>Standardized support for any framework</li>
                    <li>Upload SAS code directly</li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row className="mobile-column-reverse-row">
              <Col md="6">
                <h4 className="model-transparency">Model Transparency</h4>
                <ul
                  className="bullet-point-ul"
                  style={{ marginLeft: 20, marginTop: 10 }}
                >
                  <li>
                    Provide transparency on your models for your business teams
                  </li>
                  <li>
                    Include model documentation and assumptions for each version
                    of your models
                  </li>
                  <li>Track changes made on each model version</li>
                </ul>
              </Col>
              <Col md="6">
                <img
                  src={modelUpload}
                  alt="Model Upload"
                  className="model-upload-image"
                />
              </Col>
            </Row>
            <Row className="content-wrapper__row">
              <Col md="6">
                <img
                  src={modelVersion}
                  alt="Model Version"
                  className="model-upload-image"
                />
              </Col>
              <Col md="6">
                <h5 className="stay-header">Stay on top of your models</h5>
                <ul className="bullet-point-ul__last">
                  <li>Model versioning</li>
                  <li>Feature vector versioning</li>
                  <li>Dataset locations</li>
                </ul>
              </Col>
            </Row>
            <RequestDemo />
          </div>
        </div>
      </div>
    );
  }
}

export default ModelCatalog;
