import React, { Component } from "react";
import PropTypes from "prop-types"; // eslint-disable-line
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import {
  Row,
  Col,
  Modal,
  ModalBody,
  InputGroup,
  InputGroupAddon,
  Input
} from "reactstrap";
import ReactGA from "react-ga";

import LeftHexIcon from "assets/images/left-hexagon.svg"; // eslint-disable-line
import RightHexIcon from "assets/images/right-hexagon.svg"; // eslint-disable-line

import "./Home.scss";
import MCIcon from "assets/images/Icon/Light/Catalog.svg"; // eslint-disable-line
import DeployIcon from "assets/images/Icon/Light/Deploy.svg"; // eslint-disable-line
import MonitoringIcon from "assets/images/Icon/Light/Monitor.svg"; // eslint-disable-line
import GovernIcon from "assets/images/Icon/Light/Govern.svg"; // eslint-disable-line
import ManagementIcon from "assets/images/Icon/Light/Manage.svg"; // eslint-disable-line
import WorkflowIcon from "assets/images/Icon/Light/Workflow.svg"; // eslint-disable-line
import SliderIcon1 from "assets/images/image_slider1.png"; // eslint-disable-line
import SliderIcon2 from "assets/images/image_slider2.png"; // eslint-disable-line
import SliderIcon3 from "assets/images/comcast.svg"; // eslint-disable-line
import QuoteIcon from "assets/images/quote.svg"; // eslint-disable-line
import GartnerIcon from "assets/images/gartner-desktop.png"; // eslint-disable-line
import MailIcon from "assets/images/news_env.png"; // eslint-disable-line

import { GreenButton } from "../../components/reusable/Buttons";
import HomeMenuSubitem from "./HomeMenuSubitem";
import { RequestDemo } from "../../components/reusable/RequestDemo";

import Comet from "assets/images/comet-vector.png"; // eslint-disable-line
import Comcast from "assets/images/comcast-logo-outline.png"; // eslint-disable-line
import Ford from "assets/images/ford-vector-logo.png"; // eslint-disable-line
import Yamato from "assets/images/yamato-transport-vector-logo.png"; // eslint-disable-line
import Smbc from "assets/images/Smbc_nikko_security_logo.png"; // eslint-disable-line
import wipro from "assets/images/wipro-logo.png"; // eslint-disable-line

