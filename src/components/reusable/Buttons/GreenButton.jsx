import React from 'react';
import PropTypes from 'prop-types';  // eslint-disable-line
import './GreenButton.scss';

const GreenButton = (props) => {
  const { children, ...componentProps } = props;
  return (
    <button
      className="dt-green-btn"
      {...componentProps}
    >
      <span>{children}</span>
    </button>
  );
};

GreenButton.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GreenButton;
