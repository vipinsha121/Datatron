import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CardImage.scss';

const CardImage = ({
  image,
  text,
  alt = '',
  url = "",
}) => (
  <div className="card-image-wrapper">
    <Link to={url}>
      <img
        src={image}
        alt={alt}
        className="card-image-style"
      />
      <p className="card-paragraph-style">{text}</p>
    </Link>
  </div>
);

CardImage.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  alt: PropTypes.string,
  url: PropTypes.string,
};

export default CardImage;
