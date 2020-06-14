import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';  // eslint-disable-line

import './MenuPlatformSubItem.scss';

const MenuPlatformSubItem = (props) => {
  const {
    iconSrc,
    title,
    description,
    link,
  } = props;

  return (
    <div className="subitem__container">
      <Link to={`/platform${link[0]}`}>
        <div className="subitem__container-1">
          <div className="icon__section">
            <img
              src={iconSrc[0]}
              alt={title[0]}
            />
          </div>
          <div className="subitem__content">
            <div className="title">
              <span>{title[0]}</span>
            </div>
            <div className="description">
              <span>{description[0]}</span>
            </div>
          </div>
        </div>
      </Link>

      <Link to={`/platform${link[1]}`}>
        <div className="subitem__container-2">
          <div className="icon__section">
            <img
              src={iconSrc[1]}
              alt={title[1]}
            />
          </div>
          <div className="subitem__content">
            <div className="title">
              <span>{title[1]}</span>
            </div>
            <div className="description">
              <span>{description[1]}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

MenuPlatformSubItem.propTypes = {
  iconSrc: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.string)).isRequired,
  title: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.string)).isRequired,
  description: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.string)).isRequired,
  link: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.string)).isRequired,
};

export default MenuPlatformSubItem;
