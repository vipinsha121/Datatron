import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';  // eslint-disable-line

import './SolutionMenu.scss';
import TelecommunicationIcon from 'assets/images/Icon/Dark/Solutions/Telecommunications.svg';  // eslint-disable-line
import FinanceIcon from 'assets/images/Icon/Dark/Solutions/Finance.svg';  // eslint-disable-line
import LogisticIcon from 'assets/images/Icon/Dark/Solutions/Logistics.svg';  // eslint-disable-line
import PricingIcon from 'assets/images/Icon/Dark/Solutions/Pricing.svg';  // eslint-disable-line
import BondIcon from 'assets/images/Icon/Dark/Solutions/Bonds.svg';  // eslint-disable-line
import DemandIcon from 'assets/images/Icon/Dark/Solutions/Demand.svg';  // eslint-disable-line

import MenuContactUs from '../../reusable/MenuContactUs';

const SolutionMenu = (props) => {
  const {
    onMouseLeave,
    className,
  } = props;

  const MouseLeave = () => {
    onMouseLeave();
  };

  return (
    <div
      className={`dt-header-dropdown-menu ${className}`}
      onMouseLeave={MouseLeave}
      onMouseDown={MouseEvent}
    >
      <div className="dropdown-menu__content">
        <div className="dropdown-menu-item__title">
          <div className="title__h">
            <p>Solutions</p>
          </div>
          <div className="title__desc">
            <span>See how Datatron seamlessly integrates and works with your team</span>
          </div>
        </div>

        <div className="dropdown-menu-item__section">
          <Link to="/solution/industry">
            <div className="item-title">
              {'INDUSTRIES ›'}
            </div>
          </Link>
          <Link to="/solution/industry/telecom">
            <div className="sub-item">
              <div>
                <img
                  src={TelecommunicationIcon}
                  alt="telecommunication"
                />
              </div>
              <div>
                <span>Telecommunications</span>
              </div>
            </div>
          </Link>
          <Link to="/solution/industry/financial">
            <div className="sub-item">
              <div>
                <img
                  src={FinanceIcon}
                  alt="finance"
                />
              </div>
              <div>
                <span>Finance</span>
              </div>
            </div>
          </Link>
          <Link to="/solution/industry/logistics">
            <div className="sub-item">
              <div>
                <img
                  src={LogisticIcon}
                  alt="logistic"
                />
              </div>
              <div>
                <span>Logistics</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="dropdown-menu-item__section">
          <Link to="/solution/usecase">
            <div className="item-title">
              {'USE CASES ›'}
            </div>
          </Link>
          <Link to="/solution/usecase/dynamic-pricing">
            <div className="sub-item">
              <div>
                <img
                  src={PricingIcon}
                  alt="pricing"
                />
              </div>
              <div>
                <span>Dynamic Pricing</span>
              </div>
            </div>
          </Link>
          <Link to="/solution/usecase/bond-market">
            <div className="sub-item">
              <div>
                <img
                  src={BondIcon}
                  alt="bond"
                />
              </div>
              <div>
                <span>Bond Market Forecasting</span>
              </div>
            </div>
          </Link>
          <Link to="/solution/usecase/demand-forecast">
            <div className="sub-item">
              <div>
                <img
                  src={DemandIcon}
                  alt="demand"
                />
              </div>
              <div>
                <span>Demand Forecasting</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="dropdown-menu-item__section">
          <Link to="/solution/whitepapers">
            <div className="item-title">
              {'WhitePapers'}
            </div>
          </Link>
        </div>

        <MenuContactUs />
      </div>
    </div>
  );
};

SolutionMenu.propTypes = {
  onMouseLeave: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default SolutionMenu;
