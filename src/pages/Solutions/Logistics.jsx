import React, { useEffect } from "react";
import { Industries } from "../../components/reusable/Solutions";
import shippingImage from "assets/images/shipping-containers.jpg";

const Logistics = () => {
  useEffect(() => {
    // scroll.scrollToTop();
    window.scrollTo(0, 0);
  }, []);

  return (
    <Industries
      industryName="Logistics"
      industryDescription="Best Global Shipping (BGS) is a shipping and logistics firm whose profit margins depend on the accuracy with which they predict the demand, balance, staffing, assess pricing, and control for recalls and natural calamities. In this case study, learn how Datatron allowed BGS to move away from using legacy systems and intuition to determine resource deployment by automating and scaling model functions to increase revenue."
      industryImage={shippingImage}
      type="Industry"
    />
  );
};

export default Logistics;
