import React from 'react';
import PropTypes from 'prop-types';  //eslint-disable-line
import './IndustryHeader.scss';


const IndustryHeader = ({
  type,
  headerName,
  description,
}) => (
  <div className="industry-header">
    <h5 className="industry-header-h5">{headerName}</h5>
    <h3 className="industry-header-h3">{type}</h3>
    <p className="industry-header-paragraph">
      {description}
    </p>
  </div>
);

IndustryHeader.propTypes = {
  type: PropTypes.string.isRequired,
  headerName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default IndustryHeader;
