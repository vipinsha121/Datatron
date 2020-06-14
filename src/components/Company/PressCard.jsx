import React from "react";
import "./PressCard.scss";

const PressCard = ({ imgSrc, title, desc, link }) => (
  <a href={link} rel="noopener noreferrer" target="_blank">
    <div className="press-card__container">
      <div className="cardImg">
        <img src={imgSrc} alt="title" width="100%" />
      </div>
      <div className="press-card__title">{title}</div>
      <div className="press-card__desc">{desc}</div>
    </div>
  </a>
);

export default PressCard;
