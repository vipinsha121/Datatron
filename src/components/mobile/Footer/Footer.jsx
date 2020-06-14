import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { menuItems } from "../../../helpers/constants";
import Logo from "assets/datatron-logo.svg";

import { ImgButton } from "../../reusable/Buttons";

import "./Footer.scss";

class Footer extends Component {
  state = {
    selectedMenu: "platform"
  };

  handleClick = selectedMenu => {
    this.setState({ selectedMenu });
  };

  render() {
    const { selectedMenu } = this.state;

    return (
      <div className="mobile-footer__wrapper">
        <Row className="mobile-footer__logo">
          <Link to="/">
            <ImgButton imgSrc={Logo} width={100} />
          </Link>
        </Row>
        <Row className="mobile-footer__content">
          <Col xs="3" className="mobile-footer__content__sidebar">
            <div
              onClick={() => this.handleClick("platform")}
              className={
                selectedMenu === "platform"
                  ? "footer__sidebar-item active__start"
                  : "footer__sidebar-item"
              }
            >
              Platform
            </div>
            <div
              onClick={() => this.handleClick("solution")}
              className={
                selectedMenu === "solution"
                  ? "footer__sidebar-item active"
                  : "footer__sidebar-item"
              }
            >
              Solutions
            </div>
            <div
              onClick={() => this.handleClick("company")}
              className={
                selectedMenu === "company"
                  ? "footer__sidebar-item active"
                  : "footer__sidebar-item"
              }
            >
              Company
            </div>
            <div
              onClick={() => this.handleClick("resource")}
              className={
                selectedMenu === "resource"
                  ? "footer__sidebar-item active__last"
                  : "footer__sidebar-item"
              }
            >
              Resources
            </div>
          </Col>
          <Col xs="9" className="mobile-footer__content__menu">
            <Row>
              {menuItems[selectedMenu].submenu.map(item => {
                if (item.route === "blog") {
                  return (
                    <Col
                      xs={selectedMenu === "platform" ? "6" : "12"}
                      className="mobile-footer__content__item"
                    >
                      <a
                        href="https://blog.datatron.com"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {item.title}
                      </a>
                    </Col>
                  );
                }
                return (
                  <Col
                    xs={selectedMenu === "platform" ? "6" : "12"}
                    className="mobile-footer__content__item"
                  >
                    <Link to={`/${selectedMenu}/${item.route}`}>
                      {item.title}
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
        <Row className="mobile-footer__privacy">
          <span>2020 Datatron Technologies, Inc. All Rights Reserved.</span>
          <br />
          <span>Terms of Service Privacy Policy</span>
        </Row>
      </div>
    );
  }
}

export default Footer;
