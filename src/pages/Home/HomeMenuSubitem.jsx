import React from "react";
import PropTypes from "prop-types"; // eslint-disable-line
import { Link } from "react-router-dom";

import "./HomeMenuSubitem.scss";

const HomeMenuSubitem = ({ iconSrc, title, description, link }) => (
  <div className="home-menu_subitem__container">
    <img src={iconSrc} alt="title" />
    <div className="title">{title}</div>
    <div className="description">{description}</div>
    <div className="spacer" />
    <div className="link">
      <Link to={link}>{"Learn More >"}</Link>
    </div>
  </div>
);

HomeMenuSubitem.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default HomeMenuSubitem;
