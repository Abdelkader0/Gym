import React from 'react'
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Plans from './Components/Plans/plans';
import Reasons from './Components/Reasons/Reasons';
import './App.css';


function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Plans/>
      <Reasons/>
    </div>
  );
}

export default App;
