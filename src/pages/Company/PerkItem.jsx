import React from 'react';
import PropTypes from 'prop-types';  // eslint-disable-line
import './PerkItem.scss';

const PerkItem = ({
  iconSrc,
  title,
  desc,
}) => (
    <div className="perk-item__card">
      <div className="perk-item__icon">
        <img src={iconSrc} alt={title} />
      </div>
      <div className="perk-item__card-content">
        <div className="perk-item__card-title">
          {title}
        </div>
        <div className="perk-item__card-desc">
          {desc}
        </div>
      </div>
    </div>
  );

PerkItem.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default PerkItem;
