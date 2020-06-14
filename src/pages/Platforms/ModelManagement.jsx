import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import {
  animateScroll as scroll,
} from 'react-scroll';
import './ModelManagement.scss';
import Logo from 'assets/images/management_logo.png';  // eslint-disable-line
// import ModelValidationImg from 'assets/images/model_validation.png';  // eslint-disable-line
import ShadowingImg from 'assets/images/shadowing_img.png';  // eslint-disable-line
import RouteRuleImg from 'assets/images/routing_rule.png';  // eslint-disable-line

import SaveTimeImg from 'assets/images/save_time.svg';  // eslint-disable-line
import ModelSelectionImg from 'assets/images/model_selection.svg';  // eslint-disable-line
import BookImg from 'assets/images/platform_monitoring_book.png';  // eslint-disable-line
import GovernRowCard from '../../components/Platform/GovernRowCard';
import { RequestDemo } from '../../components/reusable/RequestDemo';
import WhitePaperCard from '../../components/reusable/WhitePaperCard';

class ModelManagement extends Component {
  componentDidMount() {
    // scroll.scrollToTop();
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      ReactGA.set({ page: this.props.location.pathname })
      ReactGA.pageview(this.props.location.pathname)
    }
  }

  render() {
    return (
      <div className="dt-management-container">
        <Row className="management_container-header">
          <Col md="6" style={{ paddingLeft: 0 }}>
            <div className="management_header-category">
              PLATFORM
            </div>
            <div className="management_header-title">
              Model Management
            </div>
            <div className="management_header-desc">
              Production features to control, track, reproduce, and audit model behavior
            </div>
          </Col>
          <Col md="6" style={{ paddingRight: 0 }} className="management_logo_wrapper">
            <img src={Logo} alt="logo" width="100%" />
          </Col>
        </Row>
        <div className="management_content-body">
          <Row className="content_item-row">
            <Col md="6" className="shadowing_img-container">
              <img src={RouteRuleImg} alt="routing" className="management_routerule_img" />
            </Col>
            <Col md="6" className="shadow_content-container">
              <div className="shadowing_content-title">
                Split Traffic
              </div>
              <div className="shadowing_content-desc">
                Spend zero time on code and building infrastructure to program logic
                and define traffic. Datatron provides a simple UI to define the percentage
                of traffic that can be routed to your model's REST endpoint.
              </div>
              <div className="shadowing_content-title margin_top_60">
                Sequence (SLA)
              </div>
              <div className="shadowing_content-desc">
                Enforce latency requirements on multiple models and
                prevent downtime from service outages.
                Assign primary and fallback models to ensure your
                services are never completely down.
              </div>
              <div className="shadowing_content-title margin_top_60">
                A/B Testing
              </div>
              <div className="shadowing_content-desc">
                Perform A/B testing on model sequences, rather than just on
                particular models. Set up the static and dynamic model sequence
                with the advantage of conducting sequencing and A/B testing simultaneously.
              </div>
            </Col>
          </Row>
          <Row className="content_item-last-row mobile-view_col-reverse">
            <Col md="6" className="shadow_content-container">
              <div className="shadowing_content-title">
                Shadowing
              </div>
              <div className="shadowing_content-desc">
                Use passive models for visualization and analysis of model performance on the backend.
                Datatron provides shadowing to let you know how the model is performing without using
                it for real production traffic.
              </div>
            </Col>
            <Col md="6" className="shadowing_img-container">
              <img src={ShadowingImg} alt="shadowing" width="100%" />
            </Col>
          </Row>
        </div>
        <Row className="management_content-body_row">
          <Col md={{ size: 4, offset: 1 }} className="management_savetime-wrapper">
            <GovernRowCard
              imgSrc={SaveTimeImg}
              title="Save time"
              desc="Focus on other efforts while Datatron helps you easily manage your models based on your configurations."
            />
          </Col>

          <Col md={{ size: 4, offset: 2 }} className="management_modelselect-wrapper">
            <GovernRowCard
              imgSrc={ModelSelectionImg}
              title="Better model selection"
              desc="Automated model selection helps serve better predictions and decrease errors."
            />
          </Col>
        </Row>
        <div style={{ backgroundColor: '#F1F2F6' }}>
          <WhitePaperCard
            title="Datatron's Management Module for Machine Learning Models"
            description="Read more about Datatron and Model management by checking out our white papers."
            link="/resources/management"
            img={BookImg}
          />
          <RequestDemo />
        </div>
      </div>
    );
  }
}

export default ModelManagement;
