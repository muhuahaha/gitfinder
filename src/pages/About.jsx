import React from 'react';
import NavbarTest from '../components/layout/NavbarTest';
import { Counter } from '../features/counter/Counter';

function About() {
  return (
    <div>
      <NavbarTest />
      <Counter />
    </div>
  );
}

export default About;
