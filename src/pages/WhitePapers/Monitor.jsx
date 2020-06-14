import React from 'react';
import { Industries } from '../../components/reusable/Solutions';
import monitorImage from 'assets/images/wp-monitoring.png';

const Monitor = () => (
  <Industries
    type="White Paper"
    industryImage={monitorImage}
    industryName="Datatron's Monitoring Module for Machine Learning Models"
    industryDescription="Datatron addresses a significant need for builders of today's enterprise software: close monitoring of production-grade machine-learning models applied to large data sets. Learn more about the different ways of monitoring machine and deep-learning models using Datatron's platform."
  />
);

export default Monitor;
