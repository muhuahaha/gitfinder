import React from 'react';
import PhotoResults from '../components/photos/PhotoResults';
import PhotoSearch from '../components/photos/PhotoSearch';
import CustomHookExample1 from '../components/testing-tw/CustomHookExample1';

function About() {
  return (
    <div>
      <PhotoSearch />
      <PhotoResults />
      <CustomHookExample1 />
    </div>
  );
}

export default About;
