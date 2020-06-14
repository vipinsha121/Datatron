import React from "react";
import PropTypes from "prop-types"; // eslint-disable-line
import { Row, Col } from "reactstrap";

import { GreenButton } from "../reusable/Buttons";

import "./CompanyItem.scss";

const CompanyItem = ({
  logo,
  logoStyle,
  namePng,
  nameTxt,
  desc,
  className,
  link
}) => (
  <Row className={className}>
    <Col md="5">
      <img
        className="ImgCompany"
        src={logo}
        alt="company_item_logo"
        style={logoStyle}
      />
    </Col>
    <Col md="7">
      <div className="company_item_desc-wrapper">
        {namePng && <img src={namePng} alt="company_item_name" />}
        <span className="company_item-title">{nameTxt}</span>
        <p className="company_item-desc">{desc}</p>
        <a href={link}>
          <GreenButton
            style={{
              height: 40,
              marginTop: 32,
              fontSize: 16
            }}
          >
            Read More
          </GreenButton>
        </a>
      </div>
    </Col>
  </Row>
);

CompanyItem.propTypes = {
  logo: PropTypes.string.isRequired,
  logoStyle: PropTypes.objectOf({}).isRequired,
  namePng: PropTypes.string.isRequired,
  nameTxt: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default CompanyItem;
