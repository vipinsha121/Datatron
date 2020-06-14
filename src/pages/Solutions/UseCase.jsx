import React from 'react';
import ReactGA from 'react-ga';
import { Row, Col } from 'reactstrap';
import { IndustryHeader } from '../../components/reusable/Solutions';
import { RequestDemo } from '../../components/reusable/RequestDemo';
import warehouse from '../../assets/images/warehouse.png';
import stockPrice from '../../assets/images/stockPrice.png';
import bart from 'assets/images/bart.png';  // eslint-disable-line
import './solutions.scss';
import FeaturedCard from '../../components/reusable/FeaturedCard';

class UseCase extends React.PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      ReactGA.set({ page: this.props.location.pathname })
      ReactGA.pageview(this.props.location.pathname)
    }
  }

  render() {
    return (
      <div className="solutions-homepage-container">
        <IndustryHeader
          type="Use Cases"
          headerName="SOLUTIONS"
          description="Effectively utilizing large-scale and long-term enterprise data requires comprehensive data strategy and infrastructure that empowers engineers to join the data science community."
        />
        <Row className="industry-case-studies">
          <Col md="6" className="industry-cast-items__wrapper">
            <FeaturedCard
              operation="Learn More >"
              imgSrc={bart}
              title="Dynamic Pricing"
              desc="Good machine learning is the engine that drives an enterprise's ability to process data signals, test hunches, and adapt to consumer's preferences and expectations in real-time."
              link="/solution/usecase/dynamic-pricing"
            />
          </Col>

          <Col md="6" className="industry-cast-items__wrapper">
            <FeaturedCard
              operation="Learn More >"
              imgSrc={warehouse}
              title="Demand Forecasting"
              desc="Become more effective at predicting demand by using machine learning to digest and utilize your historical data along with the real-time, fluctuating variables you know affects demand for your product."
              link="/solution/usecase/demand-forecast"
            />
          </Col>
        </Row>
        <Row className="industry-case-studies">
          <Col md="6" className="industry-cast-items__wrapper">
            <FeaturedCard
              operation="Learn More >"
              imgSrc={stockPrice}
              title="Bond Market Description"
              desc="Datatron's standardized machine learning platform can help market watchers process investing data and complex streaming data, such as social media inputs and live market data, to meaningfully improve market movement predictions."
              link="/solution/usecase/bond-market"
            />
          </Col>
        </Row>
        <RequestDemo />
      </div>
    );
  }
} 

export default UseCase;
