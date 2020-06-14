import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LeftHexIcon from 'assets/images/left-hexagon.svg'; // eslint-disable-line
import RightHexIcon from 'assets/images/right-hexagon.svg'; // eslint-disable-line

import ModelCatalogImg from 'assets/images/model_catalog.png';  // eslint-disable-line
import ModelGovernanceImg from 'assets/images/model_governance_.png';  // eslint-disable-line
import ModelDeploymentImg from 'assets/images/model_deployment.png';  // eslint-disable-line
import ModelMonitoringImg from 'assets/images/model_monitoring.png';  // eslint-disable-line
import ModelReplayImg from 'assets/images/model_replay.png';  // eslint-disable-line
import MCIcon from 'assets/images/Icon/Light/Catalog.svg';  // eslint-disable-line
import DeployIcon from 'assets/images/Icon/Light/Deploy.svg';  // eslint-disable-line
import MonitoringIcon from 'assets/images/Icon/Light/Monitor.svg';  // eslint-disable-line
import GovernIcon from 'assets/images/Icon/Light/Govern.svg';  // eslint-disable-line
import WithDTTabImg from 'assets/images/with_dt.png';  // eslint-disable-line
import WithoutDTTabImg from 'assets/images/without_dt.png';  // eslint-disable-line

import './HIW.scss';
import HIWLine from '../../components/Platform/HIWLine';
import HIWCard from '../../components/Platform/HIWCard';
import { GreenButton } from '../../components/reusable/Buttons';
import { RequestDemo } from '../../components/reusable/RequestDemo';

class HIW extends Component {
  state = {
    selected: 'without',
  }

  componentDidMount() {
    // scroll.scrollToTop();
    window.scrollTo(0, 0);
  }

  tabChange = (selected) => {
    this.setState({
      selected,
    });
  }

  render() {
    const { selected } = this.state;
    return (
      <div className="dt-hiw__container">

        <div className="hiw-container__header">
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

        <div className="dt-hiw-container__body">
          <div style={{ height: 358 }}>
            <div className="hiw-container__category">
              HOW IT WORKS
            </div>
            <div className="hiw-container__page-title">
              Make your Data Science, Engineering, Dev-Ops, and Governance teams work more efficiently
            </div>

            <div className="hiw-container__page-desc">
              {"Here's how it works:"}
            </div>
          </div>

          <div className="hiw_line-component">
            <HIWLine />
          </div>

          <div className="hiw-line-start-text">
            START
          </div>

          <div className="hiw_card_component-wrapper">
            <HIWCard
              title="Upload to the Model Catalog"
              desc="Make your models readily available from anywhere on Datatron by uploading it to a centralized model repository for your team."
              operation="Learn More >"
              position="left"
              imgSrc={ModelCatalogImg}
              iconSrc={MCIcon}
              link="/platform/catalog"
            />
          </div>

          <div className="hiw_card_component-wrapper">
            <HIWCard
              title="Validate your models"
              desc="Detect model bias and reliably test your models with controlled datasets."
              operation="Learn More >"
              position="right"
              imgSrc={ModelGovernanceImg}
              iconSrc={GovernIcon}
              link="/platform/model-governance"
            />
          </div>

          <div className="hiw_card_component-wrapper">
            <HIWCard
              title="Deploy your models"
              desc="Quickly deploy your models in just a few clicks. Datatron makes it fast and simple to bring your models into production."
              operation="Learn More >"
              position="left"
              imgSrc={ModelDeploymentImg}
              iconSrc={DeployIcon}
              link="/platform/deployment"
            />
          </div>

          <div className="hiw_card_component-wrapper">
            <HIWCard
              title="Monitor your models"
              desc="Monitor for performance and anomalies in your models to ensure they are working as expected."
              operation="Learn More >"
              position="right"
              imgSrc={ModelMonitoringImg}
              iconSrc={MonitoringIcon}
              link="/platform/monitoring"
            />
          </div>

          <div className="hiw_card_component-wrapper">
            <HIWCard
              title="Take action"
              desc="Experiment, test, and audit your models to perform successful model governance. Know when to take action on your models."
              operation="Learn More >"
              position="left"
              imgSrc={ModelReplayImg}
              iconSrc={GovernIcon}
              link="/platform/model-governance"
            />
          </div>
          <div className="hiw-line-repeat-text">
            REPEAT
          </div>
          <div className="gree-btn-container">
            <Link to="/platform/overview">
              <GreenButton
                style={{
                  width: 312,
                  height: 40,
                  marginLeft: '0 auto',
                }}
              >
                {"Learn more about Datatron's Platform"}
              </GreenButton>
            </Link>
          </div>
        </div>

        <div className="hiw-content_optimize-container">
          <div className="optimize-title">
            Optimize your team with the tools that simplify and improve your ML Workflow
          </div>
          <div className="optimize-tab-icon">
            <div
              className={selected === 'without' ? 'selected with_dt-tab' : 'with_dt-tab'}
              onClick={() => this.tabChange('without')}
            >
              Without Datatron
            </div>
            <div
              className={selected === 'with' ? 'with_dt-tab selected' : 'with_dt-tab'}
              onClick={() => this.tabChange('with')}
            >
              With Datatron
            </div>
          </div>

          <div className="tab-img-content">
            {
              selected === 'without' && <img src={WithoutDTTabImg} alt="without_dt" className="hiw_tab-img" />
            }
            {
              selected === 'with' && <img src={WithDTTabImg} alt="with_dt" className="hiw_tab-img" />
            }

          </div>

        </div>
        <RequestDemo />
      </div>
    );
  }
}

export default HIW;
