import React from 'react'
import Hero from './Hero/Hero';
import Programs from './Programs/Programs'; 
import Plans from './Plans/plans';
import Reasons from './Reasons/Reasons';
import Testimonials from './Testimonials/Testimonials';
import Join from './Join/Join';
import Footer from './Footer/Footer';

const Home = () => {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Plans/>
      <Reasons/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  )
}

export default Home;