const logos = [wipro, Comcast, Ford, Comet, Yamato, Smbc];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderNum: null,
      showPopup: false
    };
    this.timer = null;
  }

  componentDidMount() {
    // scroll.scrollToTop();
    window.scrollTo(0, 0);

    setTimeout(() => {
      this.setState({
        sliderNum: 0
      });
    }, 10);

    this.timer = setInterval(() => {
      const { sliderNum } = this.state;
      const newSliderNum = (sliderNum + 1) % 3;

      this.setState({
        sliderNum: newSliderNum
      });
    }, 12000);

    const visited = localStorage.getItem("visited");
    if (visited) {
      this.setState({
        showPopup: false
      });
    } else {
      setTimeout(() => {
        this.setState({
          showPopup: true
        });
      }, 3000);

      localStorage.setItem("visited", true);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      ReactGA.set({ page: this.props.location.pathname });
      ReactGA.pageview(this.props.location.pathname);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  newsletter = () => {
    this.setState({
      showPopup: false
    });
  };

  render() {
    const { sliderNum, showPopup } = this.state;
    const { isMobile } = this.props;

    return (
      <div className="home-container__body">
        <div className="home-container__header">
          <img
            src={LeftHexIcon}
            alt="left-hexangon"
            className="left-hex__img reverse-rotate"
          />
          <img
            src={RightHexIcon}
            alt="right-hexangon"
            className="right-hex__img rotate"
          />
        </div>
        <div className="home-container__content">
          <Row className="content__header modelManage">
            <Col>
              <div className="title">
                Production AI Model Management at Scale
              </div>
              <div className="description">
                Automate the standardized deployment, monitoring, governance,
                and validation of all your models to be developed in any
                environment.
              </div>
              <Link to="/platform/hiw">
                <GreenButton
                  style={
                    !isMobile
                      ? {
                        width: 140,
                        height: 40
                      }
                      : {
                        width: 140,
                        height: 40,
                        fontSize: "1.7em"
                      }
                  }
                >
                  How it works
                </GreenButton>
              </Link>
            </Col>
          </Row>
          <div className="content__content-title__1">
            A single, production-grade environment for all your SAS, R, Machine
            Learning, and Regression model needs
          </div>
          <Row className="home-content-subitems">
            <Col
              lg={4}
              xs={12}
              className="home-content-subitems__item"
              className="home-content-subitems__item"
            >
              <HomeMenuSubitem
                iconSrc={MCIcon}
                title="Model Catalog"
                description="Explore models built and uploaded by your Data Science team, all from one centralized repository."
                link="/platform/catalog"
              />
            </Col>
            <Col lg={4} xs={12} className="home-content-subitems__item">
              <HomeMenuSubitem
                iconSrc={DeployIcon}
                title="Model Deployment"
                description="Create and scale model deployments in just a few clicks. Deploy models developed in any framework or language."
                link="/platform/deployment"
              />
            </Col>
            <Col lg={4} xs={12} className="home-content-subitems__item">
              <HomeMenuSubitem
                iconSrc={MonitoringIcon}
                title="Model Monitoring"
                description="Make better business decisions to save your team time and money. Monitor model performance and detect model decay as it happens."
                link="/platform/monitoring"
              />
            </Col>
            <Col lg={4} xs={12} className="home-content-subitems__item">
              <HomeMenuSubitem
                iconSrc={GovernIcon}
                title="Model Governance"
                description="Spend less time on model validation, bias detection, and internal audit processes. Go from model development to internal auditing to production faster than ever."
                link="/platform/model-governance"
              />
            </Col>
            <Col lg={4} xs={12} className="home-content-subitems__item">
              <HomeMenuSubitem
                iconSrc={ManagementIcon}
                title="Model Management"
                description="Manage multivariate models through A/B testing for live inference and batch tasks."
                link="/platform/model-management"
              />
            </Col>
            <Col lg={4} xs={12} className="home-content-subitems__item">
              <HomeMenuSubitem
                iconSrc={WorkflowIcon}
                title="Model Workflow"
                description="Apply business logic to your model prediction results. Create workflows for your models using multiple sources and languages."
                link="/platform/workflow"
              />
            </Col>
          </Row>

          <div className="content__content-title__2">Built for Enterprises</div>
          <Row className="home-content-subitems__2">
            <Col xs={12} md={6}>
              <div className="subitem">
                <div className="title">Automated Model Containerization</div>
                <div className="description">
                  {
                    "Stop one-off work and make your teams more productive. Datatron supports anything you'd build a model with, such as: TensorFlow, H2O, Scikit-Learn, and SAS."
                  }
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="subitem">
                <div className="title">Scalability</div>
                <div className="description">
                  {
                    "Scale Datatron to your organization's needs. Handle increase in data loads from GB's to TB's for tens to thousands of models with ease."
                  }
                </div>
              </div>
            </Col>
          </Row>
          <Row className="home-content-subitems__2">
            <Col xs={12} md={6}>
              <div className="subitem">
                <div className="title">
                  On-Prem, In the Cloud, Hybrid, or Air-Gapped
                </div>
                <div className="description">
                  {
                    "Whether your infrastructure is designed for on-prem, multi-cloud, or both, Datatron works across AWS, Azure, Google Cloud, as well as on-premises options."
                  }
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="subitem">
                <div className="title">No Model Development Vendor Lock-In</div>
                <div className="description">
                  {
                    "Don't be locked down to proprietary technology (e.g. SAS and MATLAB). Datatron allows you to migrate to open source alternatives for your ML models."
                  }
                </div>
              </div>
            </Col>
          </Row>
          <Row className="home-content-subitems__2">
            <Col xs={12} md={6}>
              <div className="subitem">
                <div className="title">Model Reproducibility</div>
                <div className="description">
                  {
                    "Reliably reproduce model behavior in production without impacting existing traffic. Datatron lets you take debugging offline with features to replicate production data."
                  }
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="subitem">
                <div className="title">Model Bias</div>
                <div className="description">
                  {
                    "Datatron provides monitoring and evidence to quickly show your auditors what steps were taken in production when your models are biased."
                  }
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Row className="home_company-logos">
          <div className="logos-content">
            {logos.map((logo, index) => (
              <img src={logo} key={index.toString()} alt={index.toString()} />
            ))}
          </div>
        </Row>
        <div className="home-content__feedback-wrapper">
          <Row className="home-content__feedback">
            <Col md={4} xs={12} className="slider-col__img">
              <img
                src={SliderIcon1}
                alt="first"
                className={sliderNum === 0 ? "img show" : "img hidden"}
              />
              <img
                src={SliderIcon2}
                alt="second"
                className={sliderNum === 1 ? "img show" : "img hidden"}
              />
              <img
                src={SliderIcon3}
                alt="comcast"
                className={sliderNum === 2 ? "img show" : "img hidden"}
                style={{ marginBottom: 30 }}
              />
            </Col>
            <Col md={7} xs={12}>
              <div
                className={
                  sliderNum === 0
                    ? "feedback__content show"
                    : "feedback__content hidden"
                }
              >
                <div>
                  <img src={QuoteIcon} alt="quote" className="quote__img" />
                </div>
                <div style={{ marginLeft: 16 }}>
                  <div className="slider__content-description">
                    {
                      "As companies move from the exploration phase to the implementation phase in machine learning, I am excited to see tools like Datatron that target important technical challengers pertaining to model deployment, monitoring, and management in production."
                    }
                  </div>
                  <div className="feedback__content-from">
                    BEN LORICA, CHIEF DATA SCIENTIST, O’REILLY MEDIA INC.
                  </div>
                </div>
              </div>
              <div
                className={
                  sliderNum === 1
                    ? "feedback__content show"
                    : "feedback__content hidden"
                }
              >
                <div>
                  <img src={QuoteIcon} alt="quote" className="quote__img" />
                </div>
                <div style={{ marginLeft: 16 }}>
                  <div className="slider__content-description">
                    {
                      "The hardest part of machine learning today is deploying and maintaining accurate models, as it requires constant access to new data to update them and improve their accuracy."
                    }
                  </div>
                  <div className="feedback__content-from">
                    CHRIS POULIOT, HEAD OF DATA SCIENCE, NIO.
                  </div>
                </div>
              </div>
              <div
                className={
                  sliderNum === 2
                    ? "feedback__content show"
                    : "feedback__content hidden"
                }
              >
                <div>
                  <img src={QuoteIcon} alt="quote" className="quote__img" />
                </div>
                <div style={{ marginLeft: 16 }}>
                  <div className="slider__content-description">
                    {
                      "Through Datatron's platform automation, we were able to save four full-time people in addition to the business value being created through Datatron's Monitoring module."
                    }
                  </div>
                  <div className="feedback__content-from">
                    HEAD OF INFRASTRUCTURE, COMCAST CORPERATION
                  </div>
                </div>
              </div>
            </Col>
            <Col md={1} xs={12} className="slider_wrapper">
              <Row className="slider_wrapper__row">
                <Col md={12} xs={3} className="slider_wrapper__col">
                  <div
                    className={
                      sliderNum === 0
                        ? "home-content__slider1 filling"
                        : "home-content__slider1"
                    }
                  />
                  <div className="home-content__slider-number">01</div>
                </Col>
                <Col md={12} xs={3} className="slider_wrapper__col">
                  <div
                    className={
                      sliderNum === 1
                        ? "home-content__slider1 filling"
                        : "home-content__slider1"
                    }
                  />
                  <div className="home-content__slider-number">02</div>
                </Col>
                <Col md={12} xs={3} className="slider_wrapper__col">
                  <div
                    className={
                      sliderNum === 2
                        ? "home-content__slider1 filling"
                        : "home-content__slider1"
                    }
                  />
                  <div className="home-content__slider-number">03</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <RequestDemo />

        <Modal
          isOpen={showPopup && !isMobile}
          className="newsletter-popup__wrapper"
        >
          <ModalBody className="newsletter-popup__body">
            <div className="newsletter-popup__body__img">
              <img
                src={GartnerIcon}
                alt="gartner_newsletter"
                style={{ width: "100%" }}
              />
            </div>
            <div className="newsletter-popup__body__content">
              <p className="newsletter-popup__body__content-title">
                We have been selected as a Cool Vendor in AI core Technologies
                by Gartner!
              </p>
              <p className="newsletter-popup__body__content-desc">
                Stay tuned with Datatron today.
              </p>
              <div className="newsletter-popup__body__content-form">
                <InputGroup style={{ width: 295 }}>
                  <InputGroupAddon addonType="prepend">
                    <img
                      src={MailIcon}
                      alt="newsletter-env"
                      style={{ width: 24, height: 24 }}
                    />
                  </InputGroupAddon>
                  <Input
                    className="newsletter-form"
                    type="email"
                    placeholder="name@company.com"
                  />
                </InputGroup>
                <GreenButton
                  style={{
                    width: 167,
                    height: 40,
                    fontSize: "1.3em",
                    padding: 0
                  }}
                  onClick={this.newsletter}
                >
                  Get the Newsletter
                </GreenButton>
              </div>
            </div>
            <div>
              <div
                onClick={() => {
                  this.setState({ showPopup: false });
                }}
                className="newsletter-popup__body__skip"
              >
                skip
              </div>
            </div>
          </ModalBody>
        </Modal>

        <Modal
          isOpen={showPopup && isMobile}
          className="newsletter-popup__wrapper-mobile"
        >
          <ModalBody>
            <div
              onClick={() => {
                this.setState({ showPopup: false });
              }}
              className="newsletter-popup__wrapper-mobile__skip"
            >
              skip
            </div>
            <div className="newsletter-popup__wrapper-mobile__img">
              <img
                src={GartnerIcon}
                alt="gartner-mobile"
                style={{ width: 153 }}
              />
            </div>
            <div className="newsletter-popup__wrapper-mobile__title">
              We have been selected as a Cool Vendor in AI Core Technologies by
              Gartner!
            </div>
            <div className="newsletter-popup__wrapper-mobile__desc">
              Stay tuned with Datatron today.
            </div>
            <div className="newsletter-popup__wrapper-mobile__form">
              <InputGroup style={{ width: 167 }}>
                <InputGroupAddon addonType="prepend">
                  <img
                    src={MailIcon}
                    alt="newsletter-env"
                    style={{ width: 24, height: 24 }}
                  />
                </InputGroupAddon>
                <Input
                  className="newsletter-form"
                  type="email"
                  placeholder="name@company.com"
                />
              </InputGroup>
            </div>
            <div className="newsletter-popup__wrapper-mobile__form">
              <GreenButton
                style={{
                  width: 167,
                  height: 40,
                  fontSize: 16,
                  padding: 0,
                  marginBottom: 19
                }}
                onClick={this.newsletter}
              >
                Get the Newsletter
              </GreenButton>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Home;
