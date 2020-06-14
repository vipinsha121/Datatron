import React from 'react';
import { Industries } from '../../components/reusable/Solutions';
import deploymentImage from 'assets/images/wp-deployment.png';

const Deployment = () => (
  <Industries
    industryImage={deploymentImage}
    type="White Paper"
    industryName="Datatron's Deployment Module for Machine Learning Models"
    industryDescription="Production-grade machine-learning models require a strong deployment framework in order to reduce the time it takes to iterate a model faster, deploy new features quickly, and train on incoming data faster. Learn more about Datatron's deployment module, which facilitates deploying machine-learning and deep-learning models to production easily."
  />
);

export default Deployment;
