import React from 'react'
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs'; 
import Plans from './Components/Plans/plans';
import Reasons from './Components/Reasons/Reasons';
import Testimonials from './Components/Testimonials/Testimonials';
import './App.css';


function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Plans/>
      <Reasons/>
      <Testimonials/>
    </div>
  );
}

export default App;
