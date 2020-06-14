import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';  //eslint-disable-line

const CaseStudy = ({
  imageSrc,
  imageAlt = '',
  industryType,
  industryThumbnail,
  url,
  renderedIn = ""
}) => (
  <div className="case-study-wrapper">
    <img
      src={imageSrc}
      alt={imageAlt}
      className="landing-page-images"
    />
    <h5 className="industry-type">{industryType}</h5>
    <p className="industry-thumbnail">{industryThumbnail}</p>
    <Link to={url}>
      <button type="button" className="case-study-link">
        {renderedIn === 'Use Cases' ? 'Learn More >' : 'Case Study >'}
      </button>
    </Link>
  </div>
);

CaseStudy.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  industryThumbnail: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  industryType: PropTypes.string.isRequired,
};

export default CaseStudy;
