import React from 'react';
import PropTypes from 'prop-types';  //eslint-disable-line
import './WhitePaperHeader.scss';


const WhitePaperHeader = ({
    type,
    headerName,
    description,
}) => (
        <div className="whitepaper-header">
            <h5 className="whitepaper-header-h5">{headerName}</h5>
            <h3 className="whitepaper-header-h3">{type}</h3>
            <p className="whitepaper-header-paragraph">
                {description}
            </p>
        </div>
    );

WhitePaperHeader.propTypes = {
    type: PropTypes.string.isRequired,
    headerName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default WhitePaperHeader;
