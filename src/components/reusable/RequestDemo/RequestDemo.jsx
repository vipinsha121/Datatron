import React from 'react';
import { Link } from 'react-router-dom';
import { GreenButton } from '../Buttons';
import './RequestDemo.scss';

const RequestDemo = () => (
  <div className="request-demo-container">
    <h5 className="get-started-header">Get started with Datatron today</h5>
    <p className="request-demo-text">Request a demo today and learn how Datatron can improve your ML/AI model management.</p>

    <Link to="/resource/contact" style={{ alignSelf: 'center' }}>
      <GreenButton style={{
        width: 160,
        height: 40,
        alignSelf: 'center',
        marginTop: 24,
      }}
      >
        Request a Demo
      </GreenButton>
    </Link>
  </div>
);

export default RequestDemo;
