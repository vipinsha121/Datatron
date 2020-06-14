import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { GreenButton } from '../Buttons';
import './ContactForm.scss';

const isEmailValid = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const trimSpace = (text) => {
  return text.replace(/\s/g, '');
};

class PartnerForm extends Component {
  state = {
    emailValidation: true,
    titleValidation: true,
    companyValidation: true,
    email: '',
    job_title: '',
    company: '',
  }

  constructor(props) {
    super(props);
    this.contactForm = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      email,
      job_title,
      company,
    } = this.state;

    let validationChecking = true;

    if (!trimSpace(job_title)) {
      validationChecking = false;
      this.setState({
        titleValidation: false,
      });
    }

    if (!trimSpace(company)) {
      validationChecking = false;
      this.setState({
        companyValidation: false,
      });
    }

    if (!isEmailValid(email)) {
      validationChecking = false;
      this.setState({
        emailValidation: false,
      });
    }

    if (validationChecking) {
      document.getElementById('partner_form-contact').submit();
    }
  }

  handleInput = (e) => {
    this.setState({
      emailValidation: true,
      titleValidation: true,
      companyValidation: true,
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const {
      emailValidation,
      titleValidation,
      companyValidation,
    } = this.state;

    return (
      <form id="partner_form-contact" action="https://formspree.io/team@datatron.io" method="POST">
        <div className="contact_form-container">
          <Row className="contact_form-row">
            <Col md="12" className="contact_form-col">
              <label htmlFor="email" className="contact_form-label">Email*</label>
              <input
                required
                type="text"
                name="email"
                id="email"
                placeholder="name@company.com"
                className="contact_form-input"
                onChange={this.handleInput}
                style={!emailValidation ? { borderColor: 'red', borderStyle: 'solid', borderWidth: 1 } : {}}
              />
              {
                !emailValidation && <span style={{ color: 'red', fontSize: 12 }}>Please input valid email address</span>
              }
            </Col>
          </Row>
          <Row className="contact_form-row">
            <Col md="6" className="contact_form-col">
              <label htmlFor="job_title" className="contact_form-label">Job Title*</label>
              <input
                required
                type="text"
                name="job_title"
                id="job_title"
                className="contact_form-input"
                onChange={this.handleInput}
                style={!titleValidation ? { borderColor: 'red', borderStyle: 'solid', borderWidth: 1 } : {}}
              />
              {
                !titleValidation && <span style={{ color: 'red', fontSize: 12 }}>Please fill in this input field</span>
              }
            </Col>
            <Col md="6" className="contact_form-col">
              <label htmlFor="company" className="contact_form-label">Company*</label>
              <input
                required
                type="text"
                name="company"
                id="company"
                className="contact_form-input"
                onChange={this.handleInput}
                style={!companyValidation ? { borderColor: 'red', borderStyle: 'solid', borderWidth: 1 } : {}}
              />
              {
                !companyValidation && <span style={{ color: 'red', fontSize: 12 }}>Please fill in this input field</span>
              }
            </Col>
          </Row>
          <Row className="contact_form-row">
            <Col md="12" className="contact_form-col">
              <label htmlFor="website_link" className="contact_form-label">Company Website</label>
              <input
                type="text"
                name="website_link"
                id="website_link"
                className="contact_form-input"
                onChange={this.handleInput}
              />
            </Col>
          </Row>
          <Row className="contact_form-row">
            <Col md="12" className="contact_form-col">
              <label htmlFor="description" className="contact_form-label">Let us know more about yourself.</label>
              <textarea name="description" id="description" rows="5" className="contact_form-input" />
            </Col>
          </Row>
          <Row className="contact_form-row">
            <Col md="12" className="contact_form-col">
              <GreenButton style={{ width: 104, marginTop: 25, marginLeft: 'auto', fontSize: 16 }} onClick={this.handleSubmit}>
                Send
              </GreenButton>
            </Col>
          </Row>
        </div>
      </form>
    );
  }
}

export default PartnerForm;
