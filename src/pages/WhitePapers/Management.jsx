import React from 'react';
import { Industries } from '../../components/reusable/Solutions';
import managementImage from 'assets/images/wp-management.png';

const Management = () => (
  <Industries
    type="White Paper"
    industryImage={managementImage}
    industryName="Datatron's Management Module for Machine Learning Models"
    industryDescription="Production-grade Machine-learning models must be managed properly in order to benefit from their on-going utility. Learn more about the features of Datatron's model management module which facilitates the easy handling of deployed machine- and deep-learning models in production."
  />
);

export default Management;
