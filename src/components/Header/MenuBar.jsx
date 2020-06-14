import React from 'react';
import PropTypes from 'prop-types';  // eslint-disable-line

const MenuBar = (props) => {
  const { children } = props;
  return (
    <div className="dt-header-menubar">
      {children}
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element])).isRequired,
};

export default MenuBar;
