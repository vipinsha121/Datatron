import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';  // eslint-disable-line

import './PlatformMenu.scss';
import MCIcon from 'assets/images/Icon/Dark/Model Catalog.svg';  // eslint-disable-line
import MGIcon from 'assets/images/Icon/Dark/Governance.svg';  // eslint-disable-line
import DeploymentIcon from 'assets/images/Icon/Dark/Deployment.svg';  // eslint-disable-line
import ManagementIcon from 'assets/images/Icon/Dark/Management.svg';  // eslint-disable-line
import MonitoringIcon from 'assets/images/Icon/Dark/Monitoring.svg';  // eslint-disable-line
import WorkflowIcon from 'assets/images/Icon/Dark/Workflow.svg';  // eslint-disable-line
import MenuPlatformSubItem from '../../reusable/MenuPlatformSubItem';

const PlatformMenu = (props) => {
  const {
    onMouseLeave,
    className,
  } = props;

  const MouseLeave = () => {
    onMouseLeave();
  };

  return (
    <div
      className={`dt-header-dropdown-menu__platform ${className}`}
      onMouseLeave={MouseLeave}
    >
      <div className="dropdown-menu__content">
        <div className="dropdown-menu-item__title">
          <div className="title__h">
            <p>Platform</p>
          </div>
          <div className="title__desc">
            <span>
              {"Know how all of your ML, AI, and Data Science models operate with Datatron's platform."}
            </span>
          </div>
          <div className="title__link">
            <Link to="/platform/overview">{'Platform Overview ›'}</Link>
            <br />
            <Link to="/platform/hiw">{'How It Works ›'}</Link>
          </div>
        </div>
        <div className="platform__dropdown-menu-item__section">
          <MenuPlatformSubItem
            iconSrc={[MCIcon, MGIcon]}
            title={['Model Catalog', 'Model Governance']}
            description={["Explore your team's ML models, all from one centralized repository.", 'Collaborate with your team and track your model operations.']}
            link={['/catalog', '/model-governance']}
          />
          <MenuPlatformSubItem
            iconSrc={[DeploymentIcon, ManagementIcon]}
            title={['Model Deployment', 'Model Management']}
            description={['Deploy ML models into production in just a few clicks.', 'Manage all of your models in production with ease.']}
            link={['/deployment', '/model-management']}
          />
          <MenuPlatformSubItem
            iconSrc={[MonitoringIcon, WorkflowIcon]}
            title={['Model Monitoring', 'Model Workflow']}
            description={['Enterprise-scale monitoring for your ML models.', 'Add business logic to your model prediction results.']}
            link={['/monitoring', '/workflow']}
          />
        </div>
      </div>
    </div>
  );
};

PlatformMenu.propTypes = {
  onMouseLeave: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default PlatformMenu;
