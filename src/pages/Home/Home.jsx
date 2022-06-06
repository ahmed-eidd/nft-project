import React from 'react';
import Header from './Header/Header';
import HowItWorks from './HowItWorks/HowItWorks';
import OurTools from './OurTools/OurTools';
import SomeFeatures from './SomeFeatures/SomeFeatures';
import WhoWeAre from './WhoWeAre/WhoWeAre';

const Home = () => {
  return (
    <>
      <Header />
      <WhoWeAre />
      <OurTools />
      <HowItWorks />
      <SomeFeatures />
    </>
  );
};

export default Home;
