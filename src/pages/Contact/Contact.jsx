import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { GreenButton } from '../../components/reusable/Buttons';

import './Contact.scss';
import ContactForm from '../../components/reusable/ContactForm';

const Contact = () => {
  const [state, setState] = useState({ submitted: false });

  const submitForm = () => {
    setState({ ...state, submitted: !state.submitted });
  };

  useEffect(() => {
    // scroll.scrollToTop();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dt-contact__container">
      <Row className="dt-contact__content">
        {
          !state.submitted && (
            <Col xl={{ size: 5, offset: 2 }} className="form-wrapper">
              <h5 className="contact-us">Contact Us</h5>
              <h3 className="get-in-touch">
                {"Let's get in touch"}
              </h3>
              <p className="fill-form">
                {"Fill in the form below and we'll get back to you as soon as possible."}
              </p>
              <ContactForm formHandler={submitForm} />
            </Col>
          )
        }

        {
          state.submitted && (
            <Col xl={{ size: 5, offset: 2 }} className="thanks-wrapper">
              <h5 className="thanks-text">Thanks!</h5>
              <p className="appreciate-text">
                {"We appreciate that you reached out. We've received your message and we'll get back to you as soon as possible"}
              </p>
              <GreenButton onClick={submitForm} style={{ width: 104, height: 44 }}>
                Go back
              </GreenButton>
            </Col>
          )
        }

        <Col xl="3" className="address-container">
          <h4 className="addresses">Addresses</h4>
          <hr className="divider-style" />
          <div>
            <h5 className="mountain-h5">Mountain View, CA (HQ)</h5>
            <p className="main-address">5150 El Camino Real, Suite C-20</p>
            <p className="main-address margin-bottom-20">Los Altos, CA 94022</p>
            <a className="main-address" href="https://www.google.com/maps/place/201+San+Antonio+Cir+%23205,+Mountain+View,+CA+94040,+USA/@37.4066234,-122.1089043,21z/data=!4m13!1m7!3m6!1s0x808fb09fb6b05d71:0x48173d802b1695cd!2s201+San+Antonio+Cir+%23205,+Mountain+View,+CA+94040,+USA!3b1!8m2!3d37.406639!4d-122.1088978!3m4!1s0x808fb09fb6b05d71:0x48173d802b1695cd!8m2!3d37.406639!4d-122.1088978" rel="noopener noreferrer" target="_blank">
              {'Take me there >'}
            </a>
          </div>
          <div>
            <h5 className="mountain-h5">San Francisco, CA (Mailing)</h5>
            <p className="main-address">350 Townsend Street, #204</p>
            <p className="main-address margin-bottom-20">San Francisco, CA 94107</p>
            <a className="main-address" href="https://www.google.com/maps/place/350+Townsend+St+%23204,+San+Francisco,+CA+94107,+USA/@37.7762258,-122.3987401,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7fd430306bb3:0xff01d8f8743e96ff!8m2!3d37.7762258!4d-122.3965514" rel="noopener noreferrer" target="_blank">
              {'Take me there >'}
            </a>
          </div>
          <h5 className="connect">Connect With Us</h5>
          <hr className="divider-style" />
          <div>
            <a href="https://twitter.com/getdatatron">
              <i className="fab fa-twitter icon-style" />
            </a>

            <a href="https://www.linkedin.com/company/datatron-io/">
              <i className="fab fa-linkedin icon-style" />
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
