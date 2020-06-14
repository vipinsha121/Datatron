import React from 'react';
import PropTypes from 'prop-types';  // eslint-disable-line

import './GovernRowCard.scss';

const GovernRowCard = ({
  imgSrc,
  title,
  desc,
}) => (
  <div className="govern-row_card-container">
    <img src={imgSrc} alt={title} className="govern-row_card-img" />
    <div className="govern-row_card-title">
      {title}
    </div>
    <div className="govern-row_card-desc">
      {desc}
    </div>
  </div>
);

GovernRowCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default GovernRowCard;
