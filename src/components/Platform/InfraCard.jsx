import React from 'react';
import './InfraCard.scss';

const InfraCard = ({
  title,
  type,
  number,
}) => (
  <div className={`infra_card-container ${type}`}>
    <p className="mobile_view_size">{title}</p>
    <p className="number">{number}</p>
  </div>
);

export default InfraCard;
