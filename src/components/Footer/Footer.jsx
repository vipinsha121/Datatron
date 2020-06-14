import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import FooterMenu from "./FooterMenu";
import { ImgButton } from "../reusable/Buttons";

import Logo from "assets/datatron-logo.svg"; //eslint-disable-line
import "./Footer.scss";

const Footer = () => (
  <div className="dt-footer-container">
    <Row className="dt-footer-content">
      <Col md={4} xs={12} sm={12}>
        <Link to="/">
          <ImgButton imgSrc={Logo} className="dt-footer-content__img" />
        </Link>
      </Col>
      <Col md={2} xs={6} sm={3}>
        <FooterMenu menu="platform" />
      </Col>
      <Col md={2} xs={6} sm={3}>
        <FooterMenu menu="solution" />
      </Col>
      <Col md={2} xs={6} sm={3}>
        <FooterMenu menu="company" />
      </Col>
      <Col md={2} xs={6} sm={3}>
        <FooterMenu menu="resource" />
      </Col>
    </Row>

    <div className="dt-footer-bottom">
      <span>&#9400;2020 Datatron Technologies, Inc. All Rights Reserved.</span>
    </div>
  </div>
);

export default Footer;
