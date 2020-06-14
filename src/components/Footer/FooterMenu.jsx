import React from 'react';
import PropTypes from 'prop-types';  // eslint-disable-line
import { Link } from 'react-router-dom';
import { menuItems } from '../../helpers/constants';

const FooterMenu = (props) => {
  const { menu } = props;


  return (
    <div className="dt-footer-menu-item">
      <div className="dt-footer-menu-item-title">
        <span>{menuItems[menu].name}</span>
      </div>
      <div className="dt-footer-menu-item-links">
        <ul>
          {
            menuItems[menu].submenu.map((item, index) => {
              if (item.route === 'blog') {
                return (
                  <li key={index.toString()}>
                    <a href="https://blog.datatron.com" rel="noopener noreferrer" target="_blank">{item.title}</a>
                  </li>
                );
              }
              return (
                <li key={index.toString()}>
                  <Link to={`/${menu}/${item.route}`}>{item.title}</Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
};

FooterMenu.propTypes = {
  menu: PropTypes.string.isRequired,
};

export default FooterMenu;
