import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import './ModelGovernance.scss';
import Logo from 'assets/images/governance_page_logo.svg';  // eslint-disable-line
import ModelValidationImg from 'assets/images/model_validation.png';  // eslint-disable-line
import ReplayImg from 'assets/images/governance_replay.png';  // eslint-disable-line
import AuditImg from 'assets/images/audit.png';  // eslint-disable-line
import AnswerImg from 'assets/images/answer_faster.svg';  // eslint-disable-line
import SucceedImg from 'assets/images/succeed_governance.svg';  // eslint-disable-line
import BookImg from 'assets/images/book.png';  // eslint-disable-line
import GovernCard from '../../components/Platform/GovernCard';
import GovernRowCard from '../../components/Platform/GovernRowCard';
import { RequestDemo } from '../../components/reusable/RequestDemo';
import WhitePaperCard from '../../components/reusable/WhitePaperCard';

class ModelGovernance extends Component {
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
      <div className="dt-governance-container">
        <Row className="governance_container-header">
          <Col md="6" style={{ paddingLeft: 0 }}>
            <div className="governance_header-category">
              PLATFORM
            </div>
            <div className="governance_header-title">
              Model Governance
            </div>
            <div className="governance_header-desc">
              Production features to control, track, reproduce, and audit model behavior
            </div>
          </Col>
          <Col md="6" className="governance-icon_wrapper">
            <img src={Logo} alt="logo" width="100%" />
          </Col>
        </Row>
        <div className="governance_content-body">
          <div className="content_item-row">
            <GovernCard
              imgSrc={ModelValidationImg}
              title="Model Validation"
              position="right"
              descArray={['Reliably test your models on controlled datasets', 'Replicate production traffic and compare model behavior']}
            />
          </div>
          <div className="content_item-row">
            <GovernCard
              imgSrc={ReplayImg}
              title="Model Reproducibility"
              position="left"
              descArray={['Replay versions of your model using historical production data', 'Compare and contrast model behavior', 'Utilize the framework built for your model governance team to make better decisions']}
            />
          </div>

          <div className="content_item-last-row">
            <GovernCard
              imgSrc={AuditImg}
              title="Model Audit"
              position="right"
              descArray={['Understand model behavior and audit your model when it begins to lose money', 'Quickly experiment with different options to adhere to compliance and regulations', 'Utilize a framework built to debug and better explain model behavior']}
            />
          </div>
        </div>
        <Row className="governance_content-body_row">
          <Col md={{ size: 4, offset: 1 }} className="governance-answer_icon_wrapper">
            <GovernRowCard
              imgSrc={AnswerImg}
              title="Answer faster"
              desc="Reduce the effort required to answer queries from the internal audit team and external regulators."
            />
          </Col>

          <Col md={{ size: 4, offset: 2 }} className="governance-succeed_icon_wrapper">
            <GovernRowCard
              imgSrc={SucceedImg}
              title="Succeed at model governance"
              desc="Avoid hefty non-compliance fines by performing successful model governance."
            />
          </Col>
        </Row>
        <div style={{ backgroundColor: '#F1F2F6' }}>
          <WhitePaperCard
            title="Model Governance and Datatron's Platform"
            link="/resources/governance"
            description="Read more about Datatron and Model Governance by checking out our white papers."
            img={BookImg}
          />
          <RequestDemo />
        </div>
      </div>
    );
  }
}

export default ModelGovernance;
