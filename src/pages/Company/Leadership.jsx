import React from 'react';
import PropTypes from 'prop-types';  // eslint-disable-line
import './Leadership.scss';

const Leadership = (props) => {
  const {
    imgSrc,
    name,
    role,
    description,
    education,
  } = props;

  return (
    <div className="leadership__subitem">
      <img
        className="profile__img"
        src={imgSrc}
        alt={name}
      />
      <div className="profile__name">
        {name}
      </div>
      <div className="profile__role">
        {role}
      </div>
      <div className="profile__desc">
        {description}
      </div>
      <div className="profile__education">
        {education}
      </div>
    </div>
  );
};

Leadership.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  education: PropTypes.string.isRequired,
};

export default Leadership;
