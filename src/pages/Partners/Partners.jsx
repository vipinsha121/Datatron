import React, { Component } from "react";
import { Collapse } from "react-collapse";
import { Row, Col } from "reactstrap";
import ReactGA from "react-ga";
import { Element } from "react-scroll";
import "./Partners.scss";
import WiproLogo from "assets/images/wipro_logo.png"; // eslint-disable-line
import WiproNameLogo from "assets/images/wipro-holmes-logo-single-new.png"; // eslint-disable-line
import CometLogo from "assets/images/logo_comet_light.png"; // eslint-disable-line
import HumilityIcon from "assets/images/Icon/Light/humility.svg"; // eslint-disable-line
import IntegrityIcon from "assets/images/Icon/Light/integritiy.svg"; // eslint-disable-line
import CrossIcon from "assets/images/cross.svg"; // eslint-disable-line

import CompanyItem from "../../components/Partners/CompanyItem";
import PartnerForm from "../../components/reusable/ContactForm/PartnerForm";

const companies = [
  {
    logo: WiproLogo,
    logoStyle: {
      marginLeft: -60
    },
    name_png: WiproNameLogo,
    link: "https://www.wipro.com/en-IN/",
    name_txt: "",
    desc:
      "Wipro's Artificial Intelligence (AI) and automation platform is the bridge between Foundational AI algorithm builders and Applied AI. HOLMES Platform handles all your needs from building, publishing, metering, and governance to monetization of heterogenous AI solutions. The offerings of HOLMES have been successfully deployed across industry verticals and functions driving the 3 E’s: Efficiency, Economics and Experience."
  },
  {
    logo: CometLogo,
    logoStyle: {},
    name_png: "",
    link: "https://www.comet.ml/site/",
    name_txt: "Comet.ML",
    desc:
      "Comet provides a self-hosted and cloud-based meta machine learning platform allowing data scientists and teams to track, compare, explain, and optimize experiments and models. "
  }
];

const partners = [
  {
    title: "Model Ops",
    content:
      "Datatron helps customers systemize and prioritize the best practices in deployment to make model deployment and versioning in the new machine learning paradigm faster, easier, and more profitable."
  },
  {
    title: "Model Management",
    content:
      "Datatron helps customers systemize and prioritize the best practices in deployment to make model deployment and versioning in the new machine learning paradigm faster, easier, and more profitable."
  },
  {
    title: "Model Governance",
    content:
      "Monitor, manage, and get actionable insights for machine learning models in production. Dive deep into model behavior, estimate risk, and increase transparency to detect failures at the early stages of the model management life cycle."
  },
  {
    title: "Integrate Seamlessly",
    content:
      "Datatron provides seamless integration with different Model Frameworks, Connectors and infrastructures."
  }
];

class Partners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positivity: false,
      passion: false,
      curious: false,
      humility: false,
      integrity: false,
      departments: []
    };
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      ReactGA.set({ page: this.props.location.pathname });
      ReactGA.pageview(this.props.location.pathname);
    }
  }

  toggleCollape = e => {
    this.setState({
      [e.target.alt]: !this.state[e.target.alt]
    });
  };

  render() {
    const { departments } = this.state;

    return (
      <div className="dt-partners__container">
        <Row className="dt-partners__header">
          <Col className="partners-header__desc" md={6}>
            <p className="partners-page__title">Our Partners</p>
          </Col>
        </Row>
        <div className="dt-partners-success__content">
          <div className="dt-partners-companies__wrapper">
            {/* <div className="success__title">Companies</div> */}
            <div className="success__desc">
              {companies.map((company, index) => (
                <CompanyItem
                  key={index.toString()}
                  className="dt-partners-company_item"
                  logo={company.logo}
                  logoStyle={company.logoStyle}
                  namePng={company.name_png}
                  nameTxt={company.name_txt}
                  desc={company.desc}
                  link={company.link}
                />
              ))}
            </div>
          </div>
        </div>
        <Row className="dt-partners-core-values__content">
          <div className="core-values__title">Why Partner with Datatron</div>
          <Row>
            {partners.map((partner, index) => (
              <Col
                key={index.toString()}
                md="6"
                className="partner_item-wrapper"
              >
                <div className="title">{partner.title}</div>
                <div className="content">{partner.content}</div>
              </Col>
            ))}
          </Row>
        </Row>
        <Element className="dt-partners-jobs__content" name="jobsDatatron">
          <div className="jobs-content__title">Become a Partner</div>
          <div className="jobs-content__desc">
            Interested in partnering with us? Please complete the application
            form, we’ll do the rest and be in touch to get you started.
          </div>
          <Row className="become_partner-wrapper">
            <Col className="become_partner-desc">
              <p>
                Datatron provides a single model governance (management)
                platform for all of your ML, AI, and Data Science models in
                production. We are entirely Vendor and Framework agnostic,
                including, SAS, H2O, Python, R, Scikit-Learn, TensorFlow, and
                more.{" "}
              </p>
              <br />
              <p>
                Our offerings include Model Deployment, Model Monitoring, Model
                Transparency, and many more features automated to make AI model
                management easy.{" "}
              </p>
            </Col>
            <Col className="become_partner-contact_form">
              <PartnerForm />
            </Col>
          </Row>
        </Element>
      </div>
    );
  }
}

export default Partners;
