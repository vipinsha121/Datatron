import React, { useState, useEffect } from 'react';
import { Industries } from '../../components/reusable/Solutions';
import bart from 'assets/images/bart.png';

const Pricing = () => {
  useEffect(() => {
    // scroll.scrollToTop();
    window.scrollTo(0, 0);
  }, []);

  return (
    <Industries
      industryDescription="Dynamic Pricing is a strategy to adjust service or item prices based on business factors such as demand, supply, competitors, user satisfaction, employee satisfaction, market situation, and company profit. Learn how Datatron's dynamic pricing models helped a global transportation company fulfill customers needs and increase profits."
      industryName="Dynamic Pricing"
      industryImage={bart}
      type="Use Case"
      id=""
    />
  );
};

export default Pricing;
