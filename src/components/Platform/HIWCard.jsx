import React from 'react';
import PropTypes from 'prop-types';  // eslint-disable-line
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import './HIWCard.scss';

const HIWCard = ({
  title,
  desc,
  operation,
  link = '',
  imgSrc,
  iconSrc,
  position,
}) => {
  if (position === 'left') {
    return (
      <Row className="dt-hiw_card-container mobile_view-reverse">
        <Col md="5" className="hiw_card-content">
          <div className="hiw_card-title">
            {title}
          </div>
          <div className="hiw_card-desc">
            {desc}
          </div>
          <Link to={link}>
            <div className="hiw_card-link">
              {operation}
            </div>
          </Link>
        </Col>
        <Col md="2" className="hiw_card_icon-container">
          <img src={iconSrc} alt={title} width="96" height="96" className="hiw_card-icon" />
        </Col>
        <Col md="5">
          <img src={imgSrc} alt={`${title}_big`} width="100%" />
        </Col>
      </Row>
    );
  }

  return (
    <Row className="dt-hiw_card-container">
      <Col md="5">
        <img src={imgSrc} alt={`${title}_big`} width="100%" />
      </Col>
      <Col md="2" className="hiw_card_icon-container">
        <img src={iconSrc} alt={title} width="96" height="96" className="hiw_card-icon" />
      </Col>
      <Col md="5" className="hiw_card-content">
        <div className="hiw_card-title">
          {title}
        </div>
        <div className="hiw_card-desc">
          {desc}
        </div>
        <Link to={link}>
          <div className="hiw_card-link">
            {operation}
          </div>
        </Link>
      </Col>
    </Row>
  );
};

HIWCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
  link: PropTypes.string,
  position: PropTypes.string.isRequired,
};

export default HIWCard;
