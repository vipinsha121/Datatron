import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types"; // eslint-disable-line
import { ImgButton, GreenButton } from "../reusable/Buttons";
import MenuBar from "./MenuBar";
import MenuItem from "./MenuItem";
import SolutionMenu from "./dropdown/SolutionMenu";
import PlatformMenu from "./dropdown/PlatformMenu";
import CompanyMenu from "./dropdown/CompanyMenu";
import ResourceMenu from "./dropdown/ResourceMenu";

import Logo from "assets/datatron-logo.svg"; //eslint-disable-line
import "./Header.css";

class Header extends Component {
  static propTypes = {
    match: PropTypes.instanceOf(Object).isRequired,
    location: PropTypes.instanceOf(Object).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      hoveredItem: null
    };
  }

  componentWillReceiveProps() {
    this.setState({
      hoveredItem: null
    });
  }

  handleMouseEnter = hoveredItem => {
    this.setState({
      hoveredItem
    });
  };

  handleMouseLeave = () => {
    this.setState({
      hoveredItem: null
    });
  };

  render() {
    const {
      location: { pathname }
    } = this.props;
    const { hoveredItem } = this.state;
    return (
      <div
        className={
          !hoveredItem
            ? "dt-header"
            : "dt-header dt-header__background__hovered"
        }
      >
        <div className="dt-header-container">
          <div className="dt-header-content">
            <Link to="/">
              <ImgButton imgSrc={Logo} width={133} />
            </Link>

            <MenuBar>
              <MenuItem
                menu="Platform"
                to="platform/overview"
                onMouseEnter={this.handleMouseEnter}
                active={pathname.split("/")[1] === "platform"}
                {...this.props}
              />

              <MenuItem
                menu="Solutions"
                to="solution/industry"
                onMouseEnter={this.handleMouseEnter}
                active={pathname.split("/")[1] === "solution"}
                {...this.props}
              />

              <MenuItem
                menu="Company"
                to="company/about"
                onMouseEnter={this.handleMouseEnter}
                active={pathname.split("/")[1] === "company"}
                {...this.props}
              />

              <MenuItem
                menu="Partners"
                to="partners"
                onMouseEnter={this.handleMouseEnter}
                active={pathname.split("/")[1] === "partners"}
                {...this.props}
              />

              <MenuItem
                menu="Resources"
                to="resource"
                onMouseEnter={this.handleMouseEnter}
                active={pathname.split("/")[1] === "resource"}
                {...this.props}
              />

              <Link to="/resource/contact">
                <GreenButton>Request a Demo</GreenButton>
              </Link>
            </MenuBar>
          </div>
        </div>
        <div>
          <SolutionMenu
            onMouseLeave={this.handleMouseLeave}
            className={
              hoveredItem === "solution"
                ? "header-menu__show"
                : "header-menu__hidden"
            }
          />

          <PlatformMenu
            onMouseLeave={this.handleMouseLeave}
            className={
              hoveredItem === "platform"
                ? "header-menu__show"
                : "header-menu__hidden"
            }
          />

          <CompanyMenu
            onMouseLeave={this.handleMouseLeave}
            className={
              hoveredItem === "company"
                ? "header-menu__show"
                : "header-menu__hidden"
            }
          />

          <ResourceMenu
            onMouseLeave={this.handleMouseLeave}
            className={
              hoveredItem === "resource"
                ? "header-menu__show"
                : "header-menu__hidden"
            }
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
