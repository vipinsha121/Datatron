import React from "react";
import { Row, Col } from "reactstrap";
import ReactGA from "react-ga";
import "./Press.scss";
import GovernanceImg from "assets/images/model_governance.png"; //eslint-disable-line
import MachineImg from "assets/images/machine_learning.png"; //eslint-disable-line
import SimplifyImg from "assets/images/base.png"; //eslint-disable-line
import SpecializedImg from "assets/images/spcializedimg.png"; //eslint-disable-line
import RedisconfImg from "assets/images/redisconf.png"; //eslint-disable-line
import StrataImg from "assets/images/strata.png"; //eslint-disable-line
import StrataData from "assets/images/strataimg.png";
import RedisBlogImg from "assets/images/redisblogimg.PNG";
import CognilyticaResarchImg from "assets/images/Cognilytica.png";
import AutomatedMonitoringImg from "assets/images/automatedimg.png";
import GartnerImg from "assets/images/gartner.png";

import FeaturedCard from "../../components/reusable/FeaturedCard";
import PressCard from "../../components/Company/PressCard";
import { RequestDemo } from "../../components/reusable/RequestDemo";

class Press extends React.PureComponent {
  componentDidMount() {
    // scroll.scrollToTop();
    window.scrollTo(0, 0);
  }
  ; klklmnlnklnnnlnkj
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      ReactGA.set({ page: this.props.location.pathname });
      ReactGA.pageview(this.props.location.pathname);
    }
  }

  render() {
    return (
      <div className="dt-press__container">
        <div className="press-container__header">
          <div className="press-header__category">PRESS</div>
          <div className="press-header__title">Datatron in the Media</div>
          <div className="press-header__desc">
            {"Stories about Datatron, events we're attending, and more!"}
          </div>
        </div>
        <div className="press-container__content">
          <div className="press-content__wrapper">
            <div className="press-content__title">Featured</div>
            <Row className="press_featured-row">
              <Col md="6" className="featured-card__wrapper">
                <FeaturedCard
                  imgSrc={GovernanceImg}
                  title="What are model governance and model operations?"
                  desc="A look at the landscape of tools for building and deploying robust, production-ready machine learning models."
                  operation="Read More >"
                  link="https://www.oreilly.com/ideas/what-are-model-governance-and-model-operations"
                  newTab
                />
              </Col>
              <Col md="6" className="featured-card__wrapper">
                <FeaturedCard
                  imgSrc={MachineImg}
                  title="Managing machine learning in the enterprise: Lessons from banking and health care"
                  desc="A look at how guidelines from regulated industries can help shape your ML strategy."
                  operation="Read More >"
                  link="https://www.oreilly.com/ideas/managing-machine-learning-in-the-enterprise-lessons-from-banking-and-health-care"
                  newTab
                />
              </Col>
            </Row>
            <div className="press-container__divider" />
            <div className="press-items__content">
              <Row className="press-items__row">
                <Col md="6" lg="3">
                  <PressCard
                    imgSrc={CognilyticaResarchImg}
                    title="Datatrone Featured in Cognilytica MLOps Reserch"
                    desc="Cognilytica examines the ML Operationalization Management market, provides a forecast for the growth of the overall market for solutions and products focused in this space."
                    link="https://www.cognilytica.com/2020/03/03/ml-model-management-and-operations-2020-mlops/ "
                  />
                </Col>

                <Col md="6" lg="3">
                  <PressCard
                    imgSrc={AutomatedMonitoringImg}
                    title="Webinar with Big Data Institute"
                    desc="Our CPO Harish Doddi goes over the challenges of long-term models running in the Production environment. Watch the recording!."
                    link="https://www.youtube.com/watch?v=sO89p_2IHlg&feature=youtu.be"
                  />
                </Col>

                <Col md="6" lg="3">
                  <PressCard
                    imgSrc={GartnerImg}
                    title="Gartner recognizes Datatrone as Cool Vender in All Core Technologies"
                    desc="Emerging venders that offer solution for operationalizing the creation and deployment of AI-based product."
                    link="https://www.gartner.com/en/documents/3956729"
                  />
                </Col>

                <Col md="6" lg="3">
                  <PressCard
                    imgSrc={SpecializedImg}
                    title="Specialized tools for machine learning development and model governance are becoming essential"
                    desc="Why companies are turning to specialized machine learning tools like MLflow."
                    link="https://www.oreilly.com/ideas/specialized-tools-for-machine-learning-development-and-model-governance-are-becoming-essential"
                  />
                </Col>
              </Row>

              <Row className="press-items__row">
                <Col md="6" lg="3">
                  <PressCard
                    imgSrc={StrataData}
                    title="Strata SF & NY 2019"
                    desc="Our Co-Founder & CPO spoke at Strate NY with Comcast's Senior Director of Data Science, Venkata."
                    link="https://conferences.oreilly.com/strata/strata-ny-2019/public/schedule/detail/79853 "
                  />
                </Col>

                <Col md="6" lg="3">
                  <PressCard
                    imgSrc={SimplifyImg}
                    title="Simplifying machine learning lifecycle management"
                    desc="The O'Reilly Data Show Podcast: Accelerating the path from prototype to production."
                    link="https://www.oreilly.com/ideas/simplifying-machine-learning-lifecycle-management"
                  />
                </Col>

                <Col md="6" lg="3">
                  <PressCard
                    imgSrc={RedisBlogImg}
                    title="Redis Blog"
                    desc="Our Co-Founder & CPO Harish Doddi spoke about Productionizing Machine Learning in this talk with Redis."
                    link="https://redislabs.com/blog/productionizing-machine-learning-with-datatron-and-redis/"
                  />
                </Col>

                <Col md="6" lg="3">
                  <PressCard
                    imgSrc={RedisconfImg}
                    title="We were at RedisConf18"
                    desc="Our CEO Harish Doddi spoke about Serving Predictions with Online Machine Learning using Redis and Redis Enterprise."
                    link="https://www.meetup.com/Advanced-Spark-and-TensorFlow-Meetup/events/249623642/"
                  />
                </Col>
              </Row>

              <RequestDemo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Press;
