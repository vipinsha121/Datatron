import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

import DesktopHeader from '../components/Header';
import MobileHeader from '../components/mobile/Header';
import DesktopFooter from '../components/Footer';
import Home from '../pages/Home';

import {
  HIW as HIWComponent,
  ModelGovernance,
  ModelCatalog,
  ModelMonitoring,
  ModelOverview,
  ModelWorkflow,
} from '../pages/Platforms';

import {
  PrivacyPolicy,
  TermsService,
} from '../pages/Resources';

import {
  Solutions,
  UseCase,
  Telecommunication,
  Financial,
  Logistics,
  DynamicPricing,
  DemandForecast,
  BondMarket,
} from '../pages/Solutions';

import Partners from '../pages/Partners';

import {
  ResourcesHome,
  Monitor,
  Management,
  Deployment,
  Governance,
} from '../pages/WhitePapers';

import {
  Company,
  Career,
  Press,
  Testimonial
} from '../pages/Company';

import { Contact } from '../pages/Contact';
import ModelDeployment from '../pages/Platforms/ModelDeployment';
import ModelManagement from '../pages/Platforms/ModelManagement';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowSize: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.resizeHandler);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      ReactGA.set({ page: this.props.location.pathname })
      ReactGA.pageview(this.props.location.pathname)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler);
  }

  resizeHandler = () => {
    const windowSize = window.innerWidth;
    this.setState({
      windowSize,
    });
  }

  render() {
    const { windowSize } = this.state;
    const isMobile = windowSize <= 576;

    return (
      <div>
        {isMobile && <MobileHeader />}
        {!isMobile && <DesktopHeader />}
        <Switch>
          <Route exact path="/platform/hiw" component={HIWComponent} />
          <Route exact path="/platform/model-governance" component={ModelGovernance} />
          <Route exact path="/platform/deployment" component={ModelDeployment} />
          <Route exact path="/platform/model-management" component={ModelManagement} />
          <Route exact path="/platform/catalog" component={ModelCatalog} />
          <Route exact path="/platform/monitoring" component={ModelMonitoring} />
          <Route exact path="/platform/overview" component={ModelOverview} />
          <Route exact path="/platform/workflow" component={ModelWorkflow} />
          <Route exact path="/solution/industry" component={Solutions} />
          <Route exact path="/solution/usecase" component={UseCase} />
          <Route exact path="/solution/industry/telecom" component={Telecommunication} />
          <Route exact path="/solution/industry/financial" component={Financial} />
          <Route exact path="/solution/industry/logistics" component={Logistics} />
          <Route exact path="/solution/usecase/dynamic-pricing" component={DynamicPricing} />
          <Route exact path="/solution/usecase/demand-forecast" component={DemandForecast} />
          <Route exact path="/solution/usecase/bond-market" component={BondMarket} />
          <Route exact path="/resource" component={ResourcesHome} />
          <Route exact path="/resources/deployment" component={Deployment} />
          <Route exact path="/resources/management" component={Management} />
          <Route exact path="/resources/governance" component={Governance} />
          <Route exact path="/resources/monitor" component={Monitor} />
          <Route exact path="/company/about" component={Company} />
          <Route exact path="/company/career" component={Career} />
          <Route exact path="/company/press" component={Press} />
          <Route exact path="/company/testimonial" component={Testimonial} />
          <Route exact path="/partners" component={Partners} />
          <Route exact path="/resource/contact" component={Contact} />
          <Route exact path="/resource/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/resource/terms" component={TermsService} />
          <Route exact path="/company/contact" component={Contact} />
          <Route
            path="/"
            render={props => <Home {...props} isMobile={isMobile} />}
          />
        </Switch>
        <DesktopFooter />
      </div>
    );
  }
}

export default withRouter(App);
