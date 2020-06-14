import React from 'react';
import PropTypes from 'prop-types';  // eslint-disable-line

import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import './WhitePaperCard.scss';

const WhitePaperCard = ({
  title,
  description,
  link,
  img,
}) => (
    <Row className="deployment-white_paper-container">
      <Col ms="7" className="white_paper-content">
        <div className="white_paper-category">WHITE PAPER</div>
        <div className="white_paper-title">
          {title}
        </div>
        <div className="white_paper-desc">
          {description}
        </div>
        <div className="white_paper-action">
          <Link to={link}>
            {'Get it now >'}
          </Link>
        </div>
      </Col>
      <Col md={{ size: 4, offset: 1 }} className="book-img">
        <img src={img} alt="book" className="img" />
      </Col>
    </Row>
  );

WhitePaperCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default WhitePaperCard;
