import React, { useEffect } from 'react';
import { Industries } from '../../components/reusable/Solutions';
import buildingImage from 'assets/images/building.jpg';

const Financial = () => {
  useEffect(() => {
    // scroll.scrollToTop();
    window.scrollTo(0, 0);
  }, []);

  return (
    <Industries
      industryName="Financial"
      industryDescription="Best Global Finance (BGF) is a major financial institution that uses machine learning to predict price movement in government bond futures. To improve their accuracy, they wanted to take advantage of streaming data from live sources, which is increasingly critical in the securities industry. In this case study, learn how Datatron helped BGF incorporate streaming data with historical data to increase predictive accuracy by 7% while reducing model deployment time by a magnitude of 7."
      industryImage={buildingImage}
      type="Industry"
    />
  );
};

export default Financial;
