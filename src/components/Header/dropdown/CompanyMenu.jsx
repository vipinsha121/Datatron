import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // eslint-disable-line

import "./CompanyMenu.scss";

const CompanyMenu = props => {
  const { onMouseLeave, className } = props;

  const MouseLeave = () => {
    onMouseLeave();
  };

  return (
    <div
      className={`dt-header-dropdown-menu__company ${className}`}
      onMouseLeave={MouseLeave}
    >
      <div className="dropdown-menu__content">
        <div className="dropdown-menu-item__title">
          <div className="title__h">
            <p>Company</p>
          </div>
        </div>

        <div className="dropdown-menu-item__section">
          <Link to="/company/about">
            <div className="title">{"About Us"}</div>
          </Link>
          <div className="description">
            Learn more about Datatron and how we began.
          </div>
        </div>
        <div className="dropdown-menu-item__section">
          <Link to="/company/testimonial">
            <div className="item__section-title">{"Testimonial"}</div>
          </Link>
          <div className="item__section-description">
            Check out some of our customer success stories.
          </div>
        </div>
        <div className="dropdown-menu-item__section">
          <Link to="/company/career">
            <div className="item__section-title">{"Careers"}</div>
          </Link>
          <div className="item__section-description">
            Join our team and grow with us at Datatron. Check out some of our
            openings.
          </div>
        </div>

        <div className="dropdown-menu-item__section">
          <Link to="/company/press">
            <div className="item__section-title">{"Press"}</div>
          </Link>
          <div className="item__section-description">
            {
              "See the latest mentions about Datatron in the media, upcoming events we're attending, and more!"
            }
          </div>
        </div>
      </div>
    </div>
  );
};

CompanyMenu.propTypes = {
  onMouseLeave: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
};

export default CompanyMenu;
