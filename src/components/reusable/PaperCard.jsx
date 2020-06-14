import React from 'react';
import PropTypes from 'prop-types';  // eslint-disable-line
import { Link } from 'react-router-dom';

import './PaperCard.scss';

const PaperCard = ({
    details,
    imgSrc,
    title,
    desc,
    operation,
    link = '',
    newTab = false,
}) => (
        <div className="paper-card__component">
            <img src={imgSrc} alt={title} width="100%" />
            <div className="page-dateils">
                {details}
            </div>
            <div className="paper-card-title">
                {title}
            </div>

            <div className="paper-card-desc">
                {desc}
            </div>
            {
                newTab && (
                    <a href={link} rel="noopener noreferrer" target="_blank">
                        <div className="paper-card-operation">
                            {operation}
                        </div>
                    </a>
                )
            }
            {
                !newTab && (
                    <a href={link}>
                        <div className="paper-card-operation">
                            {operation}
                        </div>
                    </a>
                )
            }
        </div>
    );

PaperCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    operation: PropTypes.string.isRequired,
    link: PropTypes.string,
    newTab: PropTypes.bool,
};

export default PaperCard;
