import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './ModelDeployment.scss';
import Logo from 'assets/images/deployment_logo.svg';  // eslint-disable-line
import DeploymentImg from 'assets/images/model_deployment_img.png';  // eslint-disable-line
import PredictionImg from 'assets/images/serve_prediction.png';  // eslint-disable-line
import ScoreImg from 'assets/images/score_model.png';  // eslint-disable-line
import DeployFasterImg from 'assets/images/deploy_faster.svg';  // eslint-disable-line
import ActionImg from 'assets/images/action_visibility.svg';  // eslint-disable-line
import BookImg from 'assets/images/deploy_book.png';  // eslint-disable-line

import GovernCard from '../../components/Platform/GovernCard';
import GovernRowCard from '../../components/Platform/GovernRowCard';
import InfraCard from '../../components/Platform/InfraCard';
import WhitePaperCard from '../../components/reusable/WhitePaperCard';
import { RequestDemo } from '../../components/reusable/RequestDemo';

class ModelDeployment extends Component {
  componentDidMount() {
    // scroll.scrollToTop();
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="dt-deployment-container">
        <Row className="deployment_container-header">
          <Col md="6" style={{ paddingLeft: 0 }}>
            <div className="deployment_header-category">
              PLATFORM
            </div>
            <div className="deployment_header-title">
              Model Deployment
            </div>
            <div className="deployment_header-desc">
              Scalable model deployments with just a few clicks
            </div>
          </Col>
          <Col md="6" className="deployment_header-logo">
            <img src={Logo} alt="logo" />
          </Col>
        </Row>
        <div className="deployment_content-body">
          <div className="content_item-row">
            <GovernCard
              imgSrc={DeploymentImg}
              title="A model deployment framework for all kinds of ML models"
              position="right"
              descArray={['Deploy models built in the frameworks of your choice', 'Automate the model containerization process at runtime', 'Support for models written in multiple languages (Python, R, Scala, etc.)', 'Vendor agnostic']}
            />
          </div>
          <div className="content_item-row">
            <GovernCard
              imgSrc={PredictionImg}
              title="Continuously serve prediction results to your applications"
              position="left"
              descArray={['The REST API endpoint for interactive requests', 'Dynamically consume the best model from multiple models based on traffic behavior', 'Determine model performance through A/B testing', 'Safely promote and demote models', 'Fallback strategies when models are not responsive', 'Test models in a production environment before deployment']}
            />
          </div>

          <Row className="content_item-row">
            <Col md="6" className="infra_img-container">
              <Row className="infra_img-container_row">
                <Col xs={{ size: 3 }} className="infra_img-container_col">
                  <InfraCard
                    type="healthy"
                    number={0}
                    title="Healty"
                  />
                </Col>
                <Col xs="3" className="infra_img-container_col">
                  <InfraCard
                    type="unhealthy"
                    number={0}
                    title="Unhealty"
                  />
                </Col>
                <Col xs="3" className="infra_img-container_col">
                  <InfraCard
                    type="normal"
                    number={1}
                    title="Min. Instances"
                  />
                </Col>
                <Col xs="3" className="infra_img-container_col">
                  <InfraCard
                    type="normal"
                    number={12}
                    title="Max. Instances"
                  />
                </Col>
              </Row>

            </Col>
            <Col md="6" className="infra_item-content">
              <div className="infra_content-title">
                We'll take care of your infrastructure management
              </div>
              <ul className="infra_content-desc">
                <li>Auto-scaling based on model traffic</li>
                <li>System monitoring dashboard for DevOps</li>
                <li>Alerting and health checks</li>
              </ul>
            </Col>
          </Row>

          <div className="content_item-last-row">
            <GovernCard
              imgSrc={ScoreImg}
              title="Score your models on large datasets"
              position="left"
              descArray={['Offline batch scoring', 'Pull and join data from multiple sources', 'Feed data to your models and store their outputs']}
            />
          </div>
        </div>
        <Row className="deployment_content-body_row">
          <Col md={{ size: 4, offset: 1 }} className="deploy_model-icon_wrapper">
            <GovernRowCard
              imgSrc={DeployFasterImg}
              title="Deploy models faster"
              desc="Cut the time it takes to deploy a model from a couple of months to just a couple of hours."
            />
          </Col>

          <Col md={{ size: 4, offset: 2 }} className="action-icon_wrapper">
            <GovernRowCard
              imgSrc={ActionImg}
              title="Actionable Visibility"
              desc="Get actionable visibility on your models in production through detailed records into their deployments."
            />
          </Col>
        </Row>
        <div style={{ backgroundColor: '#F1F2F6' }}>
          <WhitePaperCard
            title="Datatron's Deployment Module for Machine Learning Models"
            link="/resources/deployment"
            description="Read more about Datatron and Model Deployment by checking out our white paper."
            img={BookImg}
          />
          <RequestDemo />
        </div>
      </div>
    );
  }
}

export default ModelDeployment;
