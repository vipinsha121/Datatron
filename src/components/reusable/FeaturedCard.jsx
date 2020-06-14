import React from 'react';
import PropTypes from 'prop-types';  // eslint-disable-line
import { Link } from 'react-router-dom';

import './FeaturedCard.scss';

const FeaturedCard = ({
  imgSrc,
  title,
  desc,
  operation,
  link = '',
  newTab = false,
}) => (
    <div className="featured-card__component">
      <img src={imgSrc} alt={title} width="100%" />
      <div className="card-title">
        {title}
      </div>

      <div className="card-desc">
        {desc}
      </div>
      {
        newTab && (
          <a href={link} rel="noopener noreferrer" target="_blank">
            <div className="card-operation">
              {operation}
            </div>
          </a>
        )
      }
      {
        !newTab && (
          <a href={link}>
            <div className="card-operation">
              {operation}
            </div>
          </a>
        )
      }
    </div>
  );

FeaturedCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
  link: PropTypes.string,
  newTab: PropTypes.bool,
};

export default FeaturedCard;
