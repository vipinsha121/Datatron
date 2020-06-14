import React from 'react';
import PropTypes from 'prop-types';  // eslint-disable-line
import './Advisor.scss';

const Advisor = (props) => {
  const {
    name,
    role,
    history,
  } = props;

  return (
    <div className="advisor__component">
      <div className="advisor__name">
        {name}
      </div>
      <div className="advisor__role">
        {role}
      </div>
      <div className="advisor__history">
        {history}
      </div>
    </div>
  );
};

Advisor.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  history: PropTypes.string.isRequired,
};

export default Advisor;
