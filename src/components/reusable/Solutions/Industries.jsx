import React from "react";
import { Row, Col } from "reactstrap";
import "./Solutions.scss";
import PropTypes from "prop-types"; //eslint-disable-line
import ContactForm from "../ContactForm";

const Industries = ({
  industryName,
  industryDescription,
  industryImage,
  type
}) => (
  <div className="solutions-container">
    <Row className="solutions__wrapper">
      <Col md="6" className="solutions-description__wrapper">
        <h3 className="sections-wrapper-h3">{type}</h3>
        <h5 className="sections-wrapper-h5">{industryName}</h5>
        <p className="sections-wrapper-paragraph">{industryDescription}</p>
        <img
          src={industryImage}
          alt="Finance Building"
          className="mobile-image_view"
        />
        <ContactForm />
      </Col>
      <Col md="6" className="solutions-image__wrapper">
        <img
          id="solutionInnerimg"
          src={industryImage}
          alt="Finance Building"
          className="image-style"
        />
      </Col>
    </Row>
  </div>
);

Industries.propTypes = {
  industryName: PropTypes.string.isRequired,
  industryDescription: PropTypes.string.isRequired,
  industryImage: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Industries;
