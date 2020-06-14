import React from 'react';
import { GreenButton } from '../Buttons';
import './DemoForm.scss';

const Form = ({ formHandler }) => (
  <form>
    <div className="input-wrappers">
      <div className="field-label-wrappers">
        <label className="field-labels">First Name</label>
        <input className="field-input" />
      </div>
      <div className="field-label-wrappers">
        <label className="field-labels">Last Name</label>
        <input className="field-input" />
      </div>
    </div>
    <div className="single-field-wrapper">
      <label className="field-labels">Email</label>
      <input
        placeholder="name@company.com"
        type="email"
        className="field-input"
      />
    </div>
    <div className="input-wrappers">
      <div className="field-label-wrappers">
        <label className="field-labels">Job Title</label>
        <input className="field-input" />
      </div>
      <div className="field-label-wrappers">
        <label className="field-labels">Company</label>
        <input className="field-input" />
      </div>
    </div>
    <div className="single-field-wrapper">
      <label className="field-labels">Is there anything we can help you with?</label>
      <input className="field-input text-input-style" type="text" />
    </div>
    <GreenButton onClick={formHandler} style={{ width: 104, height: 44, marginLeft: 'auto' }}>
      Submit
    </GreenButton>
  </form>
);

export default Form;
