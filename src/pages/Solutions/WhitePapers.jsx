import React from "react";
import { Row, Col } from "reactstrap";
import ReactGA from "react-ga";
import LifeCycle from "assets/images/whitepaperimg.png";
import UniqueChallengeImg from "assets/images/whitepaperimg1.png";
import ModelDeploymentImg from "assets/images/whitepaperimg2.png";
import ModelMonitoringImg from "assets/images/whitepaperimg3.png";
import ModelGovernenceImg from "assets/images/whitepaperimg4.png";
import Auditability from "assets/images/whitepaperimg5.png";
import { RequestDemo } from "../../components/reusable/RequestDemo";
import "./WhitePapers.scss";
import PaperCard from "../../components/reusable/PaperCard";
import WhitePaperHeader from "../../components/reusable/Solutions/WhitePaperHeader";

class WhitePaper extends React.PureComponent {
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
                <WhitePaperHeader
                    type="Whitepapers"
                    headerName="SOLUTIONS"
                    description="Join with Datatron experts to explore our product, feature and more"
                />
                <Row className="whitepaper-case-studies">
                    <Col md="6" className="whitepaper-cast-items__wrapper">
                        <PaperCard
                            imgSrc={LifeCycle}
                            details="WHITEPAPER"
                            title="Life Cycle of Machine Learning Models"
                            desc="Learn how Datatron tool utlizes a unique machine learning life Cycle and help teams to mitigate production isks of models."
                            operation="Read Whitepaper"
                        />
                    </Col>

                    <Col md="6" className="whitepaper-cast-items__wrapper">
                        <PaperCard
                            imgSrc={UniqueChallengeImg}
                            details="WHITEPAPER"
                            title="Unique Challenges of Machine Learning Models In Production"
                            desc="In order to solve the challenges in production,it's important to understand the challenges. Let's deep dive into some of the challenges of machine learning models in production."

                        />
                    </Col>

                    <Col md="6" className="whitepaper-cast-items__wrapper">
                        <PaperCard

                            imgSrc={ModelDeploymentImg}
                            details="WHITEPAPER"
                            title="Model Deployment"
                            desc="Learn what model deployment is, the high-level architecture of a model, different methods in deploying a model, and factors to consider when determining your method of deployment."

                        />
                    </Col>

                    <Col md="6" className="whitepaper-cast-items__wrapper">
                        <PaperCard
                            imgSrc={ModelMonitoringImg}
                            details="WHITEPAPER"
                            title="Model Monitoring"
                            desc="Learn what model monitoring is and why it's so important when it comes to productionized models."

                        />
                    </Col>

                    <Col md="6" className="whitepaper-cast-items__wrapper">
                        <PaperCard

                            imgSrc={ModelGovernenceImg}
                            details="WHITEPAPER"
                            title="Model Governance and Management"
                            desc="As we progress ahead there will be a need of trying more models in production where it is important to have a proper model management and gevernance tool in place. Lets deep drive into why model management and governance is important."

                        />
                    </Col>

                    <Col md="6" className="whitepaper-cast-items__wrapper">
                        <PaperCard

                            imgSrc={Auditability}
                            details="WHITEPAPER"
                            title="Auditability and Governance"
                            desc="Let's discuss how model gevernance helps and relates to auditability and regulations for business."

                        />
                    </Col>
                </Row>
                <RequestDemo />
            </div>
        );
    }
}

export default WhitePaper;
