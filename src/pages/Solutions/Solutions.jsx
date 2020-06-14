import React from "react";
import { Row, Col } from "reactstrap";
import ReactGA from "react-ga";
import telecomImage from "assets/images/telecom.png"; //eslint-disable-line
import financial from "assets/images/financial.png"; //eslint-disable-line
import logistics from "assets/images/logistic.png"; //eslint-disable-line
import { IndustryHeader } from "../../components/reusable/Solutions";
import { RequestDemo } from "../../components/reusable/RequestDemo";
import FeaturedCard from "../../components/reusable/FeaturedCard";
import "./solutions.scss";

class Solutions extends React.PureComponent {
  componentDidMount() {
    // scroll.scrollToTop();
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      ReactGA.set({ page: this.props.location.pathname });
      ReactGA.pageview(this.props.location.pathname);
    }
  }

  render() {
    return (
      <div className="solutions-homepage-container">
        <IndustryHeader
          type="Industries"
          headerName="SOLUTIONS"
          description="Datatron’s ML platform makes sense for industries that rely on fleet-footed, actionable predictions based on vast historical and real-time data."
        />
        <Row className="industry-case-studies">
          <Col md="6" className="industry-cast-items__wrapper">
            <FeaturedCard
              operation="Case Study >"
              imgSrc={telecomImage}
              title="Telecommunication"
              desc="Learn how we helped a global telecom company more effectively target their customers by refining their machine learning models to predict taste and price sensitivity, and detect customer churn and model decay."
              link="/solution/industry/telecom"
            />
          </Col>

          <Col md="6" className="industry-cast-items__wrapper">
            <FeaturedCard
              operation="Case Study >"
              imgSrc={financial}
              title="Financial"
              desc="Understand how Datatron helped a major financial institution automate machine learning model functions to significantly improve their ability to predict price movement in government bonds."
              link="/solution/industry/financial"
            />
          </Col>

          <Col md="6" className="industry-cast-items__wrapper">
            <FeaturedCard
              operation="Case Study >"
              imgSrc={logistics}
              title="Logistics"
              desc="See how creating a robust data science infrastructure for an international shipping and logistics customer optimized their ability to predict demand, balance staffing, assess pricing, and control for weather and other variables."
              link="/solution/industry/logistics"
            />
          </Col>
        </Row>
        <RequestDemo />
      </div>
    );
  }
}

export default Solutions;
