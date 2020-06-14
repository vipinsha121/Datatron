import React from 'react';
import PropTypes from 'prop-types';  // eslint-disable-line

const ImgButton = (props) => {
  const { imgSrc, ...prop } = props;
  const imgBtnStyle = {
    cursor: 'pointer',
    display: 'inline-block',
  };

  return (
    <div
      style={imgBtnStyle}
    >
      <img
        src={imgSrc}
        {...prop}
        alt={imgSrc}
      />
    </div>
  );
};

ImgButton.propTypes = {
  imgSrc: PropTypes.string.isRequired, // eslint-disable-line
};

export default ImgButton;
