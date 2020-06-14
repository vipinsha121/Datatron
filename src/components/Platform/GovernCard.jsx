import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';  // eslint-disable-line

import './GovernCard.scss';

const GovernCard = ({
  imgSrc,
  title,
  descArray,
  position,
}) => {
  if (position === 'left') {
    return (
      <Row className="govern_card-container mobile_layout--reverse">
        <Col md="6" className="govern_card-content">
          <div className="govern_card-title">
            {title}
          </div>
          <ul className="govern_card-desc">
            {
              descArray.map(desc => (
                <li>{desc}</li>
              ))
            }
          </ul>
        </Col>
        <Col md="6" style={{ textAlign: 'center' }}>
          <img src={imgSrc} alt={title} width="100%" />
        </Col>
      </Row>
    );
  }

  return (
    <Row className="govern_card-container">
      <Col md="6" style={{ textAlign: 'center' }}>
        <img src={imgSrc} alt={title} width="100%" />
      </Col>
      <Col md="6" className="govern_card-content">
        <div className="govern_card-title">
          {title}
        </div>
        <ul className="govern_card-desc">
          {
            descArray.map(desc => (
              <li>{desc}</li>
            ))
          }
        </ul>
      </Col>
    </Row>
  );
};

GovernCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default GovernCard;
