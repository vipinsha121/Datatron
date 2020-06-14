import React, { useEffect } from "react";
import { Industries } from "../../components/reusable/Solutions";
import telecomImage from "assets/images/telecom.png";

const Telecommunications = () => {
  useEffect(() => {
    // scroll.scrollToTop();
    window.scrollTo(0, 0);
  }, []);

  return (
    <Industries
      industryName="Telecommunications"
      industryDescription="Best Global Telecom (BGT) is a major telecom provider with a sophisticated marketing strategy. However, problems with software patches, bugs, and inconsistent frameworks underlying their ML models often caused models to decay or run out of sequence. In this case, study, learn how Datatron helped BGT automate model deployment and monitoring to save time and revenue and free up BGTs data scientists to innovate instead of reacting."
      industryImage={telecomImage}
      type="Industry"
    />
  );
};

export default Telecommunications;
