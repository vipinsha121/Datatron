import React, { Component } from "react";
import { Collapse } from "react-collapse";
import { Row, Col } from "reactstrap";
import ReactGA from "react-ga";
import {
  Link as ContainerLink,
  Element,
  animateScroll as scroll
} from "react-scroll";
import "./Career.scss";
import PositivityIcon from "assets/images/Icon/Light/positivity.svg"; // eslint-disable-line
import PassionIcon from "assets/images/Icon/Light/passion.svg"; // eslint-disable-line
import CuriousIcon from "assets/images/Icon/Light/curious.svg"; // eslint-disable-line
import HumilityIcon from "assets/images/Icon/Light/humility.svg"; // eslint-disable-line
import IntegrityIcon from "assets/images/Icon/Light/integritiy.svg"; // eslint-disable-line
import EquipmentIcon from "assets/images/Icon/Light/equipement.svg"; // eslint-disable-line
import SnacksIcon from "assets/images/Icon/Light/snacks.svg"; // eslint-disable-line
import PTOIcon from "assets/images/Icon/Light/PTO.svg"; // eslint-disable-line
import ComprehensiveIcon from "assets/images/Icon/Light/comprehensive.svg"; // eslint-disable-line
import LearningIcon from "assets/images/Icon/Light/learning.svg"; // eslint-disable-line
import TeamFunIcon from "assets/images/Icon/Light/team-fun.svg"; // eslint-disable-line
import CrossIcon from "assets/images/cross.png"; // eslint-disable-line
import CareerBgImg from "assets/images/careerbgimg.png";
import Whirligig from "react-whirligig";
import { GreenButton } from "../../components/reusable/Buttons";
import PerkItem from "./PerkItem";
import SliderImg1 from "assets/images/sliderimg1.png";
import SliderImg2 from "assets/images/sliderimg2.png";
import SliderImg3 from "assets/images/sliderimg3.png";
import SliderImg4 from "assets/images/sliderimg4.png";
import SliderImg5 from "assets/images/sliderimg5.png";
import SliderImg6 from "assets/images/sliderimg6.png";
import SliderImg7 from "assets/images/sliderimg7.png";
import SliderImg8 from "assets/images/sliderimg8.png";
import SliderImg9 from "assets/images/sliderimg9.png";
import SliderImg10 from "assets/images/sliderimg10.png";
import SliderImg11 from "assets/images/sliderimg11.png";
import SliderImg12 from "assets/images/sliderimg12.png";
import SliderImg13 from "assets/images/sliderimg13.png";
import SliderImg14 from "assets/images/sliderimg14.png";

const BOARD_TOKEN = "datatrontechnologies";

class Career extends Component {
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
    fetch(
      `https://boards-api.greenhouse.io/v1/boards/${BOARD_TOKEN}/departments`
    )
      .then(resp => resp.json())
      .then(resp => {
        const { departments } = resp;
        const filteredDept = departments.filter(item => item.jobs.length > 0);
        this.setState({
          departments: filteredDept
        });
      })
      .catch(error => {
        console.log(error);
      });
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
    const {
      positivity,
      passion,
      curious,
      humility,
      integrity,
      departments
    } = this.state;

