import React, { useEffect } from 'react';
import { Industries } from '../../components/reusable/Solutions';
import stockImage from 'assets/images/stock-prices.jpg';  // eslint-disable-line

const BondMarket = () => {
  useEffect(() => {
    // scroll.scrollToTop();
    window.scrollTo(0, 0);
  }, []);

  return (
    <Industries
      industryImage={stockImage}
      type="Use Case"
      industryDescription="Predicting Bond Market movement is a tricky and cut-throat business. If it was easy and straightforward, most data scientists who develop prediction algorithms would be rich already. Learn how Datatron's own algorithms helped a large financial institution gain the competitive edge they've always wanted in the Bond Market."
      industryName="Bond Market"
    />
  );
};

export default BondMarket;
