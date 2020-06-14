import React from 'react';
import { Link } from 'react-router-dom';
import EnvelopeIcon from 'assets/images/Icon/Dark/Mail.svg';  //eslint-disable-line
import './MenuContactUs.scss';

const MenuContactUs = () => (
  <div className="dropdown-menu__contact">
    <div className="content">
      <div className="contact__desc">
        Talk with one of our experts and see how Datatron can help your team or business.
      </div>
      <div className="contact__link">
        <Link to="/resource/contact">
          {'Get in touch >'}
        </Link>
      </div>
    </div>
    <div className="icon">
      <img
        src={EnvelopeIcon}
        alt="envelope"
      />
    </div>
  </div>
);

export default MenuContactUs;
