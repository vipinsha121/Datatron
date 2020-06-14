import React from 'react';
import { Industries } from '../../components/reusable/Solutions';
import governanceImage from 'assets/images/wp-governance.png';

const Governance = () => (
  <Industries
    type="White Paper"
    industryName="Model Governance and Datatron's Platform"
    industryImage={governanceImage}
    industryDescription="Datatron is bringing fundamental change to machine learning Model governance with automation and efficiency. Fortune 500 companies endure the drudgery of ML models in production, as auditing, reporting and compliance processes are manual and time-consuming. Learn more about how Datatron grants users total control over the behaviour of their ML models by automating the entire operationalization process."
  />
);

export default Governance;
