import React from "react";
import { Row, Col } from "reactstrap";
import ReactGA from "react-ga";
import "./Testimonial.scss";

import FeaturedCard from "../../components/reusable/FeaturedCard";
import { RequestDemo } from "../../components/reusable/RequestDemo";

class Testimonial extends React.PureComponent {
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
      <div className="dt-press__container">
        <div className="press-container__header">
          <div className="press-header__category">TESTIMONIALS</div>
          <div className="press-header__title">Success Stories</div>
        </div>
        <div className="press-container__content">
          <div className="testimonial-content__wrapper">
            <div className="testimonial-content__title">
              What People Are Saying
            </div>

            <div className="container-fluid">
              <Row className="textimonial-row">
                <Col md="6" lg="5" className="textimonial__wrapper">
                  <div className="testimonial-content">
                    <i
                      class="fa fa-quote-left fa-3x fa-pull-left"
                      aria-hidden="true"
                    ></i>
                    <p id="hundred-of-routes">
                      With hundred of routes and thousands of customers,
                      strategizing our resources has become a nightmare. As we
                      continue to globalize, it's difficult to predict
                      historical and real-time data. Through Datatron's
                      platform, we were able to get precise predictions in real
                      time through complex models with insights on early-bird
                      rates with airlines.
                    </p>
                    <p className="testimonial-head">
                      <strong>
                        HEAD OF DATA <br></br>YAMATO
                      </strong>
                    </p>
                  </div>
                </Col>

                <Col md="6" lg="5" className="textimonial__wrapper">
                  <div className="testimonial-content">
                    <i
                      class="fa fa-quote-left fa-3x fa-pull-left"
                      aria-hidden="true"
                    ></i>
                    <p id="hundred-of-routes">
                      Through Datatron's automated platform, we were able to
                      save four full-time people in addition to the business
                      value being created through Datatron's Monitoring Module.
                    </p>
                    <p className="testimonial-head">
                      <strong>
                        HEAD OF INFRASTRUCTURE <br></br>COMCAST COPERATION
                      </strong>
                    </p>
                  </div>
                </Col>
              </Row>

              <Row className="textimonial-row">
                <Col md="6" lg="5" className="textimonial__wrapper">
                  <div className="testimonial-content">
                    <i
                      class="fa fa-quote-left fa-3x fa-pull-left"
                      aria-hidden="true"
                    ></i>
                    <p id="hundred-of-routes">
                      It's challenging to manage models, especially when there
                      is a high rate of model growth each year. With Datatron,
                      we were able to scale, manage and monitor all of our
                      models on one centralized platform.
                    </p>
                    <p className="testimonial-head">
                      <strong>
                        HEAD OF DATA SCIENCE TEAM<br></br>DOMINO'S PIZZA
                      </strong>
                    </p>
                  </div>
                </Col>

                <Col md="6" lg="5" className="textimonial__wrapper">
                  <div className="testimonial-content">
                    <i
                      class="fa fa-quote-left fa-3x fa-pull-left"
                      aria-hidden="true"
                    ></i>
                    <p id="hundred-of-routes">
                      Whenever our machine-learning models began
                      to decay in performance, we had no idea until
                      businesses came to us and mentioned that
                      things weren’t looking right. Datatron’s platform
                      helped us make proper decisions ahead of time
                      by giving alerts for model decay, bias, and anomaly
                      detection of models.
                    </p>
                    <p className="testimonial-head">
                      <strong>
                        HEAD OF DATA <br></br>TOP SWISS BANK
                      </strong>
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div />

            <RequestDemo />
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;