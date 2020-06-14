import React from 'react';
import PropTypes from 'prop-types';  // eslint-disable-line
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import {
  animateScroll as scroll,
} from 'react-scroll';
import { Row, Col } from 'reactstrap';
import './Company.scss';
import CompanyPageLogo from 'assets/datatron-logo.svg';  // eslint-disable-line
import HarishImg from 'assets/images/harish.jpg';  // eslint-disable-line
import JerryImg from 'assets/images/jerry.jpeg';  // eslint-disable-line
import StartX from 'assets/images/startX.jpg';  // eslint-disable-line
import combined from 'assets/images/combined.svg';  // eslint-disable-line
import Startup from 'assets/images/500.png';  // eslint-disable-line
import RisingTide from 'assets/images/rising_tide.svg';  // eslint-disable-line
import PlugandPlay from 'assets/images/PNP.svg';  // eslint-disable-line
import Enspire from 'assets/images/enspire.png';  // eslint-disable-line
import Boon from 'assets/images/boonhweekoh.jpeg';  // eslint-disable-line

import Leadership from './Leadership';
import Advisor from './Advisor';
import { GreenButton } from '../../components/reusable/Buttons';

class Company extends React.PureComponent {
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
      <div className="dt-company__container">
        <Row className="dt-company__header">
          <Col className="company-header__desc" md={6} xs={12}>
            <p className="page-category">COMPANY</p>
            <p className="company-page__title">
              {"We're helping enterprises harness the awesome power of machine learning"}
            </p>
            <p className="company-page__desc">
              The ability of large companies to govern their ML models has far exceeded
              their infrastructure and the bandwidth of their Engineering and Data Science teams.
            </p>

            <p className="company-page__desc">
              Building models isn't the problem—it's organization. We're building Datatron
              to fix this, by speeding up deployments, detecting problems early, and increasing
              efficiency of managing multiple models at scale.
            </p>
          </Col>
          <Col className="company-header__logo" md={6} xs={0}>
            <img className="page-logo" src={CompanyPageLogo} alt="datatron-logo" />
          </Col>
        </Row>
        <div className="company-page__content">
          <div className="how-started__component">
            <p className="title">
              How it all started
            </p>
            <p className="description">
              Datatron's story begins in 2016 with Jerry Xu and Harish Doddi
              after leaving Lyft. The company eventually joined StartX, a startup accelerator
              and founder community based in Stanford University, and raised their initial seed money.
              Since then, Datatron has scaled the team and iterated on the early versions of
              the product through feedback collected from large enterprises. Today, Datatron
              is deployed in production at several large enterprises throughout the US and APAC areas.
            </p>
          </div>
          <p className="title">
            Leadership
          </p>
          <Row className="leadership__component">
            <Col className="sub__component" md={6} xs={12}>
              <Leadership
                imgSrc={JerryImg}
                name="Jerry Xu"
                role="CEO & Co-Founder"
                description="Jerry is an innovative technology with extensive experience in machine learning, storage systems, online service, distributed systems, virtualization, and OS kernel. He has worked on high performance and large-scale systems at companies such as: Lyft, Box, Twitter, Zynga, and Microsoft. He has also authored the open-source project Lib Crunch and is a three-time Microsoft Gold Star Award winner."
                education="Jerry completed his master's degree in computer science at Shanghai University."
              />
            </Col>

            <Col className="sub__component" md={6} xs={12}>
              <Leadership
                imgSrc={HarishImg}
                name="Harish Doddi"
                role="CPO & Co-Founder"
                description="Over the past decade, Harish has focused on AI and data science. Before Datatron, he worked on the surge pricing model for Lyft, the backend for Snapchat Stories, the photo storage platform for Twitter, and designing and developing human workflow components for Oracle."
                education="Harish completed his master's degree in computer science at Stanford, where he focused on systems and databases."
              />
            </Col>
          </Row>
        </div>
        <Row className="company-page__content-advisor">
          <Col className="advisor-content__title" md={3}>
            Our Advisors
          </Col>
          <Col className="advisor-items" md={9}>
            <Row className="advisor-item__row">
              <Col className="advisor-item__content" xs={6} lg={4}>
                <Advisor
                  name="Chris Pouliot"
                  role="VP data science Snowflake"
                  history="Previously at Google, Netflix, and Lyft"
                />
              </Col>
              <Col className="advisor-item__content" xs={6} lg={4}>
                <Advisor
                  name="Vamsi Kora"
                  role="Founder & CEO, Gathi Analytics"
                  history="Previously at JPMorgan Chase & Co. and Nationwide Insurance"
                />
              </Col>
              <Col className="advisor-item__content" xs={6} lg={4}>
                <Advisor
                  name="Nikita Shamgunov"
                  role="Co-Founder & CEO, MemSQL"
                  history="Previously at Facebook and Microsoft"
                />
              </Col>
              <Col className="advisor-item__content" xs={6} lg={4}>
                <Advisor
                  name="Evan Weaver"
                  role="CEO, Fauna"
                  history="Previously at Twitter, CNET, and SAP"
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="company-page__content-inverstor">
          <Col className="inverstor-content__title" md={3}>
            Our Investors
          </Col>
          <Col className="inverstor-items" md={9}>
            <Row className="inverstor-item__row">
              <Col className="investor-item__component_wrapper" md={6} xl={4}>
                <div className="investor-item__component">
                  <img src={StartX} alt="start" width="162" height="62" />
                </div>
              </Col>
              <Col className="investor-item__component_wrapper" md={6} xl={4}>
                <div className="investor-item__component">
                  <img src={combined} alt="nested" width="80" height="80" />
                </div>
              </Col>
              <Col className="investor-item__component_wrapper" md={6} xl={4}>
                <div className="investor-item__component">
                  <img src={Startup} alt="500" width="80" height="77" />
                </div>
              </Col>
              <Col className="investor-item__component_wrapper" md={6} xl={4}>
                <div className="investor-item__component">
                  <img src={RisingTide} alt="start" width="260" height="22" />
                </div>
              </Col>
              <Col className="investor-item__component_wrapper" md={6} xl={4}>
                <div className="investor-item__component">
                  <img src={PlugandPlay} alt="nested" width="192" height="36" />
                </div>
              </Col>
              <Col className="investor-item__component_wrapper" md={6} xl={4}>
                <div className="investor-item__component">
                  <img src={Enspire} alt="500" width="220.5" height="56" />
                </div>
              </Col>
              <Col className="investor-item__component_wrapper" md={6} xl={4}>
                <div className="investor-item__component">
                  <img src={Boon} alt="start" width="80" height="80" className="profile_img" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="company-page__content-join">
          <div className="join__category">
            CAREERS
          </div>
          <div className="join__title">
            Join our team
          </div>
          <div className="join__desc">
            Work with an amazing team and grow with us as we build the future of machine learning!
            <br />
            We're always on the lookout for top-notch talent. Check out some of our open positions.
          </div>
          <Link to="/company/career">
            <GreenButton
              style={{
                width: 170,
                height: 40,
              }}
            >
              View All Positions
            </GreenButton>
          </Link>
        </div>

      </div>
    );
  }
}

export default Company;
