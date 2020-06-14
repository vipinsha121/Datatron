import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';  // eslint-disable-line
import { IoMdMenu } from 'react-icons/io';
import { TiThMenu, TiTimes } from 'react-icons/ti';
import { FaTimes } from 'react-icons/fa';
import { ImgButton, GreenButton } from '../../reusable/Buttons';
import { menuItems } from '../../../helpers/constants';
import Logo from 'assets/datatron-logo.svg';  //eslint-disable-line

import MCIcon from 'assets/images/Icon/Dark/Model Catalog.svg';  // eslint-disable-line
import MGIcon from 'assets/images/Icon/Dark/Governance.svg';  // eslint-disable-line
import DeploymentIcon from 'assets/images/Icon/Dark/Deployment.svg';  // eslint-disable-line
import ManagementIcon from 'assets/images/Icon/Dark/Management.svg';  // eslint-disable-line
import MonitoringIcon from 'assets/images/Icon/Dark/Monitoring.svg';  // eslint-disable-line
import WorkflowIcon from 'assets/images/Icon/Dark/Workflow.svg';  // eslint-disable-line

import TelecommunicationIcon from 'assets/images/Icon/Dark/Solutions/Telecommunications.svg';  // eslint-disable-line
import FinanceIcon from 'assets/images/Icon/Dark/Solutions/Finance.svg';  // eslint-disable-line
import LogisticIcon from 'assets/images/Icon/Dark/Solutions/Logistics.svg';  // eslint-disable-line
import PricingIcon from 'assets/images/Icon/Dark/Solutions/Pricing.svg';  // eslint-disable-line
import BondIcon from 'assets/images/Icon/Dark/Solutions/Bonds.svg';  // eslint-disable-line
import DemandIcon from 'assets/images/Icon/Dark/Solutions/Demand.svg';  // eslint-disable-line

import './Header.scss';

class MobileHeader extends Component {
  state = {
    menuOpened: false,
    selectedMenu: '',
  }

  componentDidMount() {
  }

  toggleMenuClicked = (e) => {
    e.preventDefault();
    const { menuOpened } = this.state;
    this.setState({
      menuOpened: !menuOpened,
    });
  }

  handleClick = (selectedMenu) => {
    this.setState({ selectedMenu });
  }

  menuSelected = (menu) => {
    const { selectedMenu } = this.state;
    const newSelectedMenu = selectedMenu === menu ? '' : menu;

    this.setState({
      selectedMenu: newSelectedMenu,
    });
  }

