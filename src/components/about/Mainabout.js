import React from 'react';
import About from './About';
import Details from './Details';
import EducaionalDetails from './EducationalDetails'
import Footer from '../footer/Footer'
import Additional from './Additional';
import Navbar from '../navbar/Navbar';
import './mainabout.css'

const Mainabout = () => {
  return <div>
    <Navbar/>
      <About/>
      <Details/>
      <Additional/>
      <EducaionalDetails/>
      <Footer/>
  </div>;
};

export default Mainabout;
