import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // eslint-disable-line
import MenuContactUs from "../../reusable/MenuContactUs";

import "./ResourceMenu.scss";

const ResourceMenu = props => {
  const { onMouseLeave, className } = props;

  const MouseLeave = () => {
    onMouseLeave();
  };

  return (
    <div
      className={`dt-header-dropdown-menu ${className}`}
      onMouseLeave={MouseLeave}
    >
      <div className="dropdown-menu__content">
        <div className="dropdown-menu-item__title">
          <div className="title__h">
            <p>Resources</p>
          </div>
        </div>
        <div className="dropdown-menu-item__section">
          <Link to="/resource">
            <div className="item__section-title">{"White Papers"}</div>
          </Link>
          <div className="item__section-description">
            Expand your knowledge with whitepapers authored by our experts.
          </div>
        </div>

        <div className="dropdown-menu-item__section">
          <a
            href="https://blog.datatron.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="item__section-title">{"Blog"} </div>
          </a>
          <div className="item__section-description">
            <span>Read about the latest trends in machine learning.</span>
          </div>
        </div>

        <div className="dropdown-menu-item__section">
          <Link to="resource/webinarevent">
            <div className="item__section-title">{"Webinar & Event"}</div>
          </Link>
          <div className="item__section-description">
            Join with Datatron experts to explore our product capabilities features and more.
          </div>
        </div>

        <MenuContactUs />
      </div>
    </div>
  );
};

ResourceMenu.propTypes = {
  onMouseLeave: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
};

export default ResourceMenu;
