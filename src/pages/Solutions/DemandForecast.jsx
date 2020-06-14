
import React, { useEffect } from 'react';
import { Industries } from '../../components/reusable/Solutions';
import warehouse from 'assets/images/warehouse.jpeg';

const DemandForecast = () => {
  useEffect(() => {
    // scroll.scrollToTop();
    window.scrollTo(0, 0);
  }, []);

  return (
    <Industries
      industryName="Demand Forecasting"
      industryDescription="Forecasting demand is important when it comes to planning and allocating resources. Inaccurately forecasting demand can be catastrophic. Over-predicting could mean losses from unused allocated resources and under-predicting could mean losses from unfulfilled customer requests. Learn how Datatron uses signals based on multiple models to accurately and efficiently help one company make better decisions for increased profits."
      industryImage={warehouse}
      type="Use Case"
    />
  );
};

export default DemandForecast;