  render() {
    const { menuOpened, selectedMenu } = this.state;
    const headerPosition = menuOpened ? 'fixed__position' : 'absolute_position';
    return (
      <div className={`${headerPosition} mobile-header__wrapper`}>
        <Row className={menuOpened ? 'mobile-header__container bg_colored' : 'mobile-header__container'}>
          <Col xs={6}>
            <Link to="/">
              <ImgButton
                imgSrc={Logo}
                height={30}
              />
            </Link>
          </Col>
          <Col xs={6} className="mobile-header__container__collapse">
            {
              !menuOpened
              && <IoMdMenu className="mobile-header__container-icon" onClick={this.toggleMenuClicked} />
            }
            {
              menuOpened
              && <TiTimes className="mobile-header__container-icon" onClick={this.toggleMenuClicked} />
            }
          </Col>
        </Row>
        {
          menuOpened
          && (
            <div className="mobile-header__content">
              <div className="mobile-header__content-item">
                <div onClick={() => this.menuSelected('platform')} className={selectedMenu === 'platform' ? 'mobile-header__content-items selected' : 'mobile-header__content-items'}>
                  <span>Platform</span>
                  <span className={selectedMenu === 'platform' ? 'menu_selected' : ''}> › </span>
                </div>
                <div className={selectedMenu === 'platform' ? 'mobile-header__content-subitems' : 'hidden'}>
                  <Link to="/platform/overview">
                    <div onClick={() => this.setState({ menuOpened: false })} className="mobile-header__content-subitems_item">
                      Platform Overview ›
                    </div>
                  </Link>

                  <Link to="/platform/hiw">
                    <div onClick={() => this.setState({ menuOpened: false })} className="mobile-header__content-subitems_item">
                      How it works ›
                    </div>
                  </Link>
                  <Link to="/platform/catalog">
                    <div onClick={() => this.setState({ menuOpened: false })} className="mobile-header__content-subitems_item">
                      <div>
                        <img src={MCIcon} alt="model-catalog-menu" />
                      </div>
                      <div className="mobile-header__content-subitems_item-content">
                        <p className="title">Model Catalog</p>
                        <p className="desc">
                          Explore your team's ML models, all from one centralized repository.
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/platform/deployment">
                    <div onClick={() => this.setState({ menuOpened: false })} className="mobile-header__content-subitems_item">
                      <div>
                        <img src={DeploymentIcon} alt="model-deploy-menu" />
                      </div>
                      <div className="mobile-header__content-subitems_item-content">
                        <p className="title">Deployment</p>
                        <p className="desc">
                          Deploy ML models into production in just a few clicks.
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/platform/monitoring">
                    <div onClick={() => this.setState({ menuOpened: false })} className="mobile-header__content-subitems_item">
                      <div>
                        <img src={MonitoringIcon} alt="model-monitoring-menu" />
                      </div>
                      <div className="mobile-header__content-subitems_item-content">
                        <p className="title">Model Monioring</p>
                        <p className="desc">
                          Enterprise-scale monitoring for your ML models.
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/platform/model-governance">
                    <div onClick={() => this.setState({ menuOpened: false })} className="mobile-header__content-subitems_item">
                      <div>
                        <img src={MGIcon} alt="model-governance-menu" />
                      </div>
                      <div className="mobile-header__content-subitems_item-content">
                        <p className="title">Model Governance</p>
                        <p className="desc">
                          Collaborate with your team and track your model operations.
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/platform/model-management">
                    <div onClick={() => this.setState({ menuOpened: false })} className="mobile-header__content-subitems_item">
                      <div>
                        <img src={ManagementIcon} alt="model-management-menu" />
                      </div>
                      <div className="mobile-header__content-subitems_item-content">
                        <p className="title">Model Management</p>
                        <p className="desc">
                          Manage all of your models in production with ease.
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/platform/workflow">
                    <div onClick={() => this.setState({ menuOpened: false })} className="mobile-header__content-subitems_item">
                      <div>
                        <img src={WorkflowIcon} alt="model-workflow-menu" />
                      </div>
                      <div className="mobile-header__content-subitems_item-content">
                        <p className="title">Model Workflow</p>
                        <p className="desc">
                          Add business logic to your model prediction results.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div onClick={() => this.menuSelected('solution')} className={selectedMenu === 'solution' ? 'mobile-header__content-items selected' : 'mobile-header__content-items'}>
                  <span>Solutions</span>
                  <span className={selectedMenu === 'solution' ? 'menu_selected' : ''}> › </span>
                </div>
                <div className={selectedMenu === 'solution' ? 'mobile-header__content-subitems' : 'hidden'}>
                  <Link to="/solution/industry">
                    <div onClick={() => this.setState({ menuOpened: false })} className="mobile-header__content-subitems_item">
                      INDUSTRIES ›
                    </div>
                  </Link>
                  <Link to="/solution/industry/telecom">
                    <div onClick={() => this.setState({ menuOpened: false })} className="mobile-header__content-subitems_item">
                      <div>
                        <img src={TelecommunicationIcon} alt="telecommunication-menu" />
                      </div>
                      <div className="mobile-header__content-subitems_item-content">
                        <p className="title">Telecommunications</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/solution/industry/financial">
                    <div onClick={() => this.setState({ menuOpened: false })} className="mobile-header__content-subitems_item">
                      <div>
                        <img src={FinanceIcon} alt="finance-menu" />
                      </div>
                      <div className="mobile-header__content-subitems_item-content">
                        <p className="title">Finance</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/solution/industry/logistics">
                    <div onClick={() => this.setState({ menuOpened: false })} className="mobile-header__content-subitems_item">
                      <div>
                        <img src={LogisticIcon} alt="logistic-menu" />
                      </div>
                      <div className="mobile-header__content-subitems_item-content">
                        <p className="title">Logistics</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/solution/usecase">
                    <div onClick={() => this.setState({ menuOpened: false })} className="mobile-header__content-subitems_item">
                      USE CASES ›
                    </div>
                  </Link>
                  <Link to="/solution/usecase/dynamic-pricing">
                    <div onClick={() => this.setState({ menuOpened: false })} className="mobile-header__content-subitems_item">
                      <div>
                        <img src={PricingIcon} alt="dynamic-menu" />
                      </div>
                      <div className="mobile-header__content-subitems_item-content">
                        <p className="title">Dynamic Pricing</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/solution/usecase/bond-market">
                    <div onClick={() => this.setState({ menuOpened: false })} className="mobile-header__content-subitems_item">
                      <div>
                        <img src={BondIcon} alt="Bond-menu" />
                      </div>
                      <div className="mobile-header__content-subitems_item-content">
                        <p className="title">Bond Market Forecasting</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/solution/usecase/demand-forecast">
                    <div onClick={() => this.setState({ menuOpened: false })} className="mobile-header__content-subitems_item">
                      <div>
                        <img src={DemandIcon} alt="demand-menu" />
                      </div>
                      <div className="mobile-header__content-subitems_item-content">
                        <p className="title">Demand Forecasting</p>
                      </div>
                    </div>
                  </Link>

                </div>
                <div onClick={() => this.menuSelected('company')} className={selectedMenu === 'company' ? 'mobile-header__content-items selected' : 'mobile-header__content-items'}>
                  <span>Company</span>
                  <span className={selectedMenu === 'company' ? 'menu_selected' : ''}> › </span>
                </div>
                <div className={selectedMenu === 'company' ? 'mobile-header__content-subitems' : 'hidden'}>
                  <Link to="/company/about">
                    <div onClick={() => this.setState({ menuOpened: false })} className="mobile-header__content-subitems_item">
                      <div className="mobile-header__content-subitems_item_">
                        <p className="title">About Us</p>
                        <p className="desc">
                          Learn more about Datatron and how we began.
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/company/testimonial">
                    <div onClick={() => this.setState({ menuOpened: false })} className="mobile-header__content-subitems_item">
                      <div className="mobile-header__content-subitems_item_">
                        <p className="title">Testimonial</p>
                        <p className="desc">
                          Check out some of our customer success stories.
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/company/career">
                    <div onClick={() => this.setState({ menuOpened: false })} className="mobile-header__content-subitems_item">
                      <div className="mobile-header__content-subitems_item_">
                        <p className="title">Careers</p>
                        <p className="desc">
                          Join our team and grow with us at Datatron. Check out some of our openings.
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/company/press">
                    <div onClick={() => this.setState({ menuOpened: false })} className="mobile-header__content-subitems_item">
                      <div className="mobile-header__content-subitems_item_">
                        <p className="title">Press</p>
                        <p className="desc">
                          See the lastest mentions about Datatron in the media, upcoming events we're attending, and more!
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div onClick={() => this.menuSelected('partners')} className={selectedMenu === 'partners' ? 'mobile-header__content-items selected' : 'mobile-header__content-items'}>
                  <span>Partners</span>
                  <span className={selectedMenu === 'partners' ? 'menu_selected' : ''}> › </span>
                </div>


                <div className={selectedMenu === 'partners' ? 'mobile-header__content-subitems' : 'hidden'}>
                  <Link to="/Partners">
                    <div onClick={() => this.setState({ menuOpened: false })} className="mobile-header__content-subitems_item">
                      Our Partners ›
                    </div>
                  </Link>
                </div>

                <div onClick={() => this.menuSelected('resource')} className={selectedMenu === 'resource' ? 'mobile-header__content-items selected' : 'mobile-header__content-items'}>
                  <span>Resources</span>
                  <span className={selectedMenu === 'resource' ? 'menu_selected' : ''}> › </span>
                </div>

                <div className={selectedMenu === 'resource' ? 'mobile-header__content-subitems' : 'hidden'}>
                  <Link to="/resource">
                    <div onClick={() => this.setState({ menuOpened: false })} className="mobile-header__content-subitems_item">
                      <div className="mobile-header__content-subitems_item_">
                        <p className="title">White Papers</p>
                        <p className="desc">
                          Expand your knowledge with white papers authored by our experts.
                        </p>
                      </div>
                    </div>
                  </Link>
                  <a href="https://blog.datatron.com" rel="noopener noreferrer" target="_blank">
                    <div onClick={() => this.setState({ menuOpened: false })} className="mobile-header__content-subitems_item">
                      <div className="mobile-header__content-subitems_item_">
                        <p className="title">Blog</p>
                        <p className="desc">
                          Read about the latest trends in machine learning.
                        </p>
                      </div>
                    </div>
                  </a>

                  <Link to="/resource/webinarevent">
                    <div onClick={() => this.setState({ menuOpened: false })} className="mobile-header__content-subitems_item">
                      <div className="mobile-header__content-subitems_item_">
                        <p className="title">Webinar & Event</p>
                        <p className="desc">
                          Join with Datatron experts to explore our product capabilities features and more.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div onClick={() => this.setState({ menuOpened: false })} className="mobile-header__content-demo">
                <Link to="/resource/contact">
                  <GreenButton
                    style={{
                      width: '100%',
                      height: 40,
                      fontSize: 16,
                    }}
                  >
                    Request A Demo
                  </GreenButton>
                </Link>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default withRouter(MobileHeader);
