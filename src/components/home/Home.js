import React from 'react';
import Footer from '../footer/Footer';
import Helper from '../helper/Helper';
import Header from '../header/Header';
import Self from '../slef conditions/Self';
import Navbar from '../navbar/Navbar'

const Home = () => {
  return <div>
       <Navbar/>
      <Header/>
      {/* <Self/> */}
       <Helper/>
       <Footer/>
  </div>;
};

export default Home;
