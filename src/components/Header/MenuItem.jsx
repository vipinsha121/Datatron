import React from 'react';
import PropTypes from 'prop-types';  // eslint-disable-line
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
  const {
    menu,
    active,
    to,
    onMouseEnter,
    ...componentProps
  } = props;

  const handleMouseEnter = () => {
    onMouseEnter(`${to.split('/')[0]}`);
  };

  return (
    <Link to={`/${to}`} style={{ height: '80px' }}>
      <div
        className={active ? 'dt-header-menu-item-active' : 'dt-header-menu-item'}
        onMouseEnter={handleMouseEnter}
        {...componentProps}
        role="button"
        tabIndex="0"
      >
        <span>{menu}</span>
      </div>
    </Link>
  );
};

MenuItem.propTypes = {
  menu: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
};

export default MenuItem;
