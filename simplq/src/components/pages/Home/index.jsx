import React, { useEffect } from 'react';
import { BenefitsInfo, HowToCreate, HowToJoin, ExtraInfo } from './StaticInfos';
import LandingPage from './LandingPage';
import { smoothScrollToHomePageTop } from '../../common/utilFns';

const Home = () => {
  // Scroll to top whenever home page is mounted
  useEffect(smoothScrollToHomePageTop, []);
  return (
    <>
      <LandingPage />
      <BenefitsInfo />
      <HowToCreate />
      <HowToJoin />
      <ExtraInfo />
    </>
  );
};

export default Home;