    return (
      <div className="dt-career__container">
        <div className="headerImg">
          <Row className="dataflow_img-wrapper">
            <Col md="12" className="governanceCol">
              <img
                src={CareerBgImg}
                alt="GovernanceImg"
                className="dataflow_imgNew"
              />
              <Row className="dt-career__header">
                <Col className="career-header__desc" md={6}>
                  <p className="page-category">CAREERS</p>
                  <p className="career-page__title">Join our team</p>
                  <p className="career-page__desc">
                    Build the future of machine learning. Grow alongside a team
                    of awesome thinkers and doers.
                  </p>
                  <ContainerLink
                    activeClass="active"
                    to="jobsDatatron"
                    spy
                    smooth
                    duration={500}
                  >
                    <GreenButton
                      style={{
                        height: 40,
                        marginTop: 32,
                        marginBottom: 32
                      }}
                    >
                      Current Openings
                    </GreenButton>
                  </ContainerLink>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <div className="dt-career-success__content">
          <div className="success__title">Our team is vital to our success</div>
          <div className="success__desc">
            Our team of data scientists, engineers, and machine learning experts
            come from diverse backgrounds and work together to reinvent how
            companies handle machine learning. We have bold goals and exciting
            opportunities ahead of us. When thoughtful collaboration and
            unparalleled expertise come together, we can turn any great idea
            into revolutionary work.
          </div>
        </div>

        <div class="slider">
          <div class="slide-track">
            <div class="slide">
              <img src={SliderImg1} alt="" />
            </div>
            <div class="slide">
              <img src={SliderImg2} alt="" />
            </div>
            <div class="slide">
              <img src={SliderImg3} alt="" />
            </div>
            <div class="slide">
              <img src={SliderImg4} alt="" />
            </div>
            <div class="slide">
              <img src={SliderImg5} alt="" />
            </div>
            <div class="slide">
              <img src={SliderImg6} alt="" />
            </div>
            <div class="slide">
              <img src={SliderImg7} alt="" />
            </div>
            <div class="slide">
              <img src={SliderImg8} alt="" />
            </div>
            <div class="slide">
              <img src={SliderImg9} alt="" />
            </div>
            <div class="slide">
              <img src={SliderImg10} alt="" />
            </div>
            <div class="slide">
              <img src={SliderImg11} alt="" />
            </div>
            <div class="slide">
              <img src={SliderImg12} alt="" />
            </div>
            <div class="slide">
              <img src={SliderImg13} alt="" />
            </div>
            <div class="slide">
              <img src={SliderImg14} alt="" />
            </div>
          </div>
        </div>
        <div className="datatrone_core_value">
          <div className="dt-careers-value">
            <Row className="dt-career-core-values__content">
              <Col className="core-values__side" md={5}>
                <div className="core-values__title">Our core values</div>
                <div className="core-values__desc">
                  As a company, these are some of the values we live by. We work
                  by them too, and that's what truly makes us a successful team.
                </div>
              </Col>
              <Col className="core-values__accordion" md={7}>
                <Collapse isOpened>
                  <div className="core-values__collapsed-item">
                    <div className="collapsed-item__icon">
                      <img src={PositivityIcon} alt="positivity" />
                    </div>
                    <div className="collapsed-item__content">
                      <div className="collapsed__title">Positivity</div>
                      {positivity && (
                        <div className="collapsed__description">
                          Build a happy and supportive team as a part of the
                          Datatron family. We quickly bounce back when things
                          don't go as planned and we support each other whenever
                          or wherever help is needed.
                        </div>
                      )}
                    </div>
                    <div className="collapsed-item__close">
                      <img
                        src={CrossIcon}
                        alt="positivity"
                        onClick={this.toggleCollape}
                        className={positivity ? "opened" : "closed"}
                      />
                    </div>
                  </div>
                </Collapse>
                <Collapse isOpened>
                  <div className="core-values__collapsed-item">
                    <div className="collapsed-item__icon">
                      <img src={PassionIcon} alt="passion" />
                    </div>
                    <div className="collapsed-item__content">
                      <div className="collapsed__title">Passion</div>
                      {passion && (
                        <div className="collapsed__description">
                          We fuel our work with the passion to work together as
                          a team and build great things. We thrive off the
                          energy that comes from going beyond what's expected.
                          It empowers us to be the very best versions of
                          ourselves.
                        </div>
                      )}
                    </div>
                    <div className="collapsed-item__close">
                      <img
                        src={CrossIcon}
                        alt="passion"
                        onClick={this.toggleCollape}
                        className={passion ? "opened" : "closed"}
                      />
                    </div>
                  </div>
                </Collapse>
                <Collapse isOpened>
                  <div className="core-values__collapsed-item">
                    <div className="collapsed-item__icon">
                      <img src={CuriousIcon} alt="positivity" />
                    </div>
                    <div className="collapsed-item__content">
                      <div className="collapsed__title">Curious</div>
                      {curious && (
                        <div className="collapsed__description">
                          Pursue growth and learn as much as you can. We like to
                          think outside of the box. We haven't settled for what
                          we already know because we choose to never stop
                          learning. It brings out our freshest ideas and gives
                          us a chance to explore new perspectives.
                        </div>
                      )}
                    </div>
                    <div className="collapsed-item__close">
                      <img
                        src={CrossIcon}
                        alt="curious"
                        onClick={this.toggleCollape}
                        className={curious ? "opened" : "closed"}
                      />
                    </div>
                  </div>
                </Collapse>
                <Collapse isOpened>
                  <div className="core-values__collapsed-item">
                    <div className="collapsed-item__icon">
                      <img src={HumilityIcon} alt="humility" />
                    </div>
                    <div className="collapsed-item__content">
                      <div className="collapsed__title">Humility</div>
                      {humility && (
                        <div className="collapsed__description">
                          We believe that a great team is at its best when
                          responsibility is shared among peers who respect and
                          trust one another. We build relationships and
                          proactively seek to understand and empower each other.
                        </div>
                      )}
                    </div>
                    <div className="collapsed-item__close">
                      <img
                        src={CrossIcon}
                        alt="humility"
                        onClick={this.toggleCollape}
                        className={humility ? "opened" : "closed"}
                      />
                    </div>
                  </div>
                </Collapse>
                <Collapse isOpened>
                  <div className="core-values__collapsed-item">
                    <div className="collapsed-item__icon">
                      <img src={IntegrityIcon} alt="integrity" />
                    </div>
                    <div className="collapsed-item__content">
                      <div className="collapsed__title">Integrity</div>
                      {integrity && (
                        <div className="collapsed__description">
                          We strive to build honest and open relationships
                          because that's how we can get things done. We are
                          transparent and ethical in all of our interactions
                          with people around us and the people we work with.
                        </div>
                      )}
                    </div>
                    <div className="collapsed-item__close">
                      <img
                        src={CrossIcon}
                        alt="integrity"
                        onClick={this.toggleCollape}
                        className={integrity ? "opened" : "closed"}
                      />
                    </div>
                  </div>
                </Collapse>
              </Col>
            </Row>
          </div>
        </div>
        <Element className="dt-career-jobs__content" name="jobsDatatron">
          <div className="jobs-content__title">Jobs at Datatron</div>
          <div className="jobs-content__desc">
            {
              "Take a look at the opportunities below and see if you'd be a good fit!"
            }
          </div>
          <div className="jobs-content__container">
            {departments.map(department => (
              <Row className="job-category__row">
                <Col md="4" className="jobs__category">
                  {department.name}
                </Col>
                <Col md="8">
                  {department.jobs.map(job => (
                    <a href={job.absolute_url}>
                      <Row className="job-item__row">
                        <Col md="6" xs="6" className="job-title">
                          {job.title}
                        </Col>
                        <Col md="6" xs="6" className="job-location">
                          Mountain View, CA
                        </Col>
                      </Row>
                    </a>
                  ))}
                </Col>
              </Row>
            ))}
          </div>
        </Element>

        <div className="dt-career-perks__content">
          <div className="perks__title">And, of course, the perks</div>
          <div className="perks-items__content">
            <Row className="perk-items__row">
              <Col lg={2} className="perkitem__offset__wrapper" />
              <Col md={6} lg={4} className="perkitem__wrapper">
                <PerkItem
                  iconSrc={EquipmentIcon}
                  title="Equipment"
                  desc="We'll provide you the tools you need to do great things."
                />
              </Col>
              <Col md={6} lg={4} className="perkitem__wrapper">
                <PerkItem
                  iconSrc={SnacksIcon}
                  title="Catered Meals & Snacks"
                  desc="We don't like being hungry while on the job and you probably don't either."
                />
              </Col>
              <Col lg={2} className="perkitem__offset__wrapper" />
              <Col lg={2} className="perkitem__offset__wrapper" />
              <Col md={6} lg={4} className="perkitem__wrapper">
                <PerkItem
                  iconSrc={ComprehensiveIcon}
                  title="Comprehensive Benefits"
                  desc="Because a healthy employee is a happy employee (that doesn't get everyone sick)."
                />
              </Col>
              <Col md={6} lg={4} className="perkitem__wrapper">
                <PerkItem
                  iconSrc={LearningIcon}
                  title="Learning & Development Opportunities"
                  desc="Because life is filled with mysteries and all about taking new challenges!"
                />
              </Col>
              <Col lg={2} className="perkitem__offset__wrapper" />
              <Col lg={2} className="perkitem__offset__wrapper" />
              <Col md={6} lg={4} className="perkitem__wrapper">
                <PerkItem
                  iconSrc={TeamFunIcon}
                  title="Team Fun & Events"
                  desc="From Taco Tuesdays and trivia nights to weekly happy hours."
                />
              </Col>
              <Col md={6} lg={4} className="perkitem__wrapper">
                <PerkItem
                  iconSrc={PTOIcon}
                  title="PTO & Sick Days"
                  desc="Everyone needs time to rest, relax, and catch up on Netflix."
                />
              </Col>
              <Col lg={2} className="perkitem__offset__wrapper" />
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Career;
